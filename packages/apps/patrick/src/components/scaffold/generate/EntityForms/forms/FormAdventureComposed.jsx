/**
 * @function FormVertical
 * @description Create Bookmark
 * @return {Function} React component.
 */

/* --- Global --- */
import React, { useState, useEffect } from 'react';
import useForm from "react-hook-form";

/* --- Local --- */
import { createEntity } from 'scaffold/schema/utils'
import Fields from 'scaffold/generate/Fields'

/* --- Modiles --- */
import FormStorageInsert from './FormStorageInsert';
import { useDeltaGenerateEffect } from './effects';
import { createData } from 'scaffold/schema/utils'
import { createReference } from '../../../schema/utils';


/* --- Component --- */
const FormVertical = ({ box,...props }) => {
  /* --- Form State --- */
  const { handleSubmit, register, errors } = useForm()

  /* --- Internal State --- */
  const [ schema, setSchema ] = useState(props.schema)
  const [ entityName, setName ] = useState(props.schema.object)
  const [ entityVersion, setVersion ] = useState(props.schema.version)
  const [ entityInputs, setInputs ] = useState(props.schema.inputs)

  const [ item, setItem ] = useState(undefined)
  const [ sanitized, setSanitized ] = useState(false)


  const [ nameField ] = useState(schema.fields[0])
  const [ taglineField ] = useState(schema.fields[1])
  const [ imageField ] = useState(schema.fields[2])
  const [ imageCoverField ] = useState(schema.fields[3])
  const [ rewardField ] = useState(schema.fields[4])
  const [ rewardTagField ] = useState(schema.fields[5])
  const [ summaryField ] = useState(schema.fields[6])
  const [ contentField ] = useState(schema.fields[7])

  console.log(schema, 'form composed')
  /* -------------------- */
  /* Actions
  /* -------------------- */
  const onSubmit = (values) => {
    if(values) {
      console.log(values, 'values')

      const references = Object.keys(values).filter(k => k.startsWith('reference') )
      const refValues = references.map(ref => {
        const value = values[ref]
        values[ref] = null
        const referenceObject = {
          address: ROOT,
          space: SPACE,
          delta: value
        }
        return createReference(referenceObject, 'quest')
      })

      values.quests = refValues

      setItem(
        createEntity(
          entityName,
          entityVersion,
          createData(entityInputs, values) // Validate form submission with schema inputs.
        ))
      setSanitized(true)
    }
  }

  /* -------------------- */
  /* Effects
  /* -------------------- */

  useDeltaGenerateEffect()
  return (
    <>
      <FormStorageInsert
        sanitized={true}
        space={props.space}
        address={props.address}
        index={props.index}
        delta={props.delta || Date.now()}
        data={item}
      />
  
      <form onSubmit={handleSubmit(onSubmit)}>  
          {/* Fields */}
          <A.Flex>
            <A.Flex column flex={5} pr={3}>

              <A.Field
                styled={{flex: 1,width: 1}}
                defaultValue={props.defaults ? props.defaults[nameField.name] : null}
                name={nameField.name}
                label={nameField.label}
                inputAs={nameField.input}
                type={nameField.type}
                placeholder={nameField.placeholder}
                register={register}
                errors={errors}
              />
              <A.Field
                styled={{width: 1}}
                defaultValue={props.defaults ? props.defaults[taglineField.name] : null}
                name={taglineField.name}
                label={taglineField.label}
                inputAs={taglineField.input}
                type={taglineField.type}
                placeholder={taglineField.placeholder}
                register={register}
                errors={errors}
              />
              <A.Field
                styledInput={{minHeight: 100,width: 1}}
                defaultValue={props.defaults ? props.defaults[summaryField.name] : null}
                name={summaryField.name}
                label={summaryField.label}
                inputAs={summaryField.input}
                type={summaryField.type}
                placeholder={summaryField.placeholder}
                register={register}
                errors={errors}
              />
              <A.Field
                styledInput={{minHeight: 220,width: 1}}
                defaultValue={props.defaults ? props.defaults[contentField.name] : null}
                name={contentField.name}
                label={contentField.label}
                inputAs={contentField.input}
                type={contentField.type}
                placeholder={contentField.placeholder}
                register={register}
                errors={errors}
              />
              
            </A.Flex>
            <A.Flex column baselineChildren flex={2} pl={3}>
              <A.Field
                styled={{width: 1}}
                defaultValue={props.defaults ? props.defaults[imageField.name] : null}
                name={imageField.name}
                label={imageField.label}
                inputAs={imageField.input}
                type={imageField.type}
                placeholder={imageField.placeholder}
                register={register}
                errors={errors}
              />

              <A.Field
                styled={{width: 1}}
                defaultValue={props.defaults ? props.defaults[imageCoverField.name] : null}
                name={imageCoverField.name}
                label={imageCoverField.label}
                inputAs={imageCoverField.input}
                type={imageCoverField.type}
                placeholder={imageCoverField.placeholder}
                register={register}
                errors={errors}
              />
              
              <A.Field
                styled={{width: 1}}
                defaultValue={props.defaults ? props.defaults[rewardField.name] : null}
                name={rewardField.name}
                label={rewardField.label}
                inputAs={rewardField.input}
                type={rewardField.type}
                placeholder={rewardField.placeholder}
                register={register}
                errors={errors}
              />
              <A.Field
                styled={{width: 1}}
                defaultValue={props.defaults ? props.defaults[rewardTagField.name] : null}
                name={rewardTagField.name}
                label={rewardTagField.label}
                inputAs={rewardTagField.input}
                type={rewardTagField.type}
                placeholder={rewardTagField.placeholder}
                register={register}
                errors={errors}
              />
    
            </A.Flex>
          </A.Flex>
          <A.HorizontalRule />
          <A.Box>
            <A.FieldArray 
              styled={{width: 1}}
              name={'reference'}
              label={'Reference'}
              placeholder={'Reference'}
              register={register}
              errors={errors}
            />
          </A.Box>
        <CMS.AccessSpace spaceAuto loginAuto space={SPACE} level='space'>
          <A.Button type='submit' variant='green'>{props.label}</A.Button>
        </CMS.AccessSpace>      
      </form>
    </>
  )
}

FormVertical.defaultProps = {
  label: 'Submit',
  deltaType: 'timestamp',
}

export default props =><DID.BoxInject><FormVertical {...props} /></DID.BoxInject>

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


/* --- Component --- */
const FormVertical = ({ box,...props }) => {
  console.log(props, 'form vertical')
  /* --- Form State --- */
  const { handleSubmit, register, errors } = useForm()

  /* --- Internal State --- */
  const [ schema, setSchema ] = useState(props.schema)
  const [ entityName, setName ] = useState(props.schema.object)
  const [ entityVersion, setVersion ] = useState(props.schema.version)
  const [ entityInputs, setInputs ] = useState(props.schema.inputs)

  const [ item, setItem ] = useState(undefined)
  const [ sanitized, setSanitized ] = useState(false)

  console.log(props, 'form vertical')
  /* -------------------- */
  /* Actions
  /* -------------------- */
  const onSubmit = (values) => {
    if(values) {

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
          <A.Flex alignCenter column flex={1}>
            <Fields
              fields={schema.fields}
              styled={schema.styled.vertical}
              register={register}
              errors={errors}
              defaults={props.defaults}
            />
          </A.Flex>
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

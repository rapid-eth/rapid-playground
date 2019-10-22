/**
 * @name FormGenerate
 * @description Generate forms from schema reference.
 * @version 0.0.1
 */

/* --- Global --- */
import React from 'react';
import useForm from "react-hook-form";

/* --- Local --- */
import FieldTree from './FieldTree'

/* --- Component --- */
const FormDynamic = ({ box, ...props }) => {
  const { handleSubmit, register, errors } = useForm()
  const onSubmit = (values) => props.callback && props.callback(values)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <A.Flex flex={1}>
        <FieldTree
          fields={props.schema.fields}
          register={register}
          errors={errors}
          defaults={props.defaults}
        />
      </A.Flex>
      <A.Button type='submit' variant='green'>{props.label}</A.Button>
    </form>
  )
}

FormDynamic.defaultProps = {
  label: 'Submit',
}

export default props => <FormDynamic {...props} />

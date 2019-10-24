import { useEffect, useState } from "react"

const FormFields = props => { 
  const [ fields, setFields ] = useState(props.fields)
  useEffect( () => setFields(props.fields),[props.fields])

 return(
  props.fields.map( (field, index) => (
    <A.Field
      styled={props.styled[index]}
      defaultValue={props.defaults ? props.defaults[field.name] : null}
      name={field.name}
      label={field.label}
      inputAs={field.input}
      type={field.type}
      {...field.properties}
      placeholder={field.placeholder}
      register={props.register}
      errors={props.errors}
    />
  ))
)}

export default FormFields
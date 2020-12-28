import React, { useState } from 'react'
import { Form, Formik, useField } from 'formik'
import * as Yup from 'yup'
import { validationsForm01 } from '../../utils/validations'

const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      <div>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input {...field} {...props} />
      </div>
      {meta.touched && meta.error ? (
        <p>
          <small>{meta.error}</small>
        </p>
      ) : null}
    </>
  )
}

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      <div>
        <label htmlFor={props.id || props.name}>{label}</label>
        <select {...field} {...props} />
      </div>
      {meta.touched && meta.error ? (
        <p>
          <small>{meta.error}</small>
        </p>
      ) : null}
    </>
  )
}

const CustomCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props, 'checkbox')

  return (
    <>
      <label>
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <p>
          <small>{meta.error}</small>
        </p>
      ) : null}
    </>
  )
}

const ClassicForm = () => {
  const [datas, setDatas] = useState({})

  console.log(datas)

  return (
    <div className="main-app">
      <h1>Formik - Classic Form</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          selectedOption: '',
          acceptedTerms: false,
        }}
        validationSchema={Yup.object(validationsForm01)}
        onSubmit={(formDatas, { setSubmitting, resetForm }) => {
          setDatas({ step01: { formDatas } })
          setTimeout(() => {
            alert(JSON.stringify(formDatas, null, 2))
            resetForm()
            setSubmitting(false)
          }, 3000)
        }}
      >
        {(props) => (
          <Form>
            <h1>Sign Up</h1>
            <CustomTextInput
              label="Name"
              name="name"
              type="text"
              placeholder="Frank"
            />
            <CustomTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="frank@thetank.com"
            />
            <CustomSelect label="Sected Option" name="selectedOption">
              <option value="">Select an option</option>
              <option value="Option01">Option01</option>
              <option value="Option02">Option02</option>
              <option value="Option03">Option03</option>
              <option value="Option04">Option04</option>
            </CustomSelect>
            <CustomCheckbox name="acceptedTerms">
              I accept the terms and conditions
            </CustomCheckbox>
            <div>
              <button type="submit">
                {props.isSubmitting ? 'Loading...' : 'Submit'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ClassicForm

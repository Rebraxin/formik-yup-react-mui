import { Form, Formik, useField } from 'formik'
import * as Yup from 'yup'
import React, { useState } from 'react'
import {
  validationsStep01,
  validationsStep02,
  validationsStep03,
} from '../../utils/validations'
import './style.css'
const sleep = (time) => new Promise((acc) => setTimeout(acc, time))

const StepForm = () => {
  return (
    <div className="sf-main-selector">
      <h1 className="sf-main-title">Formik - StepForm</h1>
      <FormikStepper
        initialValues={{
          firstname: '',
          lastname: '',
          millionaire: false,
          money: 0,
          description: '',
        }}
        onSubmit={async (values) => {
          await sleep(3000)
          alert(JSON.stringify(values, null, 2))
        }}
      >
        <FormikStep validationSchema={Yup.object(validationsStep01)}>
          <CustomTextInput
            label="First Name"
            name="firstname"
            type="text"
            placeholder="Frank"
          />
          <CustomTextInput
            label="Last Name"
            name="lastname"
            type="text"
            placeholder="TheTank"
          />
          <CustomCheckbox name="millionaire">I am a millionaire</CustomCheckbox>
        </FormikStep>

        <FormikStep validationSchema={Yup.object(validationsStep02)}>
          <CustomTextInput
            label="All the money I have"
            name="money"
            type="number"
            placeholder="123456789"
          />
        </FormikStep>

        <FormikStep validationSchema={Yup.object(validationsStep03)}>
          <CustomTextInput
            label="Description"
            name="description"
            type="text"
            placeholder="Your description"
          />
        </FormikStep>
      </FormikStepper>
    </div>
  )
}

export default StepForm

export const FormikStep = ({ children }) => {
  return <>{children}</>
}

export const FormikStepper = ({ children, ...props }) => {
  const childrenArray = React.Children.toArray(children)
  const [step, setStep] = useState(0)
  const currentChild = childrenArray[step]

  const isLastStep = () => {
    return step === childrenArray.length - 1
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers)
        } else {
          setStep((s) => s + 1)
        }
      }}
    >
      <Form autoComplete="off">
        {currentChild}
        {step > 0 ? (
          <button type="button" onClick={() => setStep((s) => s - 1)}>
            Back
          </button>
        ) : null}
        <button type="submit">{isLastStep() ? 'Submit' : 'Next'}</button>
      </Form>
    </Formik>
  )
}

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

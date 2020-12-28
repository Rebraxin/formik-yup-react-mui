import * as Yup from 'yup'

export const validationsForm01 = {
  name: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(10, 'Must be 10 characters or less')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  acceptedTerms: Yup.boolean()
    .oneOf([true], 'You must accept terms and conditions')
    .required('Required'),
  selectedOption: Yup.string()
    .oneOf(
      ['Option01', 'Option02', 'OPtion03', 'Option04'],
      'You must an option in the list'
    )
    .required('Required'),
}

export const validationsStep01 = {
  firstname: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(10, 'Must be 10 characters or less')
    .required('Required'),
  lastname: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(10, 'Must be 10 characters or less')
    .required('Required'),
    millionaire: Yup.boolean()
    .oneOf([true], 'You must have millionaire conditions')
    .required('Required'),
}
export const validationsStep02 = {
  money: Yup.mixed().when('millionaire', {
    is: true,
    then: Yup.number()
    .required()
    .min(1_000_000, 'You said u are a millionaire!'),
    otherwise: Yup.number().required(),
  }),
}

export const validationsStep03 = {
  description: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(10, 'Must be 10 characters or less')
    .required('Required'),
}

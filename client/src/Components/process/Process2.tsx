import React from 'react'
import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'

interface Props {
    next: () => void
}

const LocationSchema = Yup.object().shape({
    address: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    city: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    zipCode: Yup.number()
        .positive()
        .integer()
        .min(5, "Invalid.").required('Required'),
})

export const Process2: React.FC<Props> = ({ next }) => {
    return (
        <div>
            <h1>Location</h1>
            <Formik
                initialValues={{
                    address: '',
                    city: '',
                    zipCode: '',
                }}
                validationSchema={LocationSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                    next()
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <label>Address</label>
                        <Field name="address" />
                        {errors.address && touched.address ? (
                            <div>{errors.address}</div>
                        ) : null}
                        <Field name="city" />
                        {errors.city && touched.city ? (
                            <div>{errors.city}</div>
                        ) : null}
                        <Field name="zipCode" type="number" />
                        {errors.zipCode && touched.zipCode ? <div>{errors.zipCode}</div> : null}
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

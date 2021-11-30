import React from 'react'
import { Field, Formik } from 'formik'
import { InputField } from '../components/fields/inputFields'
import { registerUser } from '../lib/registerUserAxios'

const register = () => {
    return (
        <Formik onSubmit={(data) => {
            let formData = new FormData()
            formData.append('name', data.name)
            formData.append('email', data.email)
            formData.append('password', data.password)
            const image = document.getElementById('avatar-image').files[0]
            formData.append('avatar', image)
            // console.log(formData)
            console.log(image)

            registerUser(formData)
        }} initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPasswword: '',
            avatar: ''
        }}>{
        ({values, handleSubmit}) => 
        <form onSubmit={handleSubmit}>
            <Field name='name' placeholder='name' component={InputField}/>
            <Field name='email' placeholder='email' component={InputField}/>
            <Field name='password' placeholder='password' type='password' component={InputField}/>
            <Field name='confirmPasswword' placeholder='confirm password' type='password' component={InputField}/>
            <Field name='avatar' id='avatar-image' placeholder='avatar' type='file' encType="multipart/form-data" component={InputField}/>
            <button type='submit'>Submit</button>
        </form>
        }</Formik>
    )
}

export default register
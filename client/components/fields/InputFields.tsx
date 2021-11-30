import { FieldProps } from "formik"
import React, { DetailedHTMLProps, InputHTMLAttributes } from "react"

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>


export const InputField = ({field, ...props}: FieldProps & InputProps) => {
    return (
        <div>
            <input {...field} {...props} />
        </div>
    )
}
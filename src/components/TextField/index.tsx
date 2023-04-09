import React from 'react'

type TextFieldProps = {
    labelText: string,
    type: string,
    name: string,
    required: boolean,
    placeholder: string
}

export default function TextField({ labelText, type, name, required, placeholder }: TextFieldProps) {
    return (
        <>
            <label htmlFor={name} className='text-md mt-2'>{labelText}</label>
            <input id={name} name={name} type={type} required={required} className="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder={placeholder} />
        </>
    )
}

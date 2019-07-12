import React from 'react'
import { Input } from 'reactstrap'

export default function GenericInput({type, name, onChange, value, className, place_holder, id}) {
    return (
        <Input type={type} name={name} onChange={onChange} value={value} className={className} placeHolder={place_holder} id={id} />
    )
}

import React from 'react'
interface InputProps {
    id: string,
    onChange?: any,
    type?: string,
    label: string,
    value:string,
}
function Input({id, onChange, type, label, value}: InputProps): JSX.Element {
    return (
        <div id={id} className="relative">
        <input value={value} onChange={onChange} type={type} id="floating_filled" className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm bg-neutral-500 text-white  focus:outline-none focus:ring-0  peer" placeholder=" " />
        <label className="absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">{label}</label>
    </div>
    )
}

export default Input
import { useState } from "react"
import { nanoid } from 'nanoid'


interface ControlsProps {
    buttonName: string,
    inputLabel: string
    clickHandler?(value: any): any
}

export function Controls({ buttonName, inputLabel, clickHandler }: ControlsProps) {

    const [value, setValue] = useState('')


    function buttonClickHandler() {
        if (clickHandler) {
            clickHandler((p: any) => [...p, { value, id: nanoid() }])
            setValue('')
        }
    }

    // function buttonClickHandler() {
    //     setValue('')
    //     console.log(socket)
    //     console.log(value)
    //     socket.emit('send-message', { value, id: nanoid() })
    // }

    return <div className="controls flex flex-col gap-1 w-full text-lg font-semibold p-4">
        <label className="">{inputLabel}</label>
        <div className="flex flex-row gap-4 items-center justify-between">
            <input value={value} onChange={(e) => setValue(e.target.value)} className="border border-black p-4 bg-gray-100 w-full rounded-md"></input>
            <button onClick={() => { buttonClickHandler() }} className="p-4 m-2 w-24 border border-black rounded-lg">{buttonName}</button>
        </div>
    </div>
}
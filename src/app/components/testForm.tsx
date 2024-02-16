"use client"

import { FormEvent } from "react"

export default function TestForm() {

    function HandleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (e.currentTarget instanceof HTMLFormElement) {
          const formElements = e.currentTarget.elements as HTMLFormControlsCollection;
      
          for (let i = 0; i < formElements.length; i++) {
            const element = formElements[i] as HTMLInputElement;
            console.log(element.value);
          }
        }
    }

    return (
        <div>
            <form className="flex flex-col bg-gray-100 p-5 rounded-lg w-[450px] gap-2" onSubmit={e => HandleSubmit(e)}>
                <span>
                    <h1 className="text-center font-medium text-xl tracking-wider my-[-3px]">Add Meteor</h1>
                </span>
                <hr/>
                <div className="flex flex-col gap-1">
                    <span className="flex flex-row gap-1 w-full">
                        <input className="w-full p-1 rounded" type="text" placeholder="Name"></input>
                        <input className="w-full p-1 rounded" type="text" placeholder="Name Type"></input>
                    </span>
                    <input className="w-full p-1 rounded" type="text" placeholder="ID"></input>
                    <input className="w-full p-1 rounded" type="text" placeholder="Recclass"></input>
                    <input className="w-full p-1 rounded" type="text" placeholder="Mass (g)"></input>
                    <input className="w-full p-1 rounded" type="text" placeholder="Fall"></input>
                    <input className="w-full p-1 rounded" type="text" placeholder="Year"></input>
                    <input className="w-full p-1 rounded" type="text" placeholder="GeoLocation"></input>
                    <span className="flex flex-row gap-1 w-full">
                        <input className="w-full p-1 rounded" type="text" placeholder="Latitude"></input>
                        <input className="w-full p-1 rounded" type="text" placeholder="Longitude"></input>
                    </span>
                    <span className="flex flex-row gap-1 w-full">
                        <input className="w-full p-1 rounded" type="text" placeholder="States"></input>
                        <input className="w-full p-1 rounded" type="text" placeholder="Counties"></input>
                    </span>
                </div>
                <hr/>
                <span className="w-full flex flex-row place-items-right justify-end">
                    <input type="submit" value="add" className="bg-green-400 px-6 py-1 rounded"></input>
                </span>
            </form>
        </div>
    )
}
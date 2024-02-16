"use client"

import { error } from "console";
import { FormEvent } from "react"

export default function TestForm() {

    function HandleSubmit(e: FormEvent<HTMLFormElement>) {

        e.preventDefault()

        if (e.currentTarget instanceof HTMLFormElement) {
          const formElements = e.currentTarget.elements as HTMLFormControlsCollection;
      
            let errorElements = []
            
            for (let i = 0; i < formElements.length - 1; i++) {
                const element = formElements[i] as HTMLInputElement;

                element.className = `w-full p-1 rounded placeholder-gray-400 bg-white`

                if (!element.value || element.value == "") {
                    errorElements.push(element)
                }
            }

            if (errorElements.length > 0) {
                HandleInputError(errorElements)
            }
        }
    }

    function HandleInputError(errorElements: HTMLInputElement[] ) {

        errorElements.forEach(errElement => {
            errElement.className = `${errElement.className} bg-red-300 placeholder-white`;
        })

        const errorMessageElement = document.getElementById("error-message");
        if (errorMessageElement) {
          errorMessageElement.innerHTML = "required data missing";
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
                        <input className="w-full p-1 rounded" type="text" id="Name-Input" placeholder="Name"></input>
                        <input className="w-full p-1 rounded" type="text" id="Name Type-Input" placeholder="Name Type"></input>
                    </span>
                    <input className="w-full p-1 rounded" type="text" id="ID-Input" placeholder="ID"></input>
                    <input className="w-full p-1 rounded" type="text" id="Recclass-Input" placeholder="Recclass"></input>
                    <input className="w-full p-1 rounded" type="text" id="Mass (g)-Input" placeholder="Mass (g)"></input>
                    <input className="w-full p-1 rounded" type="text" id="Fall-Input" placeholder="Fall"></input>
                    <input className="w-full p-1 rounded" type="text" id="Year-Input" placeholder="Year"></input>
                    <input className="w-full p-1 rounded" type="text" id="GeoLocation-Input" placeholder="GeoLocation"></input>
                    <span className="flex flex-row gap-1 w-full">
                        <input className="w-full p-1 rounded" type="text" id="Latitude-Input" placeholder="Latitude"></input>
                        <input className="w-full p-1 rounded" type="text" id="Longitude-Input" placeholder="Longitude"></input>
                    </span>
                    <span className="flex flex-row gap-1 w-full">
                        <input className="w-full p-1 rounded" type="text" id="States-Input" placeholder="States"></input>
                        <input className="w-full p-1 rounded" type="text" id="Counties-Input" placeholder="Counties"></input>
                    </span>
                </div>
                <hr/>
                <span className="w-full flex flex-row place-items-right justify-between">
                    <p id="error-message"></p>
                    <input type="submit" value="add" className="bg-green-500 text-white  px-6 py-1 rounded"></input>
                </span>
            </form>
        </div>
    )
}
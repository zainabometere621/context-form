import React, { useContext } from "react"
import FormContext from "../FormContext"

export default function Step1() {
    const { formData, setFormData, setStep } = useContext(FormContext);
    return (
        <div>
            <div className=" border p-6 w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto mt-10 rounded-lg shadow-md flex flex-col gap-4">
                <h1 className="text-center font-bold text-2xl sm:text-3xl">Step 1</h1>
               
                <input 
                 type="text" 
                 placeholder="Enter your name"
                 className= "px-5 py-1 border rounded w-full text-sm sm:text-base"
                 value= {formData.name}
                 onChange={(e) => setFormData({...formData, name: e.target.value})}
                />

                <input
                 type="text"
                 placeholder="Enter your email"
                 className= "px-5 py-1 border rounded w-full text-sm text-base"
                 value= {formData.email}
                 onChange={(e) => setFormData({...formData, email: e.target.value})}
                />

                <button 
                 onClick={()=> setStep(2)}
                 className="py-2 px-6 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 self-center"
                >
                 Next
                </button>
            </div>
            
        </div>
    )
}

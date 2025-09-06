import React, {useContext} from 'react'
import FormContext from "../FormContext"
export default function Step2() {
  const { formData, setFormData, setStep } = useContext(FormContext);
  return (
    <div>
      <div className=" border p-6 w-full max-w-md mx-auto mt-10 rounded-lg sm:max-w-lg lg:max-w-xl  shadow-md flex flex-col gap-4">
                <h1 className="text-center text-2xl font-bold sm:text-3xl">Step 2</h1>
               
                <input 
                 type="text" 
                 placeholder="Enter your address"
                 className= "px-5 py-1 border rounded w-full text-sm sm:text-base"
                 value= {formData.address}
                 onChange={(e) => setFormData({...formData, address: e.target.value})}
                />

                <div className="flex sm:flex-row justify-center gap-4">
                    <button 
                     onClick={()=> setStep(1)}
                     className="py-2 px-6 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700 self-start"
                    >
                    Previous
                    </button>

                    <button 
                     onClick={()=> setStep(3)}
                     className="py-2 px-6 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 self-end"
                    
                    >
                    Next
                    </button>
                </div>    
            </div>
    </div>
  )
}

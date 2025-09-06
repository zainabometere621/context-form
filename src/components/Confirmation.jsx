import React, {useContext} from 'react'
import FormContext from "../FormContext"
export default function Confirmation() {
  const { formData, setStep } = useContext(FormContext);
  return (
    <div>
       <div className=" border p-6 w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto mt-10 rounded-lg shadow-md flex flex-col gap-4">
          <h1 className="text-center font-bold text-2xl sm:text-3xl">Confirmation</h1>
          
          <input 
            type="text" 
            placeholder="No name yet"
            className= "px-5 py-1 border rounded w-full text-sm sm:text-base"
            value={formData.name || "No name yet"}
          
          />

          <input
            type="text"
            placeholder="No email yet"
            className= "px-5 py-1 border rounded w-full text-sm sm:text-base"
            value={formData.email || "No email yet"}
            
          />

          <input 
            type="text" 
            placeholder="No address yet"
            className= "px-5 py-1 border rounded w-full text-sm sm:text-base"
            value={formData.address || "No address yet"}
            
          />

          <div className="flex sm:flex-row justify-center gap-4">
              <button 
                onClick={()=> setStep(2)}
                className="py-2 px-6 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700 self-start"
              
              >
                Go Back
              </button>

              <button
                onClick={() => alert("Form Submitted!")}
                className="py-2 px-6 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 self-end"
              >
                Submit
              </button>
          </div>                
        </div>
            
      
    </div>
  )
}

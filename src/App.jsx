import React, {useContext} from 'react'
import {FormProvider} from "./FormContext"
import FormContext from "./FormContext"
import Step1 from "./components/Step1"
import Step2 from "./components/Step2"
import Confirmation from "./components/Confirmation"
function FormSteps() {
  const { step } = useContext(FormContext);

  return (
    <>
      {step === 1 && < Step1 /> }
      {step === 2 && < Step2 /> }
      {step === 3 && < Confirmation /> }
    </>
  )
}

export default function App() {
  return (
   <FormProvider>
   <FormSteps />
   </FormProvider>
  );
}

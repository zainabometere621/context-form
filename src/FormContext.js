
import React, { createContext, useState } from "react";

const FormContext = createContext();

export function FormProvider({ children }) {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  return React.createElement(
    FormContext.Provider,
    { value: { step, setStep, formData, setFormData } },
    children
  );
}

export default FormContext;

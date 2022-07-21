import React, { useState } from "react";
import FormContext from "./form-context";

function FormProvider({ children }) {
  const defaultDataState = {
    Fullname: "",
    DisplayName: "",
    WorkspaceName: "",
    WorkspaceURL: "",
    usage: "",
  };
  const defaultValidationState = {
    Fullname: false,
    DisplayName: false,
    WorkspaceName: false,
    usage: false
  };
  const [page, setPage] = useState(1);
  const [finalData, setFinalData] = useState([]);
  const [formData, setFormData] = useState(defaultDataState);
  const [validation, setValidation] = useState(defaultValidationState);

  const validate = (a) => {return Object.values(a).reduce((sum, next) => sum && next, true)};

  const resetDataState = () => {
    setFormData(defaultDataState);
    setValidation(defaultValidationState);
  };

  const setCurrentPage = (val) => {
    setPage(val);
  };


  const initialValue = {
    formData,
    page,
    numOfPages: 4,
    finalData,
    validation,
    setCurrentPage,
    setFormData,
    resetDataState,
    setFinalData,
    setValidation,
    validate
  };

  return (
    <FormContext.Provider value={initialValue}>{children}</FormContext.Provider>
  );
}

export default FormProvider;

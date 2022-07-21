import React, { useContext } from "react";
import PaginateBar from "./PaginateBar";
import classes from "./css/LandingFormPage.module.css";
import UserNameForm from "./UserNameForm";
import WorkspaceForm from "./WorkspaceForm";
import UsageForm from "./UsageForm";
import CongratzPage from "./CongratzPage";
import FormContext from "../store/form-context";

function LandingFormPage() {
  const {
    page,
    setCurrentPage,
    numOfPages,
    formData,
    setFinalData,
    resetDataState,
    validate,
    validation,
  } = useContext(FormContext);

  
  const pageSet = () => {
    if (page < numOfPages - 1) {              // jump to next page
      setCurrentPage(page + 1);
    } else if (page === numOfPages - 1) {     // checks if in 2nd last page, all the mandatory fields are filled or not
      if (validate(validation)) {
        setCurrentPage(page + 1);
      } else {
        alert("Your form is incomplete");
      }
    } else if (page === numOfPages) {         // if we are already in the last page, set the collected data into a new state and reset the form to default.
      setFinalData(current => [...current, formData]);
      resetDataState();
      setCurrentPage(1);
    }
  };

  return (
    <div className={classes.form}>
      <PaginateBar />
      <div className="card">
        {page === 1 && <UserNameForm />}
        {page === 2 && <WorkspaceForm />}
        {page === 3 && <UsageForm />}
        {page === 4 && <CongratzPage />}
      </div>
      <button className="button" onClick={pageSet}>
        {page === numOfPages ? `Launch Eden` : `Create Workspace`}
      </button>
    </div>
  );
}

export default LandingFormPage;

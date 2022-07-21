import React, { useContext } from "react";
import FormContext from "../store/form-context";
import classes from "./css/Form.module.css";

function UserNameForm() {
  const {setFormData, formData, setValidation} = useContext(FormContext);


  const fullNameHandler = (event)=> {
    setFormData(prevData => ({...prevData, Fullname:event.target.value}));
    event.target.value === '' ? setValidation(prevData => ({...prevData, Fullname:false})) : setValidation(prevData => (({...prevData, Fullname:true})));
  }


  const displayNameHandler = (event) => {
    setFormData(prevData => ({...prevData, DisplayName:event.target.value}));
    event.target.value === '' ? setValidation(prevData => ({...prevData, DisplayName:false})) : setValidation(prevData => ({...prevData, DisplayName:true}));
  }



  return (
    <>

      <span className={`${classes.container} ${classes.headings}`}>
        <h1>Welcome! First things first...</h1>
        <p>You can always change them later.</p>
      </span>
      

      <span className={classes.container}>
        <p>Full Name</p>
        <input className="inputField" type="text" placeholder="Steve Jobs" onChange={fullNameHandler} value={formData.Fullname} />
      </span>


      <span className={classes.container}>
        <p>Display Name</p>
        <input className="inputField" type="text" placeholder="Steve" onChange={displayNameHandler} value={formData.DisplayName} />
      </span>

    </>
  );
}

export default UserNameForm;

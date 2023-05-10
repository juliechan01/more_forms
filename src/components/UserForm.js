import React, { useState } from  'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserForm = (props) => {
    const [fName, setFname] = useState("");
    const [lName, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [cPw, setCpw] = useState("");

    const [fNameError, setFnameError] = useState("");
    const [lNameError, setLnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [pwError, setPwError] = useState("");
    const [cPwError, setCpwError] = useState("");
    
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    // FORM CAN'T BE EMPTY & CAN'T HAVE ERRORS
    const formAlert = () => {
        return hasBeenSubmitted ? 
        "Thank you for your form submission!" :
        "Welcome, please create an account.";
    };
    
    const handleFname = (e) => {
        setFname(e.target.value);
        if(e.target.value.length < 1) {
            setFnameError("First name is required!");
        } else if (e.target.value.length < 2) {
            setFnameError("First name must be at least 2 characters long.");
        } else {
            setFnameError("");
        }
    };

    const handleLname = (e) => {
        setLname(e.target.value);
        if(e.target.value.length < 1) {
            setLnameError("Last name is required!");
        } else if (e.target.value.length < 2) {
            setLnameError("Last name must be at least 2 characters long.");
        } else {
            setLnameError("");
        }
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if (e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters long.");
        } else {
            setEmailError("");
        }
    }

    const handlePw = (e) => {
        setPw(e.target.value);
        if(e.target.value.length < 1) {
            setPwError("Password is required!");
        } else if (e.target.value.length < 8) {
            setPwError("Password must be at least 8 characters long.");
        } else {
            setPwError("");
        }
    };

    const handleCpw = (e) => {
        setCpw(e.target.value);
        if(e.target.value.length < 1) {
            setCpwError("You must confirm your password!");
        } else if (e.target.value !== pw) {
            setCpwError("Passwords must match!")
        } else if (e.target.value.length < 8) {
            setCpwError("Confirm password must be at least 8 characters long.");
        } else {
            setCpwError("");
            setHasBeenSubmitted( true );
        }

    };


    return(
        <>
            <div className='container'>
                <form onSubmit={ (e) => e.preventDefault() } className='form' noValidate="">
                    <h3>{ formAlert() }</h3>
                    <div>
                        <label className='form-label' for="validationCustom01">First name: </label> 
                        <input type="text" value={fName} onChange={ handleFname } className='form-control' id="validationCustom01" required=""/>
                        {
                            fNameError ?
                            <p className='text text-danger'>{ fNameError }</p> :
                            ''
                        }
                    </div>

                    <div>
                        <label className='form-label' for="validationCustom02">Last name: </label> 
                        <input type="text" value={lName} onChange={ handleLname } className='form-control' id="validationCustom02"/>
                        {
                            lNameError ?
                            <p className='text text-danger'>{ lNameError }</p> :
                            ''
                        }
                    </div>

                    <div>
                        <label className='form-label' for="validationCustom03">Email address: </label> 
                        <input type="text" value={email} onChange={ handleEmail } className='form-control' id="validationCustom03"/>
                        {
                            emailError ?
                            <p className='text text-danger'>{ emailError }</p> :
                            ''
                        }
                    </div>

                    <div>
                        <label className='form-label' for="validationCustom04">Password: </label>
                        <input type="password" value={pw} onChange={ handlePw } className='form-control'id="validationCustom04"/>
                        {
                            pwError ?
                            <p className='text text-danger'>{ pwError }</p> :
                            ''
                        }
                    </div>

                    <div>
                        <label className='form-label' for="validationCustom05">Confirm password: </label>
                        <input type="password" value={cPw} onChange={ handleCpw } className='form-control'id="validationCustom05"/>
                        {
                            cPwError ?
                            <p className='text text-danger'>{ cPwError }</p> :
                            ''
                        }
                    </div>

                    <div className='button'>
                        <input type="submit" value="Create User" className='btn btn-outline-success'/>
                    </div>
                </form>

                <div>
                    <h3>Your form data:</h3>
                    <p>First Name: {fName}</p>
                    <p>Last Name: {lName}</p>
                    <p>Email: {email}</p>
                    <p>Password: {pw}</p>
                    <p>Confirm password: {cPw}</p>
                </div>
            </div>
        </>
    );
};
    
export default UserForm;
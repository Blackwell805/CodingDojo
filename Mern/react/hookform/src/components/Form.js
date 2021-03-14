import React, { useState } from 'react';

const Form = (props) => {
    const { inputs, setInputs } = props;

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[confirmPassword, setConfirmPassword] = useState('');
    const[matching,setMatching] = useState('');
    const [errFirst, setErrFirst] = useState('');
    const [errLast, setErrLast] = useState('');
    const [errEmail, setErrEmail] = useState('');
    const [errPassword, setErrPassword] = useState('');
    const [errConfirmPassword, setErrConfirmPassword] = useState('');
    const [errMatching, setErrMatching] = useState('');

const errorFirstName = (e) => {
    console.log('firstName');
    const checkName = e.target.value;
    setFirstName( checkName);
        if (checkName.length < 2){
            setErrFirst('This is not long enough!');
        }
        else {
            setErrFirst('');
        }
}
const errorLastName = (e) => {
    console.log('lastName');
    const checkName = e.target.value;
    setLastName( checkName);
        if (checkName.length < 2){
            setErrLast('This is not long enough!');
        }
        else {
            setErrLast('');
        }
}
const errorEmail = (e) => {
    console.log('email');
    const checkEmail = e.target.value;
    setEmail( checkEmail);
        if (checkEmail.length < 5){
            setErrEmail('This is not long enough!');
        }
        else {
            setErrEmail('');
        }
}
const errorPassword = (e) => {
    console.log('password');
    const checkPassword = e.target.value;
    setPassword( checkPassword);
        if (checkPassword.length < 8){
            setErrPassword('This is not long enough!');
        }
        else {
            setErrPassword('');
        }
}
const errorConfirmPassword = (e) => {
    console.log('confirmPassword');
    const checkConfirmPassword = e.target.value;
    setConfirmPassword( checkConfirmPassword);
        if (checkConfirmPassword.length < 8){
            setErrConfirmPassword('This is not long enough!');
        }
        else {
            setErrConfirmPassword('');
        }
}
const errorMatching = (e) => {
    console.log('matching');
    const checkMatching = e.target.value;
    setMatching( checkMatching);
        if (password !== confirmPassword){
            setErrMatching('This is not correct!');
        }
        else {
            setErrMatching('');
        }
}
    
    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    }
    return (
        <form>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input onChange={ errorFirstName} type="text" name='firstName' />
                {errFirst?
                    <p style={{color:'red'}}>Error! Must be at least 2 characters!</p>
                    : ''
                }
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input onChange={ errorLastName } type="text" name='lastName' />
                {errLast?
                    <p style={{color:'red'}}>Error! Must be at least 2 characters!</p>
                    : ''
                }
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input onChange={ errorEmail } type="text" name='email' />
                {errEmail?
                    <p style={{color:'red'}}>Error! Must be at least 5 characters!</p>
                    : ''
                }
            </div>
            <div className="form-group">
            <label  htmlFor="password">Password</label>
            <input onChange={ errorPassword } type="password" name='password' />
            {errPassword?
                    <p style={{color:'red'}}>Error! Must be at least 8 characters!</p>
                    : ''
                }
            </div>
            <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input onChange={ errorConfirmPassword, errorMatching } type="password" name='confirmPassword' />
            {errConfirmPassword?
                    <p style={{color:'red'}}>Error! Must be at least 8 characters!</p>
                    : ''
                }
            {errMatching?
                <p style={{color:'red'}}>This does not match!</p>
                : ''
            }
            </div>
        </form>
    )
}

export default Form

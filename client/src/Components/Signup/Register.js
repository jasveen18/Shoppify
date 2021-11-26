import React, { useState } from 'react';
import { TextField, Box, Button, makeStyles, Typography } from '@material-ui/core';
import { authenticateRegister } from '../../service/api';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const useStyle = makeStyles(theme => ({
    component: {
        maxWidth: 500,
        margin: 'auto',
        padding: 5,
        [theme.breakpoints.down('sm')]: {
            padding: 1
        }
    },
    login: {
        padding: '20px 30px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        '& > *': {
            marginTop: 15
        },
        [theme.breakpoints.down('sm')]: {
            padding: '0'
        }
    },
    loginbtn: {
        textTransform: 'none',
        background: '#FB641B',
        color: '#fff',
        height: 40,
        borderRadius: 2
    },
    
}));


const signupInitialValues = {
    name: '',
    username: '',
    email: '',
    password: '',
    confirm_password: ''
};


const Register = () => {

    const classes = useStyle();
    const navigate = useNavigate();
    const [signup, setSignup] = useState(signupInitialValues);


    const onInputChange = (e) => {
        setSignup({...signup, [e.target.name]: e.target.value});
    };


    const signupUser = async(e) => {
        e.preventDefault();
        let response = await authenticateRegister(signup);
        console.log(response);
        if(!response){
            window.alert("Invalid Registration");
           return;
        }
        else {
            window.alert("Registration Successful");
            navigate('/');
        }   
    };


    return (
        <>
           <Box style={{display: 'flex'}} className={classes.component}>
               <Box className={classes.login}>
                    <Typography style={{fontSize: 35}}>Register</Typography>
                    <TextField onChange={(e) => onInputChange(e)} type="text" name='name' label='Enter Name' />
                    <TextField onChange={(e) => onInputChange(e)} type="text" name='username' label='Enter Username' />
                    <TextField onChange={(e) => onInputChange(e)} type="email" name='email' label='Enter Email' />
                    <TextField onChange={(e) => onInputChange(e)} type="password" name='password' label='Enter Password' />
                    <TextField onChange={(e) => onInputChange(e)} type="password" name='confirm_password' label='Confirm Password' />
                    <Button type="submit" className={classes.loginbtn} onClick={(e) => signupUser(e) }>Register</Button>

                    <Box>
                        <Typography style={{fontSize: 20, fontWeight: 600}}>Have an account?</Typography>
                        <Link to='/login' style={{textDecoration: 'none', color: 'black', fontSize: 15}}>Login Here</Link>
                    </Box>
               </Box>
           </Box>   
        </>
    )
}


export default Register;

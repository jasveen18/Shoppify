import React, {useState, useContext} from 'react';
import { TextField, Box, Button, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { authenticateLogin } from '../../service/api';
import { LoginContext } from '../../context/ContextProvider';
import { useNavigate } from 'react-router-dom';

const useStyle = makeStyles(theme =>({
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


const loginInitialValues = {
    username: '',
    password: ''
};


const Login = () => {

    const classes = useStyle();
    const navigate = useNavigate();
    const [login, setLogin] = useState(loginInitialValues);
    
    //const location = useLocation()
    //const { setAccount } = location.state;
    const { setAccount } = useContext(LoginContext);

    const onInputChange = (e) => {
        setLogin({...login, [e.target.name]: e.target.value});
    };


    const loginUser = async(e) => {
        let response = await authenticateLogin(login);
        console.log(response);
        if(!response){
            window.alert('Invalid Credentials');
            return;
            
        }
        else
        {
            window.alert('Login Succcessful');
            console.log(login.username);
            navigate('/');
        }
    };


    return (
        <>
           <Box style={{display: 'flex'}} className={classes.component}>
               <Box className={classes.login}>
                    <Typography style={{fontSize: 35}}>Login</Typography>
                    <TextField onChange={(e) => onInputChange(e)} type="text" name='username' label='Enter Username' />
                    <TextField onChange={(e) => onInputChange(e)} type="password" name='password' label='Enter Password' />
                    <Button type="submit" className={classes.loginbtn} onClick={(e) => loginUser(e) }>Login</Button>

                    <Box>
                        <Typography style={{fontSize: 20, fontWeight: 600}}>New to Shoppify</Typography>
                        <Link to='/register' style={{textDecoration: 'none', color: 'black', fontSize: 15}}>Register Here</Link>
                        {/* <Link >Forgot Password</Link> */}
                    </Box> 
               </Box>
           </Box>   
        </>
    )
};


export default Login;

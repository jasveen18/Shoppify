import React, {useState, useContext} from 'react';
import { makeStyles, Box, Typography, Badge, Button } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {LoginContext } from '../../context/ContextProvider';
import Profile from './Profile';


const useStyle = makeStyles(theme => ({
    container: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    wrapper: {
        margin: '0 5% 0 auto', 
        display: 'flex',    
        '& > *': {
            marginRight: 40,
            textDecoration: 'none',
            color: '#FFFFFF',
            fontSize: 12,
            alignItems: 'center',
            [theme.breakpoints.down('sm')]: {
                color: '#2b2b52',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                marginTop: 15
            }      
        },
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }   
    },
    login: {
        color: '#2b2b52',
        background: '#FFFFFF',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        height: 32,
        boxShadow: 'none',
        [theme.breakpoints.down('sm')]: {
            background: '#2874f0',
            color: '#FFFFFF'
        }   
    }
}));


const NavButtons = () => {
    const classes = useStyle();

    const { account, setAccount } = useContext(LoginContext);

    const cartDetails = useSelector(state => state.addToCartReducer);
    const { cartItems } = cartDetails;


    return (
        <>
           <Box className={classes.wrapper}>
                {
                    account ? <Profile account={account} setAccount={setAccount} /> : 
                    <Link to='/login'>
                        <Button className={classes.login} variant='contained'>Login</Button>
                    </Link>
                }

                <Link to='/cart' className={classes.container}>
                    <Badge badgeContent={cartItems?.length} color="secondary">
                        <ShoppingCart />
                    </Badge>
                    <Typography style={{ marginLeft: 10 }}>Cart</Typography>
                </Link>         
           </Box>
        </>
    )
};

export default NavButtons;

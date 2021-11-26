import React,{ useEffect } from 'react';
import { Box, makeStyles, Typography, Button, Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart, removeItem } from '../../redux/actions/cartActions';
import EmptyCart from './EmptyCart';
import TotalView from './TotalView';
import CartItem from './CartItem';
import { addToCartReducer } from '../../redux/reducers/cartReducer';
import { paymentUpdate } from '../../service/api';
import { post } from '../../Utils/Paytm';


const useStyles = makeStyles(theme => ({
    component: {
        // marginTop: 55,
        padding: '30px 35px',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            padding: '15px 0'
        }
    },
    leftComponent: {
        //width: '67%',
        paddingRight: 15,
        [theme.breakpoints.down('sm')]: {
            marginBottom: 15
        }
    },
    header: {
        padding: '15px 24px',
        background: '#fff'
    },
    bottom: {
        padding: '16px 22px',
        background: '#fff',
        boxShadow: '0 -2px 10px 0 rgb(0 0 0 / 10%)',
        borderTop: '1px solid #f0f0f0'
    },
    placeOrder: {
        display: 'flex',
        marginLeft: 'auto',
        background: '#fb641b',
        color: '#fff',
        borderRadius: 2,
        width: 250,
        height: 51
    }
}));

const Cart = () => {
    const classes = useStyles();

    const { cartItems } = useSelector((state) => state.addToCartReducer);
    const dispatch = useDispatch();

    const removeItemFromCart = (id) => {
        dispatch(removeItem(id));
    };

    const buyNow = async () => {
        let response = await paymentUpdate({ amount: 500, email: 'jasveen808@gmail.com'});
        var information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response    
        }
        post(information);
    };


    return (
        <>
           {
               cartItems.length ?
                    <Grid container className={classes.component}>
                        <Grid item lg={8} md={8} sm={12} xs={12} className={classes.leftComponent}>
                            <Box className={classes.header}>
                                <Typography style={{fontWeight: 600, fontSize: 18}}>My Cart ({cartItems?.length})</Typography>
                            </Box>
                                {
                                    cartItems.map((item) => {
                                        return(
                                            <>
                                               <CartItem item={item} removeItemFromCart={removeItemFromCart} />
                                            </>
                                        )
                                    })

                                }
                            <Box>
                                <Button onClick={() => buyNow()} variant="contained" className={classes.placeOrder}>Place Order</Button>
                            </Box>    
                        </Grid>
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <TotalView cartItems={cartItems} />
                        </Grid>
                    </Grid> : <EmptyCart />
            }

        </>
    )

};

export default Cart;

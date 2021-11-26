import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box, makeStyles } from '@material-ui/core';
import { addToCart } from '../../redux/actions/cartActions';
import { useSelector, useDispatch } from 'react-redux';
import { paymentUpdate } from '../../service/api';
import { post } from '../../Utils/Paytm';


const useStyles = makeStyles(theme => ({
    leftContainer: {
        minWidth: '40%',
        textAlign: 'center',
        padding: '60px 0 0 10px',
        [theme.breakpoints.down('md')]: {
            padding: '20px 40px'
        }
    },
    productImage: {
        padding: '15px 30px',
        border: '1px solid #f0f0f0',
        width: '100%'
    },
    button: {
        width: '46%',
        borderRadius: 2,
        height: 50,
        marginTop: 30
    },
    addToCart: {
        background: '#ff9f00',
        color: '#FFF'
    },
    buyNow:{
        background: '#fb641b',
        color: '#FFF'
    }

}));

const ButtonDetails = ({product}) => {
    const classes = useStyles();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    
    const addItemToCart = () => {
        dispatch(addToCart(product.id));
        navigate('/cart');
    };

    const buyNow = async() => {
        let response = await paymentUpdate({amount: 1000, email: 'jasveen808@gmail.com'});

        var information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response
        }

        post(information);

    };


    return (
        <>
            <Box className={classes.leftContainer}>
                <img src={product.productImage} className={classes.image} /><br />
                <Button onClick={() => addItemToCart()}className={classes.button} style={{marginRight: 10}} variant="contained">Add to Cart</Button>
                <Button onClick={() => buyNow()} className={classes.button} variant="contained">Buy Now</Button>
            </Box>
        </>
    )
};

export default ButtonDetails;

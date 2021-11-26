import { useState, useEffect } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';

const useStyle = makeStyles({
    component: {
        // width: '30%'
    },
    header: {
        padding: '15px 24px',
        background: '#fff'
    },
    greyTextColor: {
        color: '#878787'
    },
    container: {
        '& > *': {
            marginBottom: 20,
            fontSize: 14
        }
    },
    price: {
        float: 'right'
    },
    totalAmount: {
        fontSize: 18,
        fontWeight: 600,
        borderTop: '1px dashed #e0e0e0',
        padding: '20px 0',
        borderBottom: '1px dashed #e0e0e0'
    }
})


const TotalView = ({ cartItems }) => {
    const classes = useStyle();
    const [price, setPrice] = useState(0);

    useEffect(() => {
        totalAmount();
    }, [cartItems]);
    
    const totalAmount = () => {
        let price = 0;
        cartItems.map(item => {
            price += item.price 
        })
        setPrice(price);
    }

    return (
        <Box className={classes.component}>
            <Box className={classes.header} style={{borderBottom: '1px solid #f0f0f0'}}>
                <Typography className={classes.greyTextColor}>PRICE DETAILS</Typography>
            </Box>
            <Box className={classes.header}>
                <Typography>Price ({cartItems?.length} item)<span className={classes.price}>₹{price}</span></Typography>
                <Typography>Delivery Charges<span className={classes.price}>₹50</span></Typography>
                <Typography className={classes.totalAmount}>Total Amount<span className={classes.price}>₹{price + 50}</span></Typography>
            </Box>
        </Box>
    )
}

export default TotalView;
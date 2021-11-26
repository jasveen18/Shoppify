import React from 'react';
import { Card, makeStyles, Box, Typography, Button } from '@material-ui/core'
import QuantityButton from './QuantityButton';

const useStyle = makeStyles({
    component: {
        borderTop: '1px solid #f0f0f0',
        borderRadius: 0,
        display: 'flex'
    },
    leftComponent: {
        margin: 20, 
        display: 'flex',
        flexDirection: 'column'
    },
    image: {
        height: '70%',
        width: '70%'
    },
    mid: {
        margin: 60
    },
    greyTextColor: {
        color: '#878787'
    },
    smallText: {
        fontSize: 18,
    },
    price: {
        fontSize: 20,
        marginTop: 20,
        fontWeight: 600
    },
    remove: {
        marginTop: 20,
        fontSize: 16,
        backgroundColor: 'black',
        color: 'white'
    }
});

const CartItem = ({item, removeItemFromCart}) => {
    
    const classes = useStyle();

    return (
        <>
            <Card className={classes.component}>
                <Box className={classes.leftComponent}>
                    <img src={item.productImage} className={classes.image} />
                    <QuantityButton />
                </Box>
                <Box className={classes.mid}>
                    <Typography className={classes.smallText}>{item.name}</Typography>
                    <Typography className={classes.price}>₹{item.price}</Typography>
                    <Button onClick={() => removeItemFromCart(item.id)} className={classes.remove}>Remove</Button>
                </Box>
            </Card>
        </>

    )
};

export default CartItem;

import React from 'react';
import { makeStyles, Typography, Box } from '@material-ui/core';

const useStyle = makeStyles({
    component: {
        width: '80%%',
        height: '65vh',
        background: '#fff',
        margin: '80px 140px'
    },
    image: {
        width: '15%'
    },
    container: {
        textAlign: 'center',
        paddingTop: 70
    }
});

const EmptyCart = () => {
    const classes = useStyle();

    return (
        <>
            <Box className={classes.component}>
                <Box className={classes.container}>
                    <Typography>Your cart is empty!</Typography>
                    <span>Add items to it now.</span>
                </Box>
            </Box>
        </>
    )
}

export default EmptyCart;

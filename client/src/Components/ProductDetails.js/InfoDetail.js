import React, { useState, useEffect } from 'react';
import { Box, Typography, makeStyles, CircularProgress, Button, Grid, Table, TableBody, TableRow, TableCell } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProductDetailsAction } from '../../redux/actions/productActions';
import ButtonDetails from './ButtonDetails';

const useStyles = makeStyles(theme => ({
    component: {
        marginTop: 80,
        background: 'white'
    },
    container: {
        background: '#FFFFFF',
        margin: '60px 0px',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    rightContainer: {
        marginTop: 50,
        '& > *': {
            marginTop: 10
        }
    },
    name: {
        fontSize: 28
    },
    smallText: {
        fontSize: 16,
    },
    greyTextColor: {
        color: '#878787'
    },
    smallText: {
        fontSize: 14,
        verticalAlign: 'baseline',
        '& > *' :{
            fontSize: 14,
            marginTop: 10
        }
    },
    greyTextColor: {
        color: '#878787'
    },
    badge: {
        marginRight: 10,
        color: '#00CC00',
        fontSize: 15
    },
    wrapper: {
        display: 'flex'
    }

}));

const InfoDetail = ({match}) => {

    const classes = useStyles();
    const { product } = useSelector((state) => state.getProductDetailsReducer);
    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(() => {  
        dispatch(getProductDetailsAction(id));
    },[dispatch, match]);


    return (
        <>
            <Box className={classes.component}>
                {
                   product && Object.keys(product).length &&
                    <Grid container className={classes.container}>
                        <Grid item lg={4} md={4} sm={8} xs={12}>
                            <ButtonDetails product={product} />
                        </Grid>
                        <Grid item lg={8} md={8} sm={8} xs={12} className={classes.rightContainer}>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell style={{ fontWeight: 600 }} className={classes.name}>{product.name}</TableCell>
                                    </TableRow>
                                    <TableRow className={classes.smallText}>
                                        <TableCell className={classes.greyTextColor}>Price</TableCell>
                                        <TableCell>₹{product.price}</TableCell>
                                    </TableRow>
                                    <TableRow className={classes.smallText}>
                                        <TableCell className={classes.greyTextColor}>Status</TableCell>
                                        <TableCell className={classes.smallText}>
                                            <Typography>In Stock ({product.countInStock})</Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className={classes.smallText}>
                                        <TableCell className={classes.greyTextColor}>Description</TableCell>
                                        <TableCell>{product.description}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Grid>
                    </Grid>
                }
            </Box>
        </>
    )
}

export default InfoDetail;

import React, {useEffect} from 'react';
import { Box, makeStyles } from '@material-ui/core';
import Slide from './Slide';
import { useSelector, useDispatch } from 'react-redux';
import { getProductAction } from '../../redux/actions/productActions';

const useStyle = makeStyles({
    component: {
        padding: 10,
        background: '#F2F2F2'
    }
});


const Home = () => {
    const classes = useStyle();

    const { products } = useSelector((state) => state.getProductReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductAction());
    }, [dispatch])

    return (
        <>
            <Box className={classes.component}>
                <Slide
                    products={products} 
                    title='Electric Items' 
                    multi={true} 
                />
                <Slide 
                    products={products}
                    title='Clothes'
                    multi={true} 
                />
                <Slide 
                    products={products}
                    title='Top Selection' 
                    multi={true} 
                />
                <Slide 
                    products={products}
                    title='Recommended Items'
                    multi={true} 
                />
            </Box>
        </>
    )
}

export default Home

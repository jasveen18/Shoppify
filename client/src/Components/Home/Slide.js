import { Box, Typography, makeStyles, Button, Divider } from '@material-ui/core';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};


const useStyle = makeStyles(theme => ({
    component: {
        marginTop: 12,
        background: '#FFFFFF'
    }, 
    image: {
        width: 'auto',
        height: 150
    },
    text: {
        fontSize: 14,
        marginTop: 5
    },
    deal: {
        display: 'flex',
        padding: '15px 20px'
    },
    dealText: {
        fontSize: 22,
        fontWeight: 600,
        lineHeight: '32px',
        marginRight: 25,
        lineHeight: '32px',
        marginRight: 25
    },
    button: {
        marginLeft: 'auto',
        backgroundColor: '#2b2b52',
        borderRadius: 2,
        fontSize: 13,
        color: 'white'
    },
    wrapper: {
        padding: '25px 15px'
    },
    
}));



const Slide = ({title, products}) => {
    const classes = useStyle();

    return(
        <>
            <Box className={classes.component}>
                <Box className={classes.deal}>
                    <Typography className={classes.dealText}>{title}</Typography>
                    <Button variant='contained' className={classes.button}>View All</Button>
                </Box>
                <Divider />
                <Carousel
                    responsive={responsive}
                    swipeable={false}
                    draggable={false}
                    centerMode={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={10000}
                    keyBoardControl={true}
                    showDots={false}
                    containerClass="carousel-container"
                    //removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
            >
                {
                    products.map((curr) => {
                        return(
                            <>
                                <Link to={`product/${curr.id}`} style={{ textDecoration: 'none'}}>
                                    <Box textAlign="center" className={classes.wrapper}>
                                        <img src={curr.productImage} className={classes.image} />
                                        <Typography className={classes.text} style={{ fontWeight: 600, color: '#212121', fontSize: 16 }}>{curr.name}</Typography>
                                        <Typography className={classes.text} style={{ color: 'green' }}>₹{curr.price}</Typography>
                                        <Typography className={classes.text} style={{ color: '#212121', opacity: '.6' }}>{curr.brand}</Typography>
                                    </Box>
                                </Link>
                            </>
                        )
                    })
                }

           </Carousel>
            </Box>
        </>
    )
};


export default Slide;
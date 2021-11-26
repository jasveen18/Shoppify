import React, {useState} from 'react';
import { AppBar, Toolbar, makeStyles, Box, Typography, IconButton, Drawer, List, ListItem } from '@material-ui/core';
import Search from './Search';
import NavButtons from './NavButtons';
import { Link } from 'react-router-dom';
import { Menu } from '@material-ui/icons';

const useStyle = makeStyles(theme => ({
    header: {
        background: '#2b2b52',

    },
    navButtons: {
        margin: '0 5% 0 auto', 
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        } 
    },
    list: {
        width: 300,
        display: 'flex',
        flexDirection: 'column'
    },
    menuButton: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    search: {
        width: 1200,
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        } 
    }

}));

const Header = () => {
    const classes = useStyle();

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const list = () => (
        <Box className={classes.list} onClick={handleClose}>
            <List>
                <ListItem button>
                    <NavButtons />
                    <Search />
                </ListItem>
            </List>
        </Box>
    );


    return (
        <>
           <AppBar className={classes.header}>
               <Toolbar>
                    <IconButton
                        color="inherit"
                        className={classes.menuButton}
                        onClick={handleOpen}
                    >
                        <Menu />
                    </IconButton>

                    <Drawer open={open} onClose={handleClose}>
                        {list()}
                    </Drawer>

                    <Link to='/' style={{ textDecoration: 'none', color: 'white', marginLeft: 40}}><Typography style={{fontSize: 30}}>Shoppify</Typography></Link>
                    <div className={classes.search}><Search /></div>
                    <span className={classes.navButtons}><NavButtons /></span>
               </Toolbar>
           </AppBar>
        </>
    )
};

export default Header;

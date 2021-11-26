import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles, InputBase } from '@material-ui/core';



const useStyle = makeStyles(theme => ({
    search: {
        borderRadius: 2,
        marginLeft: 70,
        width: '30%',
        backgroundColor: 'white',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    searchIcon: {
        marginLeft: 'auto',
        padding: 5,
        display: 'flex',
        color: '#2b2b52'
    },
    inputRoot: {
        width: '100%',
        color: '#2b2b52',
        fontSize: 'unset'
    },
    inputInput: {
        paddingLeft: 20,
        width: '100%',
    },

}));

const Search = () => {
    const classes = useStyle();

    return (
        <>
           <div className={classes.search}>
                <InputBase
                    placeholder="Search Product..."
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />

                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>

            </div>
        </>
    )
};

export default Search;

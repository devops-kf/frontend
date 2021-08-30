import React, {useState} from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from '@material-ui/icons/Add';
import {Menu, MenuItem, Popover} from "@material-ui/core";
import CreatePostFormComponent from "../post/create-post-form.component";
import Divider from "@material-ui/core/Divider";
import LocalStorageService from "../../services/local-storage.service";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {removeUser} from "../../store/authSlice";
import {useDispatch} from "react-redux";

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        title: {
            flexGrow: 1,
            fontFamily: 'Billabong, sans-serif'
        },
        appBar: {
            backgroundColor: theme.palette.primary.contrastText,
            borderBottom: '1px solid lightGray'
        }
    }),
);

const Header = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [addPostAnchor, setAddPostAnchor] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleAddPostClick = (event) => {
        setAddPostAnchor(event.currentTarget);
    };

    const handleAddPostClose = () => {
        setAddPostAnchor(null);
    };

    const handleLogout = () => {
        LocalStorageService.removeLocalStorageItem('access_token');
        dispatch(removeUser());
        handleClose();
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar} elevation={0}>
                <Toolbar variant={'dense'} style={{paddingTop: '4px', paddingBottom: '4px'}}>
                    <Typography variant="h4" className={classes.title}>
                        <Link to={'/'} style={{textDecoration: 'none'}}>Ništagram</Link>
                    </Typography>
                    <div>
                        <IconButton color='primary' onClick={handleAddPostClick}>
                            <AddIcon/>
                        </IconButton>

                        <IconButton color='primary' aria-controls="simple-menu" aria-haspopup="true"
                                    onClick={handleClick}>
                            <AccountCircleIcon/>
                        </IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem component={Link} to='/profile' onClick={handleClose}>Profile</MenuItem>
                            <MenuItem component={Link} to='/profile/edit' onClick={handleClose}>Edit profile</MenuItem>
                            <Divider/>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>

            <Popover
                id={'popover'}
                open={!!addPostAnchor}
                anchorEl={addPostAnchor}
                onClose={handleAddPostClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <CreatePostFormComponent/>
            </Popover>
        </div>
    );
};

export default Header;

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import React, {useEffect, useState} from "react";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import {LinearProgress, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    dialogTitle: {
        margin: 10
    },
    button: {
        margin: theme.spacing(1),
    },
}));

export default function FollowRequestsDialog({isOpen, handleClose, ...rest}) {
    const classes = useStyles();

    const [followRequests, setFollowRequests] = useState([]);

    useEffect(() => {
        if (isOpen) {
            // todo load follow requests of loggedIn user and render into list
            setTimeout(() => {
                setFollowRequests([1, 2, 3]);
            }, 2000);
        }
    }, [isOpen]);

    const acceptAndFollowBack = (id) => {
        // todo axios.post accept
    }

    const reject = (id) => {
        // todo axios.post reject
    }

    return (
        <React.Fragment>
            <Dialog
                fullWidth
                maxWidth={'sm'}
                open={isOpen}
                onClose={handleClose}
            >
                <DialogContent>
                    <div className={classes.dialogTitle}>
                        <Typography variant="h4">
                            Follow requests
                        </Typography>
                    </div>
                    <Divider/>
                    {followRequests.length === 0 && <LinearProgress/>}
                    <List className={classes.root}>
                        {followRequests.map((_, index) => (
                            <ListItem key={index}>
                                <ListItemAvatar>
                                    <Avatar style={{border: '2px solid black'}}
                                            src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"/>
                                </ListItemAvatar>
                                <ListItemText primary="Username"/>
                                <div>
                                    <Button
                                        variant={'outlined'}
                                        color={'primary'}
                                        className={classes.button}
                                        startIcon={<CheckIcon/>}
                                        onClick={acceptAndFollowBack}
                                    >
                                        Accept
                                    </Button>
                                    <Button
                                        variant={'outlined'}
                                        color={'secondary'}
                                        className={classes.button}
                                        startIcon={<CloseIcon/>}
                                        onClick={reject}
                                    >
                                        Reject
                                    </Button>
                                </div>
                            </ListItem>
                        ))}
                    </List>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}
import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import erik from '../../images/erik.jpg';
import SettingsIcon from '@material-ui/icons/Settings';
import Button from "@material-ui/core/Button";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Grid from "@material-ui/core/Grid";
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from "@material-ui/core/IconButton";
import FollowRequestsDialog from "./follow-requests-dialog.component";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        height: '15em',
        border: '1px solid lightGray'
    },
    details: {
        display: 'flex',
        flexDirection: 'column'
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 250
    },
}));

export default function ProfileHeaderComponent() {
    const classes = useStyles();
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useEffect(() => {
        // todo fetch user profile data
    }, []);

    const handleDialogClose = () => {
        setIsDialogOpen(false);
    }

    return (
        <Card className={classes.root} elevation={0}>
            <CardMedia
                className={classes.cover}
                image={erik}
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Grid container direction={'column'} spacing={1}>
                        <Grid item container
                              direction="row"
                              justifyContent="space-between"
                              alignItems="center">
                            <Grid item xs={6}>
                                <Typography variant="h3">
                                    Username
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' startIcon={<SettingsIcon/>}>
                                    Change profile
                                </Button>
                                <Button variant='outlined' startIcon={<PersonAddIcon/>}>
                                    Follow
                                </Button>
                                <IconButton color={'primary'} onClick={() => setIsDialogOpen(true)}>
                                    <NotificationsIcon/>
                                </IconButton>
                            </Grid>
                        </Grid>

                        <Grid item container
                              direction="row"
                              justifyContent="space-evenly"
                              alignItems="center">
                            <Typography variant="body1">
                                <b>11000</b> Posts
                            </Typography>
                            <Typography variant="body1">
                                <b>16</b> Followers
                            </Typography>
                            <Typography variant="body1">
                                <b>16</b> Following
                            </Typography>
                        </Grid>

                        <Grid item container
                              direction="row"
                              justifyContent="space-evenly"
                              alignItems="center">
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </div>

            <FollowRequestsDialog isOpen={isDialogOpen} handleClose={handleDialogClose}/>
        </Card>
    );
}

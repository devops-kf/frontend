import Grid from "@material-ui/core/Grid";
import {Card, CardActions, Collapse} from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ThumbDown from "@material-ui/icons/ThumbDown";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import TextField from "@material-ui/core/TextField";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: 'fit-content',
    },
    formControl: {
        marginTop: theme.spacing(2),
        minWidth: 120,
    },
    formControlLabel: {
        marginTop: theme.spacing(1),
    },
    img: {
        height: '100%',
        width: '100%',
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: 570,
    },
    root: {
        maxHeight: '100%',
        border: 'none !important',
        backgroundColor: 'transparent',
        marginRight: 10
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    cover: {
        width: 250
    },
}));


export default function PostComponent() {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Grid container spacing={2} style={{height: '600px'}}>
            <Grid xs={7} item container
                  justifyContent="center"
                  alignItems="center">
                <img
                    className={classes.img}
                    // src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmRvbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                    src="https://r1.ilikewallpaper.net/iphone-wallpapers/download/78957/red-and-blue-wallpaper-iphone-wallpaper-ilikewallpaper_com.jpg"
                    alt=""/>
            </Grid>
            <Grid container item xs={5}>
                <Card className={classes.root} elevation={0}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                R
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon/>
                            </IconButton>
                        }
                        title="Username"
                        subheader="September 14, 2016"
                    />
                    <Divider/>

                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            This impressive paella is a perfect party dish and a fun meal to cook together
                            with your
                            guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                        <Divider style={{margin: '5px 0 5px 0'}}/>
                        <div style={{display: 'inline'}}>
                            <u><span style={{cursor: 'pointer'}}
                                     onClick={handleExpandClick}>Show comments ({123})</span></u>
                            <IconButton
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded,
                                })}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                            >
                                <ExpandMoreIcon/>
                            </IconButton>
                        </div>

                        <div style={{maxHeight: '12rem', height: '12rem', overflowY: 'auto'}}>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <div>1</div>
                                    <div>2</div>
                                    <div>3</div>
                                    <div>4</div>
                                    <div>5</div>
                                    <div>6</div>
                                    <div>7</div>
                                    <div>8</div>
                                </CardContent>
                            </Collapse>
                        </div>

                    </CardContent>
                    <CardActions disableSpacing>
                        <Typography variant={'body1'}>{1}</Typography>
                        <IconButton>
                            <FavoriteIcon/>
                        </IconButton>
                        <Typography variant={'body1'}>{10}</Typography>
                        <IconButton>
                            <ThumbDown/>
                        </IconButton>
                        <IconButton>
                            <BookmarkBorderIcon/>
                        </IconButton>
                        {/*todo if agent*/}
                        <IconButton>
                            <LocalMallIcon/>
                        </IconButton>
                    </CardActions>
                    <Divider/>
                    <TextField
                        name="comment"
                        variant="outlined"
                        fullWidth
                        id="comment"
                        label="Leave comment"
                    />
                </Card>

            </Grid>
        </Grid>
    )
}
import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import temp1 from '../../images/temp1.jpg';
import temp2 from '../../images/temp2.jpg';
import temp3 from '../../images/temp3.jpg';
import temp4 from '../../images/temp4.jpg';
import PostDialogComponent from "../post/post-dialog.component";
import {Box, CircularProgress} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    imageList: {
        width: '100%',
    },
    imageListItem: {
        '&:hover': {
            opacity: 0.6,
            transition: '.3s ease',
            cursor: 'pointer'
        },
    },
}));


const itemData = [
    {
        img: temp1,
        title: 'Image1',
        author: 'author1',
        cols: 1,
        id: '1'
    },
    {
        img: temp2,
        title: 'Image2',
        author: 'author2',
        cols: 1,
        id: '2'
    },
    {
        img: temp3,
        title: 'Image3',
        author: 'author3',
        cols: 1,
        id: '3'
    },
    {
        img: temp4,
        title: 'Image4',
        author: 'author4',
        cols: 1,
        id: '4'
    },
];

export default function PostGridComponent() {
    const classes = useStyles();

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [postId, setPostId] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // todo pass a prop to diferentiate endpoints
        // fetch posts from those endpoints
        setTimeout(() => {
            setPosts([...itemData]);
        }, 2000);
    }, []);

    const handlePostClick = (selectedPostId) => {
        setPostId(selectedPostId);
        setIsDialogOpen(true);
    }

    const handleDialogClose = () => {
        setPostId(null);
        setIsDialogOpen(false);
    }

    return (
        <>
            <div className={classes.root}>
                {
                    posts.length === 0 ?
                        <Box display="flex" flexDirection="row" justifyContent="center" alignItems={'center'} m={1}
                             p={1}>
                            <CircularProgress/>
                        </Box>
                        :
                        <ImageList rowHeight={260} gap={1} className={classes.imageList} cols={3}>
                            {posts.map((item) => (
                                <ImageListItem
                                    key={item.id}
                                    cols={item.cols || 1}
                                    onClick={() => handlePostClick(item.id)}
                                    className={classes.imageListItem}
                                >
                                    <img src={item.img} alt='post' style={{padding: '0'}}/>
                                </ImageListItem>
                            ))}
                        </ImageList>
                }
                <PostDialogComponent
                    isOpen={isDialogOpen}
                    handleClose={handleDialogClose}
                    postId={postId}
                />
            </div>
        </>
    );
}

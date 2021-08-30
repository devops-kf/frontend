import React, {useEffect} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import PostComponent from "./post.component";


export default function PostDialogComponent({isOpen, handleClose, postId, ...rest}) {

    useEffect(() => {
        // todo get data for given post id
        // todo add loading while waiting
        // see what is better, for post to be fetched here or in post component
    }, [postId]);

    return (
        <React.Fragment>
            <Dialog
                fullWidth
                maxWidth={'md'}
                open={isOpen}
                onClose={handleClose}
            >
                <DialogContent>
                    <PostComponent />
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}
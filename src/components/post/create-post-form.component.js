import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import React, {useState} from "react";
import useAuthStyles from "../auth/auth-style";
import FormLabel from "@material-ui/core/FormLabel";
import PostService from "../../services/post.service";

export default function CreatePostFormComponent() {
    const classes = useAuthStyles();

    const [isPublishDisabled, setIsPublishDisabled] = useState(true);
    const [selectedFile, setSelectedFile] = useState(null);
    const [caption, setCaption] = useState('');

    const onFileChange = event => {
        // todo wait for success upload, and then enable the button
        setTimeout(() => {
            // for now, simulate
            setSelectedFile(event.target.files[0]);
            setIsPublishDisabled(false);
        }, 1000);
    };

    const handleFileUpload = () => {
        const formData = new FormData();
        formData.append(
            "postImage",
            selectedFile,
            caption
        );

        PostService.publishPost(formData)
            .then(() => console.log('success'))
            .catch(() => console.log('error'));
    }

    return (
        <Container component="main" maxWidth="md">
            <div className={classes.paper}>
                <Typography component="h1" variant="h4">
                    Create new post
                </Typography>
                <form noValidate style={{marginTop: 20}}>
                    <div>
                        <FormLabel style={{marginRight: 5}}>Upload image</FormLabel>
                        <input type="file" id="postImage" name="postImage" onChange={onFileChange}/>
                    </div>
                    <TextField
                        onChange={e => setCaption(e.target.value)}
                        id="caption"
                        required
                        label="Say something nice about your post"
                        multiline
                        fullWidth
                        rows={4}
                        variant="outlined"
                        margin="normal"
                    />
                    <Button
                        disabled={isPublishDisabled}
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleFileUpload}
                    >
                        Publish
                    </Button>
                </form>
            </div>
        </Container>
    )
}
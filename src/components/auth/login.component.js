import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {Link, useHistory} from "react-router-dom";
import useAuthStyles from "./auth-style";
import AuthService from "../../services/auth.service";
import LocalStorageService from "../../services/local-storage.service";
import {Routes} from "../../config/router-config";
import {useDispatch} from "react-redux";
import {setUser} from "../../store/authSlice";

export default function LoginComponent() {
    const classes = useAuthStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        AuthService.login(username, password)
            .then(response => {
                LocalStorageService.setAccessToken(response.data.accessToken)
                dispatch(setUser({username, password}))
                history.push(Routes.HOME);
            })
            .catch(() => console.log('not good'));
    }

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        onChange={e => setUsername(e.target.value)}
                        name="username"
                        variant="outlined"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        autoFocus
                        margin="normal"
                    />
                    <TextField
                        onChange={e => setPassword(e.target.value)}
                        variant="outlined"
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        name="password"
                        type="password"
                        margin="normal"
                    />
                    <Button
                        onClick={handleSubmit}
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link to={'/register'} variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
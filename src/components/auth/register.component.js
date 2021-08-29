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
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import InterestListComponent from "./interest-list.component";
import AuthService from "../../services/auth.service";

const RegisterComponent = () => {
    const classes = useAuthStyles();
    const history = useHistory();

    const [userDto, setUserDto] = useState({
        accountType: 'regular',
        gender: 'male',
        interests: []
    });

    const updateUserDto = (event) => {
        const fieldName = event.target.name;
        // todo validate
        setUserDto({...userDto, [fieldName]: event.target.value});
    }

    const handleSubmit = () => {
        AuthService.register(userDto)
            .then(() => {
                history.push("/login");
            })
            .catch(() => console.log('no success!'));
    }

    return (
        <Container component="main" maxWidth="md">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid container item spacing={2} xs={6}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    onChange={updateUserDto}
                                    name="username"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    onChange={updateUserDto}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="password"
                                    label="Password"
                                    name="password"
                                    type="password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={updateUserDto}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    name="name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={updateUserDto}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="email"
                                    label="Email"
                                    type="email"
                                    id="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={updateUserDto}
                                    variant="outlined"
                                    fullWidth
                                    name="phone"
                                    label="Phone"
                                    type="tel"
                                    id="phone"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormLabel component="legend">Account type</FormLabel>
                                <RadioGroup row name="accountType" value={userDto.accountType}
                                            onChange={updateUserDto}>
                                    <FormControlLabel value="regular" control={<Radio/>} label="Regular"/>
                                    <FormControlLabel value="agent" control={<Radio/>} label="Agent"/>
                                </RadioGroup>
                            </Grid>
                            <Grid item xs={6}>
                                {
                                    userDto.accountType === 'agent' &&
                                    <TextField
                                        required
                                        variant="outlined"
                                           fullWidth
                                        name="linkToShop"
                                        label="Link to shop"
                                        type="url"
                                        id="link-to-shop"
                                    />
                                }
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={updateUserDto}
                                    id="date"
                                    fullWidth
                                    label="Birthday"
                                    type="date"
                                    name="birthday"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    onChange={updateUserDto}
                                    required
                                    variant="outlined"
                                    fullWidth
                                    name="country"
                                    label="Country"
                                    id="country"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup row name="gender" value={userDto.gender}
                                            onChange={updateUserDto}>
                                    <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                                    <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                                </RadioGroup>
                            </Grid>
                        </Grid>
                        <Grid container item spacing={2} xs={6}>
                            <Grid item xs={12}>
                                <TextField
                                    id="bio"
                                    label="Say something nice about yourself"
                                    multiline
                                    fullWidth
                                    rows={4}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item>
                                {/* todo */}
                                <FormLabel style={{marginRight: 5}}>Upload profile picture</FormLabel>
                                <input type="file" id="profilePicture" name="profilePicture"/>
                            </Grid>
                            <Grid item xs={12}>
                                <InterestListComponent
                                    updateSelectedInterests={(checked) => setUserDto({...userDto, interests: checked})}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Button
                        onClick={handleSubmit}
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end" style={{marginBottom: 20}}>
                        <Grid item>
                            <Link to='/login' variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
};

export default RegisterComponent;
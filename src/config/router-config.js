import {Redirect, Route, Switch} from "react-router-dom";
import LoginComponent from "../components/auth/login.component";
import RegisterComponent from "../components/auth/register.component";
import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import LocalStorageService from "../services/local-storage.service";
import Header from "../components/header/header.component";
import ProfileView from "../views/profile/profile.view";

export const Routes = {
    HOME: '/',
    LOGIN: '/login',
    PROFILE: '/profile',
    REGISTER: '/register',
}

export const RouterConfig = () => {
    const isAuth = useSelector((state) => !!state.authentication.user)

    useEffect(() => {
        if (isAuth !== !!LocalStorageService.getAccessToken()) {
            // decode jwt or send request again (best to do that)
            // set user in context
        }

    }, [isAuth])

    return (
        <>
            {isAuth && <Header/>}
            <div style={{maxWidth: '65%', margin: '0 auto'}}>
                <Switch>
                    <Route exact path={Routes.PROFILE} component={ProfileView}/>
                    <Route path={Routes.LOGIN} component={LoginComponent}/>
                    <Route path={Routes.REGISTER} component={RegisterComponent}/>
                    <Route path={Routes.HOME} component={LoginComponent} exact>
                    </Route>
                    <Redirect to="/"/>
                </Switch>
            </div>
        </>
    );
}
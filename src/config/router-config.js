import {Redirect, Route, Switch} from "react-router-dom";
import LoginComponent from "../components/auth/login.component";
import RegisterComponent from "../components/auth/register.component";
import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import LocalStorageService from "../services/local-storage.service";

export const Routes = {
    HOME: '/',
    LOGIN: '/login',
    REGISTER: '/register',
}

function PrivateRoute({component, ...rest}) {
    const isAuth = useSelector((state) => !!state.authentication.user)

    return (
        <Route {...rest} render={props =>
            isAuth ? (component) :
                (<Redirect to={Routes.LOGIN}/>)
        }
        />
    )
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
            <div style={{maxWidth: '65%', margin: '0 auto'}}>
                <Switch>
                    <Route path={Routes.LOGIN} component={LoginComponent}/>
                    <Route path={Routes.REGISTER} component={RegisterComponent}/>
                    <Redirect to="/"/>
                </Switch>
            </div>
        </>
    );
}
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {RouterConfig} from "./config/router-config";
import {theme} from "./services/theme.service";
import {ThemeProvider} from "@material-ui/styles";
import {Provider} from "react-redux";
import store from "./store/store";
import registerInterceptors from "./config/interceptor-config";


export default function App() {
    registerInterceptors();

    return (
        <div className="App">
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <RouterConfig/>
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        </div>
    );
}
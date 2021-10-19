import React from "react";
import GlobalModalProvider from "./HOC/GlobalModalProvider";
import { BrowserRouter } from 'react-router-dom';
import RootRouter from "./Routing/Root";
import MainLayout from "./Layouts/MainLayout";



const App = (props) => {
    return(
        <React.Fragment>
            <BrowserRouter>
            <GlobalModalProvider>
                <MainLayout>
                <RootRouter/>
                </MainLayout>
            </GlobalModalProvider>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default App;



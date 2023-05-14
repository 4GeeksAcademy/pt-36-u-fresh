import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                    
                        <Route element={<h1>Este es el login</h1>} path="/login" />
                        <Route element={<h1>Este es el signup</h1>} path="/signup" />
                        <Route element={<h1>HOME</h1>} path="/home" />
                        <Route element={<h1>drinks</h1>} path="/drinks" /> 
                        <Route element={<h1>Countries </h1>} path="/countries" />
                        <Route element={<h1>Best rated </h1>} path="/best-rated" /> 
                        <Route element={<h1>zero sugars </h1>} path="/zero-sugars" />
                        <Route element={<h1> </h1>} path="/countries" />
                        <Route element={<h1> checkout </h1>} path="/checkout" />
                        <Route element={<h1>contact</h1>} path="/contact" />
                   
                    

                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);

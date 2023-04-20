import React from 'react';
import {Route, Routes} from 'react-router-dom'
import {routes} from "../routes.tsx";
import NotFound from "../pages/notFound/NotFound.tsx";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(({path, Component}) => {
                return <Route key={path} path={path} element={<Component />} exact/>
            })}
            <Route path='*' element={<NotFound />}/>
        </Routes>
    );
};

export default AppRouter;
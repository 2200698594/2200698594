import { lazy, Suspense } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Author from './Author';

let Login = lazy(() => import("../views/login"));
let Layout = lazy(() => import("../views/layout"));

let routers: RoutesType = [
    {
        path: '/',
        element: <NavLink to={'/layout'}></NavLink>,
        author: true,
    },
    {
        path: '/login',
        element: <Suspense fallback="loading..."><Login></Login></Suspense>,
        author: false,
    },
    {
        path: '/layout',
        element: <Suspense fallback="loading..."><Layout></Layout></Suspense>,
        author: true,
    },
];


function RouterView() {
    return (
        <Routes>
            {
                routers.map((item: Routes, index: number) => {
                    return <Route path={item.path} element={item.author ? <Author element={item.element} path={item.path}></Author> : item.element} key={index}>
                        {
                            item.children && item.children.map((item2: Routes, index: number) => {
                                return <Route path={item2.path} element={item.author ? <Author element={item2.element} path={`${item.path}/${item2.path}`}></Author> : item2.element} key={index}></Route>
                            })
                        }
                    </Route >
                })
            }
        </Routes >
    )
};


export default RouterView;
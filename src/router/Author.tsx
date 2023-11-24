import React from "react";
import { Navigate } from "react-router-dom";
export default function Author(props: AuthorPropsType) {
    let token = localStorage.getItem('token');
    if (token) {
        return (<div>
            {props.element}
        </div>)
    } else {
        return <Navigate to={`/login?reduircturl=${props.path}`}></Navigate>
    }
};
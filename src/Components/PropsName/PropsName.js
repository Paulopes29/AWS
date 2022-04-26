import React from "react";


export function Nameprops(props){
    if (props.name) {
        return <h1>Salut {props.name} </h1>;
    } else {
        return "Salut PPL";
    }
}

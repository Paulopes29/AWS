import React from "react";

export function Hello(props) {
    if (props.name) {
        return <h1>Bonjour, {props.name} !</h1>;
    } else {
        return "Salut, étranger";
    }
}
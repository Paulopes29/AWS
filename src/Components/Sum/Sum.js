import React from "react";

export function sum(input){

    if (toString.call(input) !== "[object Array]")
        return false;

    var total =  0;
    for(var i=0;i<input.length;i++)
    {
        if(isNaN(input[i])){
            continue;
        }
        total += Number(input[i]);
    }
    console.log(total);

    return total;
}


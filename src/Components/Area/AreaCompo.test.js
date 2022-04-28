import React from "react";
import { render, fireEvent, getElementError } from '@testing-library/react';
import { AreaCompo } from "./AreaCompo";


it("Show Square calculator", () => {

    const { getByTestId } = render(<AreaCompo />)
    let dsquare = document.getElementById("dsquare");
    let dcircle = document.getElementById("dcircle");
    let drectangle = document.getElementById("drectangle");

    fireEvent.click(getByTestId("TBTN_square"))
  
    
    expect(dsquare).toBeVisible();
    expect(dcircle).not.toBeVisible();
    expect(drectangle).not.toBeVisible();

})

it("Show Circle calculator", () => {

    const { getByTestId } = render(<AreaCompo />)
    let dsquare = document.getElementById("dsquare");
    let dcircle = document.getElementById("dcircle");
    let drectangle = document.getElementById("drectangle");

    fireEvent.click(getByTestId("TBTN_circle"))
  
    
    expect(dsquare).not.toBeVisible();
    expect(dcircle).toBeVisible();
    expect(drectangle).not.toBeVisible();

})

it("Show Rectangle calculator", () => {

    const { getByTestId } = render(<AreaCompo />)
    let dsquare = document.getElementById("dsquare");
    let dcircle = document.getElementById("dcircle");
    let drectangle = document.getElementById("drectangle");

    fireEvent.click(getByTestId("TBTN_rectangle"))
  
    
    expect(dsquare).not.toBeVisible();
    expect(dcircle).not.toBeVisible();
    //Pour faire planter le test on peut dire qu'on attend que le module rectangle ne doit pas etre visible alors qu'il vas l'etre.
    expect(drectangle).toBeVisible();

})
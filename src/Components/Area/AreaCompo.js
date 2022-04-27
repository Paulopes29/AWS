//Importation de mes méthodes de calculs
import { CercleArea } from "./CercleArea"
import { RectangleArea } from "./RectangleArea"
import { SquareArea } from "./SquareArea"

import React from "react";

//Pour tester mon composant j'utilise "data_testid" car c'est une bonne pratique. Si un dev viens retoucher mon code et modifie un "id" classique
//Cela va casser tout les tests qui se référaient à l'id classique tandis qu'avec "data_testid" permet d'éviter ce genre de problème.


export function AreaCompo() {

    // AFFICHAGE DES BLOCKS DE CALCULS
    const Square = () => {
        //Définition des DIV pour chacun des calculs
        let dsquare = document.getElementById("dsquare");
        let dcircle = document.getElementById("dcircle");
        let drectangle = document.getElementById("drectangle");
        //J'affiche que les block pour le calcul du carré
        dsquare.style.display = "block";
        dcircle.style.display = "none";
        drectangle.style.display = "none";
        //Je remet mon résultat à vide
        document.getElementById("Resultat").innerHTML = "<span></span>";

    };
    const Circle = () => {
        //Définition des DIV pour chacun des calculs
        let dsquare = document.getElementById("dsquare");
        let dcircle = document.getElementById("dcircle");
        let drectangle = document.getElementById("drectangle");
        //J'affiche que les block pour le calcul du cercle
        dsquare.style.display = "none";
        dcircle.style.display = "block";
        drectangle.style.display = "none";
        //Je remet mon résultat à vide
        document.getElementById("Resultat").innerHTML = "<span></span>";
    };
    const Rectangle = () => {
        //Définition des DIV pour chacun des calculs
        let dsquare = document.getElementById("dsquare");
        let dcircle = document.getElementById("dcircle");
        let drectangle = document.getElementById("drectangle");
        //J'affiche que les block pour le calcul du rectangle
        dsquare.style.display = "none";
        dcircle.style.display = "none";
        drectangle.style.display = "block";
        //Je remet mon résultat à vide
        document.getElementById("Resultat").innerHTML = "<span></span>";
    };

    //CALCUL DES RESULTATS
    const CalCircle = () => {
        // Je récupère mes valeurs pour le calcul
        var Val = document.getElementById("circleIn").value;
        var res = CercleArea(Val);
        //J'affiche le résultat
        document.getElementById("Resultat").innerHTML = "<span>" + res + "</span>";
    };
    const CalSquare = () => {
        // Je récupère mes valeurs pour le calcul
        var Val = document.getElementById("squareIn").value;
        var res = SquareArea(Val);
        //J'affiche le résultat
        document.getElementById("Resultat").innerHTML = "<span>" + res + "</span>";
    };
    const CalRect = () => {
        // Je récupère mes valeurs pour le calcul
        var ValWidth = document.getElementById("rectInLa").value;
        var ValLenght = document.getElementById("rectInLo").value;
        var res = RectangleArea(ValWidth, ValLenght);
        //J'affiche le résultat
        document.getElementById("Resultat").innerHTML = "<span>" + res + "</span>";
    };

    return (
        <div>
            <div>
                <tr>
                    <td><button data-testid="TBTN_square" id="square" onClick={Square}>Square</button></td>
                    <td><button data-testid="TBTN_circle" id="circle" onClick={Circle}>Circle</button></td>
                    <td><button data-testid="TBTN_rectangle" id="rectangle" onClick={Rectangle}>Rectangle</button></td>
                </tr>
            </div>

            <div data_testid="MyTest"id="dsquare">
                <p data_testid="Title">Square Area Calculator</p>
                <label for="squareIn">Side size : </label>
                <input id="squareIn"></input><br></br>
                <button onClick={CalSquare}>Calculate</button>
            </div>
            <div id="dcircle">
                <p>Circle Area Calculator</p>
                <label for="circleIn">Ray size : </label>
                <input id="circleIn"></input><br></br>
                <button onClick={CalCircle}>Calculate</button>
            </div>
            <div id="drectangle">
                <p>Rectangle Area Calculator</p>
                <label for="rectInLa">width : </label>
                <input id="rectInLa"></input>
                <label for="rectInLo">length : </label>
                <input id="rectInLo"></input><br></br>
                <button onClick={CalRect}>Calculate</button>
            </div>
            <div>
                <p>Résultat : </p><p id="Resultat"></p>
            </div>

        </div>

    );
}


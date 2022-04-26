//Importation de mes méthode de calculs
import { CercleArea } from "./CercleArea"
import { RectangleArea } from "./RectangleArea"
import { SquareArea } from "./SquareArea"

function AreaCompo() {

    //Définition des DIV pour chacun des calculs
    let dsquare = document.getElementById("dsquare");
    let dcircle = document.getElementById("dcircle");
    let drectangle = document.getElementById("drectangle");

    // AFFICHAGE DES BLOCKS DE CALCULS
    const Square = () => {
        //J'affiche que les block pour le calcul du carré
        dsquare.style.display = "block";
        dcircle.style.display = "none";
        drectangle.style.display = "none";
        //Je remet mon résultat à vide
        document.getElementById("Resultat").innerHTML = "<span id='test'></span>";

    };
    const Circle = () => {
        //J'affiche que les block pour le calcul du cercle
        dsquare.style.display = "none";
        dcircle.style.display = "block";
        drectangle.style.display = "none";
        //Je remet mon résultat à vide
        document.getElementById("Resultat").innerHTML = "<span id='test'></span>";
    };
    const Rectangle = () => {
        //J'affiche que les block pour le calcul du rectangle
        dsquare.style.display = "none";
        dcircle.style.display = "none";
        drectangle.style.display = "block";
        //Je remet mon résultat à vide
        document.getElementById("Resultat").innerHTML = "<span id='test'></span>";
    };

    //CALCUL DES RESULTATS
    const CalCircle = () => {
        // Je récupère mes valeurs pour le calcul
        var Val = document.getElementById("circleIn").value;
        var res = CercleArea(Val);
        //J'affiche le résultat
        document.getElementById("Resultat").innerHTML = "<span id='test'>" + res + "</span>";
    };
    const CalSquare = () => {
        // Je récupère mes valeurs pour le calcul
        var Val = document.getElementById("squareIn").value;
        var res = SquareArea(Val);
        //J'affiche le résultat
        document.getElementById("Resultat").innerHTML = "<span id='test'>" + res + "</span>";
    };
    const CalRect = () => {
        // Je récupère mes valeurs pour le calcul
        var ValWidth = document.getElementById("rectInLa").value;
        var ValLenght = document.getElementById("rectInLo").value;
        var res = RectangleArea(ValWidth, ValLenght);
        //J'affiche le résultat
        document.getElementById("Resultat").innerHTML = "<span id='test'>" + res + "</span>";
    };

    return (
        <div>
            <div>
                <tr>
                    <td><button id="square" onClick={Square}>Square</button></td>
                    <td><button id="circle" onClick={Circle}>Circle</button></td>
                    <td><button id="rectangle" onClick={Rectangle}>Rectangle</button></td>
                </tr>
            </div>

            <div id="dsquare">
                <p>Square Area Calculator</p>
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
            <div><p>Résultat : </p><p id="Resultat"></p></div>



        </div>



    );
}

export default AreaCompo;
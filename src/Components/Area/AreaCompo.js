function AreaCompo() {

    let dsquare = document.getElementById("dsquare");
    let dcircle = document.getElementById("dcircle");
    let drectangle = document.getElementById("drectangle");


    const Square = () => {
       
        if (getComputedStyle(dsquare).display != "none") {
            dsquare.style.display = "none";
        } else {
            dsquare.style.display = "block";
        }
    };
    const Circle = () => {
       
        if(getComputedStyle(dcircle).display != "none"){
            dcircle.style.display = "none";
          } else {
            dcircle.style.display = "block";
          }
    };
    const Rectangle = () => {
       
        if(getComputedStyle(drectangle).display != "none"){
            drectangle.style.display = "none";
          } else {
            drectangle.style.display = "block";
          }
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
                <p>Square</p>
            </div>
            <div id="dcircle">
                <p>Circle</p>
            </div>
            <div id="drectangle">
                <p>Rectangle</p>
            </div>



        </div>



    );
}

export default AreaCompo;
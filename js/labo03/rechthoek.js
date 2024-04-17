"use strict";
(function () {
    class Rechthoek {
        constructor(x, y, breedte, hoogte){
            this.x = x;
            this.y = y;
            this.breedte = breedte;
            this.hoogte = hoogte;
        }

        isVierkant(){
            return (this.breedte === this.hoogte)
        }

        berekenOmtrek(){
            return (this.breedte + this.hoogte)*2;
        }

        berekenOpp(){
            return this.breedte * this.hoogte;
        }

        isIn(x,y){
            return (
                (this.x <= x && x <= (this.x + this.breedte)) &&
                (this.y <= y && y <= (this.y + this.hoogte))
            );
        }
    }



    const recht = new Rechthoek(0, 0, 2, 2)
    console.log(
        `rechthoek (${recht.x}, ${recht.y}) ${recht.breedte}x${recht.hoogte}`
    );
    console.log(`is vierkant? ${recht.isVierkant()}`)
    console.log(`omtrek? ${recht.berekenOmtrek()}`);
    console.log(`opp? ${recht.berekenOpp()}`);
    console.log(`is 1, 2 in rechthoek? ${recht.isIn(1, 2)}`);
    console.log(`is 2, 1 in rechthoek? ${recht.isIn(2, 1)}`);
    console.log(`is 4, 5 in rechthoek? ${recht.isIn(4, 5)}`);
    console.log(`is 1, 6 in rechthoek? ${recht.isIn(1, 6)}`);

})();

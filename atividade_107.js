var programadores_1 =
[
    "Marcos",
    "Dênis",
    "Jussara",
    "Luciana"
];

var programadores_2 = [
    "Tatiana",
    "Alana",
    "Guilherme",
    "Rômulo"
];

var total_programadores_1 = programadores_1.length;
var total_programadores_2 = programadores_2.length;

if ( total_programadores_1 > total_programadores_2 ) {
    console.log("O primeiro array tem mais programadores que o segundo array");
}else if (total_programadores_1 < total_programadores_2) {
    console.log("O segundo array tem mais programadores que o primeiro array");
} else{
    console.log("Os dois arrays têm a mesma quantidade de programadores");
}

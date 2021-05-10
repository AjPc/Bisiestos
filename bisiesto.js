
document.getElementById("date1").addEventListener("change", dateConverter);

function dateConverter() {

    inputDate = document.getElementById("date1").value;

    const d = new Date(inputDate);

    var months = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octobre",
        "Noviembre",
        "Diciembre",
    ];
    document.getElementById("convert").innerHTML =
        d.getDate() +
        " de " +
        months[d.getMonth()] +
        " de " +
        d.getFullYear();

    let esBisiesto = d.getFullYear();

    if (((esBisiesto % 4 == 0) && (esBisiesto % 100 != 0)) || (esBisiesto % 400 == 0)){
        document.getElementById("bisiesto").innerHTML = "Este año SÍ es bisiesto."
    } else {
        document.getElementById("bisiesto").innerHTML = "Este año NO es bisiesto."
    }
}


document.getElementById("similar").addEventListener("click", buscarSimilitudes);

function buscarSimilitudes(){
    for (let i = 1000; i < 10000; i++){
        let num = i.toString();
        let valor1 = num.slice(0,1);
        let valor2 = num.slice(1,2);
        let valor3 = num.slice(2,3);
        let valor4 = num.slice(3,4);

        if ( (parseInt(valor1) + parseInt(valor3)) == (parseInt(valor2) + parseInt(valor4)) ){
            document.getElementById("coinciden").innerHTML += 
            `<div class="col-1 text-center">${num}</div>`
        }
    }
}

document.getElementById("limpiar").addEventListener("click", vaciarNums);

function vaciarNums(){
    document.getElementById("coinciden").innerHTML = "";
}
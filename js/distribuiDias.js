//Primeiro dia do mes de acordo com os ids dos meses.
var indice = {
    "1" : 1,
    "2" : 43,
    "3" : 85,
    "4" : 127,
    "5" : 169,
    "6" : 211,
    "7" : 253,
    "8" : 295,
    "9" : 337,
    "10" : 379,
    "11" : 421,
    "12" : 463,
};

function distribui(mes, n){
    var numeroDeDias = mes.nDias;
    var dia = 1;

    for(var i = 0; i < numeroDeDias; i ++){
        document.getElementById(firstday2019).innerHTML = dia;
        dia ++;
        firstday2019 ++;
    }

    if(firstday2019 + 7 > n * 42){
        firstday2019 += 7;
       
    }else{
        firstday2019 += 14;
    }
   
}

function changeClass(){
    for(var i = 1; i <= 504; i ++){
        if(document.getElementById(i).innerHTML == ""){
            document.getElementById(i).classList.add("gray");
        }
    }
}

function completa(mes){
    var i;
    var start;
    var end;

    for(i = indice[mes]; i < indice[mes] + 41; i ++){
        if(document.getElementById(i).innerHTML != ""){
            break;
        }
    }
    start = i - 1;

    for(i = start + 1; i < indice[mes] + 41; i ++){
        if(document.getElementById(i).innerHTML == ""){
            break;
        }
    }
    
    end = i;

    if (meses[mes].nome == "Janeiro"){
        var x = 31;       
    }else{
        var x = meses[mes-1].nDias;
    }
    while(start != indice[mes] - 1){
        document.getElementById(start).innerHTML = x;
        start --;
        x --;
    }    

    x = 1;
    while(end != indice[mes] + 42){
        document.getElementById(end).innerHTML = x;
        end ++;
        x ++;
    }
}

function finalDeSemana(indice){  
    while(indice < 504){
        if(document.getElementById(indice).className != "gray"){
            document.getElementById(indice).classList.add("finalDeSemana");
        }
        indice += 7;
    }
}

function feriados(){
    for(var i = 1; i <= 504; i ++){
        for(var j = 0; j < feriado.length; j ++){
            if(i == feriado[j]){
                document.getElementById("td" + i).classList.add("feriado");
            }
        }
    }
}
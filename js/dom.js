var index = 0;

function createFields(tableClass){
    var table = document.createElement("table");

    table.classList.add(tableClass);
    table.border = "1px";

    document.body.appendChild(table);
    createTitle(tableClass, table);
    createWeek(table);
    for(var i = 0; i < 6; i ++){
        createWeeks(table);
    }
}

function createTitle(mes, table){
    var tr = document.createElement("tr");
    var td = document.createElement("td");

    td.innerHTML = mes;
    td.colSpan = 7;
    tr.id = "mes";

    table.appendChild(tr);
    tr.appendChild(td);
}

function createWeek(table){
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var td6 = document.createElement("td");
    var td7 = document.createElement("td");

    td1.innerHTML = semana[1].sigla;
    td2.innerHTML = semana[2].sigla;
    td3.innerHTML = semana[3].sigla;
    td4.innerHTML = semana[4].sigla;
    td5.innerHTML = semana[5].sigla;
    td6.innerHTML = semana[6].sigla;
    td7.innerHTML = semana[7].sigla;

    tr.classList.add("weekS");

    table.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
}

function createWeeks(table){
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var td6 = document.createElement("td");
    var td7 = document.createElement("td");
    var a1 = document.createElement("a");
    var a2 = document.createElement("a");
    var a3 = document.createElement("a");
    var a4 = document.createElement("a");
    var a5 = document.createElement("a");
    var a6 = document.createElement("a");
    var a7 = document.createElement("a");

    tr.classList.add("week" + index);

    var id = index * 7 + 1;
    index += 1;

    td1.id = "td" + id;
    td2.id = "td" + (id + 1);
    td3.id = "td" + (id + 2);
    td4.id = "td" + (id + 3);
    td5.id = "td" + (id + 4);
    td6.id = "td" + (id + 5);
    td7.id = "td" + (id + 6);
    
    a1.id = id;
    a2.id = id + 1;
    a3.id = id + 2;
    a4.id = id + 3;
    a5.id = id + 4;
    a6.id = id + 5;
    a7.id = id + 6;

    a1.href = "index.html?day=" + id;
    a2.href = "index.html?day=" + (id + 1);
    a3.href = "index.html?day=" + (id + 2);
    a4.href = "index.html?day=" + (id + 3);
    a5.href = "index.html?day=" + (id + 4);
    a6.href = "index.html?day=" + (id + 5);
    a7.href = "index.html?day=" + (id + 6);

    table.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    td1.appendChild(a1);
    td2.appendChild(a2);
    td3.appendChild(a3);
    td4.appendChild(a4);
    td5.appendChild(a5);
    td6.appendChild(a6);
    td7.appendChild(a7);
}
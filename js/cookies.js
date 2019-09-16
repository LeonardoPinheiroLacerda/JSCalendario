function setCookie(exdate, cname, cvalue) {
    var now = new Date();
    var time = now.getTime();
    var expireTime = time + exdate;
    now.setTime(expireTime);
    document.cookie = cname + '=' + cvalue + ';expires=' + now.toGMTString() + ';path=/';
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

var str = "";
function setStr(){
    for (var i = 0; i < feriado.length; i = i + 1) {
        if (i == feriado.length - 1) {
            str += feriado[i];
        } else {
            str += feriado[i] + ","
        }
    }
}
function pushStr(string){
    if(str != ""){
        str += "," + string;
    }else{
        str += string;
    }
}
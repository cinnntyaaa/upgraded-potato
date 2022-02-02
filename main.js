const startTime= () => {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector('#count').innerHTML =
    h + ":" + m + ":" + s;
    let t = setTimeout(startTime, 500);
}
const checkTime = (i)=> {
    if (i < 10) {i = "0" + i};
    return i;
}

window.addEventListener("load", startTime);
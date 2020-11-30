function clockFunction() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);

    document.getElementById('clockDisplay').innerHTML = hours+ ":" + minutes + ":" + seconds;
    var r = setTimeout(clockFunction, 250);

function addZero(one) {
    if (one < 10) {one = "0" + one }
    return one;
}
}
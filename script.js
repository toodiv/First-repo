
function code() {
    var html = document.getElementById("html");
    var css = document.getElementById("css");
    var sript = document.getElementById("JS");
    var code = document.getElementById("out").contentWindow.document;

    document.body.onkeyup = function () {
        code.open();
        code.write(
            html.value +

            "<style>" + css.value + "</style>" +

            "<script>" + sript.value + "</script>"
        );

        code.close();

    }

}

code();

var container = document.getElementById("container");
var container2 = document.getElementById("container2");
var koding = document.getElementById("koding");

koding.onclick = function () {
    container.style.display = "block";
    container2.style.display = "none";
};










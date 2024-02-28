//declaring this at the top as I was getting errors further down.
var submitThis = document.getElementById("submitThis");
//changes the color back and forth.
var div1 = document.getElementById("home"),
    toggle = false;
if (div1 !== null && div1 !== undefined) {
    div1.onclick = function () {
        toggle = !toggle;
        div1.style.background = toggle ? "#000" : "#474747";
    };
}

//changes the color with mouse over the gradient on the about us page.
$(document).ready(function () {
    $(".colorChange").hover(
        function () {
            $(this).css("background", "radial-gradient(#00ffff, #ff00ff, #00ff00)");
        },
        function () {
            $(this).css("background", "radial-gradient(#00ff00, #ff00ff, #00ffff )");
        }
    );
});

//does not allow the form to be submitted on the contact us page until all fields are filled.
function checkForm() {
    var x = document.forms.myForm.elements;
    var canSubmit = true;
    for (var i = 0; i < x.length; i++) {
        if (x[i].value.length == 0) {
            canSubmit = false;
        }
    }
    submitThis.disabled = !canSubmit;
}

if (submitThis !== null && submitThis !== undefined) {
    submitThis.addEventListener("click", function (e) {
        e.preventDefault();
        alert("Form submitted.");
        myForm.reset();
    });
}

function visitorCount() {
    var display = document.getElementById("visitors");
    var total = 0;
    total = parseInt(display.innerHTML);
    total = total + 1;
    display.innerHTML = total;
}

//creates the slideshow effect on the Slideshows page.
$("#slideshow > div:gt(0)");
setInterval(function () {
    $("#slideshow > div:first").fadeOut(1200).next().fadeIn(1200).end().appendTo("#slideshow");
}, 3000);

$("#slideshow2 > div:gt(0)");
setInterval(function () {
    $("#slideshow2 > div:first").fadeOut(1200).next().fadeIn(1200).end().appendTo("#slideshow2");
}, 3000);

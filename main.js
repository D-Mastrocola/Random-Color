var r = 255;
var g = 255;
var b = 255;
var button = document.getElementById('button');
var background = document.getElementById('background');
var buttonPressed = function() {
    r = Math.random() * 255;
    g = Math.random() * 255;
    b = Math.random() * 255;

    background.style.backgroundColor = "rgb(" + r +',' + g +',' + b +')';
    button.style.backgroundColor = "rgb(" + b +',' + g +',' + r +')';
}
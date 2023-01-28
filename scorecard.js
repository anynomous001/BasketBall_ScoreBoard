let home = document.getElementById("scoreELH");

let guest = document.getElementById("scoreELG");
let score_home = 0;
let score_guest = 0;

function add_OneH() {

    score_home += 1;
    home.textContent = score_home;

}
function add_TwoH() {

    score_home += 2;
    home.textContent = score_home;

}
function add_ThreeH() {

    score_home += 3;
    home.textContent = score_home;

}

function add_OneG() {
    score_guest += 1;
    guest.textContent = score_guest;

}
function add_TwoG() {
    score_guest += 2;
    guest.textContent = score_guest;

}
function add_ThreeG() {
    score_guest += 3;
    guest.textContent = score_guest;

}


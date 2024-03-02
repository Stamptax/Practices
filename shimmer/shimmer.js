//small menu and buttons
function toggleMenu() {
    let menu = document.getElementById("menuContent");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
        event.stopPropagation();
    }
}

document.addEventListener('click', function (event) {
    let menu = document.getElementById("menuContent");
    let menuButton = document.querySelector('.hamburger-menu');
    var target = event.target;
    if (!menu.contains(target) && !menuButton.contains(target)) {
        menu.style.display = 'none';
    }
});

let homeButtons = document.getElementsByClassName("showHome");
for (let i = 0; i < homeButtons.length; i++) {
    homeButtons[i].addEventListener("click", function () {
        document.querySelector(".home").style.display = "block";
        document.querySelector(".coffee").style.display = "none";
        document.querySelector(".dessert").style.display = "none";
        document.querySelector(".snack").style.display = "none";
        document.querySelector(".address").style.display = "none";
    });
}

let coffeeButtons = document.getElementsByClassName("showCoffee");
for (let i = 0; i < coffeeButtons.length; i++) {
    coffeeButtons[i].addEventListener("click", function () {
        document.querySelector(".home").style.display = "none";
        document.querySelector(".coffee").style.display = "flex";
        document.querySelector(".dessert").style.display = "none";
        document.querySelector(".snack").style.display = "none";
        document.querySelector(".address").style.display = "none";
    });
}

let dessertButtons = document.getElementsByClassName("showDessert");
for (let i = 0; i < dessertButtons.length; i++) {
    dessertButtons[i].addEventListener("click", function () {
        document.querySelector(".snack").style.display = "none";
        document.querySelector(".home").style.display = "none";
        document.querySelector(".coffee").style.display = "none";
        document.querySelector(".dessert").style.display = "flex";
        document.querySelector(".address").style.display = "none";
    });
}

let snackButtons = document.getElementsByClassName("showSnack");
for (let i = 0; i < snackButtons.length; i++) {
    snackButtons[i].addEventListener("click", function () {
        document.querySelector(".dessert").style.display = "none";
        document.querySelector(".home").style.display = "none";
        document.querySelector(".coffee").style.display = "none";
        document.querySelector(".snack").style.display = "flex";
        document.querySelector(".address").style.display = "none";
    });
}

let addressButtons = document.getElementsByClassName("showAddress");
for (let i = 0; i < addressButtons.length; i++) {
    addressButtons[i].addEventListener("click", function () {
        document.querySelector(".dessert").style.display = "none";
        document.querySelector(".home").style.display = "none";
        document.querySelector(".coffee").style.display = "none";
        document.querySelector(".address").style.display = "flex";
        document.querySelector(".snack").style.display = "none";
    });
}

//language switching
let currentLanguage = "cn";
let originalTexts = {};
document.querySelectorAll('[data-key]').forEach(elem => {
    const key = elem.getAttribute('data-key');
    originalTexts[key] = elem.textContent;
});

function switchLanguage() {
    if (currentLanguage === "cn") {
        fetch("./en.json")
            .then(response => response.json())
            .then(data => {
                document.querySelectorAll('[data-key]').forEach(elem => {
                    const key = elem.getAttribute('data-key');
                    if (data[key]) {
                        elem.textContent = data[key];
                    }
                });
                currentLanguage = "en";
            })
            .catch(error => console.error('Error loading language: ', error));
    } else {
        document.querySelectorAll('[data-key]').forEach(elem => {
            const key = elem.getAttribute('data-key');
            if (originalTexts[key]) {
                elem.textContent = originalTexts[key];
            }
        });
        currentLanguage = "cn";
    }
}

Array.from(document.getElementsByClassName('lang')).forEach(element => {
    element.addEventListener('click', switchLanguage);
});

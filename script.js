if(window.innerWidth>1300)
{
    window.addEventListener('scroll', reveal);
    function reveal() {
        var reveals = document.querySelectorAll('.reveal');
        for (var i = 0; i < reveals.length; i++) {
            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
           if(window.innerWidth>1300)
            var revealpoint = 9;
        else
        var revealpoint=0;
            if (revealtop < windowheight - revealpoint) {
                reveals[i].classList.add('active');
            }
            else {
                reveals[i].classList.remove('active');
            }
        }
    }
}
else{
    window.addEventListener('load', reveal);
    function reveal() {
        var reveals = document.querySelectorAll('.reveal');
        for (var i = 0; i < reveals.length; i++) {
            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
           if(window.innerWidth>1300)
            var revealpoint = 9;
        else
        var revealpoint=0;
            if (revealtop < windowheight - revealpoint) {
                reveals[i].classList.add('active');
            }
            else {
                reveals[i].classList.remove('active');
            }
        }
    }
}

const accordionitems = document.querySelectorAll('.accordion-item')
accordionitems.forEach(function (item) {
    const title = item.querySelector('.accordion-title');
    const content = item.querySelector('.accordion-content');
    title.addEventListener('click', () => {
        for (var i = 0; i < accordionitems.length; i++) {
            if (accordionitems[i] != item)
                accordionitems[i].classList.remove('act');
        }
        item.classList.toggle('act');
    })
})

window.addEventListener('scroll', levelshow);
function levelshow() {
    var windowheight = window.innerHeight;
    var standard = 10;
    var levels = document.querySelectorAll('.level');
    for (var i = 0; i < levels.length; i++) {
        var element = levels[i];
        var currentheight = element.getBoundingClientRect().top;
        if (currentheight < windowheight - standard) {
            element.classList.add('present');
        }
    }
}

window.addEventListener('load', function () {
    const dynamic = document.querySelector('.sec-text');
    const lst = [
        "Student",
        "Athlete",
        "Web developer",
        "Coder"
    ]
    var line_number = 0;
    var character_counter = 0;
    var dir = 0;
    setInterval(() => {
        if (line_number > lst.length - 1) {
            line_number = 0;
        }
        let text = lst[line_number];
        if (dir == 0) {
            if (character_counter > text.length - 1) {
                dir = 1;
            } else {
                dynamic.textContent += text[character_counter];
                character_counter++;
            }
        } else {
            if (character_counter < 0) {
                character_counter = 0;
                line_number++;
                dynamic.textContent = "";
                dir = 0;
            } else {
                dynamic.innerHTML = dynamic.textContent.slice(0, character_counter);
                character_counter--;
            }
        }


    }, 100);
});

const know = ["HTML", "CSS", "JS", "C", "C++", "JAVA"];
const titleLabel = document.querySelectorAll(".title");
const highlight = [90, 90, 40, 50, 80, 60];
for (var i = 0; i < know.length; i++) {
    titleLabel[i].innerText = know[i];
}

window.addEventListener('scroll', function () {
    var windowheight = window.innerHeight;
    var standard = 30;
    for (var i = 0; i < know.length; i++) {
        var inner = document.getElementsByClassName("level")[i].getBoundingClientRect().top;
        if (inner < windowheight - standard) {
            var width = document.getElementById('skills');
            document.getElementsByClassName("level")[i].style.width = highlight[i] + "%";
        }
    }
});

var navbar = document.querySelectorAll(".nev > li");
for (let i = 0; i < navbar.length; i++) {
    navbar[i].addEventListener("click", function () {
        for (let idx = 0; idx < navbar.length; idx++) {
            navbar[idx].style.backgroundColor = "white";
        }
        navbar[i].style.backgroundColor = "black";

    });
}
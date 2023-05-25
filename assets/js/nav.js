window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        Array.from(document.querySelectorAll("#nava")).map(e => e.style.color = "#000000");
        document.getElementById("nav").style.background = "#ffffff";
        document.getElementById("nav").style.padding = "20px 0";
        document.getElementById("navimg").style.color = "#000000";
    }
    else {
        Array.from(document.querySelectorAll("#nava")).map(e => e.style.color = "#ffffff");
        Array.from(document.querySelectorAll(".open #nava")).map(e => e.style.color = "#000000");
        document.getElementById("nav").style.background = "transparent";
        document.getElementById("nav").style.padding = "25px 0";
        document.getElementById("navimg").style.color = "#ffffff";
    }
}

$(document).ready(function () {
    $(".toggle").click(function () {
        $(this).toggleClass("open");
        $(".menu").toggleClass("open");
    });

    $("li a").click(function () {
        $("li a").removeClass("active");
        $(this).addClass("active");
    })
});

const form = document.getElementsByTagName("form")[0];
form.addEventListener('submit', () => {
    const body = form.name.value;
    location.href = "mailto:?subject=Query&body=" + body;
    return false;
});

const progressContainer = document.querySelectorAll('.progress-container');

// initial call
setPercentage();

function setPercentage() {
    for (i = 0; i < progressContainer.length; i++) {
        const percentage = progressContainer[i].getAttribute('data-percentage') + '%';

        const progressEl = progressContainer[i].querySelector('.progress');
        const percentageEl = progressContainer[i].querySelector('.percentage');

        progressEl.style.width = percentage;
        percentageEl.innerText = percentage;
        percentageEl.style.left = percentage;
    }
}


function navigatorOn(){
    const nav = document.getElementById("nav");
    nav.style.display = "grid";
}

function navigatorOff(){
    const nav = document.getElementById("nav");
    nav.style.display = "none";
}

// const portfolio = document.getElementById("portfolio");
const ecommerce = document.getElementById("ecommerce");
const social = document.getElementById("social");



function allCate(){
    const btn = document.getElementById("all-btn");

    const ecommerce = document.getElementById("ecommerce");
    const social = document.getElementById("social");

    ecommerce.style.display = "block";
    social.style.display = "block";

    btn.style.backgroundColor = "rgb(0, 14, 53)";
    btn.style.color = "white";

    const ids = ["portfolio-btn", "ecommerce-btn", "social-btn"];

    ids.forEach(id => {
    document.getElementById(id).style.backgroundColor = "white";
    document.getElementById(id).style.color = "rgb(0, 14, 53)";
    });

}

function portfolioCate(){
    const btn = document.getElementById("portfolio-btn");

    portfolio.style.display = "block";

    btn.style.backgroundColor = "rgb(0, 14, 53)";
    btn.style.color = "white";

    const ids = ["all-btn", "ecommerce-btn", "social-btn"];

    ids.forEach(id => {
    document.getElementById(id).style.backgroundColor = "white";
    document.getElementById(id).style.color = "rgb(0, 14, 53)";
    });
}

function ecommerceCate(){
    const btn = document.getElementById("ecommerce-btn");

    const ecommerce = document.getElementById("ecommerce");
    const social = document.getElementById("social");

    social.style.display = "none";
    ecommerce.style.display = "block";

    btn.style.backgroundColor = "rgb(0, 14, 53)";
    btn.style.color = "white";

    const ids = ["portfolio-btn", "all-btn", "social-btn"];

    ids.forEach(id => {
    document.getElementById(id).style.backgroundColor = "white";
    document.getElementById(id).style.color = "rgb(0, 14, 53)";
    });
}

function socialCate(){
    const btn = document.getElementById("social-btn");

    const ecommerce = document.getElementById("ecommerce");
    const social = document.getElementById("social");

    ecommerce.style.display = "none";
    social.style.display = "block";

    btn.style.backgroundColor = "rgb(0, 14, 53)";
    btn.style.color = "white";

    const ids = ["portfolio-btn", "ecommerce-btn", "all-btn"];

    ids.forEach(id => {
    document.getElementById(id).style.backgroundColor = "white";
    document.getElementById(id).style.color = "rgb(0, 14, 53)";
    });
}


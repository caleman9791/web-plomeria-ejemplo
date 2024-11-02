// console.log(document.head);
window.onload = (event) => {
    console.log("page is fully loaded");

    document.title = "Demostración";

    let nombreEnNav = document.querySelector(".navbar-brand span");

    nombreEnNav.textContent = "Demostración";

    let work_sectionText = document.querySelector(".work_section .custom_heading-container h3");
    if (work_sectionText) {
        work_sectionText.textContent = "¿Cómo funiona?";
    }


    let enlaceAboutText = document.querySelectorAll(`[href="about.html]`);

    for (var i = 0; i < enlaceAboutText.length; i++) {
        enlaceAboutText[i].textContent = `Sobre nosotros`;
    }
    // work_sectionText.textContent = "¿Cómo funiona?";
    // about.html
};
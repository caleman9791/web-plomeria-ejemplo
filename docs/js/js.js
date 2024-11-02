// console.log(document.head);
window.onload = (event) => {
    console.log("page is fully loaded");

    document.title = "Demostración";

    let nombreEnNav = document.querySelector(".navbar-brand span");

    if (nombreEnNav) {
        console.log(nombreEnNav);
        nombreEnNav.textContent = "Demostración";
    }

    let work_sectionText = document.querySelector(".work_section .custom_heading-container h3");

    if (work_sectionText != null) {
        console.log(work_sectionText);
        work_sectionText.textContent = "¿Cómo funiona?";
    }

    let enlaceAboutText = document.querySelectorAll(`[href="about.html"]`);

    if (enlaceAboutText) {
        console.log(enlaceAboutText);
        for (var i = 0; i < enlaceAboutText.length; i++) {

            enlaceAboutText[i].textContent = `Sobre nosotros`;
        }

    }

    let enlaceServiceText = document.querySelectorAll(`[href="service.html"]`);

    if (enlaceServiceText) {
        console.log(enlaceServiceText);
        for (var i = 0; i < enlaceServiceText.length; i++) {

            enlaceServiceText[i].textContent = `Servicios`;
        }

    }
    let enlacecontactText = document.querySelectorAll(`[href="contact.html"]`);

    if (enlacecontactText) {

        for (var i = 0; i < enlacecontactText.length; i++) {

            enlacecontactText[i].textContent = `Contactamos`;
        }

    }
    let enlaceinicioText = document.querySelectorAll(`[href="#"]`);

    if (enlaceinicioText) {

        for (var i = 0; i < enlaceinicioText.length; i++) {

            enlaceinicioText[i].textContent = `Inicio`;
        }

    }

    // work_sectionText.textContent = "¿Cómo funiona?";
    // about.html
};
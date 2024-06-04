var swiper1 = new Swiper(".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

var swiper2 = new Swiper(".mySwiper-2", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    }
});

let tabInputs = document.querySelectorAll(".tabInput");

tabInputs.forEach(function(input){
    input.addEventListener('change', function(){
        let id = input.getAttribute('aria-valuemax');
        let thisSwiper = document.getElementById('swiper' + id);
        thisSwiper.swiper.update();
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Validación del Nombre
    const name = document.getElementById('name').value.trim();
    if (name === "") {
        isValid = false;
        document.getElementById('nameError').textContent = "Por favor, ingrese su nombre.";
    } else {
        document.getElementById('nameError').textContent = "";
    }

    // Validación del Correo Electrónico
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        isValid = false;
        document.getElementById('emailError').textContent = "Por favor, ingrese su correo electrónico.";
    } else if (!email.match(emailPattern)) {
        isValid = false;
        document.getElementById('emailError').textContent = "Por favor, ingrese un correo electrónico válido.";
    } else {
        document.getElementById('emailError').textContent = "";
    }

    // Validación del Asunto
    const subject = document.getElementById('subject').value;
    if (subject === "") {
        isValid = false;
        document.getElementById('subjectError').textContent = "Por favor, seleccione un asunto.";
    } else {
        document.getElementById('subjectError').textContent = "";
    }

    // Validación del Mensaje
    const message = document.getElementById('message').value.trim();
    if (message === "") {
        isValid = false;
        document.getElementById('messageError').textContent = "Por favor, ingrese su mensaje.";
    } else {
        document.getElementById('messageError').textContent = "";
    }

    // Mostrar Datos del Formulario
    if (isValid) {
        const formDataDiv = document.getElementById('formData');
        formDataDiv.innerHTML = "";  // Limpiar contenido previo

        const formDataTitle = document.createElement('h3');
        formDataTitle.textContent = "Datos del Formulario";
        formDataDiv.appendChild(formDataTitle);

        const namePara = document.createElement('p');
        namePara.innerHTML = `<strong>Nombre:</strong> ${name}`;
        formDataDiv.appendChild(namePara);

        const emailPara = document.createElement('p');
        emailPara.innerHTML = `<strong>Correo Electrónico:</strong> ${email}`;
        formDataDiv.appendChild(emailPara);

        const subjectPara = document.createElement('p');
        subjectPara.innerHTML = `<strong>Asunto:</strong> ${subject}`;
        formDataDiv.appendChild(subjectPara);

        const messagePara = document.createElement('p');
        messagePara.innerHTML = `<strong>Mensaje:</strong> ${message}`;
        formDataDiv.appendChild(messagePara);
    }
});



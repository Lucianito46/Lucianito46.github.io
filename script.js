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

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    let valid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');

    nameError.textContent = '';
    emailError.textContent = '';
    subjectError.textContent = '';
    messageError.textContent = '';

    // Validar Nombre
    if (name.value.trim() === '') {
        nameError.textContent = 'El nombre es obligatorio.';
        valid = false;
    } else if (name.value.trim().length > 50) {
        nameError.textContent = 'El nombre no puede tener más de 50 caracteres.';
        valid = false;
    }

    // Validar Email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value.trim() === '') {
        emailError.textContent = 'El correo electrónico es obligatorio.';
        valid = false;
    } else if (!email.value.match(emailPattern)) {
        emailError.textContent = 'Por favor, introduzca un correo electrónico válido.';
        valid = false;
    }

    // Validar Asunto
    if (subject.value === '') {
        subjectError.textContent = 'El asunto es obligatorio.';
        valid = false;
    }

    // Validar Mensaje
    if (message.value.trim() === '') {
        messageError.textContent = 'El mensaje es obligatorio.';
        valid = false;
    } else if (message.value.trim().length > 500) {
        messageError.textContent = 'El mensaje no puede tener más de 500 caracteres.';
        valid = false;
    }

    if (valid) {
        const formData = document.getElementById('formData');
        formData.innerHTML = `
            <h3>Datos Enviados</h3>
            <p><strong>Nombre:</strong> ${name.value}</p>
            <p><strong>Correo Electrónico:</strong> ${email.value}</p>
            <p><strong>Asunto:</strong> ${subject.value}</p>
            <p><strong>Mensaje:</strong> ${message.value}</p>
        `;

        // Limpiar formulario
        name.value = '';
        email.value = '';
        subject.value = '';
        message.value = '';
    }
});


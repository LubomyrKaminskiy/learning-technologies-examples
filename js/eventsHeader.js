window.addEventListener('DOMContentLoaded', () => {
    const btnLanding = document.querySelector('#goto-landing');

    btnLanding.addEventListener('click', () => {
        window.location.href = 'http://127.0.0.1:5500/landing.html';
    });

});

//window.location.href='../landing.html'
document.querySelector('#btn-action').addEventListener('click', function () {
    let card = document.querySelector('.material-card');
    let icon = document.childNodes[1];
    icon.classList.add('fa-spin-fast');

    if (card.className('mc-active')) {
        card.classList.remove('mc-active');
        setTimeout(function () {
            icon.classList.remove('fa-arrow-left');
            icon.classList.remove('fa-spin-fast');
            icon.classList.add('fa-bars');
        }, 800);
    } else {
        card.classList.add('mc-active');
        setTimeout(function () {
            icon.classList.remove('fa-bars');
            icon.classList.remove('fa-spin-fast');
            icon.classList.add('fa-arrow-left');
        }, 800);
    }
});

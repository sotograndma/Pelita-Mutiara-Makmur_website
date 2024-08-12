function scrollToSection() {
    document.getElementById('tipe_unit').scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar-custom');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

function showImage(src) {
    document.getElementById('modalImage').src = src;
}

window.addEventListener('scroll', function() {
    var element = document.querySelector('#kelebihan');
    var position = element.getBoundingClientRect();

    if (position.top >= 0 && position.bottom <= window.innerHeight) {
        element.classList.add('visible');
        element.classList.remove('hidden');
    }
    else if (position.bottom < 0 || position.top > window.innerHeight) {
        element.classList.add('hidden');
        element.classList.remove('visible');
    }
});

window.addEventListener('scroll', function() {
    var element = document.querySelector('#gallery');
    var position = element.getBoundingClientRect();

    if (position.top >= 0 && position.bottom <= window.innerHeight) {
        element.classList.add('visible');
        element.classList.remove('hidden');
    }
    else if (position.bottom < 0 || position.top > window.innerHeight) {
        element.classList.add('hidden');
        element.classList.remove('visible');
    }
});

window.addEventListener('scroll', function() {
    var element = document.querySelector('#aboutus');
    var position = element.getBoundingClientRect();

    if (position.top >= 0 && position.bottom <= window.innerHeight) {
        element.classList.add('visible');
        element.classList.remove('hidden');
    }
    else if (position.bottom < 0 || position.top > window.innerHeight) {
        element.classList.add('hidden');
        element.classList.remove('visible');
    }
});

// window.addEventListener('scroll', function() {
//     var element = document.querySelector('#tipe_unit1');
//     var position = element.getBoundingClientRect();

//     if (position.top >= 0 && position.bottom <= window.innerHeight) {
//         element.classList.add('visible');
//         element.classList.remove('hidden');
//     }
//     else if (position.bottom < 0 || position.top > window.innerHeight) {
//         element.classList.add('hidden');
//         element.classList.remove('visible');
//     }
// });

// window.addEventListener('scroll', function() {
//     var element = document.querySelector('#tipe_unit2');
//     var position = element.getBoundingClientRect();

//     if (position.top >= 0 && position.bottom <= window.innerHeight) {
//         element.classList.add('visible_tp2');
//         element.classList.remove('hidden_tp2');
//     }
//     else if (position.bottom < 0 || position.top > window.innerHeight) {
//         element.classList.add('hidden_tp2');
//         element.classList.remove('visible_tp2');
//     }
// });

// window.addEventListener('scroll', function() {
//     var element = document.querySelector('#fasilitas1');
//     var position = element.getBoundingClientRect();

//     if (position.top >= 0 && position.bottom <= window.innerHeight) {
//         element.classList.add('visible');
//         element.classList.remove('hidden');
//     }
//     else if (position.bottom < 0 || position.top > window.innerHeight) {
//         element.classList.add('hidden');
//         element.classList.remove('visible');
//     }
// });

// window.addEventListener('scroll', function() {
//     var element = document.querySelector('#fasilitas2');
//     var position = element.getBoundingClientRect();

//     if (position.top >= 0 && position.bottom <= window.innerHeight) {
//         element.classList.add('visible_tp2');
//         element.classList.remove('hidden_tp2');
//     }
//     else if (position.bottom < 0 || position.top > window.innerHeight) {
//         element.classList.add('hidden_tp2');
//         element.classList.remove('visible_tp2');
//     }
// });




$(document).ready(function() {
    // Smooth scrolling for navigation
    $('nav ul li a').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 60 // Adjust for fixed header
        }, 1000);
    });

    



    // Hover effect on project cards
    $('.project').on('mouseenter', function() {
        $(this).animate({ 'margin-top': '-10px' }, 200);
    }).on('mouseleave', function() {
        $(this).animate({ 'margin-top': '0' }, 200);
    });

    // Form submission (dummy)
    $('form').submit(function(e) {
        e.preventDefault();
        alert('Form submitted!');
    });


});

$('.navButton').on('mouseover', function() {
    $(this).addClass('highlight');
}).on('mouseout', function() {
    $(this).removeClass('highlight');
});

document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button-right');
    const prevButton = document.querySelector('.carousel-button-left');

    let currentSlide = 0;

    const updateSlidePosition = () => {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = 'translateX(' + (-slideWidth * currentSlide) + 'px)';
    };

    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlidePosition();
    });

    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlidePosition();
    });

    // Initial slide position
    updateSlidePosition();
});
document.addEventListener('DOMContentLoaded', function() {
    // First function
    const words = document.querySelectorAll('h1 span');
    words.forEach((word, index) => {
        setTimeout(() => {
            word.classList.add('highlight-word');
        }, index * 500); // Adjust the delay as needed (500ms here)
    });

    // Calculate total duration of the first function
    const firstFunctionDuration = words.length * 500;

    // Delay before the second function
    setTimeout(() => {
        const highlightWords = document.querySelectorAll('.design, .meditate, .workout, .write');
        highlightWords.forEach((word, index) => {
            setTimeout(() => {
                word.classList.add('highlight');
            }, index * 500); // Adjust the delay as needed (1000ms here)
        });
    }, firstFunctionDuration + 1000); // Total delay time of first function + 1 second additional delay
}, false);

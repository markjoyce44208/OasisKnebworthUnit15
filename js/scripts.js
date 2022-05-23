let slideIndex = 0;
      showSlides();
      
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide-content");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000);
    }

function togglePlay() {
    var audio = document.getElementById("audio");
    return audio.paused ? audio.play() : audio.pause();
    }

function togglePlay2() {
    var audio = document.getElementById("audio2");
    return audio.paused ? audio.play() : audio.pause();
    }

function togglePlay3() {
    var audio = document.getElementById("audio3");
    return audio.paused ? audio.play() : audio.pause();
    }

function togglePlay4() {
    var audio = document.getElementById("audio4");
    return audio.paused ? audio.play() : audio.pause();
    }

function togglePlay5() {
    var audio = document.getElementById("audio5");
    return audio.paused ? audio.play() : audio.pause();
    }
// WINDOW RESIZING H1 
window.addEventListener('resize', resize);

function resize() {
    const spanH1 = document.querySelector('.header__heading');
    if (window.innerWidth > 1000) {
    spanH1.setAttribute("style", "display:none");   
        
    } else if (window.innerWidth < 1000) {
        spanH1.setAttribute("style", "display:block");  
    }

}

// Show more of Gallery pictures
const secondGallery = document.getElementById('second-gallery');
const showMoreBtn = document.getElementById('show-more');
const galleryItems = document.querySelectorAll('.gallery-2, .gallery__item');

showMoreBtn.addEventListener('click', ()=> {
    console.log('show more of gallery');
    if (secondGallery.style.display === "none" || secondGallery.style.display === "") {
        secondGallery.style.display = "grid";
        showMoreBtn.textContent = "Show less...";
                     
    } else {
        secondGallery.style.display = "none";
        showMoreBtn.textContent = "Show more..."
    }
    
})



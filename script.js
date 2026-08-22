// section images
const sectionImages = document.querySelectorAll('section-img');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('fade')) {
            entry.target.classList.add('fade'); 
            observer.unobserve(entry.target);
        }   
    });
})

sectionImages.forEach(img => {
    observer.observe(img);
}); 


// header slideshow
const slideshowImages = document.querySelectorAll('.slideshow-img');


const modal = document.getElementById("modal");
const modalBackground = document.getElementById("modal-background");

const headers = document.getElementsByClassName('header');
const galleries = document.getElementsByClassName('gallery');


Array.from(headers).map(header => {
    header.onclick = function() {
        const galleryId = `gallery-${header.getAttribute('id').split('-')[1]}`;
        const gallery = document.getElementById(galleryId);
        
        console.log('clicked header');
        console.log(galleryId);
        
        if (gallery.classList.contains('gallery-expand')) {
            gallery.classList.remove('gallery-expand');
        }
        else {
            Array.from(galleries).forEach((otherGallery) => {
                otherGallery.classList.remove('gallery-expand');
                console.log('removing gallery-expand to ' + otherGallery.getAttribute('id'));
            });
            if (!gallery.classList.contains('gallery-expand')) {
                console.log('adding gallery-expand to ' + gallery.getAttribute('id'));
                gallery.classList.add('gallery-expand');
            }
        }
    }
});

Array.from(document.getElementsByClassName('card')).map(card => {
    const youtubeId = card.getAttribute('youtube-id');
    
    // When the user clicks the button, open the modal
    card.onclick = function() {
        modalBackground.style.display = "block";
        modal.style.display = "block";
        const iframe = document.createElement('iframe');
        iframe.id = 'youtube-iframe';
        iframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1`;
        iframe.frameborder = '0';
        iframe.width = '99%';
        iframe.height = '98%';
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.referrerpolicy='strict-origin-when-cross-origin';
        iframe.allowfullscreen = true;
        modal.appendChild(iframe);
    }
});

modalBackground.onclick = function() {
  modalBackground.style.display = "none";
  modal.style.display = "none";
  document.getElementById('youtube-iframe').remove();
  
}

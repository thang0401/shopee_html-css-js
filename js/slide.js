
const imgItems = document.querySelectorAll('.img-item');
const showcaseMedia = document.querySelectorAll('.img-showcase img, .img-showcase video');

imgItems.forEach(item => {
  item.addEventListener('click', event => {
    const id = event.currentTarget.querySelector('a').dataset.id;
    showcaseMedia.forEach(media => {
      if (media.src.includes(`ip${id}`)) {
        media.style.display = 'block';
      } else {
        media.style.display = 'none';
      }
    });
  });
});


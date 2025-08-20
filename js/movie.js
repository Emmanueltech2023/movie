document.getElementById('logoutBtn').addEventListener('click', function() {
  window.location.href = 'index.html';
});

// Utility: Convert YouTube links to embed format
function convertToEmbed(url) {
  if (!url) return "";
  url = url.trim();
  if (url.includes("youtu.be")) {
    let videoId = url.split("youtu.be/")[1].split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  } else if (url.includes("watch?v=")) {
    let videoId = url.split("watch?v=")[1].split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return url.replace(/\s+/g, ''); // Remove spaces
}

// Main logic for both .movie-card and .car
document.querySelectorAll('.movie-card, .car').forEach(card => {
  const watchBtn = card.querySelector('.watch-btn') || card.querySelector('.play-btn');
  const backBtn = card.querySelector('.back-btn');
  const img = card.querySelector('.movie-img');
  const iframe = card.querySelector('.movie-video');

  if (iframe) iframe.style.display = 'none';
  if (backBtn) backBtn.style.display = 'none';
  if (watchBtn) watchBtn.style.display = 'inline-block';
  if (img) img.style.display = 'block';

  if (watchBtn) {
    watchBtn.addEventListener('click', () => {
      if (img) img.style.display = 'none';
      if (iframe) {
        let videoUrl = watchBtn.getAttribute('data-link') || (img && img.getAttribute('data-video'));
        iframe.src = convertToEmbed(videoUrl) + "?autoplay=1";
        iframe.style.display = 'block';
        iframe.classList.add('large');


      }
      if (backBtn) backBtn.style.display = 'inline-block';
      watchBtn.style.display = 'none';
    });
  }

  if (backBtn) {
    backBtn.addEventListener('click', () => {
      if (img) img.style.display = 'block';
      if (iframe) {
        iframe.src = '';
        iframe.style.display = 'none';
        iframe.classList.add('large'); 
      }
      backBtn.style.display = 'none';
      if (watchBtn) watchBtn.style.display = 'inline-block';
    });
  }
});


const searchBar = document.getElementById('search-bar');
if (searchBar) {
  searchBar.addEventListener('input', function() {
    const query = searchBar.value.toLowerCase();
    document.querySelectorAll('.movie-card, .car').forEach(card => {
      const title = card.querySelector('p') ? card.querySelector('p').textContent.toLowerCase() : '';
      if (title.includes(query)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
}


document.addEventListener('DOMContentLoaded', function() {
  var carousel = document.getElementById('demo');
  var bsCarousel = bootstrap.Carousel.getOrCreateInstance(carousel);

  document.querySelectorAll('.carousel-play-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      bsCarousel.pause();
      // Optionally, autoplay the video by adding ?autoplay=1 to the iframe src
      var iframe = btn.parentElement.querySelector('iframe');
      if (iframe && !iframe.src.includes('autoplay=1')) {
        iframe.src += (iframe.src.includes('?') ? '&' : '?') + 'autoplay=1';
      }
      btn.style.display = 'none'; // Hide play button after click
    });
  });
});
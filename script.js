// Wait for the document to load before running the script 
(function ($) {
  // We use some Javascript and the URL #fragment to hide/show different parts of the page
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Linking_to_an_element_on_the_same_page
  $(window).on('load hashchange', function(){
    
    // First hide all content regions, then show the content-region specified in the URL hash 
    // (or if no hash URL is found, default to first menu item)
    $('.content-region').hide();
    
    // Remove any active classes on the main-menu
    $('.main-menu a').removeClass('active');
    var region = location.hash.toString() || $('.main-menu a:first').attr('href');
    
    // Now show the region specified in the URL hash
    $(region).show();
    
    // Highlight the menu link associated with this region by adding the .active CSS class
    $('.main-menu a[href="'+ region +'"]').addClass('active'); 

    // Alternate method: Use AJAX to load the contents of an external file into a div based on URL fragment
    // This will extract the region name from URL hash, and then load [region].html into the main #content div
    // var region = location.hash.toString() || '#first';
    // $('#content').load(region.slice(1) + '.html')
    
  });
  
})(jQuery);

//all of the above is some template junk


function loadPagePls() {
  const container = document.getElementById('textStuff');
  container.classList.add('slide-in');
}

document.addEventListener('DOMContentLoaded', ()=>{
  const dvd = document.getElementById('dvd');
  const textStuff = document.getElementById('textStuff');
  
  let x = 0;
  let y = 0;
  let dx = 2;
  let dy = 2;
  let colorIndex = 0; // Index to track color changes

  function animateDVD() {
      x += dx;
      y += dy;

      textStuff.style.marginLeft = '0px';

      const maxX = window.innerWidth - dvd.clientWidth;
      const maxY = window.innerHeight - dvd.clientHeight;

      if (x >= maxX || x <= 0) {
          dx = -dx + ((Math.random()*2)-1);
          dy = dy + ((Math.random()*2)-1);
          changeColor();
      }
      if (y >= maxY || y <= 0) {
          dx = dx + ((Math.random()*2)-1);
          dy = -dy + ((Math.random()*2)-1);
          changeColor();
      }

      dvd.style.left = x + 'px';
      dvd.style.top = y + 'px';

      requestAnimationFrame(animateDVD);
  }

  function changeColor() {
      const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#800000', '#008000', '#000080', '#808000', '#800080', '#008080', '#c0c0c0', '#808080', '#800000', '#ff0000', '#800080', '#ff00ff', '#000080', '#0000ff', '#00ffff', '#008080', '#00ff00', '#008000', '#808000', '#ffff00', '#808080', '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#800000', '#808000', '#800080', '#008000', '#008080', '#000080']; // Example colors, add more as needed
      colorIndex = Math.floor(Math.random() * colors.length);
      dvd.style.filter = `brightness(100%) hue-rotate(${colorIndex * (360 / colors.length)}deg)`;
      textStuff.style.marginLeft = '1%';
  }

  animateDVD();

  document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    loadPagePls();
  });
});

function enterButtonClicked() {
  var audio = new Audio('https://cdn.onlypuppy7.online/music.m4a');
  audio.play();
};

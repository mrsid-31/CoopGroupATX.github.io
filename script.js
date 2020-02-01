function loading(tf) {

if(tf == true) {
  document.getElementById("loading-text").innerHTML = 'Loading...';
  document.getElementById("content").style.display = 'none';
} else if (tf == false) {
    document.getElementById("loading-text").innerHTML = 'Loading Complete';
    $('#loading').fadeOut();
    $('#content').fadeIn();    
  }
}
loading(true);
setTimeout( function() {
loading(false);
/* do something or nothing; this waits for a second because 1000 milliseconds have been passed */
}, 1500);
$(document).ready(function() {
  $('video').on('click', function(ev) {
 
    $("#video")[0].src += "&autoplay=1";
    ev.preventDefault();
 
  });
});


var video = document.getElementById("video");
video.addEventListener("timeupdate", function(){
// Check you time here and
if(t === 300000) //Where t = CurrentTime
{
video.stop();// Stop the Video
}
});

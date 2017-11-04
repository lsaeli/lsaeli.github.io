

var pusheens =
["http://78.media.tumblr.com/e988477ba6c7bc54753e2d90bd0c562e/tumblr_oxbgebN7Wh1qhy6c9o1_500.gif",
"http://78.media.tumblr.com/dd5e8befeeb5a338aef52722d780009c/tumblr_owum6vsKMa1qhy6c9o1_500.gif",
"http://78.media.tumblr.com/772768d1dc4b7323e8b832c332376db7/tumblr_owum4iIfQ51qhy6c9o1_500.gif", 
"http://78.media.tumblr.com/7209d1a872ef99567e145e60ccb5a016/tumblr_owad86l5us1qhy6c9o1_500.gif",
"",
"",]

 var i = 0
  function updateCats(){

      i = i + 1;
      console.log(i)
      var url = 'url(' + pusheens[i] + ')';

  document.getElementById('image-format').style.backgroundImage=url;

  }
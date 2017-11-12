var cats =
["http://78.media.tumblr.com/e988477ba6c7bc54753e2d90bd0c562e/tumblr_oxbgebN7Wh1qhy6c9o1_500.gif",
"https://sociorocketnewsen.files.wordpress.com/2015/09/7.png",
"https://i.ytimg.com/vi/VuUcS9qesBg/maxresdefault.jpg", 
"https://goodlucksymbols.com/wp-content/uploads/2014/06/Maneki-Neko.png",
"http://s3.amazonaws.com/99whiskers/wp-content/uploads/2016/11/15181027/Grumpy-Cat1.jpg",
"http://www.ancientegyptianfacts.com/AncientEgyptianPictures/ancient-egypt-bastet.jpg",
"http://1.bp.blogspot.com/-D_haOLE336c/TcheV6gW6nI/AAAAAAAAApk/7MH_NVFVsOs/s1600/Goddess+Ceridwen+SM+bz-mcer.jpg",
"https://playfulkitty.files.wordpress.com/2014/01/cats-in-china-asian-antiquites-com.jpg",
"https://i.pinimg.com/736x/92/1c/eb/921cebd7f8a798213a4f5ce2ed5f8d41--asian-cat-cat-face.jpg",
"https://i.pinimg.com/originals/87/37/c9/8737c96ac8dd77c929a3090b4abaf989.jpg",
"http://www.catster.com/wp-content/uploads/2017/06/Egyptian-cat-god-statue.jpg",
"http://pm1.narvii.com/6442/f0b7597690d10da4e708c3147c1d90650e61aa50_hq.jpg",
"http://www.muslimheritage.com/uploads/ottoman_cat_miniature.JPG",
"http://1.bp.blogspot.com/-CzqzzBV2tMk/TxBM3ar18MI/AAAAAAAAPm0/6faLPO9BM8w/s1600/i-can-has-cheezburger.jpg",
"http://www.ancient-origins.net/sites/default/files/field/image/Japanese-Bakeneko.jpg",
"https://i.pinimg.com/736x/18/5f/ed/185fed1cf6ff8861e370f81d4924de3e--the-cathedral-medieval-art.jpg",
"https://www.ferrersford.co.uk/wp-content/uploads/2017/08/c6e63390024e5c3f808b3ace8f68a9b0-cats-in-ancient-egypt-egypt-cat.jpg",
"http://www.celticvalleyceramics.com/wp/wp-content/uploads/2016/09/celtic-cats-clock-etsy-300x300.jpg",
"https://upload.wikimedia.org/wikipedia/commons/a/ac/Kuniyoshi_Ume_no_haru_gojusantsugi.jpg",
"https://i.imgur.com/RFTluoi.jpg",
"https://i.pinimg.com/originals/4c/76/9f/4c769f82f44f4dbbd6dee593cba4d2da.jpg",
"https://i.amz.mshcdn.com/TUGnCLIUndmH2H1WOP2VGgfDmq4=/fit-in/850x850/http%3A%2F%2Fmashable.com%2Fwp-content%2Fgallery%2Fcatmemes%2FKeyboardCat.gif",
"http://www.bohemiancats.com/static/images/tarot-deck/majors/c_hierophant.jpg",
"https://i.pinimg.com/originals/2f/09/43/2f09434b662b578bb3d2d296bbcad40c.jpg",
"https://i.pinimg.com/736x/dc/5c/c4/dc5cc48989dea271adc1213decb96b26--korean-mythology-body-board.jpg",
"http://www.kzn.ru/old/upload/wysiwyg/116644.jpg",
"https://i.pinimg.com/736x/04/96/f3/0496f3724f3577c467c569c0030ad7e2--skull-art-sugar-skulls.jpg",
"https://i.pinimg.com/736x/a4/6d/ea/a46dea0658bde4efb76e1bcf6569f736--chinese-mythology-yokai-mythology.jpg",
"https://cbsnews3.cbsistatic.com/hub/i/r/2012/02/06/1feb58ce-a644-11e2-a3f0-029118418759/resize/620x465/11f78f4f632a705d9331cab5420de466/breading-cats-025.jpg",
"https://media0dk-a.akamaihd.net/80/23/0e0263c953d807a999de6210bd14eee7.gif",
"http://media3.giphy.com/media/sIIhZliB2McAo/giphy.gif",
"https://i.pinimg.com/736x/d6/9c/89/d69c896dd1ec8b138851300efa2b8f18--loki-thor.jpg",

"https://i.pinimg.com/originals/02/5e/85/025e850f0ad2eacaecc4bad2d6f58129.png",
"https://c.pxhere.com/photos/30/23/belgium_bruges_middle_ages_romantic_historically_facade_building_architecture-962764.jpg!d",
"http://2.bp.blogspot.com/-DmdRgI3klkw/VA4zcAQ3zlI/AAAAAAAABrc/e-_4T_Xdu9U/s1600/cheshire-cat-and-alice.jpg",
"https://i.imgflip.com/1ih4qs.jpg",
];

console.log(cats.length);

var index = 0;

var image = document.getElementById("main");
image.src = cats[0];
function show_image(direction)
{
  if (direction == "left")
  {
    index--;
  }
  else
  {
    index++;
    index %= cats.length;
  }
  
  if (index < 0)
  {
    index = cats.length - 1;
  }
  
  image.src = cats[index];
}



function genFact() {
  var randNum = Math.floor(Math.random() * 11) + 1;
  document.getElementById('fact').innerHTML = facts[randNum];
}
fact
//fact array
var facts = ["Blank", 
"Norway<br><br>The Norwegian Forest Cat plays an important role in Norse Mythology.\ The main (folk tale) goes back to norse mythology, Freya rode around in her sled that was pulled by two large white cats that were so huge that Thor couldn't pick them up and the Norwegian people claim that those were Norwegian Forest Cats.",
 "Thailand<br><br>The Tamra Maew or Cat Book of Poems (circa 1350-1767) describes 17 different varieties of cats.\ Cats were used as part of a ceremony involving a newborn baby.\ There are ceremonies when a new baby is accepted into the household. There is a little ceremony and they use a gourd, a rock and a cat and the idea is being they want their child to grow up wise as the cat, as hard as the stone and as cool (level headed) as the gourd. It would be the equivalent of christening.",
  "Japan<br><br>There is Japanese folklore belief that cats can be the possessors of other peoples souls.\ In Japanese folklore a cat born with a special black mark on its back is a cat that holds the spirit of ones ancestors. The mark is supposed resemble a women's Kimono and is called a Kimono cat. These cats were often taken to temples for protection.",
   "Egypt<br><br>We know from the (Greek Historian) Herodotus that people were very sensitive about their cats, he reports that a Roman soldier that killed a cat was stoned to death by the angry Egyptians and there are records that families would shave off their eyebrows in morning, that was done when a cat died in some households. Cats were mummified when they died so that they would be able to accompany their owners in the afterlife. If your cat had died you had it mummified, and you took it there to be buried in the sacred temple. Many animals were worshipped in ancient Egypt, but no other animal was so universally cherished as the cat.",
    "Christianity (Church of Narzarene)<br><br>In “The Gospel of the Holy Twelve” there are two stories concerning Jesus and cats in Lection 24 and 34. <br><br>Jesus saw a crowd of idlers tormenting a cat. He commanded them to desist, but they reviled him. Then he made a whip of knotted cords and drove them away, saying they made the Earth into the lowest hell with their deeds of violence and cruelty.\"<br><small>-The Gospel of the Holy Twelve – Lection 24</em></small><br><br>\"When Jesus entered a village, he saw a young cat who was hungry and cried unto him, and he took her in, and entered into the village where gave the cat food and water. Jesus gave her unto one of his disciples, Lorenza, and she took care of her.  People acknowledged this and said he cared for all creatures. These are your fellow creatures of the great Household of God, yea, they are your brethren and sisters, having the same breath of life in the Eternal.\"<br><small>-The Gospel of the Holy Twelve, Lection 34<small>",
     "Celtic Mythology<br><br>The Welsh goddess of wisdom, Ceridwen, was the mother of the famous bard Taliesin. Her attendants were white cats who carried out her orders worldwide.",
      "China<br><br>The Chinese Book of Rites tells the story of the Chinese cat god, Li Shou, whom farmers worshipped to protect their crops from rats and mice.",
       "Mochican (pre-Incan civilization of Peru)<br><br>In the Mochican, pre-Incan civilization of Peru, the god, Ai-Apaec, was said to have evolved from an ancient cat god and could transform into a cat. Unlike all of the other traditions of being a goddess, Ai-Apaec took on the male form. He was usually depicted as an old man, whose wrinkled face and long fangs were complimented by long, cat-like whiskers.",
         "Poland<br><br>Ovinnik was an ancient Polish god who first appeared as a black cat. Ovinnik was worshipped by farming families with the hope that their animals would be protected and evil ghosts and fairies would be thwarted.",
          "Islam<br><br>In Islam, cats are well respected for their cleanliness and are believed to seek out those who pray. Food that cats sample is considered halal, and water from which cats drink is allowed for the cleansing ritual, wudu. One tradition suggests that a cat owned by Muhammad’s friend, Abu Hurairah, saved him from being bitten by a snake. In response, Muhammad stroked the cat’s back and forehead, and bestowed on all cats the righting reflex ability. Some  believe that the striped marks on cats’ heads indicate Muhammad’s finger strokes.",
           "Greece<br><br>Ovid recounts the tale of Galinthias, one of the servants of Princess Alcmene (the mother of Heracles/Hercules and wife of Amphitryon). Zeus disguised himself as Amphitryon and made Alcmene pregnant. This made Hera (the wife of Zeus) very angry and she resolved to prevent the birth. However, Galinthias played a trick on Hera which enabled Alcmene to successfully give birth to Heracles. Hera was furious and took her revenge on Galinthias by turning her into a cat and sending her to the underworld to act as a priestess of Hecate (who was the goddess of death and queen of witches)."];


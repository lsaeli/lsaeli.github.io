var cats =
["http://78.media.tumblr.com/e988477ba6c7bc54753e2d90bd0c562e/tumblr_oxbgebN7Wh1qhy6c9o1_500.gif",
"http://78.media.tumblr.com/dd5e8befeeb5a338aef52722d780009c/tumblr_owum6vsKMa1qhy6c9o1_500.gif",
"http://78.media.tumblr.com/772768d1dc4b7323e8b832c332376db7/tumblr_owum4iIfQ51qhy6c9o1_500.gif", 
"http://78.media.tumblr.com/7209d1a872ef99567e145e60ccb5a016/tumblr_owad86l5us1qhy6c9o1_500.gif",
"http://78.media.tumblr.com/7b9ceec146cf00ef7980781d5cf346dd/tumblr_ovk1vvtE7p1qhy6c9o1_500.gif",
"http://78.media.tumblr.com/1f528d84456e15181b0400d78b2a7aec/tumblr_ov25zdTv0L1qhy6c9o1_500.gif",
"http://78.media.tumblr.com/ff9287842f26cd9993b8151736992244/tumblr_osj6r9gFH21qhy6c9o1_500.gif",
"http://78.media.tumblr.com/fcf9dd8ef268587c00e18fd41fed708c/tumblr_orlgxzDlMt1qhy6c9o1_500.gif",
"http://78.media.tumblr.com/2cdb871b052faf748c63decd0108f8f2/tumblr_oytb95Z2c31qhy6c9o1_500.gif",
"http://78.media.tumblr.com/548cfa1622853c30207245c3214df098/tumblr_oq7r3quYsh1qhy6c9o1_500.gif",
"http://78.media.tumblr.com/2c05bccd7e1c9353966e4095dc5caf1b/tumblr_ootmmjLVYj1qhy6c9o1_500.gif",
"http://78.media.tumblr.com/835d88c88c778fa6b927c14e36505ab6/tumblr_omxp1l6ezb1qhy6c9o1_500.gif",
"http://78.media.tumblr.com/1db77599ef5c1880983d57cd782eaac2/tumblr_oldo70fNxQ1qhy6c9o1_500.gif",
"http://78.media.tumblr.com/894891ecaa1a9fdba40fb95440c60d6c/tumblr_oilmp1MzxB1qhy6c9o1_500.gif",
"http://78.media.tumblr.com/defa6e14a8f10ed0608bc6d7e20690b8/tumblr_oiihuddp6O1qhy6c9o1_500.gif",
"http://78.media.tumblr.com/6c7c8e8f0d4c1d269b3f6b7dde075076/tumblr_o8zbqmYN751qhy6c9o1_500.gif",
"http://78.media.tumblr.com/ec8bb434b97ed2e02a56579ca1606a53/tumblr_o09d7vVOI01qhy6c9o1_500.gif",
"http://78.media.tumblr.com/bc243c440636ef8217ae784d14e01444/tumblr_nsktwmmPYl1qhy6c9o2_r1_500.gif",
"http://78.media.tumblr.com/8f052f0f3d69d850bcc8408a6593d6b3/tumblr_noh1py87PU1qhy6c9o1_r1_500.gif",
"http://78.media.tumblr.com/fe950f8fb8447772004aaabdb7f0ec98/tumblr_nnpi3a8HZv1qhy6c9o1_r1_500.gif",
"http://78.media.tumblr.com/f6626d8e97b785408aec4a4522bd0859/tumblr_nfgvj6HovJ1qhy6c9o1_500.gif",
"http://78.media.tumblr.com/9127dd3d21a564a0ac99aa1afe122821/tumblr_n61y67vsve1qhy6c9o1_500.gif",
"http://78.media.tumblr.com/tumblr_lo3t4lbp7i1qhy6c9o1_400.gif",
"http://78.media.tumblr.com/25f09ad6ca2fc491243edc9de9d8a5fd/tumblr_mr8g3qfpr91qhy6c9o1_500.gif",
"http://78.media.tumblr.com/0ee77d7f0c4209c7fd27ddc0b7ad6210/tumblr_mpuyyl9Gc61qhy6c9o1_500.gif",
"http://78.media.tumblr.com/0e45d594824869289b50a27f9608a53e/tumblr_mo213hbkqR1qhy6c9o1_500.gif",
"http://78.media.tumblr.com/28de0c1b3677f6b68f738396c3ff8d3e/tumblr_mgw60z8RfW1qhy6c9o1_500.gif",
"http://78.media.tumblr.com/tumblr_mdv6yo02p01qhy6c9o3_250.gif",
"http://78.media.tumblr.com/tumblr_mdm6qooSbx1qhy6c9o1_500.gif",
"http://78.media.tumblr.com/tumblr_lpzuvgnDls1qhy6c9o1_400.gif",
"http://78.media.tumblr.com/tumblr_lqz4lrnVSZ1qhy6c9o1_r1_400.gif",
"http://78.media.tumblr.com/tumblr_m1bfxm5lOz1qlhvfoo1_400.gif",
"http://78.media.tumblr.com/tumblr_mbfumzh9Ng1qhy6c9o1_500.gif",
"http://78.media.tumblr.com/tumblr_m1dbwupilq1qhy6c9o2_500.gif",
"http://78.media.tumblr.com/tumblr_llxxy2spSu1qhy6c9o1_400.gif",
"http://78.media.tumblr.com/tumblr_mdv6yo02p01qhy6c9o2_250.gif",
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
  document.getElementById('fact').innerHTML = quotes[randNum];
}
fact
//quote array
var quotes = ["Blank", 
"Norway<br><br>The Norwegian Forest Cat plays an important role in Norse Mythology.\ The main (folk tale) goes back to norse mythology, Freya rode around in her sled that was pulled by two large white cats that were so huge that Thor couldn't pick them up and the Norwegian people claim that those were Norwegian Forest Cats.",
 "Thailand<br><br>The Tamra Maew or Cat Book of Poems (circa 1350-1767) describes 17 different varieties of cats.\ Cats were used as part of a ceremony involving a newborn baby.\ There are ceremonies when a new baby is accepted into the household. There is a little ceremony and they use a gourd, a rock and a cat and the idea is being they want their child to grow up wise as the cat, as hard as the stone and as cool (level headed) as the gourd. It would be the equivalent of christening.",
  "Japan<br><br>There is Japanese folklore belief that cats can be the possessors of other peoples souls.\In Japanese folklore a cat born with a special black mark on its back is a cat that holds the spirit of ones ancestors. The mark is supposed resemble a women's Kimono and is called a Kimono cat. These cats were often taken to temples for protection.",
   "Egypt<br><br>We know from the (Greek Historian) Herodotus that people were very sensitive about their cats, he reports that a Roman soldier that killed a cat was stoned to death by the angry Egyptians and there are records that families would shave off their eyebrows in morning, that was done when a cat died in some households. Cats were mummified when they died so that they would be able to accompany their owners in the afterlife. If your cat had died you had it mummified, and you took it there to be buried in the sacred temple. Many animals were worshipped in ancient Egypt, but no other animal was so universally cherished as the cat.",
    "Christianity (Church of Narzarene)<br><br>In “The Gospel of the Holy Twelve” there are two stories concerning Jesus and cats in Lection 24 and 34. <br><br>Jesus saw a crowd of idlers tormenting a cat. He commanded them to desist, but they reviled him. Then he made a whip of knotted cords and drove them away, saying they made the Earth into the lowest hell with their deeds of violence and cruelty.\"<br><small>-The Gospel of the Holy Twelve – Lection 24</em></small><br><br>\"When Jesus entered a village, he saw a young cat who was hungry and cried unto him, and he took her in, and entered into the village where gave the cat food and water. Jesus gave her unto one of his disciples, Lorenza, and she took care of her.  People acknowledged this and said he cared for all creatures. These are your fellow creatures of the great Household of God, yea, they are your brethren and sisters, having the same breath of life in the Eternal.\"<br><small>-The Gospel of the Holy Twelve, Lection 34<small>",
     "\"Never give up, for that is just the place and time that the tide will turn.\"<br>- Harriet Beecher Stowe",
      "\"I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.\"<br>- Muhammad Ali",
       "\"If you always put limit on everything you do.\"<br>- Bruce Lee",
         "\"Never give up, for that is just the place and time that the tide will turn.\"<br>- Harriet Beecher Stowe",
          "\"I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.\"<br>- Muhammad Ali",
           "\"If you always put limit on everything you do.\"<br>- Bruce Lee",];


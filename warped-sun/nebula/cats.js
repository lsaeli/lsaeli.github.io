function click_handler1() { alert("click_handler1"); }
function click_handler2() { alert("click_handler2"); }
document.getElementById('cats').addEventListener('click', function() {
    alert("In a distant universe, not far away, there's a place called the Milky Way, in which cats rule a planet called, 'Earth.'");
}, false);
document.getElementById('cats').addEventListener('click', function() {
    alert("It's rumored that only Nebula Members can travel to Cat Planet.");
}, false);

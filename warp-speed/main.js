<script>
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

myFunction = function() {
    var first = document.getElementById("firstname").value;
    var second = document.getElementById("lastname").value;
    
    document.getElementById("here").innerHTML = first+" "+second;
}



var click = document.querySelector("h1");
click.addEventListener("click", click);

function click () {
    var header = document.querySelector("output h1");
    header.innerHTML= "helllo <strong> stranger>";
    var trigger =document.querySelector("output 1h strong")
    console.log ("it works.");
}

function addImage() {
    var output = document.querySelector(".output")
        console.log ("output")
    var ship document.createElement("img")
        console.log ("picture")
    ship.src = "./images/ship.jpg";
    output.appendChild (ship)
    ship.addEventListener("click")

    ship.addEventListener("click", function () {
document.querySelector("#ship").remove
    }
    );

}


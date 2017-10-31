
    var adj1, noun1, adj2, plnoun1, adv1, ingverb, word1, adj3, nounpl1, content, element, node;
    var main = document.getElementById("content");
    function begin() {

        document.getElementById("remove-this").style.display = "none";

        adj1 = prompt("Please enter an adjective:");
        while (adj1 == null || adj1 == undefined) {
            adj1 = prompt("Please enter an adjective:");
        }

        noun1 = prompt("Please enter a noun:");
        while (noun1 == null || noun1 == undefined) {
            noun1 = prompt("Please enter a noun:");
        }

        adj2 = prompt("Please enter another adjective:");
        while (adj2 == null || adj2 == undefined) {
            adj2 = prompt("Please enter another adjective:");
        }

        plnoun1 = prompt("Please enter a plural noun:");
        while (plnoun1 == null || plnoun1 == undefined) {
            plnoun1 = prompt("Please enter a plural noun:");
        }
        adv1 = prompt("Please enter an adverb:");
        while (adv1 == null || adv1 == undefined) {
            adv1 = prompt("Please enter an adverb:");
        }
        ingverb = prompt("Please enter a verb ending in ing:");
        while (ingverb == null || ingverb == undefined) {
            ingverb = prompt("Please enter verb ending in ing:");
        }

        word1 = prompt("Please enter a silly plural noun:");
        while (word1 == null || word1 == undefined) {
            word1 = prompt("Please enter a silly plural noun:");
        }
       adj3 = prompt("Please enter an adjective:");
        while (adj3 == null || adj3 == undefined) {
            adj3 = prompt("Please enter an adjective:");
        }
              nounpl1 = prompt("Please enter a plural noun:");
        while (nounpl1 == null || nounpl1 == undefined) {
            nounpl1 = prompt("Please enter a plural noun:");
        }

        var madlibString = "When we look up into the sky on a/an " 
        + adj1 + " summer night, we see millions of tiny spots of light. Each one represents a/an  "
         + noun1 + " which is the center of a/an " + adj2 + " solar system with dozens of revolving  "
          + plnoun1 + " around a distant sun. Sometimes these suns expand and " + adv1 + " begin  " + ingverb + 
          " their neighbors. Soon they will become so big, they will turn into... " + word1 + "." +
          " Eventually they subside and become  " + adj3 + " giants or perhaps black " + nounpl1 + "."
        document.getElementById("finaltext").innerHTML = madlibString;
    }
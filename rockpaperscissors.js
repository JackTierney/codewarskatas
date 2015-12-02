//User makes a choice
var items = ["Rock","Paper","Scissors"];
var user = prompt(items);
document.write("User: " + user +"<br>");

//Computer makes a choice
var computer = items[Math.floor(Math.random()*items.length)];
document.write("Computer: " + computer + "<br>");

//Compare function
var draw = "It's A Draw!";
var userwin = "The User Wins!";
var computerwin = "The Computer Wins!";

if ((user==="Rock")&(computer==="Rock")) {
    document.write(draw);
}

else if ((user==="Rock")&(computer==="Paper")) {
    document.write(computerwin);
}

else if ((user==="Rock")&(computer==="Scissors")) {
    document.write(userwin);
}

else if ((user==="Paper")&(computer==="Scissors")) {
    document.write(computerwin);
}

else if ((user==="Scissors")&(computer==="Rock")) {
    document.write(computerwin);
}

else if ((user==="Paper")&(computer==="Rock")) {
    document.write(userwin);
}

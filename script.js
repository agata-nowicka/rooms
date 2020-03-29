window.onload = function(){    
        document.getElementById("myInput").value = "";   
        var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("date").innerHTML = days[d.getDay()] + ", " + months[d.getMonth()] + " " + d.getDate();
    }
var choosenRoom;
var choosenPearson;

function myFunction(val) {
  document.getElementById("try").innerHTML = "The input value has changed. The new value is: " + val;
}

 function reply_click(clicked_id)
  {
    document.getElementById("myInput").value = document.getElementById(clicked_id).textContent;
    ul = document.getElementById("list");
    ul.style.display = "none";
    choosenPearson = document.getElementById("myInput").value; 
    console.log(choosenPearson);   
    document.getElementById("modalText1").innerHTML = document.getElementById("myInput").value;
  }



function room(c_id) 
{   
  button = document.getElementById(c_id).id
  ident =  document.getElementById(button)
  var choosenRoom = button;
  ident.style.color = "red"
  document.getElementById("modalText2").innerHTML = document.getElementById(c_id).textContent;
}


function show() {
  var x = document.getElementById("myInput");
  if (x.style.display === "none") {
    x.style.display = "block";
   } else {
    x.style.display = "none";
  } 
}

function search() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("list");
  li = ul.getElementsByTagName('li');
  
   if(input.value.length == 0){
        ul.style.display = "none";
        return;
    } else {
        ul.style.display = "block";
    }

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

 //modal box
//var modal = document.getElementById("myModal");

//button that opens the modal
//var btn = document.getElementById("myBtn");

//<span> element that closes the modal
//var span = document.getElementsByClassName("close");

//open the modal
function alert() {

  document.getElementById("myModal").style.display = "block";

}

//clicks on <span> (x), close the modal
function change() {
 document.getElementById("myModal").style.display = "none";
}


function accept() { 


 document.getElementById("myModal").style.display = "none";
}



const input = document.querySelector('input');
// get tday's date
window.onload = function(){    
        document.getElementById("myInput").value = "";   
        var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("date").innerHTML = days[d.getDay()] + ", " + months[d.getMonth()] + " " + d.getDate();
    }

let choosenRoom = 0;
var choosenPerson;
var buttons = document.getElementsByClassName("roomBtn");

/*
//test function - what I'm writing
function myFunction(val) {
  document.getElementById("try").innerHTML = "The input value has changed. The new value is: " + val;
}*/

/*document.getElementById("myInput").addEventListener('input', updateValue);

function updateValue(e) {
  document.getElementById("try").textContent = e.target.value;
}*/

 function reply_click(clicked_id)
  {
    document.getElementById("myInput").value = document.getElementById(clicked_id).textContent;
    ul = document.getElementById("list");
    ul.style.display = "none";
    choosenPerson = document.getElementById("myInput").value;     
    document.getElementById("modalText1").innerHTML = document.getElementById("myInput").value;
  }

var tableId;

function room(c_id) 
{   
  button = document.getElementById(c_id).id
  ident =  document.getElementById(button)
  choosenRoom = button;

  for (i = 0; i < buttons.length; i++) {  
    if (buttons[i].style.color = "red"){
      buttons[i].style.color = "#47423A";
    }
  }
    
    
  ident.style.color = "red"
  document.getElementById("modalText2").innerHTML = document.getElementById(c_id).textContent;
  tableId = button+"t";    

  
    

 
}


function show() {
  var x = document.getElementById("myInput");
  if (x.style.display === "none") {
    x.style.display = "block";
   } else {
    x.style.display = "none";
  } 
}

//check if someone is on the list
function search() {  
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
if (!(document.getElementById("myInput").value)) {
  document.getElementById("modalNoName").style.display = "block";
  } else {
   document.getElementById("myModal").style.display = "block";
  }
}


function change() {
 document.getElementById("myModal").style.display = "none";
 fontColor();
}

function closeM() {
  document.getElementById("modalNoName").style.display = "none";
   
 }

 function closeM2() {
  document.getElementById("modalNoRoom").style.display = "none";
   
 }

function fontColor(){
  
  for (i = 0; i < buttons.length; i++) {  
    buttons[i].style.color = "#47423A";
    
  }
}

function accept() { 

  let currenthour = new Date().getHours() + ":" + new Date().getMinutes();
  let finalhour = new Date().getHours() + 3 + ":" + new Date().getMinutes();
 document.getElementById("myModal").style.display = "none";
 fontColor();
 //add choosen person to an adequate cell
 document.getElementById(tableId).textContent = 
 choosenPerson + '\n' + currenthour + '-' +  finalhour;

 document.getElementById("myInput").value = "";  
 choosenRoom = 0;

}

function clearCell() {
  if (choosenRoom == 0) {
    document.getElementById("modalNoRoom").style.display = "block";
    } else {
      document.getElementById(tableId).textContent = "";
      choosenRoom=0;
    }
    fontColor();
   
}



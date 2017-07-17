function delay(){ 
var modal = document.getElementsByClassName("modal");
	modal[0].style.display = "block"; 
}
setTimeout( delay , 3000 )
var modal = document.getElementsByClassName("modal");
var closebtn = document.getElementsByClassName("close");
	closebtn[0].onclick = function(){
	modal[0].style.display = "none";
}



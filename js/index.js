function clickchar(val){
	document.getElementById("val").innerHTML = document.getElementById("val").innerHTML + val ;
}

function clickdel(){
	var str = document.getElementById("val").innerHTML ;
	var bs = str.substr(0,str.length-1) ;
	document.getElementById("val").innerHTML = bs ;
}

function clicktab(){
	document.getElementById("val").innerHTML = document.getElementById("val").innerHTML + "\t" ;
}

function clickenter(){
	document.getElementById("val").innerHTML = document.getElementById("val").innerHTML + "\n" ;
}

function clickspace(){
	document.getElementById("val").innerHTML = document.getElementById("val").innerHTML + " " ;
}

function clickclear(){
	document.getElementById("val").innerHTML = "" ;
}
// JavaScript Document

// Verschiebungsfaktor
var wolke4_ver = 200;
var wolke3_ver = 440;
var wolke2_ver = 400;
var wolke1_ver = 620;
var schriftzug_ver = 0.03; //in perc

// Geschwindigkeitsfaktor
var wolke4_fak = 3;
var wolke3_fak = 2.75;
var wolke2_fak = 2.6;
var wolke1_fak = 2.75;
var schrift_fak = 2;
var schrift_fak_in = 1;

// Speichern der ursprünglichen Position
var pos_wolke1 = 0;
var pos_wolke2 = 0;
var pos_wolke3 = 0;
var pos_wolke4 = 0;
var pos_schriftz = 0;

function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

function wolke4(){ //About the game
	slide_out();
	sprechblase_in();
	setTimeout(() => {  document.getElementById("text").style.display = "block"; }, 2300);
}

function wolke3(){ // Download
	slide_out();
	sprechblase_in();
	setTimeout(() => {  document.getElementById("download").style.display = "block"; }, 2300);
}

function wolke2(){ // Bug Report
	slide_out();
	sprechblase_in();
	setTimeout(() => {  document.getElementById("bugreport").style.display = "block"; }, 2300);
}

function wolke1(){ // Support me
	slide_out();
	sprechblase_in();
	setTimeout(() => {  document.getElementById("support").style.display = "block"; }, 2300);
}

function zuruck(){
	hide_all();
	slide_in();
}

function slide_out(){

	var elem4 = document.getElementById("wolke4");
	var elem3 = document.getElementById("wolke3");
	var elem2 = document.getElementById("wolke2");
	var elem1 = document.getElementById("wolke1");
	var elems = document.getElementById("schriftzug");
	
	document.getElementById("busch").style.zIndex = "10";
	
	pos_wolke1 = getCoords(elem1).left;
	pos_wolke2 = getCoords(elem2).left;
	pos_wolke3 = getCoords(elem3).left;
	pos_wolke4 = getCoords(elem4).left;
	pos_schriftz = getCoords(elems).top;
	
	var pos4 = pos_wolke4;
	var pos3 = pos_wolke3;
	var pos2 = pos_wolke2;
	var pos1 = pos_wolke1;
	var poss = pos_schriftz;

	
	var id = setInterval(frame, 5);
	function frame() {
		if (poss > -elems.height){
			poss = poss - schrift_fak;
			elems.style.top = poss + 'px';
		}
		
		if (pos4 < -elem4.width && pos3 < -elem3.width && pos2 < -elem2.width && pos1 < -elem1.width) {
			clearInterval(id);
			document.getElementById("busch").style.zIndex = "0";
			document.getElementById('zuruck').style.display ="block";
		} else {
			pos4 = pos4 - wolke4_fak;
			elem4.style.left = pos4 + 'px';
			pos3 = pos3 - wolke3_fak;
			elem3.style.left = pos3 + 'px';
			pos2 = pos2 - wolke2_fak;
			elem2.style.left = pos2 + 'px';
			pos1 = pos1 - wolke1_fak;
			elem1.style.left = pos1 + 'px';
		}
	}
	
}

function slide_in(){

	document.getElementById("busch").style.zIndex = "10";
	document.getElementById('zuruck').style.display ="none";
	var elem4 = document.getElementById("wolke4");
	var elem3 = document.getElementById("wolke3");
	var elem2 = document.getElementById("wolke2");
	var elem1 = document.getElementById("wolke1");
	var elems = document.getElementById("schriftzug");
	
	var pos4 = -elem4.width;
	var pos3 = -elem3.width;
	var pos2 = -elem2.width;
	var pos1 = -elem1.width;
	var poss = -elems.height;

	var stopped_1 = false;
	var stopped_2 = false;
	var stopped_3 = false;
	var stopped_4 = false;
	
	var id = setInterval(frame, 5);
	function frame() {
		if (poss < pos_schriftz){
			poss = poss + schrift_fak_in;
			elems.style.top = poss + 'px';
		}
		if (pos4 >= pos_wolke4){
			stopped_4 = true;
		}else{
			pos4 = pos4 + wolke4_fak;
			elem4.style.left = pos4 + 'px';
		}
		
		if (pos3 >= pos_wolke3){
			stopped_3 = true;
		}else{
			pos3 = pos3 + wolke3_fak;
			elem3.style.left = pos3 + 'px';
		}
		
		if (pos2 >= pos_wolke2){
			stopped_2 = true;
		}else{
			pos2 = pos2 + wolke2_fak;
			elem2.style.left = pos2 + 'px';
		}
		
		if (pos1 >= pos_wolke1){
			stopped_1 = true;
		}else{
			pos1 = pos1 + wolke1_fak;
			elem1.style.left = pos1 + 'px';
		}
			
		if(stopped_1 == true && stopped_2 == true && stopped_3 == true && stopped_4 == true){
			clearInterval(id);
			document.getElementById("busch").style.zIndex = "0";
		}
	}
}

var pics = ['movs','mov2','mov1','mov2','movs','mov2','mov1','mov2','movs','mov2','mov1','mov2','movs','mov2','mov1','mov2','movs','movs','mov5','mov5','movs','mov3','mov4','mov3','movs','movs','mov2','mov1', 'mov2']
function movement() {
	var a = 0;
	var paine = document.getElementById('paine');
    setInterval(frame, 1000/7);
	function frame() {
		if(a >= pics.length){
			a = 0;
		}
		paine.src="pictures/" + pics[a] + ".png";
		a++;
	}
}

function hide_all(){
	document.getElementById("textcontainer").style.display = "none";
	document.getElementById("text").style.display = "none";
	document.getElementById("download").style.display = "none";
	document.getElementById("bugreport").style.display = "none";
	document.getElementById("support").style.display = "none";
	setTimeout(() => {  document.getElementById("textcontainer").style.display = "none";
	document.getElementById("text").style.display = "none";
	document.getElementById("download").style.display = "none";
	document.getElementById("bugreport").style.display = "none";
	document.getElementById("support").style.display = "none"; }, 2300);
}

function sprechblase_in(){
	setTimeout(() => {
		if((window.innerWidth/window.innerHeight)>1.5){
			var pics_sperch = ['Sprechblase 0', 'Sprechblase 1', 'Sprechblase 2', 'Sprechblase 3', 'Sprechblase 4', 'Sprechblase 5', 'Sprechblase 6', 'Sprechblase 7', 'Sprechblase 8']
			}
		else{
			var pics_sperch = ['Sprechblase 0', 'Sprechblase 1', 'Sprechblase 2', 'Sprechblase 3', 'Sprechblase 4', 'Sprechblase 5', 'Sprechblase 6', 'Sprechblase 7']
		}
		var a = 0;
		var sprechblase = document.getElementById('sprechblase');
		var id2 = setInterval(frame, 1000/10);
		document.getElementById("textcontainer").style.display = "block";
		sprechblase.src="pictures/" + pics_sperch[0] + ".png";
		function frame() {
			if(a > pics_sperch.length-2){
				clearInterval(id2);
			}
			sprechblase.src="pictures/" + pics_sperch[a] + ".png";
			a++;
		}
	}, 1500);
}

/*Note that we must include prefixes for different browsers, as they don't support the requestFullscreen property yet */
	function openFullscreen() {
		if(( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))||!elem.fullScreen) {
			var elem = document.documentElement;
		  if (elem.requestFullscreen) {
			elem.requestFullscreen();
		  } else if (elem.mozRequestFullScreen) { /* Firefox */
			elem.mozRequestFullScreen();
		  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
			elem.webkitRequestFullscreen();
		  } else if (elem.msRequestFullscreen) { /* IE/Edge */
			elem.msRequestFullscreen();
		  }
		}
	}



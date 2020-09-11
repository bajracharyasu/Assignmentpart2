//slider
function sliderstart(){
	setTimeout("slider()", 2500)
}
function sldier(){
	var myImages = new Array("abc.jpeg", "lock.jpeg", "map.jpeg");
	var ranNumber = Math.floor(Math.random()) * myImages.length);
	document,getElementById("randomImages").src = myImage[ranNumber];

}
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

color1.value = "#FF0000";
color2.value = "#FFFF00";
css.textContent = body.style.background + "linear-gradient(to right, red , yellow)";


function setGradient(){
	body.style.background = 
	"linear-gradient(to right, "
	 + color1.value 
	 + ", "
	 + color2.value
	 +")";
	 css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

button.addEventListener("click", function(){
	color1.value = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	color2.value ="#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	setGradient();
})
/*change color in the accordion tab when clicked*/

window.onload = function(){
	//accordion's first tab red when page loads
	$("#accordion h3#a").addClass("color");
	$("#accordion h3#a").css("fontSize", "35px");
}

$(function(){
	$("#accordion").accordion();
	$("#accordion h3#a").click(changeColorA);
	$("#accordion h3#b").click(changeColorB);
	$("#accordion h3#c").click(changeColorC);
	$("#accordion h3#d").click(changeColorD);
	$("#accordion h3#e").click(changeColorE);
});

function changeColorA(){
	$("#accordion h3#a").addClass("color");
	$("#accordion h3#a").css("fontSize", "35px");	
	$("#accordion h3#b, #accordion h3#c, #accordion h3#d, #accordion h3#e").removeClass("color");
	$("#accordion h3#b, #accordion h3#c, #accordion h3#d, #accordion h3#e").css("fontSize", "30px");
}

function changeColorB(){
	$("#accordion h3#b").addClass("color");
	$("#accordion h3#b").css("fontSize", "35px");
	$("#accordion h3#a, #accordion h3#c, #accordion h3#d, #accordion h3#e").removeClass("color");
	$("#accordion h3#a, #accordion h3#c, #accordion h3#d, #accordion h3#e").css("fontSize", "30px");
}

function changeColorC(){
	$("#accordion h3#c").addClass("color");
	$("#accordion h3#c").css("fontSize", "35px");
	$("#accordion h3#a, #accordion h3#b, #accordion h3#d, #accordion h3#e").removeClass("color");
	$("#accordion h3#a, #accordion h3#b, #accordion h3#d, #accordion h3#e").css("fontSize", "30px");
}

function changeColorD(){
	$("#accordion h3#d").addClass("color");
	$("#accordion h3#d").css("fontSize", "35px");
	$("#accordion h3#a, #accordion h3#b, #accordion h3#c, #accordion h3#e").removeClass("color");
	$("#accordion h3#a, #accordion h3#b, #accordion h3#c, #accordion h3#e").css("fontSize", "30px");
}

function changeColorE(){
	$("#accordion h3#e").addClass("color");
	$("#accordion h3#e").css("fontSize", "35px");
	$("#accordion h3#a, #accordion h3#b, #accordion h3#c, #accordion h3#d").removeClass("color");
	$("#accordion h3#a, #accordion h3#b, #accordion h3#c, #accordion h3#d").css("fontSize", "30px");
}



var myImage=document.getElementById("mainImage");

var imageArray=["_images/montreal1.jpg","_images/montreal2.jpg","_images/montreal3.jpg",
				"_images/montreal4.jpg","_images/montreal5.jpg","_images/montreal6.jpg"];

var imageIndex=0;

function changeImage(){
	myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if(imageIndex >= imageArray.length){
		imageIndex = 0;
	}
}

//setInterval is in milliseconds
var intervalHandle = setInterval(changeImage,4000);

myImage.onclick = function() {
	clearInterval(intervalHandle);
}


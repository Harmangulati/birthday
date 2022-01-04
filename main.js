var canvas = new fabric.Canvas('my_canvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.new_image.URL('BirthdayImage.png' function (img){
      block_image_object.scaleToWidth(700);
      block_image_object.scaleToHeight(501);
      block_image_Object.set({
      top:0,
      left:0    
      });
      canvas.add(block_image_object);
    });
    
	
}

function playSound(){
	x.play();
}

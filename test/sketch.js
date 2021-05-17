function setup() {
  createCanvas(1000, 1000);
}

function mouseClicked(){
for (var i = 0; i<100;i++){
  		var random_num = Math.random()*900
  		var random_num2 = Math.random()*900
  		var random_num3 = Math.random()*900
  		var random_num4 = Math.random()*900
  		if (random_num2 > 500){
   			fill(255,255,255)
   		}
   		else if (random_num2 < 250){
   			fill(219, 162, 229)
   		}
   		else {
   			fill(162, 194, 229)
   		}
   		if (random_num2 > 500){
   			stroke(219, 162, 229)
   		}
   		else if (random_num2 < 250){
   			stroke(162, 194, 229)

   		}
   		else {
   			stroke(255,255,255)
   		}
   		var circle_size = Math.random()*120
   		ellipse(random_num3, random_num4, circle_size, circle_size);
}
}

function draw() {

  	// if (random_num < 50){
  	// 	ellipse(mouseX, mouseY, 20, 20);
  	// }
  	// else if (random_num < 60){
  	// 	ellipse(mouseX, mouseY, 10, 10);
  	// }
  	// else if (random_num < 95){
  	// 	ellipse(mouseX, mouseY, 30, 30);
  	// }
  	// else if (random_num < 100){
  	// 	ellipse(mouseX, mouseY, 100, 100);
  	// }
   
   	

    //else {
    //fill(255);
  //}
  
}
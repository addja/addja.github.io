var visible = false;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
va = Math.PI/4;

function showContact() {
	if (visible) {
		visible = false;
		$("#contactBox").fadeOut();
	}
	else {
		visible = true;
		$("#contactBox").fadeIn("slow");
	}
}

function updateCanvasSize() {
	c.width = window.innerWidth;
	c.height = window.innerHeight;
}

function fractT(i,x,y,l,a) {
	// i -> iteration
	// x,y -> starting point
	// l,a -> length and angle of the branch
	ctx.beginPath();
	ctx.moveTo(x,y);
	xx = x+l*Math.cos(a); 	
	yy = y+l*Math.sin(a);
	ctx.lineTo(xx,yy);
	ctx.stroke();
	if (i == 0) return;
	var t1 = Math.floor(Math.random() * 800) + 400
	var t2 = Math.floor(Math.random() * 800) + 400
	window.setTimeout(fractT,t1,i-1,xx,yy,l*0.6,a+va);	
	window.setTimeout(fractT,t2,i-1,xx,yy,l*0.6,a-va);	
}

function fractalTree() {
	w = c.width/10; h = c.height/2;
	fractT(10,0,h,w,0);
	fractT(10,c.width,h,-w,0);
}

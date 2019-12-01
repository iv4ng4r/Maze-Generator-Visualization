var DISPLAY_CURRENT = true;
var DISPLAY_TRAIL = true;
var DISPLAY_CELLS = false;

function Cell(i,j, tam){
  this.walls = [true, true, true, true];
  //TOP-RIGHT-BOTTOM-LEFT
  this.i = i;
  this.j = j;
  this.x = i*tam;
  this.y = j*tam;

  this.isvisited = false;

  this.show = function(){
    noStroke();

    if(DISPLAY_CELLS & this.isvisited){
      fill(0,0,255);
    } else {
      fill(0)
    }
    rect(this.x ,this.y ,tam , tam);
    if(DISPLAY_CURRENT & this===current){
      fill(0,0,150);
	  //rect(this.x + 4, this.y + 4, tam - 8, tam - 8);
	  ellipse(this.x + tam/2, this.y + tam/2, 15, 15);
    }


    stroke(0,0,150);
	strokeWeight(3);
    //TOP
	if(DISPLAY_TRAIL){
		if(!this.walls[0]){line(this.x + tam/2,this.y,this.x + tam/2, this.y + tam/2);}
		if(!this.walls[3]){line(this.x+tam,this.y+tam/2,this.x + tam/2, this.y + tam/2);}
		if(!this.walls[2]){line(this.x+tam/2,this.y+tam,this.x + tam/2, this.y + tam/2);}
		if(!this.walls[1]){line(this.x, this.y + tam/2, this.x + tam/2, this.y + tam/2);}
	}
	if (DISPLAY_CELLS){
		stroke(0);
		strokeWeight(1);
		if(this.walls[0]){line(this.x,this.y,this.x + tam, this.y);}
		if(this.walls[1]){line(this.x,this.y,this.x,this.y+tam);}
		if(this.walls[2]){line(this.x,this.y+tam,this.x+tam,this.y+tam);}
		if(this.walls[3]){line(this.x+tam, this.y + tam, this.x + tam, this.y);}
	}

  }
}

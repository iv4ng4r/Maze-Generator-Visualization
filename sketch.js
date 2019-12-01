var maze;
var rows;
var cols;
var celltam;
var res = 1;
var current;
var unvis = true;
var stack;

function setup(){
  frameRate(60);
  stack = [];
  var cnv = createCanvas(window.innerWidth,window.innerHeight);
  cnv.parent('sketch-window');
  celltam = 50 * res;
  rows = floor(width/celltam);
  cols = floor(height/celltam);

  maze = emptyMaze(rows, cols);
  current = maze[0][0];

  current.isvisited = true;
  frameRate(30);
}
function draw(){
  background(0);
  
  if(unvis){
    var vecinos = neighborhood(current);

    if(vecinos.length > 0){

      var pick = vecinos[floor(random(vecinos.length))];

      stack.push(current);
      removeWall(current, pick);
      current = pick;

      current.isvisited = true;


    }else if(stack.length > 0){
      current = stack.pop();
    }
  }


  unvis = false;
  for(var i = 0; i < maze.length; i++){
    for (var j = 0; j < maze[0].length; j++){
      maze[i][j].show();
      if(!maze[i][j].isvisited){unvis = true;}
    }
  }


}

function neighborhood(cell){
  var unvisited = [];
  try{
    var n1 = maze[cell.i+1][cell.j];
    if(!n1.isvisited){unvisited.push(n1);}
  }catch(e){}
  try{
    var n2 = maze[cell.i][cell.j+1];
    if(!n2.isvisited){unvisited.push(n2);}
  }catch(e){}
  try{
    var n3 = maze[cell.i-1][cell.j];
    if(!n3.isvisited){unvisited.push(n3);}
  }catch(e){}
  try{
    var n4 = maze[cell.i][cell.j-1];
    if(!n4.isvisited){unvisited.push(n4);}
  }catch(e){}
  return unvisited;
}

function removeWall(a,b){
  var ci = a.i - b.i;
  var cj = a.j - b.j;
  if(ci < 0){
    a.walls[3] = false;
    b.walls[1] = false;
  } else if(ci > 0){
    a.walls[1] = false;
    b.walls[3] = false;
  }
  if(cj < 0){
    a.walls[2] = false;
    b.walls[0] = false;
  } else if(cj > 0) {
    a.walls[0] = false;
    b.walls[2] = false;
  }
}




function emptyMaze(mazetamx, mazetamy){
  var emptym = [];
  for(var i = 0; i < mazetamx; i++){
    var row = [];
    for (var j = 0; j < mazetamy; j++){
      row.push(new Cell(i,j,celltam));
    }
    emptym.push(row);
  }
  return emptym;
}


function toggleCurrent(){DISPLAY_CURRENT = !DISPLAY_CURRENT;}
function toggleTrail(){DISPLAY_TRAIL = !DISPLAY_TRAIL;}
function toggleCell(){DISPLAY_CELLS = !DISPLAY_CELLS;}
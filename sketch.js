let num=100;
let mx=[]
let my=[]
function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(220);
  let g=constrain(mouseX,200,350)
  let h=constrain(mouseY,200,350)
  circle(g,h,400)
  let a=constrain(mouseX,150,400)
  let b=constrain(mouseY,150,400)
  circle(a,b,300)
  let c=constrain(mouseX,100,450)
  let d=constrain(mouseY,100,450)
  circle(c,d,200)
  let e=constrain(mouseX,50,500)
  let f=constrain(mouseY,50,500)
  circle(e,f,100)
  let count=frameCount%num;
  //print(count)
  //frameRate(5);
  mx[count]=mouseX;
  my[count]=mouseY;
  for(let i=0;i<num;i++){
    let index=(count+1)%num;
    ellipse(mx[i],my[i],i,i);
    fill(0,75,188,i/num);
  }
}
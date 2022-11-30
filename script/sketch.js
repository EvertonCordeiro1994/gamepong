class bola{
  constructor(){
    this.positionX = width/2;
    this.positionY = height/2;
    this.velocidadeX= random([-5,-3,3,5]);
    this.velocidadeY= random([-5,-3,3,5]);
    this.diametro = 20;
  }


  desenhar = () =>  circle(this.positionX, this.positionY, this.diametro)

  movimentar = () => {
    this.positionX += this.velocidadeX
    this.positionY += this.velocidadeY
  }

  checarBordas = () => {
    if(this.positionX-this.diametro/2 <= 0){
      this.velocidadeX *= -1;
    }

    if(this.positionX+this.diametro/2 >= width){
      this.velocidadeX *= -1;
    }

    if(this.positionY-this.diametro/2 <= 0){
      this.velocidadeY *= -1;
    }
   
    if(this.positionY-this.diametro/2 >= height){
      this.velocidadeY *= -1;
    }
  }
};

class player{
  constructor(tipoJ){
    this.id=tipoJ;
    this.altura = 60;
    this.largura = 20;
    
    if(this.id==1){
      this.posicaoX=0;
    }else if(this.id==2){
      this.posicaoX = width-this.largura;
    }
    this.posicaoY = height/2;
    this.velocidadeY = 10;
  }
  
  movimentar(){
    if(this.id==1){
      if(keyIsDown(SHIFT)){
        if(this.posicaoY>0){
          this.posicaoY -=this.velocidadeY;
        }else{
          this.posicaoY = 0;
        }
      }
      if(keyIsDown(CONTROL)){
        this.posicaoY +=this.velocidadeY;
        if(this.posicaoY+this.altura>height){
          this.posicaoY = height-this.altura;
        }
      }
    }else if(this.id==2){
      if(keyIsDown(UP_ARROW)){
        if(this.posicaoY>0){
          this.posicaoY-=this.velocidadeY;
        }else{
          this.posicaoY = 0;
        }
      }
      if(keyIsDown(DOWN_ARROW)){
          this.posicaoY +=this.velocidadeY;
        if(this.posicaoY+this.altura>height){
          this.posicaoY = height-this.altura;
        }
      }
    }
  }
  
  desenhar(){
    rect(this.posicaoX,this.posicaoY,this.largura,this.altura);
  }
    
}






setup = () => {
  createCanvas(600 ,400);

  bola01 = new bola();
  player01 = new player(1);
  player02 = new player(2);

};

draw = () => {
  background(50,50,70);

  bola01.desenhar();
  bola01.movimentar();
  bola01.checarBordas();
  player01.desenhar();
  player02.desenhar();
  player01.movimentar();
  player02.movimentar();
};

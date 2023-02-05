import { Container, Sprite, Texture } from "pixi.js";
import { Creep } from "./creep";

export class Player extends Container {
  constructor() {
    super();
    this.velocityX = 20;
    this.velocityY = 20;
    
    document.addEventListener("keydown", this.move.bind(this));

    this.create();
    
    
  }
 

  create() {
    // this.setup = {
    //     width: 20,
    //     height: 40,

    // };
    const texture = Texture.from("explorer.png");
    this.player = new Sprite(texture);
    this.addChild(this.player);
  }
  move(e) {

    if (e.key === "ArrowRight")
       this.x += this.velocityX;
        if(this.x>=450)
            this.x = 450;
    if (e.key === "ArrowLeft")
       this.x -= this.velocityX;
        if(this.x<=30)
            this.x = 30;
    if (e.key === "ArrowUp")
       this.y -= this.velocityY;
        if(this.y<=30)
            this.y=30;
    if (e.key === "ArrowDown")
       this.y += this.velocityY;
        if(this.y>=450)
            this.y=450;
    
  }
  checkCollision(){
      this.creep = new creep;

  }
}
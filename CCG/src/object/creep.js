import { Container, Sprite, Texture } from "pixi.js";

export class Creep extends Container {
  constructor() {
    super();

  }
  create(creepX, creepY){
    let texture = Texture.from("cat.png");
    this.creep = new Sprite(texture);
    this.creep.x = creepX;
    this.creep.y = creepY;
    this.creep.velocityY = 3;
    this.addChild(this.creep);

    return this.creep;
 
  }

  

}

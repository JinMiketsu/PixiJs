import {Container,Sprite,Texture} from "pixi.js"


export class Treasure extends Container {
    constructor(){
        super();
        this.create();
    };


create() {
    const texture = Texture.from("treasure.png");
    this.treasure = new Sprite(texture);
    this.addChild(this.treasure);
   }
}
import { Container, Sprite, Texture } from "pixi.js";

export class HpBar extends Container {
  constructor(){
    super();
    this.create();
  }

  create(){
    let texture = Texture.from("hp_bar.png");
    this.HpBar = new Sprite(texture);
    this.HpBar.width = 200;
    this.addChild(this.HpBar);
  }
}
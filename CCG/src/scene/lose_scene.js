import { Container } from "pixi.js";

export class LoseCon extends Container {
  constructor() {
    super();
  }
  createText(){
    let text = new Text("You Lose");
    text.x = 500/2;
    text.y = 500/2;
    text.anchor.set(0.5);
    this.addChild(text);
}
}
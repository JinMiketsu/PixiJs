import {Container, Text} from "pixi.js"

export class WinCon extends Container{
    constructor(){
        super();
        this.createText();

    }

    createText(){
        let text = new Text("Victory");
        text.x = 500/2;
        text.y = 500/2;
        text.anchor.set(0.5);
        this.addChild(text);
    }
}
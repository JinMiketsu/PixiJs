
import { Treasure } from "../objects/treasure";
import { Player } from "../objects/player";

export class Collision {

collisondetect(a,b) {

   

    let aBox = a.getBounds();
    let bBox = b.getBounds();

    return aBox.x + aBox.width > bBox.x &&
            aBox.x < bBox.x + bBox.width &&
            aBox.y + aBox.height > bBox.y &&
            aBox.y < bBox.y + bBox.height;
    
}
}
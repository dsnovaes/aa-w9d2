// Spacerock. It inherits from MovingObject.
const MovingObject = require("./moving_object.js");
const Util = require('./util.js');


Util.inherits(Asteroid, MovingObject);

class Asteroid {
    COLOR = 'green';
    RADIUS = 25;
    
    constructor(object) {
        this.pos = object.pos;
        new MovingObject({
            pos: this.pos,
            vel:  Util.randomVec(12),
            radius: Asteroid.RADIUS,
            color: Asteroid.COLOR
        })
        // super({
        //     pos: this.pos,
        //     vel:  Util.randomVec(12), 
        //     radius: this.RADIUS, 
        //     color: this.COLOR
        // })
    }
    
}  

module.exports = Asteroid;
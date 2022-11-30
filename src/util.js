// Utility code, especially vector math stuff.
const Util = {
    inherits(child, parent) {
        // console.log('inherinting')
        // console.log(child)
        // console.log(parent)
        // function Surrogate() {}
        // Surrogate.prototype = parent.prototype;
        // child.prototype = new Surrogate();
        // child.prototype.constructor = child;
        child.prototype = Object.create(parent.prototype);
        child.prototype.constructor = child;
    },
    //// Return a randomly oriented vector with the given length.
    randomVec(length) {
        const deg = 2 * Math.PI * Math.random();
        return Util.scale([Math.sin(deg), Math.cos(deg)], length);
    },
    // Scale the length of a vector by the given amount.
    scale(vec, m) {
        return [vec[0] * m, vec[1] * m];
    },
    thisIsATest() {
        console.warn("this is a test")
    }
}


module.exports = Util; 
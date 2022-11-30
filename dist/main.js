/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Spacerock. It inherits from MovingObject.\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nclass Asteroid {\n    COLOR = 'green';\n    RADIUS = 25;\n    \n    constructor(object) {\n        this.pos = object.pos;\n        new MovingObject({\n            pos: this.pos,\n            vel:  Util.randomVec(12),\n            radius: Asteroid.RADIUS,\n            color: Asteroid.COLOR\n        });\n        Util.thisIsATest()\n        // super({\n        //     pos: this.pos,\n        //     vel:  Util.randomVec(12), \n        //     radius: this.RADIUS, \n        //     color: this.COLOR\n        // })\n    }\n    \n}  \n\nUtil.inherits(Asteroid, MovingObject);\n\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack://w9d2-asteroids/./src/asteroid.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    const canvas = document.getElementById(\"game-canvas\");\n    const ctx = canvas.getContext(\"2d\");\n    const mo = new MovingObject({\n        pos: [30, 30],\n        vel: [10, 10],\n        radius: 25,\n        color: \"#00FF00\"\n    });\n    const mo2 = new MovingObject({\n        pos: [100, 70],\n        vel: [20, 20],\n        radius: 25,\n        color: \"#FF9900\"\n    });\n    mo.draw(ctx);\n    mo2.draw(ctx);\n    window.ctx = ctx;\n    window.mo2 = mo2;\n    window.Asteroid = Asteroid;\n    window.MovingObject = MovingObject;\n    \n    // const aster = new Asteroid({pos: [50,50]});\n    // aster.draw(ctx);\n\n    \n    \n\n\n});\n\n// console.log(\"Webpack is working!\");\n\n//# sourceURL=webpack://w9d2-asteroids/./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("/*\n\nBase class for anything that moves.\nMost important methods are \nMovingObject.prototype.move, \nMovingObject.prototype.draw(ctx), \nand MovingObject.prototype.isCollidedWith(otherMovingObject).\n\n*/\nclass MovingObject {\n    constructor(object) {\n        this.pos = object.pos;\n        this.vel = object.vel;\n        this.radius = object.radius;\n        this.color = object.color;\n    };\n\n    draw(ctx) {\n        ctx.beginPath();\n        ctx.arc(this.pos[0],this.pos[1],this.radius,0,2*Math.PI);\n        ctx.fillStlye = this.color;\n        ctx.fill();\n    }\n\n    move() {\n        this.pos[0] += this.vel[0];\n        this.pos[1] += this.vel[1];\n    }\n};\n\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack://w9d2-asteroids/./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("// Utility code, especially vector math stuff.\nconst Util = {\n    inherits(child, parent) {\n        // console.log('inherinting')\n        // console.log(child)\n        // console.log(parent)\n        // function Surrogate() {}\n        // Surrogate.prototype = parent.prototype;\n        // child.prototype = new Surrogate();\n        // child.prototype.constructor = child;\n        child.prototype = Object.create(parent.prototype);\n        child.prototype.constructor = child;\n    },\n    //// Return a randomly oriented vector with the given length.\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    },\n    thisIsATest() {\n        console.warn(\"this is a test\")\n    }\n}\n\n\nmodule.exports = Util; \n\n//# sourceURL=webpack://w9d2-asteroids/./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
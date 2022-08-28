var canvas = document.getElementById("game");
var context = canvas.getContext("2d");
var radius = canvas.height / 2;
context === null || context === void 0 ? void 0 : context.translate(radius, radius);
radius = radius * 0.9;
var grad;
var color;
var grad2;
var stroke;
function Draw_Circle(radius, color, stroke) {
    context === null || context === void 0 ? void 0 : context.beginPath();
    {
        if (context !== null)
            context.lineWidth = 5;
    }
    if (stroke = true) {
        if (context !== null)
            context.strokeStyle = 'black';
        context === null || context === void 0 ? void 0 : context.stroke();
    }
    context === null || context === void 0 ? void 0 : context.arc(0, 0, radius, 0, 2 * Math.PI);
    if (context !== null)
        context.fillStyle = color;
    context === null || context === void 0 ? void 0 : context.fill();
}
function Draw_Gradient() {
    context === null || context === void 0 ? void 0 : context.beginPath;
    grad = context === null || context === void 0 ? void 0 : context.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    grad === null || grad === void 0 ? void 0 : grad.addColorStop(0, '#00034d');
    grad === null || grad === void 0 ? void 0 : grad.addColorStop(0.5, '#000594');
    grad === null || grad === void 0 ? void 0 : grad.addColorStop(1, '#00034d');
    if (context !== null)
        context.strokeStyle = grad;
    if (context !== null)
        context.lineWidth = radius * 0.1;
    context === null || context === void 0 ? void 0 : context.stroke();
}
function DrawNumbers(context, radius) {
    context.font = radius * 0.125 + "px comic sans";
    context.textBaseline = "middle";
    context.textAlign = "center";
    context.fillStyle = 'green';
    for (var num = 1; num < 13; num++) {
        var ang = num * Math.PI / 6;
        context.rotate(ang);
        context.translate(0, -radius * 0.87);
        context.rotate(-ang);
        context.fillText(num.toString(), 0, 1.5);
        context.rotate(ang);
        context.translate(0, radius * 0.87);
        context.rotate(-ang);
    }
}
function drawHands(radius) {
    var time = new Date();
    var h = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    h = h % 12;
    h = (h * Math.PI / 6) + (min * Math.PI / (6 * 60)) + (sec * Math.PI / (360 * 60));
    min = (min * Math.PI / 30);
    sec = (sec * Math.PI / 30);
    Lines(context, h, radius * 0.4, radius * 0.05);
    Lines(context, min, radius * 0.825, radius * 0.03);
    Lines(context, sec, radius * 0.800, radius * 0.02);
}
function Lines(context, pos, length, width) {
    context === null || context === void 0 ? void 0 : context.beginPath();
    if (context !== null)
        context.lineWidth = width;
    if (context !== null)
        context.lineCap = 'round';
    context.strokeStyle = 'white';
    context === null || context === void 0 ? void 0 : context.moveTo(0, 0);
    context === null || context === void 0 ? void 0 : context.rotate(pos);
    context === null || context === void 0 ? void 0 : context.lineTo(0, -length);
    context === null || context === void 0 ? void 0 : context.stroke();
    context === null || context === void 0 ? void 0 : context.rotate(-pos);
}
function DrawClock() {
    Draw_Circle(radius, '#000638', true);
    Draw_Gradient();
    drawHands(radius);
    Draw_Circle(radius * 0.04, '#000594', false);
    DrawNumbers(context, radius);
}
setInterval(DrawClock, 1000);
// class Array_2d {
//     arr: Array <Array <number>> 
//     constructor (n:number, m: number){
//          this.arr = 
//         for (let i = 0; i < n; i++) {
//             for (let j = 0; j < m; j++) {
//                 this.arr[i, j] = 0                
//             }
//         }
//     }
// }
var Figure_pyramid = /** @class */ (function () {
    function Figure_pyramid() {
        this.matrix = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        this.matrix = [[0, 1, 0],
            [1, 1, 1],
            [0, 0, 0]];
    }
    Figure_pyramid.prototype.TurnRight = function () {
        this.matrix = [[0, 1, 0],
            [0, 1, 1],
            [0, 1, 0]];
    };
    Figure_pyramid.prototype.TurnLeft = function () {
        this.matrix = [[0, 1, 0],
            [1, 1, 0],
            [0, 1, 0]];
    };
    Figure_pyramid.prototype.TurnDown = function () {
        this.matrix = [[0, 0, 0],
            [1, 1, 1],
            [0, 1, 0]];
    };
    return Figure_pyramid;
}());
var Figure_stick = /** @class */ (function () {
    function Figure_stick() {
        this.matrix = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ];
        this.matrix = [[0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0]];
    }
    Figure_stick.prototype.TurnRight = function () {
        this.matrix = [[0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]];
    };
    return Figure_stick;
}());
var Figure_G = /** @class */ (function () {
    function Figure_G() {
        this.matrix = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        this.matrix = [[0, 0, 1],
            [1, 1, 1],
            [0, 0, 0]];
    }
    Figure_G.prototype.TurnUp = function () {
        this.matrix = [[1, 1, 0],
            [0, 1, 0],
            [0, 1, 0]];
    };
    Figure_G.prototype.TurnLeft = function () {
        this.matrix = [[0, 0, 0],
            [1, 1, 1],
            [1, 0, 0]];
    };
    Figure_G.prototype.TurnDown = function () {
        this.matrix = [[0, 1, 0],
            [0, 1, 0],
            [0, 1, 1]];
    };
    return Figure_G;
}());
var Figure_G_2 = /** @class */ (function () {
    function Figure_G_2() {
        this.matrix = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        this.matrix = [[1, 0, 0],
            [1, 1, 1],
            [0, 0, 0]];
    }
    Figure_G_2.prototype.TurnUp = function () {
        this.matrix = [[0, 1, 1],
            [0, 1, 0],
            [0, 1, 0]];
    };
    Figure_G_2.prototype.TurnLeft = function () {
        this.matrix = [[1, 0, 0],
            [1, 1, 1],
            [0, 0, 0]];
    };
    Figure_G_2.prototype.TurnDown = function () {
        this.matrix = [[0, 1, 0],
            [0, 1, 0],
            [1, 1, 0]];
    };
    return Figure_G_2;
}());
var Figure_Z = /** @class */ (function () {
    function Figure_Z() {
        this.matrix = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        this.matrix = [[1, 1, 0],
            [0, 1, 1],
            [0, 0, 0]];
    }
    Figure_Z.prototype.TurnDown = function () {
        this.matrix = [[0, 0, 1],
            [0, 1, 1],
            [0, 1, 0]];
    };
    return Figure_Z;
}());
var Figure_Z_2 = /** @class */ (function () {
    function Figure_Z_2() {
        this.matrix = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        this.matrix = [[0, 1, 1],
            [1, 1, 0],
            [0, 0, 0]];
    }
    Figure_Z_2.prototype.TurnLeft = function () {
        this.matrix = [[0, 1, 0],
            [0, 1, 1],
            [0, 0, 1]];
    };
    return Figure_Z_2;
}());
var Figure_square = /** @class */ (function () {
    function Figure_square() {
        this.matrix = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        this.matrix = [[1, 1, 0],
            [1, 1, 0],
            [0, 0, 0]];
    }
    return Figure_square;
}());
var test = new Figure_pyramid();
console.log(test.matrix);
test.TurnRight();
console.log(test.matrix);
test.TurnDown();
console.log(test.matrix);
test.TurnLeft();
console.log(test.matrix);

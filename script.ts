const canvas: HTMLCanvasElement =  <HTMLCanvasElement>document.getElementById("game")
const context = canvas.getContext("2d")

let radius: number = canvas.height / 2;

context?.translate(radius, radius)
radius = radius * 0.9


let grad: any
let color:string
let grad2: any

let stroke: boolean

function Draw_Circle (radius: number, color:string, stroke: boolean) {
    context?.beginPath() 
    {if (context !== null) context.lineWidth = 5} 
    if(stroke = true) {
        if (context !== null) context.strokeStyle = 'black'
        context?.stroke()
    }
    context?.arc(0,0, radius, 0 , 2*Math.PI,)
    if (context !== null) context.fillStyle = color;
    context?.fill()
    
    }


function Draw_Gradient() {
context?.beginPath
grad = context?.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05)
grad?.addColorStop(0, '#00034d')
grad?.addColorStop(0.5, '#000594')
grad?.addColorStop(1, '#00034d')
if (context !== null) context.strokeStyle = grad;
if (context !== null) context.lineWidth = radius*0.1;
context?.stroke()
}

function DrawNumbers(context:any, radius:number) {
    context.font = radius*0.125 + "px comic sans";
    context.textBaseline="middle";
    context.textAlign="center";
    context.fillStyle = 'green'
    for(let num = 1; num < 13; num++){
     let ang = num * Math.PI / 6;
      context.rotate(ang);
      context.translate(0, -radius*0.87);
      context.rotate(-ang);
      context.fillText(num.toString(), 0, 1.5);
      context.rotate(ang);
      context.translate(0, radius*0.87);
      context.rotate(-ang);
    }
}

  function drawHands(radius: number)  {
    let time = new Date()
    let h: number = time.getHours()
    let min: number = time.getMinutes()
    let sec: number = time.getSeconds()

    h=h%12
    h=(h*Math.PI/6) + (min*Math.PI/(6*60)) + (sec*Math.PI/(360*60))
    min = (min*Math.PI/30)
    sec = (sec*Math.PI/30)

    Lines(context, h, radius*0.4,  radius*0.05)
    Lines(context, min, radius*0.825,  radius*0.03)
    Lines(context, sec, radius*0.800,  radius*0.02)

  }

function Lines (context:any, pos:number, length:number, width:number) {
    context?.beginPath()
    if (context !== null)context.lineWidth = width
    if (context !== null)context.lineCap = 'round'
    context.strokeStyle = 'white'
    context?.moveTo(0, 0)
    context?.rotate(pos)
    context?.lineTo(0, -length)
    context?.stroke()
    context?.rotate(-pos)
}


  
function DrawClock(){
    Draw_Circle(radius, '#000638', true)
    Draw_Gradient()
    drawHands(radius)
    Draw_Circle(radius * 0.04, '#000594', false)
    DrawNumbers(context, radius)

}

setInterval(DrawClock, 1000)







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

class Figure_pyramid { 
    matrix = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
      ];

    constructor() {
        this.matrix = [[0, 1, 0],
                       [1, 1, 1],
                       [0, 0, 0]]
    }

    TurnRight () {
        this.matrix = [[0, 1, 0],
                       [0, 1, 1],
                       [0, 1, 0]]
    }
    TurnLeft () {
        this.matrix = [[0, 1, 0],
                       [1, 1, 0],
                       [0, 1, 0]]
    }
    TurnDown () {
        this.matrix = [[0, 0, 0],
                       [1, 1, 1],
                       [0, 1, 0]]
    }

}


class Figure_stick {
    matrix = [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
      ];

    constructor() {
        this.matrix = [[0,0,1,0],
                       [0,0,1,0],
                       [0,0,1,0],
                       [0,0,1,0]]
    }

    TurnRight () {
        this.matrix = [[0,0,0,0],
                       [1,1,1,1],
                       [0,0,0,0],
                       [0,0,0,0]]
    
}
}
class Figure_G {
    matrix = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
      ];

    constructor() {
        this.matrix = [[0, 0, 1],
                       [1, 1, 1],
                       [0, 0, 0]]
    }

    TurnUp () {
        this.matrix = [[1, 1, 0],
                       [0, 1, 0],
                       [0, 1, 0]]
    }
    TurnLeft () {
        this.matrix = [[0, 0, 0],
                       [1, 1, 1],
                       [1, 0, 0]]
    }
    TurnDown () {
        this.matrix = [[0, 1, 0],
                       [0, 1, 0],
                       [0, 1, 1]]
    }

}

class Figure_G_2 {
    matrix = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
      ];

    constructor() {
        this.matrix = [[1, 0, 0],
                       [1, 1, 1],
                       [0, 0, 0]]
    }

    TurnUp () {
        this.matrix = [[0, 1, 1],
                       [0, 1, 0],
                       [0, 1, 0]]
    }
    TurnLeft () {
        this.matrix = [[1, 0, 0],
                       [1, 1, 1],
                       [0, 0, 0]]
    }
    TurnDown () {
        this.matrix = [[0, 1, 0],
                       [0, 1, 0],
                       [1, 1, 0]]
    }

}

class Figure_Z {
    matrix = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
      ];

    constructor() {
        this.matrix = [[1, 1, 0],
                       [0, 1, 1],
                       [0, 0, 0]]
    }
    TurnDown () {
        this.matrix = [[0, 0, 1],
                       [0, 1, 1],
                       [0, 1, 0]]
    }

}
class Figure_Z_2 {
    matrix = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
      ];

    constructor() {
        this.matrix = [[0, 1, 1],
                       [1, 1, 0],
                       [0, 0, 0]]
    }
    TurnLeft () {
        this.matrix = [[0, 1, 0],
                       [0, 1, 1],
                       [0, 0, 1]]
    }
}

class Figure_square {
    matrix = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
      ];

    constructor() {
        this.matrix = [[1, 1, 0],
                       [1, 1, 0],
                       [0, 0, 0]]
    }
}


let test = new Figure_pyramid ()
   console.log(test.matrix) 
   test.TurnRight()
   console.log(test.matrix)
   test.TurnDown()
   console.log(test.matrix)
   test.TurnLeft()
   console.log(test.matrix)
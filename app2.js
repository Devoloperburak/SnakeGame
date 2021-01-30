// const { futimesSync } = require("fs");
// const mysql = require("mysql");

// const { setTimeout } = require("timers");

// const { event } = require("jquery");

// const { trace } = require("console");
// const { url } = require("inspector");


// let con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "persons"
// })

// let info = {};

// con.connect(checkError)


// function checkError(err) {if(err) throw err;}

// function queryy(callback,update) {
//     const sql= "SELECT * FROM personlist";
//     const sqlUpdate= "UPDATE personlist SET age=34 where age < 20";
//     con.query(sql,callback)
//     con.query(sqlUpdate,update);
// }

// queryy((err,data,up)=>{
//     if(err) { checkError(err);}
//             console.log(up);
//         let f = JSON.parse(JSON.stringify(data));

//             for(const key in f) {
//                 if(Object.hasOwnProperty.call(f,key) ) {
//                     const element = f[key];
//                       setInterval(() => {
//                             getDatfa(element).then(v=>{
//                                 (v==undefined ? console.log("False"):console.log(v))})

//                       }, 1000);

//                 }
//             }
// })

// async function getDatfa(data) {
//     return (
//          `Ad: ${data.Ad} / Soyad : ${data.Soyad} / Age : ${data.Age} / Cinsiyet : ${data.Cinsiyet} / Pozisyon ${data.Pozisyon}`

//      )
// }


        //     let array = [];



        // function addnewKey(arr) {
        //         let randomKey = Math.floor(Math.random() * 60);
        //         arr.push({"x":randomKey})
        // }
        // for (let index =10; index > 0; index--) {
        //     // const element = array[index];

        //         addnewKey(array);

            
        // }
        // function showKey(arr) {
        //     array.map(v=>{
        //         manipul(v);
        //     })      
            
        //     // return arr;
        // }
        // function manipul(f) {
        //        console.log(f);
        // }

    
        //     for (let index = 0; index < array.length; index++) {
        //         // const element = array[index];
        //         manipul(array[index].x)
        //         manipul(array[index].x)
        //     }

        //     let divCreate = document.createElement("div");
        //     let divUl = document.createElement("ul");
        //     let clearFalse = document.getElementById("clearFalse");
    
        //     async function todoList(Url) {
        //         let api = await fetch(Url);
        //      let tranJson = api.json();

             
        //          if(api.ok) {
        //              return tranJson;
        //             }
        //  }
         
        //      function errorCath(err) {
        //              console.log(err);
        //      }
        //      todoList("https://jsonplaceholder.typicode.com/todos").then(t=>progress(t)).catch((errorCath));

        //  function progress(data,callback) {
        //      let founded = data.filter(item => item.completed == true || item.completed == false && item.id >= 50);   

        //      for(let i = 0; i < founded.length; i++) {
        //         let divli = document.createElement("li");
        //         let inner = divli.innerHTML = `<b>User id : ${founded[i].userId} Görevler : ${founded[i].title} / Completed : ${founded[i].completed}</b>`;
        //         // let csname = divli.className="databig";
        //         divli.classList.add("databig");
        //         let buttonc = document.createElement("button");
        //         let buttonAdd = document.createElement("button");
        //         buttonc.innerHTML = "Delete";
        //         buttonAdd.innerHTML = "Add";
                
                
           
        //         // console.log(divli)
        //         buttonc.onclick=function (e) {
        //             let getIndexbutton = buttonc.getAttribute("data-index");
        //             let getIndexLi = divli.getAttribute("data-index");
                    
        //             if(getIndexbutton == getIndexLi) {
        //                 divUl.removeChild(divli);
        //             }
                    
        //         }
                
         
        //         divli.appendChild(buttonc)
        //         divli.appendChild(buttonAdd)
        //         // buttonc.setAttribute("id","element4");
        //         buttonc.setAttribute("data-index",i);
        //         buttonAdd.setAttribute("data-index",i);
        //         divli.setAttribute("data-index",i);
        //         divUl.appendChild(divli);
        //         divCreate.appendChild(divUl);

        //     }
        //  }

        //  document.body.appendChild(divCreate);

        const canvas = document.querySelector("canvas");
        const ctx = canvas.getContext("2d");

        // class Snake {
        //     constructor() {
        //         this.snake = [{"x":100,"y":30},{"x":90,"y":30},{"x":80,"y":30},{"x":70,"y":30},{"x":60,"y":30},{"x":50,"y":30},{"x":40,"y":30}];
        //         // this.count = 0;
        //         // this.x = x;
        //         // this.y = y;
        //         // this.w = w;
        //         // this.color = color;
        //         // this.food = food;
        //         this.dx = 10;
        //         this.dy = 0;
        //     }
        //     main() {
        //         // if (has_game_ended()) return;
        //         setTimeout(() => {
        //             window.onkeyup=(e)=> {
        //              this.change_direction(e)
        //             }
        //             this.clearCanvas()
        //             this.moveSnake();
        //             this.draw();
        //             // Call main again
        //             this.main();
        //         }, 100);

        //     }
        //     moveSnake() {
        //         const head = {x:this.snake[0].x + this.dx, y:this.snake[0].y + this.dy};
        //         this.snake.unshift(head);
        //         this.snake.pop();
        //     }
        //     clearCanvas() {
        //         ctx.fillRect(0, 0, canvas.width, canvas.height);
        //         // Draw a "border" around the entire canvas
        //         ctx.strokeRect(0, 0, canvas.width, canvas.height);
        //     }

        //     draw() {
        //         this.snake.forEach(this.drawSnakePart);
        //     }
        //     drawSnakePart(snakepart) {
        //         // this.snake_col = 'lightblue';
        //         // this.snake_border = 'darkblue';
        //         ctx.fillStyle = "lightblue";
        //         // Set the border colour of the snake part
        //         ctx.strokestyle = "darkblue";
        //         // Draw a "filled" rectangle to represent the snake part at the coordinates
        //         // the part is located
        //         ctx.fillRect(snakepart.x, snakepart.y, 10, 10);
        //         // Draw a border around the snake part
        //         ctx.strokeRect(snakepart.x, snakepart.y, 10, 10);
        //     }
        //     change_direction(event) {
        //         let KEYUPCODE = "ArrowUp";
        //         let KEYDOWNCODE = "ArrowDown";
        //         let KEYLEFTCODE = "ArrowLeft";
        //         let KEYRİGHTCODE = "ArrowRight";
        //         let keypress = event.key;

        //         if(KEYUPCODE === keypress) {
        //             this.dx = 0;
        //             this.dy = -10;
        //         }
        //         if(KEYLEFTCODE === keypress) {
        //             this.dx = -10;
        //             this.dy = 0;
        //         }
        //         if(KEYRİGHTCODE === keypress) {
        //             this.dx = 10;
        //             this.dy = 0;
        //         }
        //         if(KEYDOWNCODE === keypress) {
        //             this.dx = 0;
        //             this.dy = 10;
        //         }
                
        //     }
        // }


        //     new Snake().main();




            class Snake {
                constructor(){
                    this.snakeArray = [{"x":100,"y":30},{"x":90,"y":30},{"x":80,"y":30},{"x":70,"y":30},{"x":60,"y":30},{"x":50,"y":30},{"x":40,"y":30}];
        
                    this.canvas = document.querySelector("canvas")
                    this.ctx = this.canvas.getContext("2d");
                    this.food_x;
                    this.food_y;
                    this.dx = 10;
                    this.dy = 0;
                }
                main() {
                        //Döngüye Alınacak;
                        this.genfood();
                       setTimeout(() => {
                           this.clearCanvas();
                           this.log();
                           //    this.food();
                           this.drawfood();
                           this.moveSnake();
                           this.draw(); 
                           window.onkeyup=(e)=> {
                               this.controller(e)
                            }
                            this.main();
                        //    this.genfood();
                       }, 100);
                }
                log() {
                    console.log(this.food_x)
                    console.log(this.food_y)
                }
                draw() {
                    this.snakeArray.forEach(this.drawSnake)
                }
                randomFood(x,y) {
                    return Math.round(Math.random() * (x + y));
                }
                genfood() {
                    this.food_x = this.randomFood(0,canvas.width - 10); 
                    this.food_y = this.randomFood(0,canvas.height - 10); 
                }
                drawfood() {
                    this.ctx.fillStyle = 'lightgreen';
                    this.ctx.strokestyle = 'darkgreen';

                    this.ctx.fillRect(this.food_x,this.food_y,10,10)
                    this.ctx.strokeRect(this.food_x, this.food_y, 10, 10);
                }
                drawSnake(e) {
                    ctx.fillStyle = "lightblue";
                    ctx.strokeStyle="red";
                    ctx.fillRect(e.x,e.y,10,10);
                    ctx.strokeRect(e.x,e.y,10,10)
                }

                moveSnake() {
                    const head = {x:this.snakeArray[0].x + this.dx, y:this.snakeArray[0].y + this.dy};
                    // console.log(head);
                          this.snakeArray.unshift(head);
                          this.snakeArray.pop();
                }
                clearCanvas() {
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                        // Draw a "border" around the entire canvas
                    ctx.strokeRect(0, 0, canvas.width, canvas.height);
                }
                controller(e) {
                    switch (e.key) {
                        case "ArrowLeft":
                            this.dx = -10;            
                            this.dy = 0;            
                            break;
                        case "ArrowRight":
                            this.dx = 10;            
                            this.dy = 0;            
                            break;
                        case "ArrowUp": 
                        this.dx = 0;            
                            this.dy = -10;           
                            break;
                        case "ArrowDown":
                            this.dx = 0;            
                            this.dy = 10;            
                            break;
                        }
                }

            }

            new Snake().main();
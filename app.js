let arr = [6,5,7,4,2,3,1];


    // if(arr[0] > arr[1]) {
    //    arr[0] = arr[1];

    //         console.log(arr[0])
    
    // }



    //     function BubbleSort(arr) {
            


    //             for (let index = 0; index < arr.length; index++) {
                    
    //                   if(arr[index] > arr[index+1]) {
    //                       var a = arr[index];
    //                       var b = arr[index + 1];
    //                       arr[index] = b;
    //                       arr[index + 1] = a;
    //                       return arr;
    //                   }

    //             }
    //     }

    //  console.log(BubbleSort(arr));

  //   function bubble(arr) {
  //       var len = arr.length;
      
  //       for (var i = 0; i < len ; i++) {
  //         for(var j = 0 ; j < len - i - 1; j++){ // this was missing
  //         if (arr[j] > arr[j + 1]) {
  //           // swap
  //           var temp = arr[j];
  //           arr[j] = arr[j+1];
  //           arr[j + 1] = temp;
  //         }
  //        }
  //       }
  //       return arr;
  //     }
  
  // console.log(bubble([1,9,2,3,7,6,4,5,5]));





  const trace = {
    like:1
  }

  


  Object.defineProperty(trace,"add",{
    set:function (va) {return trace.like += va;}
  })

  Object.defineProperties(trace,{
      v:{
        value: 42,
        writable: true
      }
  })
const { getJSON, param } = require('jquery');
  // trace.add = 22;
  // trace.add = 12;
  // console.log(

  //   trace.like
  // )


    // let img_slide = document.querySelector(".image-slide");
    // let anext = document.querySelector("#next");
    // let aback = document.querySelector("#back");
    // let images = [
    //   "./img/pexels-photo-1640777.jpeg",
    //   "./img/pexels-photo-2974623.jpeg",
    //   "./img/pexels-photo-3845115.jpeg",
    //   "./img/pexels-photo-5419279.jpeg",
    //   "./img/pexels-photo-6033461.jpeg",
    //   "./img/pexels-photo-6345007.jpeg",
    //   "./img/pexels-photo-6469967.jpeg",
    //   "./img/pexels-photo-1640777.jpeg",
    // ];
//   function Slides(arr) {
//         let counter = 0;
//         let img = document.createElement("img");


//             if(counter == 0) {
//               img.setAttribute("src",images[counter])            
//             } 
//             anext.addEventListener("click",v=>{
//                counter = counter + 1;
//                 console.log(counter);
//                 img.setAttribute("src",images[counter])            
//                   // console.log(counter);
//                   if(counter >= arr.length-1) {
//                     counter = 0;
//                   }

//             })
//             aback.addEventListener("click",v=>{
//               counter = counter - 1;
//               console.log(counter);
//               img.setAttribute("src",images[counter])            

//                 console.log(counter)
//                 // console.log(counter);
//                 if(counter <= 0) {
//                     counter = 1;
//                 }
//             })
//             document.body.appendChild(img);
//   }

// Slides(images);


// let img_slide = document.querySelector(".image-slide");
// let anext = document.querySelector("#next");
// let aback = document.querySelector("#back");
// let images = [
//   "./img/pexels-photo-1640777.jpeg",
//   "./img/pexels-photo-2974623.jpeg",
//   "./img/pexels-photo-3845115.jpeg",
//   "./img/pexels-photo-5419279.jpeg",
//   "./img/pexels-photo-6033461.jpeg",
//   "./img/pexels-photo-6345007.jpeg",
//   "./img/pexels-photo-6469967.jpeg",
//   "./img/pexels-photo-1640777.jpeg",
// ];


//   for (let index = 0; index < images.length; index++) {
//     let element = images[index];    
//           function createElement() {
//               let img = document.createElement("img");
//                 img.setAttribute("src",element)
//                 img_slide.appendChild(img)
                
//           }
//   }
  
//   createElement();


// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

// let counter = 1;


// let images = [
//   "./img/pexels-photo-1640777.jpeg",
//    "./img/pexels-photo-2974623.jpeg",
//    "./img/pexels-photo-3845115.jpeg",
//    "./img/pexels-photo-5419279.jpeg",
//    "./img/pexels-photo-6033461.jpeg",
//    "./img/pexels-photo-6345007.jpeg",
//    "./img/pexels-photo-6469967.jpeg",
//    "./img/pexels-photo-1640777.jpeg",
//  ];
// plusSlides(counter);

// function plusSlides(n) {
//   showSlides(counter += n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.querySelector(".slide");

//       if(n > images.length) {counter = 1};

//       if(n < 1) {counter = images.length};

//       for (let index = 0; index < images.length; index++) {
//         // const element = array[index];

//           console.log(img)
//         }


//     // if(n < images.length) {
//     //   counter = counter + 1;
//     //   let img = slides.children[1].src=images[counter];
//     //   console.log(counter)
//     //     if(counter >= images.length-1) {
//     //       counter = 0;
//     //     }
//     // }
  
// }


// DataBase;

var mysql = require('mysql');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"persons"
});


  // function errShake(params) {
  //     console.log(params)
  // }

  // async function DataBase() {
  //      await con.connect(function (err) {
  //         if(err) {throw err;}
  //         console.log("Connected")
  //     })

  //     this.sql = "SELECT * FROM personlist where age";
  //     this.sql2 = "SELECT * FROM personlist where age=21";
  //     this.sql3 = "SELECT * FROM personlist ORDER BY age DESC";
  //     this.sql4 = "SELECT Ad,Soyad FROM personlist";
  //     this.sql5 = "SELECT * FROM personlist where pozisyon";


  //     con.query(this.sql2,function (err,data) {
  //             //  DataBase(err);
  //             if(err) return errShake(err);
  //             for (const iterator of data) {
  //                   let dataf = JSON.parse(JSON.stringify(iterator))
  //                     console.log(dataf)

  //                      console.log(`Name : ${(dataf.Ad==undefined) ? "":dataf.Ad} / Soyad: ${(dataf.Soyad==undefined) ? "":dataf.Soyad} / Age: ${(dataf.Age==undefined) ? "":dataf.Age} / Cinsiyet : ${(dataf.Cinsiyet==undefined) ? "":dataf.Cinsiyet} / Pozizyon : ${(dataf.Pozisyon==undefined) ? "":dataf.Pozisyon}`)
  //                 }
              
  //           })


  // }
  // DataBase();

// con.connect(function(err) {

//     let sql = "SELECT * FROM personlist";
    
//   if (err) throw err;
//   console.log("Connected!");

//     con.query(sql,function(err,res){
//       if(err) {
//         throw err;
//       } 
//         for (const a of res) {
//           let f = JSON.parse(JSON.stringify(a))

//             console.log(`Name : ${f.Ad} / Soyad: ${f.Soyad} / Age: ${f.Age} / Cinsiyet : ${f.Cinsiyet} / Pozizyon : ${f.Pozisyon}`)
//         }
//     })

// });
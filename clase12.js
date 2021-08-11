//Desafío Jquery Selectores

//Opción 1
    // $(document).ready(function(){
    //   $(".fondo5").click(function(){
    //     $(".fondo1").hide();
    //   });
    //   $(".fondo2").click(function(){
    //     $(".fondo2").show();
    //   });
    //   $(".fondo3").click(function(){
    //     $(".fondo2").hide();
    //   });
    //   $(".fondo4").click(function(){
    //     $(".fondo3").show();
    //   });
    //   $(".fondo4").click(function(){
    //     $(".fondo4").hide();
    //   });
    //   $(".fondo5").click(function(){
    //     $(".fondo1").show();
    //   });
    //   $(".fondo5").click(function(){
    //     $(".fondo5").hide();
    //   });
    //       });
      
    
//Opción 2
    // setInterval(function() {
    //   $fondo1
    // }, 5000) 

    //   $(".fondo1").on("mouseover", function(){
    //     $(".fondo2").show("slow"); 
    //     console.log("Show")
    // })
    
    // $(".fondo2").on("mouseout", function(){
    //     $(".fondo3").hide(1000); 
    //     console.log("Hide")
    // })


//Opción 3
    // let image = ""
    // var fondos=["recursos/fondo1.jpg", "recursos/fondo2.jpg","recursos/fondo3.png","recursos/fondo4.png","recursos/fondo5.png"];
    // var index=0;
    // function slide() {
    //     image.setAttribute("src",fondos[index]);
    //     index++;
    //     if(index>=fondos.length)
    //     {index=0;
    //     }
    // }
    // setInterval("slide()",2000);

  //   window.onload = function() {
      
  //     var fondos=["recursos/fondo1.jpg", "recursos/fondo2.jpg","recursos/fondo3.png","recursos/fondo4.png","recursos/fondo5.png"];
  //     var index=0;
  //     var interval = 2000;
  //     function slide() {
  //         fondos.src = fondos[index++%fondos.length];
  //     }
  
  //     setInterval(slide, interval);
  // }

//Opción 4

// const arrayFondos = ["recursos/fondo1.jpg", "recursos/fondo2.jpg","recursos/fondo3.png","recursos/fondo4.png","recursos/fondo5.png"];
  
//   setInterval(function() { 
//     let fondoActual = document.body.style.backgroundImage;
//     let i = arrayFondos.indexOf(fondoActual)  
//     $("body").css("background-image", "url(" + arrayFondos[i++] + ")" )
//     }
//     console.log(fondoActual);
//     console.log(i);
//     , 5000)

//Opción 5
const arrayFondos = ["recursos/fondo1.jpg", "recursos/fondo2.jpg","recursos/fondo3.jpg","recursos/fondo4.jpg","recursos/fondo5.jpg"];
let i = 1;
  setInterval(function() {
    $("body").css("background-image", "url(" + arrayFondos[i] + ")" )
   	
   	if (i<arrayFondos.length -1) {
   		i++
   	} else {
   		i=0;
   	}
    } , 5000)
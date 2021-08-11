//Tercera Pre Entrega Proyecto Final

//Búsqueda de juegos

// const juegos = [
//     {
//       titulo: "Resident Evil - Village",
//       aniolanzamiento: 2021 ,
//       developer: "Capcom",
//       publisher: "Capcom",
//       genre: "Horror"
//     },
//     {
//       titulo: "Cyberpunk 2077",
//       aniolanzamiento: 2020,
//       developer: "CD Projekt RED" ,
//       publisher: "CD Projekt/Bandai Namco Games/ Other",
//       genre: "FPS/Rol",
//      },
//     {
//       titulo: "Death Stranding",
//       aniolanzamiento: 2019,
//       developer: "Kojima Productions" ,
//       publisher: "Sony Interactive Entertainment/ 505 Games",
//       genre: "Open World",
//     },
//     {
//       titulo: "Horizon Zero Dawn",
//       aniolanzamiento: 2017,
//       developer: "Guerrilla Games" ,
//       publisher: "Sony Interactive Entertainment",
//       genre: "Open World",
//      }
//   ]

const juegos = fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => console.log(json))
  
  function mostrarJuegos (juegos) {
    let juegoHtml = ""
    
    for (let i=0;i<juegos.length;i++) {
    
    juegoHtml = juegoHtml + `<h1> ${juegos[i].id} </h1>
                             <p> ${juegos[i].userId} </p>
                             <p> ${juegos[i].title} </p>
                             <p> ${juegos[i].body} </p>`
    }
    
    document.getElementById("juegos").innerHTML = juegoHtml
    }
    
    function buscar(juegos) {
        const textoBusqueda = document.getElementById("searchInput").value
    
        const juegosFilter = juegos.filter((juego)=>juego.id == textoBusqueda || juego.userId == textoBusqueda)
        console.log(juegosFilter)
        mostrarJuegos(juegosFilter)
    console.log("anda")
    }

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


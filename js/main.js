//inicia funcion//
function cuestionario() {
    let mensaje
    do {
        mensaje = parseInt(prompt("Bienvenido a preguntas sobre messi... escriba 10 para comenzar"))
        if (mensaje == (10)) {
            alert("Comenzemos...")
            
        }else{
            alert("¿como no vas a querer responder preguntas del 10 campeon del mundo ? ... seguro sos fan de cp7 . bye")
        }

    } while (mensaje !== 10)

    //preguntaUno//
    let preguntaUno
    do{
        preguntaUno = parseInt(prompt("¿Cuantos Balones de oro tiene  messi ?"))
        if (preguntaUno == (7)){
            alert("Respuesta correcta .. sigamos")
        }else{
            alert("respuesta incorrecta, vuelve a intentarlo")
        }
    }while (preguntaUno !== 7)

    //preguntaDos//
    let preguntaDos
    do{
        preguntaDos = parseInt(prompt("¿Cuantos años tiene messi ?"))
        if (preguntaDos == (35)){
            alert("Respuesta correcta .. sigamos")
        }else{
            alert("respuesta incorrecta, vuelve a intentarlo")
        }
    }while (preguntaDos !== 35)

     //preguntaTres//
     let preguntaTres
     do{
         preguntaTres = parseInt(prompt("¿En cuantos clubes ah jugado messi oficialmente ?"))
         if (preguntaTres == (2)){
             alert("Respuesta correcta.. continuemos!")
         }else{
             alert("respuesta incorrecta, vuelve a intentarlo")
         }
     }while (preguntaTres !== 2)

     //preguntaCuatro//
     let preguntaCuatro
     do{
         preguntaCuatro = parseInt(prompt("¿Cuantos Goles metio messi en Qatar 2022?"))
         if (preguntaCuatro == (7)){
             alert("Respuesta correcta.. continuemos!")
         }else{
             alert("respuesta incorrecta, vuelve a intentarlo")
         }
     }while (preguntaCuatro !== 7)

      //preguntaCinco//
      let preguntaCinco
      do{
          preguntaCinco = prompt("¿Quien es el mas grande de todos?")
          if (preguntaCinco == "messi"){
              alert("Respuesta correcta hemos terminado!")
          }else{
              alert("respuesta incorrecta, vuelve a intentarlo")
          }
      }while (preguntaCinco !== "messi")

     alert("Felicitaciones sabes lo principal del goat")
}

cuestionario()

console.log("FIN");
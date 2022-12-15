// TRABAJO FINAL
// Marcos Giraudo 

var incognita = ""; //Variables definidas y reseteadas
var corriente = 0;
var resitencia = 0;
var voltaje = 0;
var resultado = 0; 
var resultVolt;
var resultCorr;
var resultRes;
var usuario;
var contadorCalculos = 0;
var usuarioLS;
let log;

usuarioLS = sessionStorage.getItem(`usuario`); // Sesion usuario
log = document.getElementById(`log`);

if (usuarioLS == null)
{
    document.getElementById("ingresar").style.display = "block";
    document.getElementById("usuario").style.display = "block";
    document.getElementById("log").style.display = "none";
} 
else {
        document.getElementById("ingresar").style.display = "none";
        document.getElementById("usuario").style.display = "none";
        log = document.getElementById(`log`);
        log.innerText = `Sesión Iniciada como: \"${usuarioLS}\"`;
        document.getElementById("salir").style.display = "block";
    }

ingresar.addEventListener(`click`,() => 
    {
        if (document.getElementById("usuario").value !== ``)
            {   
            Swal.fire({ // Uso de librerias
                    position: 'center',
                    icon: 'success',
                    title: 'Sesion Iniciada',
                    showConfirmButton: false,
                    timer: 2000
                    })
            usuarioLS = document.getElementById("usuario").value;
            usuario = document.getElementById("usuario").value;
            sessionStorage.setItem("usuario",usuario);
            document.getElementById("ingresar").style.display = "none";
            document.getElementById("usuario").style.display = "none";
            log = document.getElementById(`log`);
            log.innerText = `Sesión Iniciada como: \"${usuarioLS}\"`;
            document.getElementById("salir").style.display = "block";
            document.getElementById("log").style.display = "block";
            setTimeout(() => { // Programacion Asincrónica - Tiempo de Sesion activo - Finalizo la sesion despues de 30 segundos
                sessionStorage.removeItem("usuario");
                document.getElementById("ingresar").style.display = "block";
                document.getElementById("usuario").style.display = "block";
                document.getElementById("log").style.display = "none";
                Swal.fire({ // USO de librerias
                    icon: 'error',
                    text: '¡Tiempo de Sesion Finalizado!',
                        })
            }, 30000)
            }
        else
        {
            Swal.fire({ // USO de librerias
                icon: 'error',
                text: '¡Ingrese un usuario!',
                      })
        }
   })

salir.addEventListener(`click`,() => 
    {
        Swal.fire({ // USO de librerias
            icon: 'error',
            text: '¡ISesion finalizada Manualmente!',
            showConfirmButton: false,
            timer: 2000
          })
        sessionStorage.removeItem("usuario");
        document.getElementById("ingresar").style.display = "block";
        document.getElementById("usuario").style.display = "block";
        document.getElementById("log").style.display = "none";
    })

function Voltaje (corriente, resistencia)
    {
        return corriente*resistencia;
    }

function Corriente (voltaje, resistencia)
    {

        return voltaje/resistencia;
    }

function Resistencia (voltaje, corriente)
    {

        return voltaje/corriente;
    }

document.getElementById("resistencia").style.display = "none"; // Oculto todas las entradas
document.getElementById("voltaje").style.display = "none"; //
document.getElementById("corriente").style.display = "none"; //

let pagName = document.getElementById("pagName"); // Cambio de Color el titulo
pagName.className = `colorVerde`; // Cambio de Color el titulo
pagName.innerText += ` ONLINE`; // Agrego texto al titulo al texto del HTML

let titulo = document.createElement("div"); // Creo Un elemento
titulo.innerHTML = "<h3> ---- RESULTADOS ---- </h3>";
titulo.className ="colorRojo"; //Cambio de color
document.body.append(titulo); // Lo agrego al final del body

res.addEventListener(`click`,() => {
    document.getElementById("resistencia").style.display = "none"; //Oculto solo la entrada que es una incognita 
    document.getElementById("voltaje").style.display = "block"; 
    document.getElementById("corriente").style.display = "block"; 
    incognita = "resistencia";
});

volt.addEventListener(`click`,() => {
    document.getElementById("resistencia").style.display = "block"; //Oculto solo la entrada que es una incognita
    document.getElementById("voltaje").style.display = "none"; 
    document.getElementById("corriente").style.display = "block"; 
    incognita = "voltaje";
});

corr.addEventListener(`click`,() => {
    document.getElementById("resistencia").style.display = "block"; //Oculto solo la entrada que es una incognita
    document.getElementById("voltaje").style.display = "block"; 
    document.getElementById("corriente").style.display = "none"; 
    incognita = "corriente";
});

calcular.addEventListener(`click`,() => {
contadorCalculos++;
switch (incognita)
{
    case "voltaje":
        corriente = document.getElementById("corriente").value;
        resistencia = document.getElementById("resistencia").value;
        resultado = Voltaje (corriente,resistencia);
        resultVolt = document.createElement("div"); // Creo Un elemento
        resultVolt.innerHTML = `<h3> Calculo N°${contadorCalculos} -- > \"Usted está calculando VOLTAJE y el resultado es ${resultado} V </h3>`;
        resultVolt.className ="colorVerde"; //Cambio de color
        document.body.append(resultVolt); // Lo agrego al final del body
        break;
    
    case "corriente":
        resistencia = document.getElementById("resistencia").value;
        voltaje = document.getElementById("voltaje").value;
        resultado = Corriente (voltaje,resistencia);
        resultado == Infinity ? resultado = "INFINITO (Ha dividido por 0)" : resultado; // Uso de operadores avanzados
        resultado = (resultado || "INFINITO (Ha divido 0 sobre 0)"); // Uso de operadores avanzados
        resultCorr = document.createElement("div"); // Creo Un elemento
        resultCorr.innerHTML = `<h3> Calculo N°${contadorCalculos} -- > \"Usted está calculando CORRIENTE y el resultado es ${resultado} A </h3>`;
        resultCorr.className ="colorVerde"; //Cambio de color
        document.body.append(resultCorr); // Lo agrego al final del body
        break;

    case "resistencia":
        corriente = document.getElementById("corriente").value;
        voltaje = document.getElementById("voltaje").value;
        resultado = Resistencia (voltaje,corriente)
        resultado == Infinity ? resultado = "INFINITO (Ha dividido por 0)" : resultado; // Uso de operadores avanzados
        resultado = (resultado || `INFINITO (Ha divido 0 sobre 0)`); // Uso de operadores avanzados
        resultRes = document.createElement("div"); // Creo Un elemento
        resultRes.innerHTML = `<h3> Calculo N°${contadorCalculos} -- > \"Usted está calculando RESISTENCIA y el resultado es ${resultado} OHM </h3>`;
        resultRes.className ="colorVerde"; //Cambio de color
        document.body.append(resultRes); // Lo agrego al final del body
        break;
}
}
)
const fecha= luxon.DateTime.now().setLocale('es').toFormat('dd MMMM, yyyy');// USo de libreria para la fecha
let date = document.createElement("div"); // Creo Un elemento
date.innerHTML = fecha;
date.className ="colorBlanco"; //Cambio de color
document.body.append(date); // Lo agrego al final del body

var elemento ="";

buscar.addEventListener(`click`,() => {
         
    if (elemento !="")
         {
            let biblioteca = document.getElementById(`padre`);
            biblioteca.remove();
         }

        var busqueda = document.getElementById("busqueda").value;
        var encontrado = "no";

        fetch(`/info.json`) // USO FETCH
        .then(resp => resp.json())
        .then(info => {
                        const largo = Object.keys(info).length;
                        info.forEach((info,value) => {
                            if( busqueda == info.Nombre)
                                {
                                    encontrado = "si";
                                    elemento = `Nombre: ${info.Nombre} \nResistividad: ${info.Resistividad}\nDensidad: ${info.Densidad}\nSimbolo: ${info.Simbolo}`;
                                } 
                            if (value == (largo - 1))
                                {
                                    if (encontrado == "no")
                                        {
                                            elemento = "No se ha encontrado o no ha ingresado nada";
                                        }
                                }
                                                        })
                    let biblioteca = document.getElementById(`buscador`);
                    let elementoHtml = document.createElement(`div`); // Creo Un elemento
                    elementoHtml.id = "padre";
                    elementoHtml.innerText = elemento;                              
                    elementoHtml.className="colorAzul";
                    biblioteca.appendChild(elementoHtml);
                    }
            );
                                        });

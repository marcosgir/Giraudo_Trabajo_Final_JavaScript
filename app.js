// ENTREGABLE 03
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
let password;
var usuarioLS;
let log;

usuarioLS = sessionStorage.getItem(`usuario`); // Sesion usuario
log = document.getElementById(`log`);

if (usuarioLS == null)
{
    document.getElementById("ingresar").style.display = "block";
    document.getElementById("usuario").style.display = "block";
    document.getElementById("contraseña").style.display = "block";
    document.getElementById("log").style.display = "none";
} else {
        document.getElementById("ingresar").style.display = "none";
        document.getElementById("usuario").style.display = "none";
        document.getElementById("contraseña").style.display = "none";
        log = document.getElementById(`log`);
        log.innerText = `Sesión Iniciada como: \"${usuarioLS}\"`;
        document.getElementById("salir").style.display = "block";
        }

ingresar.addEventListener(`click`,() => 
    {
        if (document.getElementById("usuario").value !== ``)
        {
        usuarioLS = document.getElementById("usuario").value;
        usuario = document.getElementById("usuario").value;
        password = document.getElementById("contraseña").value;
        sessionStorage.setItem("usuario",usuario);
        document.getElementById("ingresar").style.display = "none";
        document.getElementById("usuario").style.display = "none";
        document.getElementById("contraseña").style.display = "none";
        log = document.getElementById(`log`);
        log.innerText = `Sesión Iniciada como: \"${usuarioLS}\"`;
        document.getElementById("salir").style.display = "block";
        document.getElementById("log").style.display = "block";
        }
        else{
            log = document.getElementById(`log`);
            log.innerText = `!!Ingrese al menos el usuario!!`;
            document.getElementById("log").style.display = "block";
        }
   })

salir.addEventListener(`click`,() => 
    {
        sessionStorage.removeItem("usuario");
        sessionStorage.removeItem("usuario1");
        sessionStorage.removeItem("usuarioLS");
        document.getElementById("ingresar").style.display = "block";
        document.getElementById("usuario").style.display = "block";
        document.getElementById("contraseña").style.display = "block";
        document.getElementById("log").style.display = "none";
    })

var informacionUsuario = JSON.stringify({
        nombre: usuarioLS,
        empresa: `solving`,
        email: `prueba@hotmail.com`,
        telefono: `035334144522`,
    })
    
var informacion = JSON.parse (informacionUsuario);

    sessionStorage.setItem(`usuario1`,JSON.stringify({
    nombre: informacion.nombre,
    empresa: informacion.empresa,
    email: informacion.email,
    telefono: informacion.telefono,
    }))

console.log(usuarioLS);
console.log(informacionUsuario);
console.log(usuario);
console.log(informacion.nombre);

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
titulo.innerHTML = "<h3> ---- RESULTADO ---- </h3>";
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
switch (incognita)
{
    case "voltaje":
        corriente = document.getElementById("corriente").value;
        resistencia = document.getElementById("resistencia").value;
        resultado = Voltaje (corriente,resistencia);
        resultVolt = document.createElement("div"); // Creo Un elemento
        resultVolt.innerHTML = `<h3> \"Usted está calculando VOLTAJE y el resultado es ${resultado} V </h3>`;
        resultVolt.className ="colorVerde"; //Cambio de color
        document.body.append(resultVolt); // Lo agrego al final del body
        break;
    
    case "corriente":
        resistencia = document.getElementById("resistencia").value;
        voltaje = document.getElementById("voltaje").value;
        resultado = Corriente (voltaje,resistencia);
        resultCorr = document.createElement("div"); // Creo Un elemento
        resultCorr.innerHTML = `<h3> \"Usted está calculando CORRIENTE y el resultado es ${resultado} A </h3>`;
        resultCorr.className ="colorVerde"; //Cambio de color
        document.body.append(resultCorr); // Lo agrego al final del body
        break;

    case "resistencia":
        corriente = document.getElementById("corriente").value;
        voltaje = document.getElementById("voltaje").value;
        resultado = Resistencia (voltaje,corriente)
        resultRes = document.createElement("div"); // Creo Un elemento
        resultRes.innerHTML = `<h3> \"Usted está calculando RESISTENCIA y el resultado es ${resultado} OHM </h3>`;
        resultRes.className ="colorVerde"; //Cambio de color
        document.body.append(resultRes); // Lo agrego al final del body
        break;
}
}
)


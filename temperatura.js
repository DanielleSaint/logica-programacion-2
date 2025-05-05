const traerDom =  document.getElementById("contenedor-temperatura");
const convertidor = document.getElementById("boton");
convertidor.addEventListener("click", function () {
    const celsius = Number(document.getElementById("celsius").value);
    //--------------(0 °C × 9/5) + 32 = 32 °F
    // -------------0 °C + 273.15 = 273.15 °K

    const convertidorF = ((celsius * 9/5) + 32).toFixed(2);
    const convertidorK = (celsius + 273.15).toFixed(2);

    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `°Celsius: ${celsius} / °Fahrenheit: ${convertidorF} / °Kelvin: ${convertidorK}`;
    console.log(`°Celsius: ${celsius} / °Fahrenheit: ${convertidorF} / °Kelvin: ${convertidorK}`);
    
    const inputCelsius = document.querySelector("input");
    inputCelsius.value = "";
});




const apareceranNumeros = document.querySelector(".apareceran-numeros-numeros");

const todosBotonesNumeros = document.querySelectorAll(".botones-numeros");

let numero1 = "";
let valor1;
let numero2 = "";
let valor2;
let calculoBooleano = false;
let valor3;
let calculoPulsado = "";

// Aquí seleccionamos los números
todosBotonesNumeros.forEach((boton)=>{
    boton.addEventListener("click", () =>{
        if(calculoBooleano == false){
            const numeroPulsado = boton.textContent;
            numero1 += numeroPulsado;
            apareceranNumeros.innerHTML = numero1;
            // valor1 = Number(numero1)
            
        }else if ( calculoBooleano == true){
            const numeroPulsado = boton.textContent;
            numero2 += numeroPulsado;
            apareceranNumeros.innerHTML = numero2;
            // valor2 = Number(numero2)
        }
    })
});


// Aquí pulsamos a un calculo para calcular una operación
const calculo = document.querySelectorAll(".calculos");
calculo.forEach((botonCalculo) =>{
    botonCalculo.addEventListener("click", ()=>{
        apareceranNumeros.innerHTML = botonCalculo.textContent;
        calculoPulsado = botonCalculo.textContent;
        calculoBooleano = true;
        // console.log(valor1)
        
    })
    
});

// Porcentajes
const porcentaje = document.querySelector(".seleccion-porcentaje");
porcentaje.addEventListener("click", ()=>{
    if(calculoBooleano == false){
        let verPantalla = (numero1 + "%");
        numero1 = (numero1 * 0.01);
        apareceranNumeros.innerHTML = verPantalla;
        calculoBooleano = true;
        porcentajeUsadoValor1 = true;
        porcentajeUsado = true;
        
        
    }else if ( calculoBooleano == true){
        let verPantalla = (numero2 + "%");
        numero2 = (numero2 * 0.01);
        apareceranNumeros.innerHTML = verPantalla;
        porcentajeUsadoValor2 = true;
        porcentajeUsado = true;
    }
});


// Resultado final
const igual = document.querySelector(".seleccion-I");
igual.addEventListener("click", ()=>{
    
    if(calculoPulsado == "+"){
        colocarTodoANumero()
        valor3 = valor1 + valor2;
        apareceranNumeros.innerHTML = valor3;
        volverACalcular();
    }else if(calculoPulsado == "-"){
        colocarTodoANumero()
        valor3 = valor1 - valor2;
        apareceranNumeros.innerHTML = valor3;
        volverACalcular();
    }else if(calculoPulsado == "/"){
        colocarTodoANumero()
        valor3 = valor1 / valor2;
        apareceranNumeros.innerHTML = valor3;
        volverACalcular();
    }else if(calculoPulsado == "*"){
        colocarTodoANumero()
        valor3 = valor1 * valor2;
        apareceranNumeros.innerHTML = valor3;
        volverACalcular();
    }

});


// Calculo decimal

const coma = document.querySelector(".seleccion-C");
coma.addEventListener("click", ()=>{
    if(calculoBooleano == false){
        numero1 = numero1 + "." 
        apareceranNumeros.innerHTML =  numero1;
    }else if(calculoBooleano == true){
        numero2 = numero2 + "." 
        apareceranNumeros.innerHTML =  numero2;
    }
});



// Borrar todo
const borrarTodo = document.querySelector(".boton-borrar-todo");
borrarTodo.addEventListener("click", ()=>{
    calculoBooleano = false;
    apareceranNumeros.innerHTML = ``;
    numero1 = "";
    numero2 = "";
    valor1;
    valor2;
    valor3;
    calculoPulsado = "";
});


// Borrar un solo número


const eliminarUnNumero = document.querySelector(".eliminar-un-numero");
eliminarUnNumero.addEventListener("click", ()=>{
    if(calculoBooleano == false){
        numero1 = numero1.slice(0, -1);
        apareceranNumeros.innerHTML = numero1;
        console.log(valor1)
    }else if(calculoBooleano == true){
        
    }
})



// funciones
// funcion para colocar todo a numero
function colocarTodoANumero(){
    valor1 = Number(numero1);
    valor2 = Number(numero2);
}

// funcion para hacer de vuelta los calculos
function volverACalcular(){
    numero1 = valor3;
    numero2 = "";
}





// Botón Vacio
const botonVacio = document.querySelector(".boton-vacio");

botonVacio.addEventListener("click", ()=>{
    window.location.href = "https://marketingjdr.com/";
})










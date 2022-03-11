const lanzar = document.getElementById('lanzar');
const dado1 = document.querySelector('.dado1');
const dado2 = document.querySelector('.dado2');
const validacion = document.getElementById('validacion');
const reiniciar = document.getElementById('reiniciar');

let dado = 1;
let total = 0;



const borrarImagen = ()=>{ 
    if(dado == 1){
        if(dado1.firstChild && dado2.firstChild){
            dado1.removeChild(dado1.firstChild);
            dado2.removeChild(dado2.firstChild);
        }else if(dado1.firstChild){
            dado1.removeChild(dado1.firstChild);
        }else{
        }
        
    }
}

const pintarImagen = (image)=>{
    if(dado ===1){
        dado1.innerHTML = `<img src="./img/dice-${image}.png"  />`
    }else{
        dado2.innerHTML = `<img src="./img/dice-${image}.png"  />`
    }

}
const validar = ()=>{
    if(total ==7){
        validacion.innerHTML = '<p>Felicidades!!! GANADOR</p>'
        total = 0;
    }else{
        validacion.innerHTML = '<p>Perdiste :(</p>'
        total = 0;
    }
}


const lanzarDado = ()=>{
    const resultado = Math.floor(Math.random()*6+1);
    if(dado===1){
        pintarImagen(resultado);
        total += resultado;
        dado = 2;
        
        

    }else{
        pintarImagen(resultado);
        total +=resultado;
        validar();
        dado =1;
    }
    
}



reiniciar.addEventListener('click',()=>{
    dado =1;
    total = 0;
       borrarImagen();
    
})

lanzar.addEventListener('click',()=>{
    borrarImagen()        
    lanzarDado();

})
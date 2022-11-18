const imagenes = document.querySelectorAll('.img-Galeria ')
const imagenessalir = document.querySelector('.agregar-imagen')
const contenedorcerrar = document.querySelector('.imagen-salir')
const menu1p = document.querySelector('.menu')

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
    aparecerimagen(imagen.getAttribute('src'))
        })
})


contenedorcerrar.addEventListener('click', (e)=>{
    if(e.target !== imagenessalir){
        contenedorcerrar.classList.toggle('show')
        imagenessalir.classList.toggle('showImage')
        menu1p.style.opacity = '1'
    
    }
    
})

const aparecerimagen = (imagen)=>{
    imagenessalir.src = imagen;
    contenedorcerrar.classList.toggle('show')
    imagenessalir.classList.toggle('showImage')
    menu1p.style.opacity = '0'

}



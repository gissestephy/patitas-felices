var datos = `
<div class="mySwiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
<div class="swiper-wrapper" id="swiper-wrapper">`;

for (let i = 0; i < mascota.length; i++) {
datos += `
<div class="swiper-slide" role="group" aria-label="${mascota[i].id}/36">
    <div class="card" style="overflow: visible;">
        <div class="card-image" id="fotos">            
            <img class="activator" src="${mascota[i].img}">
            <div class="info-container activator"><i class="fa-solid fa-paw fa-lg"></i></div>
            <p id="nombre-card">${mascota[i].nombre}</p>        
        </div>
        
        <div class="card-content" id="contenido-tarjeta">
            <span class="card-title activator" id="span-nombre-card"></span>
            <button class="adoptar">Adoptar</button>
        </div>

        <div class="card-reveal" style="display: none; transform: translateY(0%);">
            <span class="card-title activator text-darken-4" id="cont-nombre"><p id="nombre-margen">${mascota[i].nombre}</p>
                <div class="info-container activator"><i class="fa-sharp fa-solid fa-xmark fa-lg" id="cruz"></i></div>
            </span>

            <ul class="activator" style="list-style: none;">
                  <li>Raza: ${mascota[i].raza}</li>
                  <li>Genero: ${mascota[i].genero}</li>
                  <li>Edad: ${mascota[i].edad}</li>
                  <li>Tamaño: ${mascota[i].tamaño}</li>
                  <li>Pelaje: ${mascota[i].pelaje}</li>                  
                  <li>Vacunado: ${mascota[i].vacunado}</li>
                  <li>Desparacitado: ${mascota[i].desparasitado}</li>
                  <li>Castrado: ${mascota[i].castrado}</li>
                  <li>Personalidad: ${mascota[i].personalidad}</li>  
            </ul>
        </div>
    </div>
</div>
      `;
}

document.getElementById("info-animals").innerHTML = datos;

var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });
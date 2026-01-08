const contenedorVenta = document.querySelector("#contenedor-venta");

if (contenedorVenta) {

    let limite = propiedadesEnVenta.length

    if (contenedorVenta.dataset.limite) {
        limite = Number(contenedorVenta.dataset.limite)
    }

    for (let contador = 0; contador < limite; contador++) {
        const venta = propiedadesEnVenta[contador];
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("col-md-4", "mb-4");

        let textoPets;
        if (venta.pets === true) {
            textoPets = "🐶 Mascotas permitidas";
        } else {
            textoPets = "🚫 No se permiten mascotas";
        }

        let textoSmoke;
        if (venta.smoke === true) {
            textoSmoke = "🚬 Se permite fumar";
        } else {
            textoSmoke = "🚭 No se permite fumar";
        }


        tarjeta.innerHTML = `
  <div class="card">
    <img src="${venta.imagen}" class="card-img-top">
    <div class="card-body">
        <h5 class="card-title">${venta.nombre}</h5>
        <p>${venta.descripcion}</p>
        <p>${venta.ubicacion}</p>
        <p>${venta.habitaciones} habitaciones</p>
        <p><strong>$${venta.costo}</strong></p>
        <p>${textoPets}</p>
        <p>${textoSmoke}</p>

    </div>
  </div>
`;
        contenedorVenta.appendChild(tarjeta);
    }
}



const contenedorAlquiler = document.querySelector("#contenedor-alquiler");

if (contenedorAlquiler) {

    let limite = propiedadesEnAlquiler.length

    if (contenedorAlquiler.dataset.limite) {
        limite = Number(contenedorAlquiler.dataset.limite)
    }


    for (let contador = 0; contador < limite; contador++) {
        const alquiler = propiedadesEnAlquiler[contador];
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("col-md-4", "mb-4");

        let textoPets;
        if (alquiler.pets === true) {
            textoPets = "🐶 Mascotas permitidas";
        } else {
            textoPets = "🚫 No se permiten mascotas";
        }

        let textoSmoke;
        if (alquiler.smoke === true) {
            textoSmoke = "🚬 Se permite fumar";
        } else {
            textoSmoke = "🚭 No se permite fumar";
        }


        tarjeta.innerHTML = `
  <div class="card">
    <img src="${alquiler.imagen}" class="card-img-top">
    <div class="card-body">
        <h5 class="card-title">${alquiler.nombre}</h5>
        <p>${alquiler.descripcion}</p>
        <p>${alquiler.ubicacion}</p>
        <p>${alquiler.habitaciones} habitaciones</p>
        <p><strong>$${alquiler.costo}</strong></p>
        <p>${textoPets}</p>
        <p>${textoSmoke}</p>
    </div>
  </div>
`;

        contenedorAlquiler.appendChild(tarjeta);
    }
}
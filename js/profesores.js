//json
const profesoresData = [
    {
        id: 1,
        nombre: "Carlos Méndez",
        especialidad: "Especialista en Ahumados",
        descripcion: "Campeón nacional de barbacoa 2023. Más de 15 años dominando los hornos ahumadores.",
        foto: "https://www.nacion.com/resizer/v2/XQK3ISLYINBD7HW57BVVTKXTIA.jpg?smart=true&auth=5ddb6a4a6087e0353c45f584791c35dec96132c36a8565e79624ed68b148a9af&width=1440",
        correo: "cmendez@asadoMaestro.org",
        cursosQueImparte: "Fundamentos del Ahumado, Brisket Nivel Maestro"
    },
    {
        id: 2,
        nombre: "Valeria Torres",
        especialidad: "Experta en Cortes Premium",
        descripcion: "Chef internacional especializada en maduración de carnes y sellado a altas temperaturas.",
        foto: "https://img.freepik.com/fotos-premium/mujer-joven-preparando-comida-parrilla_960396-777873.jpg",
        correo: "vtorres@asadoMaestro.org",
        cursosQueImparte: "Dominando el Tomahawk, Picaña al Espiedo"
    },
    {
        id: 3,
        nombre: "Roberto Alves",
        especialidad: "Asado Tradicional Argentino",
        descripcion: "Portador de secretos familiares centenarios para el asado a la estaca perfecto.",
        foto: "https://media.istockphoto.com/id/1475820514/es/foto/hombre-feliz-aprobando-barbacoa-en-el-campo.jpg?s=170667a&w=0&k=20&c=ZiRgZ-zKL5BJtcv8t-w0TTODSccREJTdnqnNiENsU4M=",
        correo: "ralves@asadoMaestro.org",
        cursosQueImparte: "Asado a la Estaca, Parrillada Argentina"
    },
    {
        id: 4,
        nombre: "Javier Ruiz",
        especialidad: "Maestro Salsero y Guarniciones",
        descripcion: "Creador de adobos y salsas que elevan cualquier corte de carne al siguiente nivel.",
        foto: "https://images.stockcake.com/public/9/c/8/9c814af5-0b79-40a4-87e9-90ffc7c68e04_large/chef-grilling-outdoors-stockcake.jpg",
        correo: "jruiz@asadoMaestro.org",
        cursosQueImparte: "Salsas y Adobos para Parrilla, Guarniciones de Fuego"
    }
];

let contenedorProfesores;
let modalInstancia;

// main que llama al resto de funciones
document.addEventListener("DOMContentLoaded", function () {
    contenedorProfesores = document.getElementById("profesores-container");
    modalInstancia = new bootstrap.Modal(document.getElementById('profesorModal'));
    renderizarProfesores();
});

//funcion que arma el html de cada profesor
function renderizarProfesores() {
    contenedorProfesores.innerHTML = "";

    profesoresData.forEach(function (profesor) {
        // columna
        const colDiv = document.createElement("div");
        colDiv.className = "col-md-6 col-lg-3";
        // tarjeta
        const cardDiv = document.createElement("div");
        cardDiv.className = "card h-100 shadow-sm border-0 text-center p-3 cursor-pointer";
        cardDiv.style.cursor = "pointer"; //efecto de clickeable
        // guardamos el id del profesor en la tarjeta
        cardDiv.setAttribute("data-id", profesor.id);
        cardDiv.addEventListener("click", function () {
            abrirModal(profesor.id);
        });

        // foto
        const imagen = document.createElement("img");
        imagen.src = profesor.foto;
        imagen.alt = profesor.nombre;
        imagen.className = "profesor-img rounded-circle mx-auto mt-3 mb-3";
        // cuerpo
        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const nombre = document.createElement("h3");
        nombre.className = "card-title h5 fw-bold";
        nombre.textContent = profesor.nombre;

        const especialidad = document.createElement("p");
        especialidad.className = "text-warning small mb-2 fw-bold";
        especialidad.textContent = profesor.especialidad;

        const descripcion = document.createElement("p");
        descripcion.className = "card-text text-muted small";
        descripcion.textContent = profesor.descripcion;

        // armar tarjeta
        cardBody.appendChild(nombre);
        cardBody.appendChild(especialidad);
        cardBody.appendChild(descripcion);
        cardDiv.appendChild(imagen);
        cardDiv.appendChild(cardBody);

        colDiv.appendChild(cardDiv);
        contenedorProfesores.appendChild(colDiv);
    });
}

//funcion para inyectar los datos en el modal y mostrarlo
function abrirModal(idProfesor) {
    // itera el array para buscar el profe
    const profesor = profesoresData.find(function (p) {
        return p.id === idProfesor;
    });

    if (profesor) {
        document.getElementById("modal-foto").src = profesor.foto;
        document.getElementById("modal-nombre").textContent = profesor.nombre;
        document.getElementById("modal-especialidad").textContent = profesor.especialidad;
        document.getElementById("modal-descripcion").textContent = profesor.descripcion;
        document.getElementById("modal-correo").textContent = profesor.correo;
        document.getElementById("modal-cursos").textContent = profesor.cursosQueImparte;

        modalInstancia.show();
    }
}

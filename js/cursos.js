// json de cursos
const cursosData = [
    {
        nombre: "Dominando el Tomahawk",
        descripcion: "Aprende la técnica de sellado inverso perfecta para cortes gruesos.",
        categoria: "Premium",
        duracion: "3 semanas",
        precio: "15.000 CRC",
        imagen: "https://allegromarinade.com/wp-content/uploads/2022/10/tomahawk-ribeye-2048x1366.jpg"
    },
    {
        nombre: "Picaña al Espiedo",
        descripcion: "Secretos brasileños para una picaña jugosa y crujiente.",
        categoria: "Premium",
        duracion: "2 semanas",
        precio: "13.000 CRC",
        imagen: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/blogs/2147510916/images/6a0848-6d0f-6756-ad1f-284abd365144_Pican_a_espada_-_1200.jpg"
    },
    {
        nombre: "Brisket Nivel Maestro",
        descripcion: "El rey de los cortes ahumados. Control de temperatura y humo.",
        categoria: "Premium",
        duracion: "5 semanas",
        precio: "18.000 CRC",
        imagen: "https://static.vecteezy.com/system/resources/previews/022/774/303/non_2x/american-barbecue-beef-brisket-illustration-ai-generative-free-photo.jpg"
    },
    {
        nombre: "Asado a la Estaca",
        descripcion: "Aprende la cocción lenta a la llama abierta, domando el viento y el fuego.",
        categoria: "Tradicional",
        duracion: "3 semanas",
        precio: "13.000 CRC",
        imagen: "https://www.serargentino.com/public/images/2020/07/15955286030-asado-a-la-estaca-hpico-773x458.jpg"
    },
    {
        nombre: "Parrillada Argentina",
        descripcion: "Técnicas de encendido, choripanes y tira de asado perfecta.",
        categoria: "Tradicional",
        duracion: "2 semanas",
        precio: "12.000 CRC",
        imagen: "https://i.pinimg.com/originals/eb/9d/7a/eb9d7a7192de5a873f57303deaba7481.jpg"
    },
    {
        nombre: "Fundamentos del Ahumado",
        descripcion: "Domina la técnica del low & slow. Aprende a controlar el flujo de aire y maderas.",
        categoria: "Ahumados",
        duracion: "4 semanas",
        precio: "14.000 CRC",
        imagen: "https://media.istockphoto.com/photos/smoked-meat-products-picture-id1072439078?k=20&m=1072439078&s=612x612&w=0&h=P8Fp25DkvrgaJTt8p9f3cviEhBDmLzlvG3Yvxl_04qA="
    }
];

let contenedorCursos;
let inputBusqueda;
let selectCategoria;

// funcion principal al cargar la pagina
document.addEventListener("DOMContentLoaded", function () {
    contenedorCursos = document.getElementById("cursos-container");
    inputBusqueda = document.getElementById("buscar-input");
    selectCategoria = document.getElementById("categoria-select");

    renderizarCursos(cursosData);
    //funcionamiento del filtrado
    inputBusqueda.addEventListener("input", filtrarCursos);
    selectCategoria.addEventListener("change", filtrarCursos);
});

//funcion que arma el html de cada curso
function renderizarCursos(cursos) {
    //empieza sin nada
    contenedorCursos.innerHTML = "";
    // si no hay cursos que coincidan, muestra un mensaje
    if (cursos.length === 0) {
        contenedorCursos.innerHTML = "<div class='col-12 text-center text-muted'><p>No se encontraron cursos </p></div>";
        return;
    }

    //forEach para recorrer y construir cada tarjeta
    cursos.forEach(function (curso) {
        const colDiv = document.createElement("div");
        colDiv.className = "col-md-4";

        const cardDiv = document.createElement("div");
        cardDiv.className = "card h-100 shadow-sm border-0";

        // posicion de la imagen y los badges relativa obvio
        const imgContainer = document.createElement("div");
        imgContainer.className = "position-relative";

        const badgeCategoria = document.createElement("span");
        badgeCategoria.className = "badge bg-navy position-absolute top-0 start-0 m-3";
        badgeCategoria.textContent = curso.categoria;

        const badgePrecio = document.createElement("span");
        badgePrecio.className = "badge bg-success position-absolute top-0 end-0 m-3";
        badgePrecio.textContent = curso.precio;

        const imagen = document.createElement("img");
        imagen.src = curso.imagen;
        imagen.alt = curso.nombre;
        imagen.className = "card-img-top curso-img";

        //inserta los badges y la imagen dentro del contenedor
        imgContainer.appendChild(badgeCategoria);
        imgContainer.appendChild(badgePrecio);
        imgContainer.appendChild(imagen);

        //cuerpo de la tarjeta
        const cardBody = document.createElement("div");
        cardBody.className = "card-body d-flex flex-column";

        const titulo = document.createElement("h3");
        titulo.className = "card-title h5 fw-bold";
        titulo.textContent = curso.nombre;

        const descripcion = document.createElement("p");
        descripcion.className = "card-text text-muted small flex-grow-1";
        descripcion.textContent = curso.descripcion;

        //footer de la tarjeta
        const footerDiv = document.createElement("div");
        footerDiv.className = "d-flex justify-content-between align-items-center mt-3 pt-3 border-top";

        const duracion = document.createElement("span");
        duracion.className = "text-muted small";
        duracion.textContent = curso.duracion;

        const btnVerMas = document.createElement("a");
        btnVerMas.href = "#";
        btnVerMas.className = "btn btn-sm btn-academy";
        btnVerMas.textContent = "Ver más";

        footerDiv.appendChild(duracion);
        footerDiv.appendChild(btnVerMas);

        //se arma todo al final
        cardBody.appendChild(titulo);
        cardBody.appendChild(descripcion);
        cardBody.appendChild(footerDiv);

        cardDiv.appendChild(imgContainer);
        cardDiv.appendChild(cardBody);

        colDiv.appendChild(cardDiv);

        contenedorCursos.appendChild(colDiv);
    });
}

//funcion filtrar por texto y categoria al mismo tiempo
function filtrarCursos() {
    const textoBuscado = inputBusqueda.value.toLowerCase().trim();
    const categoriaSeleccionada = selectCategoria.value;

    // filter para dejar solo los cursos que cumplan ambas condiciones
    const cursosFiltrados = cursosData.filter(function (curso) {
        // comprobamos coincidencia de texto en nombre o descripcion
        const coincideTexto = curso.nombre.toLowerCase().includes(textoBuscado) ||
            curso.descripcion.toLowerCase().includes(textoBuscado);

        const coincideCategoria = categoriaSeleccionada === "Todos" || curso.categoria === categoriaSeleccionada;
        return coincideTexto && coincideCategoria;
    });

    renderizarCursos(cursosFiltrados);
}

// array de cursos destacados
const cursosDestacados = [
    {
        nombre: "Fundamentos del Ahumado",
        descripcion: "Domina la técnica del low & slow. Aprende a controlar el flujo de aire, seleccionar las maderas correctas y lograr el codiciado anillo de humo perfecto en cortes clásicos.",
        imagen: "https://media.istockphoto.com/photos/smoked-meat-products-picture-id1072439078?k=20&m=1072439078&s=612x612&w=0&h=P8Fp25DkvrgaJTt8p9f3cviEhBDmLzlvG3Yvxl_04qA=",
        categoria: "Ahumados"
    },
    {
        nombre: "Cortes Premium: Tomahawk & Ribeye",
        descripcion: "Técnicas de sellado inverso y manejo de altas temperaturas para costras perfectas.",
        imagen: "https://allegromarinade.com/wp-content/uploads/2022/10/tomahawk-ribeye-2048x1366.jpg",
        categoria: "Cortes Premium"
    },
    {
        nombre: "Asado a la Estaca Tradicional",
        descripcion: "Aprende la cocción lenta a la llama abierta, domando el viento y el fuego.",
        imagen: "https://www.serargentino.com/public/images/2020/07/15955286030-asado-a-la-estaca-hpico-773x458.jpg",
        categoria: "Asado a la Estaca"
    }
];

// evento que se dispara cuando carga el documento
document.addEventListener("DOMContentLoaded", function () {
    // contenedor donde van a ir los cursos
    const contenedorCursos = document.getElementById("cursos-destacados-container");

    for (let i = 0; i < cursosDestacados.length; i++) {
        const curso = cursosDestacados[i];
        // div de la columna
        const colDiv = document.createElement("div");
        colDiv.className = "col-md-4";
        // div de la tarjeta
        const cardDiv = document.createElement("div");
        cardDiv.className = "card h-100 shadow-sm";
        // cuerpo de la tarjeta
        const cardBody = document.createElement("div");
        cardBody.className = "card-body d-flex flex-column";


        // titulo del curso
        const titulo = document.createElement("h3");
        titulo.className = "card-title h5 fw-bold";
        titulo.textContent = curso.nombre;
        // descripcion
        const descripcion = document.createElement("p");
        descripcion.className = "card-text text-muted small flex-grow-1";
        descripcion.textContent = curso.descripcion;
        // contenedor de la imagen y badge
        const imgContainer = document.createElement("div");
        imgContainer.className = "position-relative";

        // badge de categoria
        const badge = document.createElement("span");
        badge.className = "badge bg-navy position-absolute top-0 start-0 m-3";
        badge.textContent = curso.categoria;
        // imagen del curso
        const imagen = document.createElement("img");
        imagen.src = curso.imagen;
        imagen.alt = curso.nombre;
        imagen.className = "card-img-top curso-img";

        //imagen y el badge a su contenedor
        imgContainer.appendChild(badge);
        imgContainer.appendChild(imagen);

        // contenedor del boton
        const btnContainer = document.createElement("div");
        btnContainer.className = "d-flex justify-content-between align-items-center mt-3 pt-3 border-top";

        // boton ver mas
        const btnVerMas = document.createElement("a");
        btnVerMas.href = "cursos.html";
        btnVerMas.className = "btn btn-sm btn-academy";
        btnVerMas.textContent = "Ver más";

        btnContainer.appendChild(btnVerMas);



        //tarjeta completa
        cardBody.appendChild(titulo);
        cardBody.appendChild(descripcion);
        cardBody.appendChild(imgContainer);
        cardBody.appendChild(btnContainer);

        cardDiv.appendChild(cardBody);
        colDiv.appendChild(cardDiv);

        contenedorCursos.appendChild(colDiv);
    }
});

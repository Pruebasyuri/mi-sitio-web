const noticias = [
  {
    titulo: "Cyberpunk 2077",
    texto: "Ray Tracing extremo.",
    link: "cyberpunk.html",
    img: "https://i.ytimg.com/vi/_75FAksd0xw/maxresdefault.jpg"
  },
  {
    titulo: "Alan Wake 2",
    texto: "Terror realista.",
    link: "alanwake.html",
    img: "https://geeko-media.lesoir.be/wp-content/uploads/2023/11/ALAN-WAKE-AFF-1068x580.jpg"
  },
  {
    titulo: "Wukong",
    texto: "Gráficos next-gen.",
    link: "wukong.html",
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/2358720/header.jpg"
  },
  {
    titulo: "RTX 4060 Ti",
    texto: "DLSS 3 y alto rendimiento.",
    link: "rtx4060ti.html",
    img: "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/news/geforce-rtx-4060-4060ti/geforce-rtx-4060-family-ogimage.jpg"
  },
  {
    titulo: "RTX 5090",
    texto: "Potencia extrema.",
    link: "rtx5090ti.html",
    img: "https://cdn.wccftech.com/wp-content/uploads/2025/01/NVIDIA-GeForce-RTX-5090-HD-1920x1056.jpeg"
  },
  {
    titulo: "Intel i7-14700K",
    texto: "Potencia híbrida.",
    link: "cpu.html",
    img: "https://m.media-amazon.com/images/I/61C1DOLRK4L.jpg"
  }
];

// 🔥 detectar página actual
const paginaActual = window.location.pathname.split("/").pop();

// 🔥 filtrar (NO repetir página actual)
const noticiasFiltradas = noticias.filter(n => n.link !== paginaActual);

// mezclar (Fisher-Yates)
function mezclar(array){
  for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// seleccionar (puedes cambiar 5 → 3 si quieres)
const seleccion = mezclar([...noticiasFiltradas]).slice(0, 5);

// renderizar
const contenedor = document.getElementById("sidebar-news");

let html = "";

seleccion.forEach(noticia => {
  html += `
    <a href="${noticia.link}" class="side-card">
      <img src="${noticia.img}">
      <div class="side-info">
        <h4>${noticia.titulo}</h4>
        <p>${noticia.texto}</p>
      </div>
    </a>
  `;
});

contenedor.innerHTML = html;

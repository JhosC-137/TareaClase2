const escena = new THREE.Scene();
const renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizador.domElement);


const ancho = window.innerWidth;
const alto = window.innerHeight;
const camara = new THREE.OrthographicCamera(ancho / -2, ancho / 2, alto / 2, alto / -2, 0.1, 1000);
camara.position.z = 10;


const geometría = new THREE.PlaneGeometry(100, 100); 
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const rectángulo = new THREE.Mesh(geometría, material);
escena.add(rectángulo);

function animacion() {
    requestAnimationFrame(animacion);
    rectángulo.rotation.z += 0.01;  
    renderizador.render(escena, camara);
}

animacion();

window.addEventListener('resize', () => {
    const ancho = window.innerWidth;
    const alto = window.innerHeight;
    camara.left = ancho / -2;
    camara.right = ancho / 2;
    camara.top = alto / 2;
    camara.bottom = alto / -2;
    camara.updateProjectionMatrix();
    renderizador.setSize(ancho, alto);
});


const escena1 = new THREE.Scene();
const renderizador1 = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizador.domElement);

const anchoPantalla = window.innerWidth;
const altoPantalla = window.innerHeight;
const camaraPrincipal = new THREE.OrthographicCamera(
    anchoPantalla / -2, anchoPantalla / 2,
    altoPantalla / 2, altoPantalla / -2,
    0.1, 1000
);
camaraPrincipal.position.z = 10;


const geoRect = new THREE.PlaneGeometry(100, 100); 
const matRect = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const mallaRect = new THREE.Mesh(geoRect, matRect);
escena.add(mallaRect);


const formaHex = new THREE.Shape();
const radioHex = 50;
for (let i = 0; i < 6; i++) {
    const ang = (i / 6) * Math.PI * 2;
    const xHex = Math.cos(ang) * radioHex;
    const yHex = Math.sin(ang) * radioHex;
    if (i === 0) {
        formaHex.moveTo(xHex, yHex);
    } else {
        formaHex.lineTo(xHex, yHex);
    }
}
formaHex.closePath();

const geoHex = new THREE.ShapeGeometry(formaHex);
const matHex = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true });
const mallaHex = new THREE.Mesh(geoHex, matHex);
mallaHex.position.x = 150;
escena.add(mallaHex);


function animarEscena() {
    requestAnimationFrame(animarEscena);
    mallaRect.rotation.z += 0.01;
    mallaHex.rotation.z += 0.01;
    renderizador.render(escena, camaraPrincipal);
}

animarEscena();

window.addEventListener('resize', () => {
    const nuevoAncho = window.innerWidth;
    const nuevoAlto = window.innerHeight;
    camaraPrincipal.left = nuevoAncho / -2;
    camaraPrincipal.right = nuevoAncho / 2;
    camaraPrincipal.top = nuevoAlto / 2;
    camaraPrincipal.bottom = nuevoAlto / -2;
    camaraPrincipal.updateProjectionMatrix();
    renderizador.setSize(nuevoAncho, nuevoAlto);
});
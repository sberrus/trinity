//#region ESCENA Y CAMARA
/**
 * CREANDO ESCENA Y CAMARAS.
 */

//Declaración de la escena para crear una perspectiva del elemento a mostrar en la pantalla.
const scene = new THREE.Scene();

//Declaración de la camara de perspectiva que es como se va a "VER" en la escena.
const camera = new THREE.PerspectiveCamera(
    20, // Field Of View(FOV): Extención del área visible desde la cámara.
    window.innerWidth / window.innerHeight, // Aspect Ratio (AR): Es el ratio de aspecto de la imágen. Este suele ser el ancho del viewport por el alto. Esto se hace para evitar que las imagenes se distorcionen
    0.1, //near: Esto declara que tan cerca pueden verse o no los elementos en la camara de perspectiva.
    1000 //far: Esto define que tan lejos puede ver la camara. Lo que este más entre la medida near y far es lo que se renderizará.
);

const renderer = new THREE.WebGLRenderer(); //Esta función es la que se encarga de configurar el hardware para poder renderizar de manera eficiente los elementos que deseamos renderizar.

renderer.setSize(window.innerWidth, window.innerHeight); //Esta propiedad define las dimensiones del objeto que se va a renderizar.

document.body.appendChild(renderer.domElement); //Insertamos el elemento en el DOM. Este elemento será renderizado como un canvas.
//#endregion

//#region CUBO
/**
 * CREANDO CUBO
 */

const geometry = new THREE.BoxGeometry(); //Esta instancia contiene todos los puntos de los vertices y rellena las caras del objeto, en este caso un cubo. **SER VERÁ MÁS EN DETALLE EN UN FUTURO.

const material = new THREE.MeshBasicMaterial({
    //Declaramos el color del material que se va a renderizar. Preferiblemente enviar hex code.
    color: 0x00ff00,
}); //Esta instancia crea el "material" con el que se renderizará el objeto al que se lo vayamos a aplciar. Digamos que es la capa que mostrará el objeto al ususario. En este caso usaremos un color básico para demostrar como funciona.

const cube = new THREE.Mesh(geometry, material); //Esta instancia se encarga de crear el objeto y recibe como parametros tanto el objeto que vamos a renderizar como la capa de material que hemos declarado anteriormente. Luego inserta estos elementos dentro de la escena.

const rotationController = (e) => {
    if (e.code == "NumpadAdd") {
        rotationX += 0.01;
        rotationY += 0.01;
    }
    if (e.code == "NumpadSubtract") {
        rotationX -= 0.01;
        rotationY -= 0.01;
    }
};

//#endregion

//#region VECTORES

const points = [];
//Coordenadas de los vertices de cada linea del vector.
points.push(new THREE.Vector3(-5, -3.7, 0));
points.push(new THREE.Vector3(0, 3.7, 0));
points.push(new THREE.Vector3(5, -3.7, 0));
points.push(new THREE.Vector3(-5, -3.7, 0));

//Renderizando las líneas a partir de las coordenadas.
const geometryLine = new THREE.BufferGeometry().setFromPoints(points);

//Uniendo vector y material
const line = new THREE.Line(geometryLine, material);
scene.add(line);

//#endregion

//#region RENDERIZADO

scene.add(cube); //Este método agrega el elemento creado anteriormente a la escena.

camera.position.z = 25;

/**
 * RENDERIZANDO ESCENA.
 */
rotationX = 0.05;
rotationY = 0.05;

function animate() {
    requestAnimationFrame(animate); // Este método nos permite diparar acciones las veces que la pantalla se refresca esto varia dependiendo la tasa de refresco de la pantalla donde se vaya a renderizar. En este caso estamos creando un método de recursividad para poder renderizar la escena.
    renderer.render(scene, camera); //renderizamos la escena las veces que nos permita la tasa de refresco de la pantalla.

    /**
     * ANIMANDO EL CUBO
     */

    cube.rotation.x += rotationX;
    cube.rotation.y += rotationY;
}

animate();

//#endregion

//#region CONTROLADORES CAMARA
const cameraController = (e) => {
    if (e.code == "ArrowUp") {
        camera.position.y = camera.position.y + 0.15;
    }
    if (e.code == "ArrowDown") {
        camera.position.y = camera.position.y - 0.15;
    }
    if (e.code == "ArrowLeft") {
        camera.position.x = camera.position.x - 0.15;
    }
    if (e.code == "ArrowRight") {
        camera.position.x = camera.position.x + 0.15;
    }
};

window.addEventListener("keydown", (e) => {
    cameraController(e);
    rotationController(e);
});

//#endregion

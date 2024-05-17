document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('stl-container1');
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    var controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; 
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = true; 
    controls.minDistance = 10; 
    controls.maxDistance = 500; 

    var isMouseOver = false;
    container.addEventListener('mouseenter', () => { isMouseOver = true; });
    container.addEventListener('mouseleave', () => { isMouseOver = false; });

    var loader = new THREE.STLLoader();
    loader.load('source/stl_1.stl', function (geometry) {
        var material = new THREE.MeshNormalMaterial();
        var mesh = new THREE.Mesh(geometry, material);
        mesh.scale.set(0.9, 0.9, 0.9);
        scene.add(mesh);
        camera.position.z = 100;

        function animate() {
            requestAnimationFrame(animate);
            if (!isMouseOver) {
                mesh.rotation.x += 0.01;
                mesh.rotation.y -= 0.01;
            }
            controls.update();
            renderer.render(scene, camera);
        }
        animate();
    });
});

// Ripeti lo stesso pattern per stl-container2 e stl-container3

document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('stl-container2');
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    var controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; 
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = true; 
    controls.minDistance = 10; 
    controls.maxDistance = 500; 

    var isMouseOver = false;
    container.addEventListener('mouseenter', () => { isMouseOver = true; });
    container.addEventListener('mouseleave', () => { isMouseOver = false; });

    var loader = new THREE.STLLoader();
    loader.load('source/stl_2.stl', function (geometry) {
        var material = new THREE.MeshNormalMaterial();
        var mesh = new THREE.Mesh(geometry, material);
        mesh.scale.set(0.5, 0.5, 0.5);
        scene.add(mesh);
        camera.position.z = 100;

        function animate() {
            requestAnimationFrame(animate);
            if (!isMouseOver) {
                mesh.rotation.x += 0.01;
                mesh.rotation.y -= 0.01;
            }
            controls.update();
            renderer.render(scene, camera);
        }
        animate();
    });
});

// Ripeti lo stesso pattern per stl-container2 e stl-container3


// Ripeti lo stesso pattern per stl-container2 e stl-container3

document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('stl-container4');
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    var controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; 
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = true; 
    controls.minDistance = 10; 
    controls.maxDistance = 500; 

    var isMouseOver = false;
    container.addEventListener('mouseenter', () => { isMouseOver = true; });
    container.addEventListener('mouseleave', () => { isMouseOver = false; });

    var loader = new THREE.STLLoader();
    loader.load('source/stl_4.stl', function (geometry) {
        var material = new THREE.MeshNormalMaterial();
        var mesh = new THREE.Mesh(geometry, material);
        mesh.scale.set(0.1, 0.1, 0.1);
        scene.add(mesh);
        camera.position.z = 100;

        function animate() {
            requestAnimationFrame(animate);
            if (!isMouseOver) {
                mesh.rotation.x -= 0.01;
                mesh.rotation.y += 0.01;
            }
            controls.update();
            renderer.render(scene, camera);
        }
        animate();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('stl-container5');
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    var controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; 
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = true; 
    controls.minDistance = 10; 
    controls.maxDistance = 500; 

    var isMouseOver = false;
    container.addEventListener('mouseenter', () => { isMouseOver = true; });
    container.addEventListener('mouseleave', () => { isMouseOver = false; });

    var loader = new THREE.STLLoader();
    loader.load('source/stl_5.stl', function (geometry) {
        var material = new THREE.MeshNormalMaterial();
        var mesh = new THREE.Mesh(geometry, material);
        mesh.scale.set(0.6, 0.6, 0.6);
        scene.add(mesh);
        camera.position.z = 100;

        function animate() {
            requestAnimationFrame(animate);
            if (!isMouseOver) {
                mesh.rotation.x -= 0.01;
                mesh.rotation.y += 0.01;
            }
            controls.update();
            renderer.render(scene, camera);
        }
        animate();
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('stl-container6');
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    var controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; 
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = true; 
    controls.minDistance = 10; 
    controls.maxDistance = 500; 

    var isMouseOver = false;
    container.addEventListener('mouseenter', () => { isMouseOver = true; });
    container.addEventListener('mouseleave', () => { isMouseOver = false; });

    var loader = new THREE.STLLoader();
    loader.load('source/stl_6.stl', function (geometry) {
        var material = new THREE.MeshNormalMaterial();
        var mesh = new THREE.Mesh(geometry, material);
        mesh.scale.set(0.3, 0.3, 0.3);
        scene.add(mesh);
        camera.position.z = 100;

        function animate() {
            requestAnimationFrame(animate);
            if (!isMouseOver) {
                mesh.rotation.x -= 0.01;
                mesh.rotation.y += 0.01;
            }
            controls.update();
            renderer.render(scene, camera);
        }
        animate();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var closeButton = document.getElementById('closeButton');
    closeButton.style.display = 'block'; // Mostra il bottone solo quando il DOM è completamente caricato
    closeButton.onclick = function() {
        window.location.href = 'index.html';
    };
});

document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', (e) => {
        if(cursor) { // Controlla se l'elemento esiste per evitare errori
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        }
    });
}); 
// Get the canvas element
const canvas = document.getElementById("three-canvas");
// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas });

// Set renderer size to match window
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x36ba01, 0.7); // Set the color here (in this example, a dark gray color)

// Add a cube to the scene (representing flames)
const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 ); 
const material = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 1 });
const object = new THREE.Mesh(geometry, material);
scene.add(object);

// Create the wireframe geometry from the existing cube geometry
const wireframeGeometry = new THREE.WireframeGeometry(geometry);
const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00,  transparent: true, opacity: 1});
const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);

// Add the wireframe to the scene
scene.add(wireframe);


// Position the camera
camera.position.z = 30;
camera.position.y = 2.5;

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate and scale the flames to create the effect
    object.rotation.x += 0.01;
    object.rotation.y += 0.01;
    object.scale.x = 1 + Math.sin(Date.now() * 0.001) * 0.2;
    object.scale.y = 1 + Math.cos(Date.now() * 0.001) * 0.2;

    wireframe.rotation.x += 0.01;
    wireframe.rotation.y += 0.01;
    wireframe.scale.x = 1 + Math.sin(Date.now() * 0.001) * 0.2;
    wireframe.scale.y = 1 + Math.cos(Date.now() * 0.001) * 0.2;

    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Update canvas container height to match the content
    const canvasContainer = document.getElementById("canvas-container");
    canvasContainer.style.height = `${document.body.clientHeight}px`;
});

// Start the animation loop
animate();


// Problem: there was a canvas overflow whenever you resized the window
// Solution: Handle window resize
function resizeCanvasContainer() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Update canvas container to fill the entire height of the parent
    const canvasContainer = document.getElementById("canvas-container");
    canvasContainer.style.height = "100%";
}

// Initial call to set the canvas container height
resizeCanvasContainer();

// Handle window resize
window.addEventListener('resize', resizeCanvasContainer);


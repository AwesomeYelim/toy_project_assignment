const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, //field of view(시야각)
  window.innerWidth / window.innerHeight, //aspect ratio(종횡비)
  0.1, // near
  1000 //far 절단면
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(); //큐브를 만드려면, BoxGeometry가 필요 -> 꼭짓점 (vertices) 와 면(faces)이 포함
const material = new THREE.MeshBasicMaterial({ color: 0x201CDA });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube); //(0,0,0) 속성을 가짐

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();

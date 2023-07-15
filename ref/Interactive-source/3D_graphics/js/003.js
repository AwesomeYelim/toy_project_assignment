// 기본 세팅 코드 scene, camera, renderer

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  500
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);



// 재질 정의 (선을 그리기 위해서는 LineBasicMaterial나 LineDashedMaterial를 사용)
const material = new THREE.LineBasicMaterial({ color: 0xfffff });

// 꼭지점에 대한 기하학을 정의
const points = [];
points.push(new THREE.Vector3(-15, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(15, 0, 0));
points.push(new THREE.Vector3(0, -10, 0));
points.push(new THREE.Vector3(-15, 0, 0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(geometry, material);

scene.add(line);
renderer.render(scene, camera)


function animate() {
    requestAnimationFrame(animate);
    line.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  
animate()
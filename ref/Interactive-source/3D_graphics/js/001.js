const {
    WebGLRenderer,
    PerspectiveCamera,
    Scene,
    PointLight,
    MeshLambertMaterial,
    Mesh,
    OctahedronGeometry,
  } = THREE;

  function render() {
    const WIDTH = 400;
    const HEIGHT = WIDTH;
    const RADIUS = WIDTH / 6;
    // 공간
    const scene = new Scene();
    const renderer = new WebGLRenderer({
      alpha: true, // 투명한 배경설정
      antialias: true,
    });
    //   const geometry = new THREE.Geometry();
    //   geometry.vertices.push(
    //     new THREE.Vector3(-10, 10, 0),
    //     new THREE.Vector3(-10, -10, 0),
    //     new THREE.Vector3(10, -10, 0)
    //   );

    //   geometry.faces.push(new THREE.Face3(0, 1, 2));
    // 이렇게 길게 코드를 작성하지 않아도 three.js 에서는 다양한 형태의 Geometry를 제공하고 있음

    // 피사체
    
    const geometry = new OctahedronGeometry(RADIUS, 0);

    const material = new MeshLambertMaterial({ color: 0xff3030 });

    const mesh = new Mesh(geometry, material);

    scene.add(mesh); // scene.add 함수를 통해 공간에 추가한 물헤는 (0,0,0)위치에 놓이게 됨
    mesh.position.z = -RADIUS * 10;

    // 카메라

    const FIELD_OF_VIEW = 20; // 카메라의 시야각을 의미함
    const ASPECT = WIDTH / HEIGHT; // 시야의 가로세로비를 의미함
    const NEAR = 0.1; // 렌더링을 할 물체 거리의 하한값
    const FAR = 10000; // 렌더링 할 물체거리의 상한값

    const camera = new PerspectiveCamera(
      FIELD_OF_VIEW,
      ASPECT,
      NEAR,
      FAR
    );

    // 그려내기

    renderer.setSize(WIDTH, HEIGHT);

    const container = document.querySelector("#three");
    container.appendChild(renderer.domElement);

    // 빛과 질감
    const pointLight = new PointLight(0xffffff, 0.5);

    pointLight.position.x = 100;
    pointLight.position.y = 100;
    pointLight.position.x = 30;

    scene.add(pointLight);

    //움직임

    const octahedron = new Mesh(new OctahedronGeometry(RADIUS), material);

    // const faces = octahedron.geometry.faces
    console.log(octahedron);
    // faces.map((face, i) => {
    //   face.color.setHex(0xff3030)
    // })
    octahedron.position.z = -RADIUS * 10;
    scene.add(octahedron);
    function update() {
      const speed = Math.random() / 20;
      octahedron.rotation.x += speed;
      octahedron.rotation.y += speed;
      octahedron.rotation.z += speed;
      renderer.render(scene, camera);
      requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  render();
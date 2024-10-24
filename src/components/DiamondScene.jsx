"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Diamond({ onLand, landingYPosition = -1, onClickWave }) {
  const ref = useRef();
  const [isFalling, setFalling] = useState(true);
  const [floatDirection, setFloatDirection] = useState(1);
  const [spinTimer, setSpinTimer] = useState(0);
  const [spinSpeed, setSpinSpeed] = useState(0.01);
  const [hovered, setHovered] = useState(false);
  const [lineColor, setLineColor] = useState("white");
  const [fastSpinDuration, setFastSpinDuration] = useState(0);
  const [cursorStyle, setCursorStyle] = useState("auto");
  const [hoverScale, setHoverScale] = useState([1.5, 3.5, 1.5]);

  useFrame(() => {
    if (isFalling) {
      ref.current.position.y += floatDirection * 0.01;
      if (ref.current.position.y > 5) setFloatDirection(-1);
      if (ref.current.position.y < 4.5) setFloatDirection(1);
    }

    setSpinTimer((timer) => timer + 0.01);

    if (spinTimer > 2.5 && spinTimer <= 5) {
      setSpinSpeed(0.02);
    } else if (spinTimer > 5 && spinTimer <= 7.5) {
      setSpinSpeed(0.025);
    } else if (spinTimer > 7.5 && spinTimer <= 10) {
      setSpinSpeed(0.03);
    } else if (spinTimer > 10 && spinTimer <= 12.5) {
      setSpinSpeed(0.035);
    } else if (spinTimer > 12.5 && spinTimer <= 15) {
      setSpinSpeed(0.03);
    } else if (spinTimer > 15 && spinTimer <= 17.5) {
      setSpinSpeed(0.025);
    } else if (spinTimer > 17.5 && spinTimer <= 20) {
      setSpinSpeed(0.02);
    } else if (spinTimer > 20) {
      setSpinSpeed(0.015);
      setSpinTimer(0);
    }

    if (fastSpinDuration > 0) {
      ref.current.rotation.y += 0.1;
      setFastSpinDuration(fastSpinDuration - 0.01);
    } else {
      ref.current.rotation.y += spinSpeed;
    }

    if (isFalling && ref.current.position.y > landingYPosition) {
      ref.current.position.y -= 0.02;
    } else if (isFalling) {
      setFalling(false);
      onLand();
    }

    ref.current.scale.set(...hoverScale);
  });

  const randomColor = () =>
    `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;

  return (
    <mesh
      ref={ref}
      position={[0, 5, 0]}
      style={{ pointerEvents: "auto", cursor: cursorStyle }}
      onPointerOver={() => {
        setHovered(true);
        setCursorStyle("pointer");
        setHoverScale([1.65, 3.65, 1.65]); // Zoom in slightly
      }}
      onPointerOut={() => {
        setHovered(false);
        setCursorStyle("auto");
        setHoverScale([1.5, 3.5, 1.5]); // Reset scale
      }}
      onClick={() => {
        const newColor = randomColor();
        setLineColor(newColor);
        setFastSpinDuration(0.5);
        onClickWave(newColor);
      }}
    >
      <octahedronGeometry args={[1, 0]} />
      <meshBasicMaterial color={lineColor} wireframe wireframeLinewidth={11} />
    </mesh>
  );
}

function DiamondWave({ color }) {
  const ref = useRef();
  const [scale, setScale] = useState(1);
  const [replayCount, setReplayCount] = useState(0);
  const [waveSpeed, setWaveSpeed] = useState(0.3);

  useFrame(() => {
    if (scale < 17) {
      setScale(scale + waveSpeed);
    } else if (replayCount < 2) {
      setScale(1);
      setReplayCount(replayCount + 1);
      setWaveSpeed(waveSpeed * 0.4);
    }
  });

  const points = [];
  const segments = 4;

  for (let i = 0; i < segments; i++) {
    const angle = (i / segments) * Math.PI * 2;
    const x = Math.cos(angle);
    const y = Math.sin(angle);
    points.push(new THREE.Vector3(x, y, 0));
  }

  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const position = new THREE.Vector3(0, -1, 0);

  return (
    <lineLoop ref={ref} position={position} scale={[scale, scale, scale]}>
      <primitive object={geometry} attach="geometry" />
      <lineBasicMaterial color={color} opacity={2} transparent />
    </lineLoop>
  );
}

function ClickWave({ color, onComplete }) {
  const ref = useRef();
  const [scale, setScale] = useState(1);
  const [waveSpeed, setWaveSpeed] = useState(0.15);

  useFrame(() => {
    if (scale < 14) {
      setScale(scale + waveSpeed);
    } else {
      onComplete();
    }
  });

  const points = [];
  const segments = 4;

  for (let i = 0; i < segments; i++) {
    const angle = (i / segments) * Math.PI * 2;
    const x = Math.cos(angle);
    const y = Math.sin(angle);
    points.push(new THREE.Vector3(x, y, 0));
  }

  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const position = new THREE.Vector3(0, -1, 0);

  return (
    <lineLoop ref={ref} position={position} scale={[scale, scale, scale]}>
      <primitive object={geometry} attach="geometry" />
      <lineBasicMaterial color={color} opacity={2} transparent />
    </lineLoop>
  );
}

export default function DiamondScene() {
  const [showWave, setShowWave] = useState(false);
  const [waveColor, setWaveColor] = useState("white");
  const [clickWaveColor, setClickWaveColor] = useState(null);

  const handleLand = () => {
    setShowWave(true);
  };

  const handleClickWave = (color) => {
    setClickWaveColor(color);
  };

  const handleClickWaveComplete = () => {
    setClickWaveColor(null);
  };

  return (
    <Canvas style={{ height: "75vh", background: "black" }}>
      <ambientLight intensity={0.2} />
      <spotLight
        position={[0, 10, 10]}
        intensity={1}
        angle={0.3}
        penumbra={1}
      />
      <pointLight position={[-10, 10, -10]} intensity={0.5} />
      <Diamond
        onLand={handleLand}
        landingYPosition={-0.3}
        onClickWave={handleClickWave}
      />
      {showWave && <DiamondWave color={waveColor} />}
      {clickWaveColor && (
        <ClickWave
          color={clickWaveColor}
          onComplete={handleClickWaveComplete}
        />
      )}
      <OrbitControls enabled={false} />
    </Canvas>
  );
}

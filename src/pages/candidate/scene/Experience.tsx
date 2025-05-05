import React from "react";
import { House } from "../../../components/threeD/house";
import { Dog } from "../../../components/threeD/dog";
import { Physics, RigidBody } from "@react-three/rapier";
import { Plane } from "@react-three/drei";
import Skybox from "../../../components/threeD/skybox";
import { Jellyfish } from "../../../components/threeD/jellyfish";
import { Flower } from "../../../components/threeD/flower";

const Experience = () => {
  return (
      <group>
        {/* <Jellyfish/> */}
        <Flower/>
      </group>
  );
};

export default Experience;

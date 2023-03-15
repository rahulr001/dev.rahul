import React from 'react'
import { technologies } from '../Constants'
import { BallCanvas } from './canvas'
import { SectionWraper } from '../Utils'
const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
}

export default SectionWraper(Tech,"")
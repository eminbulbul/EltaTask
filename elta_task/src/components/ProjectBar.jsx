import React from 'react'
import Arrow from '../assets/Arrow'
import LocationBar from '../assets/LocationBar';
import OpenSansText from './styledComponents/OpenSansText';
const ProjectBar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
      <Arrow/>
      <OpenSansText>Back:</OpenSansText>
      <LocationBar/>
      <OpenSansText>Next:</OpenSansText>
      <Arrow style={{transform:"rotate(180deg)"}}/>
    </div>
  )
}

export default ProjectBar;
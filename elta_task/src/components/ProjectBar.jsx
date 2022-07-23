import React from 'react'
import Arrow from '../assets/Arrow'
import LocationBar from '../assets/LocationBar';
import OpenSansText from './styledComponents/OpenSansText';
const ProjectBar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
      <Arrow style={{height:"1.27rem",width:"1.27rem"}}/>
      <OpenSansText style={{fontSize:"1.11rem"}}>Back:</OpenSansText>
      <LocationBar/>
      <OpenSansText style={{fontSize:"1.11rem"}}>Next:</OpenSansText>
      <Arrow style={{transform:"rotate(180deg)",height:"1.27rem",width:"1.27rem"}}/>
    </div>
  )
}
export default ProjectBar;
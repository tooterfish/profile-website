import './ProjectCard.css'

import { useState, useEffect } from 'react'

export default function ProjectCard({project, i}) {
  const {title, subtitle, description, link, code, img} = project
  const [faded, setFaded] = useState('faded')

  useEffect(() => {
    setTimeout(() => {setFaded('unfaded')}, 250*i)
  }, [])

  return (<>
    <div className={`card ${faded}`}>
      <h2>{title}</h2>
      <h4>{subtitle}</h4>
      <div className={'image'}></div>
      {description}
      {code ? <div className={'code'}><a href={code}>code</a></div> : ''}
    </div>
  </>) 
}
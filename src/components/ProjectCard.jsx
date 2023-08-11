import './ProjectCard.css'

import { useState, useEffect } from 'react'

export default function ProjectCard({project, i}) {
  const {title, subtitle, description, link, code, img, tech} = project
  const [faded, setFaded] = useState('faded')

  useEffect(() => {
    setTimeout(() => {setFaded('unfaded')}, 250*i)
  }, [])

  return (<>
    <div className={`card ${faded}`}>
      <div className={'head'}>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
      </div>
      <div className={'image'}></div>
      <div className={'description'}>{description}</div>
      <div className={'foot'}>
        {code ? <div className={'code'}><a href={code}>code</a></div> : ''}
        <div className={'tech-container'}>{tech.map(tech => <div className={'tech'}>{tech}</div>)}</div>
      </div>
    </div>
  </>) 
}
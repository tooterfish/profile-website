import './Projects.css'
import {projectList, projectData} from '../project-data'
import ProjectCard from './ProjectCard'

export default function() {
  return (<>
    <h1>Projects</h1>
    <h3>Behold, my stuff!</h3>
    <div className={'project-container'}>
      {projectList.map((projectId, i) => <ProjectCard key={i} i={i} project={projectData[projectId]}/>)}
    </div>
  </>)
}
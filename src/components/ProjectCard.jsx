import React from 'react'

const ProjectCard = (props) => {
    const { title, description, link } = props.data;
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="pingback">
                View Project
            </a>
        </div>


    )
}

export default ProjectCard;

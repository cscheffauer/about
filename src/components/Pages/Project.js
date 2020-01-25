import React from 'react'

import './Projects.scss';




const Project = ({ name, status, demourl, repourl, technologies }) => {

    return (
        <div className="projectBoxWrapper">
            <div className="innerProjectBox">
                <div className="innerProjectWrapper">
                    <div className="projectHeadline">
                        {name}
                    </div>
                    <div className={`projectStatus ${status.cssclass}`}>
                        {status.label}
                    </div>
                    {
                        status.label === "online" &&
                        <div className="projectURLs">
                            <div className="projectDemoURLs">
                                <img className="iconURL" alt="Project Demo Icon" src={`./icons/demo.png`} />
                                <p onClick={() => window.open(demourl.url, "_blank")}>{demourl.label}</p>
                            </div>
                            <div className="projectRepoURLs">
                                <img className="iconURL" alt="Project Repo Icon" src={`./icons/repo.png`} />
                                <p onClick={() => window.open(repourl.url, "_blank")}>{repourl.label}</p>
                            </div>
                        </div>
                    }
                    <div className="projectTechnologies">
                        <div className="projectTechnologyList">
                            {
                                technologies.map((technology, i) => {
                                    return <p key={i}> {technology.name}</p>
                                })
                            }
                        </div>
                    </div>

                    {
                        status.label === "coming soon" &&
                        <div className="projectPictures">
                            
                        </div>
                    }

                </div>
            </div>
        </div >
    )
}

export default Project;

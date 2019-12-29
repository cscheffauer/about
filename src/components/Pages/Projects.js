import React from 'react'
import Slider from "react-slick";

import './Projects.scss';


const Projects = () => {

        var settings = {
                dots: true
        };
        return (
                <div className="outerBox">
                        <Slider className="innerBox" {...settings}>
                                {
                                        this.state.projects.map((project, i) => {
                                                return (
                                                        <Project key={i} name={project.name} demourl={project.demourl} repourl={project.repourl} technologies={project.technologies} />
                                                );
                                        })
                                }



                                <div>
                                        <img src="http://placekitten.com/g/400/200" />
                                </div>
                                <div>
                                        <img src="http://placekitten.com/g/400/200" />
                                </div>
                                <div>
                                        <img src="http://placekitten.com/g/400/200" />
                                </div>
                                <div>
                                        <img src="http://placekitten.com/g/400/200" />
                                </div>
                        </Slider>
                </div>
        )
}

export default Projects;
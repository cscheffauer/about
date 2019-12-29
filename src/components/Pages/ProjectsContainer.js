import React, { Component } from 'react'
import Slider from "react-slick";

import Project from './Project'

import { projects } from '../../data/projects'

import './Projects.scss';

class Projects extends Component {
        constructor() {
                super();
                this.state = {
                        projects: projects,
                        settings: {
                                dots: true
                        }
                };
        }

        render() {
                return (< div className="outerBox" >
                        <Slider className="innerBox" {...this.state.settings}>
                                {
                                        this.state.projects.map((project, i) => {
                                                return (
                                                        <Project key={i} name={project.name} status={project.status} demourl={project.demourl} repourl={project.repourl} technologies={project.technologies} />
                                                );
                                        })
                                }
                        </Slider>
                </div >)
        }
}

export default Projects;
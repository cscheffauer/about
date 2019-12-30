import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import Project from './Project'

import { projects } from '../../data/projects'

import './Projects.scss';

class Projects extends Component {
        constructor(props, context) {
                super(props, context);

                this.handleSelect = this.handleSelect.bind(this);

                this.state = {
                        index: 0,
                        direction: null,
                        fade: true,
                        interval: null,
                        touch: true,
                        projects: projects,
                };
        }

        handleSelect(selectedIndex, e) {
                this.setState({
                        index: selectedIndex,
                        direction: e.direction
                });
        }

        componentDidMount() {
                this.setState({ projects: projects })
        }

        render() {
                const { index, direction, fade, interval, touch, projects } = this.state;
                return (
                        < div className="projectOuterBox" >
                                <Carousel
                                        activeIndex={index}
                                        direction={direction}
                                        fade={fade}
                                        interval={interval}
                                        onSelect={this.handleSelect}
                                        touch={touch}>{
                                                projects.map((project, i) => {
                                                        return (
                                                                <Carousel.Item key={i}>
                                                                        <Project name={project.name} status={project.status} demourl={project.demourl} repourl={project.repourl} technologies={project.technologies} />
                                                                </Carousel.Item>
                                                        );
                                                })

                                        }
                                </Carousel>
                        </div >)
        }
}

export default Projects;
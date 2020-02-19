import React, { Component, Fragment } from 'react'
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
                        displayPictureModal: false,
                        displayPicturesSRC: '',
                        displayPicturesCaption: ''
                };
        }


        projectPreviewClick = (src, caption) => {
                this.setState({ displayPictureModal: true, displayPicturesSRC: src, displayPicturesCaption: caption });
        }

        projectPictureOnClose = () => {
                this.setState({ displayPictureModal: false });
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
                return (<Fragment>
                        {this.state.displayPictureModal &&
                                <div className="projectPictureModal">
                                        <span className="projectPictureClose" onClick={() => this.projectPictureOnClose()}>&times;</span>
                                        <img draggable="false" src={this.state.displayPicturesSRC} alt={this.state.displayPicturesCaption} className="projectPicture" />
                                        <div className="projectPictureCaption">{this.state.displayPicturesCaption}</div>
                                </div>
                        }
                        <div className="projectOuterBox" >
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
                                                                        <Project name={project.name} status={project.status} demourl={project.demourl} repourl={project.repourl} technologies={project.technologies} pictures={project.pictures} projectPreviewClick={this.projectPreviewClick} />
                                                                </Carousel.Item>
                                                        );
                                                })

                                        }
                                </Carousel>
                        </div>
                </Fragment>
                )
        }
}

export default Projects;
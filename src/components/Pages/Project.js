import React from 'react';

import './Projects.scss';

const Project = ({ name, status, demourl, repourl, technologies, pictures, projectPreviewClick }) => {
	return (
		<div className='projectBoxWrapper'>
			<div className='innerProjectBox'>
				<div className='innerProjectWrapper'>
					<div className='projectHeadline'>{name}</div>
					<div className={`projectStatus ${status.cssclass}`}>{status.label}</div>
					{status.cssclass === 'online' && (
						<div className='projectURLs'>
							{demourl !== undefined && (
								<div className='projectDemoURLs'>
									<img draggable='false' className='iconURL' alt='Project Demo Icon' src={`./icons/demo.png`} />
									<p onClick={() => window.open(demourl.url, '_blank')}>{demourl.label}</p>
								</div>
							)}
							<div className='projectRepoURLs'>
								<img draggable='false' className='iconURL' alt='Project Repo Icon' src={`./icons/repo.png`} />
								<p onClick={() => window.open(repourl.url, '_blank')}>{repourl.label}</p>
							</div>
						</div>
					)}
					<div className='projectTechnologies'>
						<div className='projectTechnologyList'>
							{technologies.map((technology, i) => {
								return <p key={i}> {technology.name}</p>;
							})}
						</div>
					</div>

					{status.label === 'coming soon' && pictures.length > 0 && (
						<div className='projectPictures'>
							{pictures.map((picture, i) => {
								return (
									<div style={{ display: 'block', marginBottom: '20px', textAlign: 'center' }} key={i}>
										<p>{picture.name}</p>
										<img draggable='false' alt={picture.name} src={picture.src} className='projectPreviewPicture' onClick={() => projectPreviewClick(picture.src, picture.name)} />
									</div>
								);
							})}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Project;

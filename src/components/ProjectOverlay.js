import React from 'react';
import { useProjectsValue } from '../context/';

export const ProjectOverlay = ({
    setProject, 
    showProjectOverlay, 
    setShowProjectOverlay
}) => {
    const { projects } = useProjectsValue();

    return (
        projects &&
        showProjectOverlay && (
            <div className="project-overlay" data-testid="project-overlay">
                <ul className="project-overlay__list">
                    {projects.map(project => (
                        <li
                            key={project.projectId}                        >
                            <div
                                onClick={() => {
                                    setProject(project.projectId);
                                    setShowProjectOverlay(false);
                                }}
                                onKeyDown={() => {
                                    setProject(project.projectId);
                                    setShowProjectOverlay(false);
                                }}
                                data-testid="project-overlay-action"
                                tabIndex={0}
                                role="button"
                                aria-label="Select task project"
                            >
                                {project.name}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    )
}
import React, { useState } from 'react';

import { useSelectedProjectValue, useProjectsValue } from '../context';
import { IndividualProject } from './IndividualProject';

export const Projects = ({ activeValue = null }) => {
    const [active, setActive] = useState(activeValue);
    const { setSelectedProject } = useSelectedProjectValue();
    const { projects } = useProjectsValue();

    return (
        projects &&
        projects.map(project => (
            <li
                key={project.projectId}
                data-doc-id={project.docId}
                data-testid="project-action-parent"
                className={
                    active === project.projectId 
                        ? 'sidebar__project __active'
                        : 'sidebar__project'
                }
            >
                <div
                    role="button"
                    aria-label={`Select ${project.name} as the task project`}
                    tabIndex={0}
                    onKeyDown={() => {
                        setActive(project.projectId);
                        setSelectedProject(project.projectId);
                    }}
                    onClick={() => {
                        setActive(project.projectId);
                        setSelectedProject(project.projectId);
                    }}
                    data-testid="project-action"
                >
                    <IndividualProject project={project}/>
                </div>
            </li>
        ))
    );
};

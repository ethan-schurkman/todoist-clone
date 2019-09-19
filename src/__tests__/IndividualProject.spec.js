import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { IndividualProject } from '../components/IndividualProject';

beforeEach(cleanup);

jest.mock('../firebase', () => ({
    firebase: {
        firestore: jest.fn(() => ({
            collection: jest.fn(() => ({
                doc: jest.fn(() => ({
                    delete: jest.fn(() => 
                        Promise.resolve('never mock firebase!')
                    ),
                    update: jest.fn(),
                })),
            })),
        })),
    },
}));

jest.mock('../context', () => ({
    useSelectedProjectValue: jest.fn(() => ({
        setSelectedProject: jest.fn(() => 'INBOX')
    })),
    useProjectsValue: jest.fn(() => ({
        setProjects: jest.fn(),
        projects: [
            {
                name: '⚾️baseball⚾️',
                projectId: '1',
                userId: 'fakeUserId3443',
                docId: 'andy-benes'
            },
        ],
    })),
}));

describe('<IndividualProject />', () => {
    const project = {
        name: '⚾️baseball⚾️',
        projectId: '1',
        userId: 'fakeUserId3443',
        docId: 'andy-benes'        
    };

    describe('Success', () => {
        it('renders our project', () => {
            const { getByText } = render(<IndividualProject project={project} />);
            expect(getByText('⚾️baseball⚾️')).toBeTruthy();
        });

        it('renders the delete overlay and then deletes a project using onClick', () => {
            const { queryByTestId, getByText } = render(
                <IndividualProject project={project} />
            );

            fireEvent.click(queryByTestId('delete-project'));
            expect(getByText('Are you sure you want to delete???')).toBeTruthy();

            fireEvent.click(getByText('DELETE!'));
        });

        it('renders the delete overlay and then deletes a project using onKeyDown', () => {
            const { queryByTestId, getByText } = render(
                <IndividualProject project={project} />
            );

            fireEvent.keyDown(queryByTestId('delete-project'));
            expect(getByText('Are you sure you want to delete???')).toBeTruthy();

            fireEvent.click(getByText('DELETE!'));
        });

        it('renders the delete overlay and then cancels using onClick', () => {
            const { queryByTestId, getByText } = render(
                <IndividualProject project={project} />
            );

            fireEvent.click(queryByTestId('delete-project'));
            expect(getByText('Are you sure you want to delete???')).toBeTruthy();

            fireEvent.click(getByText('CANCEL!'));
        });

        it('renders the delete overlay and then cancels using onKeyDown', () => {
            const { queryByTestId, getByText } = render(
                <IndividualProject project={project} />
            );

            fireEvent.keyDown(queryByTestId('delete-project'));
            expect(getByText('Are you sure you want to delete???')).toBeTruthy();

            fireEvent.keyDown(getByText('CANCEL!'));
        });
    });
});
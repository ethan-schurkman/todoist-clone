import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Projects } from '../components/Projects';

beforeEach(cleanup);

jest.mock('../context', () => ({
    useSelectedProjectValue: jest.fn(() => ({
        setSelectedProject: jest.fn(() => 'INBOX')
    })),
    useProjectsValue: jest.fn(() => ({
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

describe('<Project />', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('Success', () => {
        it('renders the projects', () => {
            const { queryByTestId } = render(<Projects />);
            expect(queryByTestId('project-action')).toBeTruthy();

        });

        it('renders the projects and selects an active project using onClick', () => {
            const { queryByTestId } = render(<Projects activeValue="1" />);
            expect(queryByTestId('project-action')).toBeTruthy();

            fireEvent.click(queryByTestId('project-action'));
            expect(
                queryByTestId('project-action-parent').classList.contains('__active')
            ).toBeTruthy();
        });

        it('renders the projects and selects an active project using onKeyDown', () => {
            const { queryByTestId } = render(<Projects activeValue="1" />);
            expect(queryByTestId('project-action')).toBeTruthy();

            fireEvent.keyDown(queryByTestId('project-action'));
            expect(
                queryByTestId('project-action-parent').classList.contains('__active')
            ).toBeTruthy();
        });

        // honestly don't understand the usefulness of this test. Makes no sense
        it('renders the projects with no active value', () => {
            const { queryByTestId } = render(<Projects />);
            expect(queryByTestId('project-action')).toBeTruthy();

            fireEvent.keyDown(queryByTestId('project-action'));
            expect(
                queryByTestId('project-action-parent').classList.contains('sidebar__project')
            ).toBeTruthy();
        });
    });
});

import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { AddProject } from '../components/AddProject';
import { useSelectedProjectValue } from '../context';

jest.mock('../context', () => ({
    useSelectedProjectValue: jest.fn(),
    useProjectsValue: jest.fn(() => ({
        projects: [
            {
                name: '⚾️baseball⚾️',
                projectId: '1',
                userId: 'fakeUserId3443',
                docId: 'andy-benes'
            },
            {
                name: '🎵MUSIC',
                projectId: '2',
                userId: 'fakeUserId3443',
                docId: 'black-eyed-peas'
            },
            {
                name: '💭thoughts',
                projectId: '3',
                userId: 'fakeUserId3443',
                docId: 'pondering-notions'
            },
        ],
        setProjects: jest.fn(),
    })),
}));


jest.mock('../firebase', () => ({
    firebase: {
        firestore: jest.fn(() => ({
            collection: jest.fn(() => ({
                add: jest.fn(() => Promise.resolve('I am resolved')),
            })),
        })),
    },
}));

beforeEach(cleanup);

describe('<AddProject />', () => {
    describe('Success', () => {
        it('renders <AddProject />', () => {
            const { queryByTestId } = render(<AddProject />);
            expect(queryByTestId('add-project')).toBeTruthy();
        });

        it('renders <AddProject /> and adds a project', () => {
            const { queryByTestId } = render(<AddProject shouldShow />);
            expect(queryByTestId('add-project')).toBeTruthy();

            fireEvent.change(queryByTestId('project-name'), {
                target: { value: 'Here is a great project coming up!' },
            });
            expect(queryByTestId('project-name').value).toBe('Here is a great project coming up!');

            fireEvent.click(queryByTestId('add-project-submit'));
        });

        it('hides the project overlay when cancelled using onClick', () => {
            const { queryByTestId, getByText } = render(<AddProject shouldShow />);
            expect(queryByTestId('add-project')).toBeTruthy();
            expect(queryByTestId('add-project-inner')).toBeTruthy();
            fireEvent.click(getByText('Cancel'));
            expect(queryByTestId('add-project')).toBeTruthy();
            expect(queryByTestId('add-project-inner')).toBeFalsy();
        });

        it('hides the project overlay when cancelled using onKeyDown', () => {
            const { queryByTestId, getByText } = render(<AddProject shouldShow />);
            expect(queryByTestId('add-project')).toBeTruthy();
            expect(queryByTestId('add-project-inner')).toBeTruthy();
            fireEvent.keyDown(getByText('Cancel'));
            expect(queryByTestId('add-project')).toBeTruthy();
            expect(queryByTestId('add-project-inner')).toBeFalsy();
        });

        it('shows project overlay on add project using onClick', () => {
            const { queryByTestId } = render(<AddProject />);
            expect(queryByTestId('add-project-action')).toBeTruthy();
            expect(queryByTestId('add-project-inner')).toBeFalsy();
            fireEvent.click(queryByTestId('add-project-action'));
            expect(queryByTestId('add-project-inner')).toBeTruthy();
        });

        it('shows project overlay on add project using onKeyDown', () => {
            const { queryByTestId } = render(<AddProject />);
            expect(queryByTestId('add-project-action')).toBeTruthy();
            expect(queryByTestId('add-project-inner')).toBeFalsy();
            fireEvent.keyDown(queryByTestId('add-project-action'));
            expect(queryByTestId('add-project-inner')).toBeTruthy();
        });
    })
})



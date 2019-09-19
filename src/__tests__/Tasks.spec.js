import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Tasks } from '../components/Tasks';
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
    })),
}));

jest.mock('../hooks', () => ({
    useTasks: () => ({
        tasks: [
            {
                id: 'DgA1HXGB7GIbPdVZxSGH',
                archived: false,
                date: '19/09/2019',
                projectId: '1',
                task: 'Scott Erickson',
                userId: 'fakeUserId3443'
            },
        ],
    }),
}));

beforeEach(cleanup);

describe('<Tasks />', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders tasks', () => {
        useSelectedProjectValue.mockImplementation(() => ({
            setSelectedProject : jest.fn(()=>'INBOX'),
            selectedProject: 'INBOX'
        })); 

        const { queryByTestId } = render(<Tasks />);
        expect(queryByTestId('tasks')).toBeTruthy();
        expect(queryByTestId('project-name').textContent).toBe('Inbox');
    });

    it('render a task with a project title', () => {
        useSelectedProjectValue.mockImplementation(() => ({
            setSelectedProject : jest.fn(()=>'1'),
            selectedProject: '1'
        })); 

        const { queryByTestId } = render(<Tasks />);
        expect(queryByTestId('tasks')).toBeTruthy();
        expect(queryByTestId('project-name').textContent).toBe('⚾️baseball⚾️');
    });

    // again this test doesn't seem to add any value because we already did it before
    it('renders tasks with a collated task', () => {
        useSelectedProjectValue.mockImplementation(() => ({
            setSelectedProject : jest.fn(()=>'INBOX'),
            selectedProject: 'INBOX'
        })); 

        const { queryByTestId } = render(<Tasks />);
        expect(queryByTestId('tasks')).toBeTruthy();
        expect(queryByTestId('project-name').textContent).toBe('Inbox');
    });
});
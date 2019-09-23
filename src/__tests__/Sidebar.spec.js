import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Sidebar } from '../components/layout/Sidebar';

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

beforeEach(cleanup);

describe('<Sidebar />', () => {
    describe('Success', () => {
        it('renders the sidebar component', () => {
            const { queryByTestId } = render(<Sidebar />);
            expect(queryByTestId('sidebar')).toBeTruthy();
        });  

        it('changes the active component to inbox in collated tasks using onClick', () => {
            const { queryByTestId } = render(<Sidebar />);
            expect(queryByTestId('sidebar')).toBeTruthy();

            fireEvent.click(queryByTestId('today-action'));
            expect(queryByTestId('inbox').classList.contains('active')).toBeFalsy();

            fireEvent.click(queryByTestId('inbox-action'));
            expect(queryByTestId('inbox').classList.contains('active')).toBeTruthy();
            expect(queryByTestId('today').classList.contains('active')).toBeFalsy();
            expect(queryByTestId('next_7').classList.contains('active')).toBeFalsy();
        });         
        
        it('changes the active component to inbox in collated tasks using onKeyDown', () => {
            const { queryByTestId } = render(<Sidebar />);
            expect(queryByTestId('sidebar')).toBeTruthy();

            fireEvent.keyDown(queryByTestId('today-action'));
            expect(queryByTestId('inbox').classList.contains('active')).toBeFalsy();

            fireEvent.keyDown(queryByTestId('inbox-action'));
            expect(queryByTestId('inbox').classList.contains('active')).toBeTruthy();
            expect(queryByTestId('today').classList.contains('active')).toBeFalsy();
            expect(queryByTestId('next_7').classList.contains('active')).toBeFalsy();
        });

        it('changes the active component to today in collated tasks using onClick', () => {
            const { queryByTestId } = render(<Sidebar />);
            expect(queryByTestId('sidebar')).toBeTruthy();

            fireEvent.click(queryByTestId('today-action'));
            expect(queryByTestId('inbox').classList.contains('active')).toBeFalsy();
            expect(queryByTestId('today').classList.contains('active')).toBeTruthy();
            expect(queryByTestId('next_7').classList.contains('active')).toBeFalsy();
        });

        it('changes the active component to today in collated tasks using onKeyDown', () => {
            const { queryByTestId } = render(<Sidebar />);
            expect(queryByTestId('sidebar')).toBeTruthy();

            fireEvent.keyDown(queryByTestId('today-action'));
            expect(queryByTestId('inbox').classList.contains('active')).toBeFalsy();
            expect(queryByTestId('today').classList.contains('active')).toBeTruthy();
            expect(queryByTestId('next_7').classList.contains('active')).toBeFalsy();        
        });

        it('changes the active component to next_7 in collated tasks using onClick', () => {
            const { queryByTestId } = render(<Sidebar />);
            expect(queryByTestId('sidebar')).toBeTruthy();

            fireEvent.click(queryByTestId('next_7-action'));
            expect(queryByTestId('inbox').classList.contains('active')).toBeFalsy();
            expect(queryByTestId('today').classList.contains('active')).toBeFalsy();
            expect(queryByTestId('next_7').classList.contains('active')).toBeTruthy();        
        });

        it('changes the active component to next_7 in collated tasks using onKeyDown', () => {
            const { queryByTestId } = render(<Sidebar />);
            expect(queryByTestId('sidebar')).toBeTruthy();

            fireEvent.keyDown(queryByTestId('next_7-action'));
            expect(queryByTestId('inbox').classList.contains('active')).toBeFalsy();
            expect(queryByTestId('today').classList.contains('active')).toBeFalsy();
            expect(queryByTestId('next_7').classList.contains('active')).toBeTruthy();
        });

        it('Actuate presence of projects on sidebar using onClick', () => {
            const { queryByTestId, queryByText } = render(<Sidebar />);
            expect(queryByTestId('sidebar')).toBeTruthy();

            fireEvent.click(queryByText('Projects!'));
            expect(queryByText('Add Project')).toBeFalsy();

            fireEvent.click(queryByText('Projects!'));
            expect(queryByText('Add Project')).toBeTruthy();
        });

        it('Actuate presence of projects on sidebar using onKeyDown', () => {
            const { queryByTestId, queryByText } = render(<Sidebar />);
            expect(queryByTestId('sidebar')).toBeTruthy();

            fireEvent.keyDown(queryByText('Projects!'));
            expect(queryByText('Add Project')).toBeFalsy();

            fireEvent.keyDown(queryByText('Projects!'));
            expect(queryByText('Add Project')).toBeTruthy();
        });
    });
});
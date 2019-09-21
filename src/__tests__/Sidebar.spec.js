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
    });
});
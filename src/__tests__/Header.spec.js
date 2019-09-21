import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Header } from '../components/layout/Header';

jest.mock('../context', () => ({
    useSelectedProjectValue: jest.fn(() => ({ selectedProject : 1 })),
    useProjectsValue: jest.fn(() => ({ projects: []}))
}))

beforeEach(cleanup);

describe('<Header />', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    describe('Success', () => {
        it('renders <Header />', () => {
            const { queryByTestId } = render(<Header />);
            expect(queryByTestId('header')).toBeTruthy();
        });

        it('render add task main with quick add task using onClick', () => {
            const { queryByTestId } = render(<Header />);
            expect(queryByTestId('header')).toBeTruthy();
            expect(queryByTestId('add-task-main')).toBeFalsy();
            fireEvent.click(queryByTestId('quick-add-task-action'));
            expect(queryByTestId('header')).toBeTruthy();
            expect(queryByTestId('add-task-main')).toBeTruthy();

        });

        it('render add task main with quick add task using onKeyDown', () => {
            const { queryByTestId } = render(<Header />);
            expect(queryByTestId('header')).toBeTruthy();
            expect(queryByTestId('add-task-main')).toBeFalsy();
            fireEvent.keyDown(queryByTestId('quick-add-task-action'));
            expect(queryByTestId('header')).toBeTruthy();
            expect(queryByTestId('add-task-main')).toBeTruthy();

        });

        it('actuate dark mode via the pizza slice using onClick', () => {
            const darkMode = false;
            const setDarkMode = jest.fn(() => !darkMode);

            const { queryByTestId } = render(
                <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            );

            expect(queryByTestId('header')).toBeTruthy();
            fireEvent.click(queryByTestId('dark-mode-action'));
            expect(setDarkMode).toHaveBeenCalled();
        });

        it('actuate dark mode via the pizza slice using onKeyDown', () => {
            const darkMode = false;
            const setDarkMode = jest.fn(() => !darkMode);

            const { queryByTestId } = render(
                <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            );

            expect(queryByTestId('header')).toBeTruthy();
            fireEvent.keyDown(queryByTestId('dark-mode-action'));
            expect(setDarkMode).toHaveBeenCalled();
        });
    });
});
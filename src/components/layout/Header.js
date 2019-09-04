import React from 'react';
import { FaPizzaSlice } from 'react-icons/fa';

export const Header = () => {
    const x = 1; // just for linter in video. Might set up the linter for myself at some point.
    return (
        <header className="header" data-testid="header">
            <nav>
                <div className="logo">
                    <img src="/images/logo.png" alt="Todoist" />
                </div>
                <div className="settings">
                    <ul>
                        <li className="settings__add" data-testid="quick-add-task-action">+</li>
                        <li className="settings__darkmode" data-testid="dark-mode-action">
                            <FaPizzaSlice />
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
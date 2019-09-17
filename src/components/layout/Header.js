import React, {useState} from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
import { AddTask } from '../AddTask';

export const Header = ({darkMode, setDarkMode}) => {
    const [shouldShowMain, setShouldShowMain] = useState(false);
    const [showQuickAddTask, setShowQuickAddTask] = useState(false);

    return (
        <header className="header" data-testid="header">
            <nav>
                <div className="logo">
                    <img src="/images/logo.png" alt="Todoist" />
                </div>
                <div className="settings">
                    <ul>
                        <li 
                            className="settings__add" 
                            data-testid="quick-add-task-action">
                                <button
                                    aria-label="Quick Add Task"
                                    onClick={() => {
                                        setShowQuickAddTask(true); 
                                        setShouldShowMain(true)
                                    }}
                                    onKeyDown={() => {
                                        setShowQuickAddTask(true); 
                                        setShouldShowMain(true)
                                    }}
                                    type="button"
                                    tabIndex={0}
                                >
                                    +
                                </button> 
                        </li>
                        <li 
                            className="settings__darkmode" 
                            data-testid="dark-mode-action"
                        >
                            <button
                                aria-label="Dark Mode on/off"
                                type="button"
                                onClick={() => setDarkMode(!darkMode)}
                                onKeyDown={() => setDarkMode(!darkMode)}
                            >
                                <FaPizzaSlice />
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

            <AddTask
                showAddTaskMain={false}
                shouldShowMain={shouldShowMain}
                setShouldShowMain={setShouldShowMain}
                showQuickAddTask={showQuickAddTask}
                setShowQuickAddTask={setShowQuickAddTask}
            />
        </header>
    );
};

import React from 'react';
import moment from 'moment';
import {FaSpaceShuttle, FaSun, FaRegPaperPlane} from 'react-icons/fa';

export const TaskDate = ({setTaskDate, showTaskDate, setShowTaskDate }) => showTaskDate && (
    <div className="task-date" data-testid="task-date-overlay">
        <ul className="task-date__list">
            <li 
                data-testid="task-date-overlay"
            >
                <div
                    onClick={() => {
                        setShowTaskDate(false);
                        setTaskDate(moment().format('DD/MM/YYYY'));
                    }}
                    onKeyDown={() => {
                        setShowTaskDate(false);
                        setTaskDate(moment().format('DD/MM/YYYY'));
                    }}
                    tabIndex={0}
                    aria-label="Select today as the task date"
                    role="button"
                >
                    <span>
                        <FaSpaceShuttle />
                    </span>
                    <span>Today</span>
                </div>
            </li>
            <li 
                data-testid="task-date-overlay"
            >
                <div
                    onClick={() => {
                        setShowTaskDate(false);
                        setTaskDate(moment()
                            .add(1, 'day')
                            .format('DD/MM/YYYY')
                        );
                    }}
                    onKeyDown={() => {
                        setShowTaskDate(false);
                        setTaskDate(moment()
                            .add(1, 'day')
                            .format('DD/MM/YYYY')
                        );
                    }}
                    tabIndex={0}
                    aria-label="Select tomorrow as the task date"
                    role="button"
                >
                    <span>
                        <FaSun />
                    </span>
                    <span>Tomorrow</span>
                </div>
            </li>
            <li 
                data-testid="task-date-overlay"
            >
                <div
                    onClick={() => {
                        setShowTaskDate(false);
                        setTaskDate(moment()
                            .add(7, 'day')
                            .format('DD/MM/YYYY')
                        );
                    }}
                    onKeyDown={() => {
                        setShowTaskDate(false);
                        setTaskDate(moment()
                            .add(7, 'day')
                            .format('DD/MM/YYYY')
                        );
                    }}
                    tabIndex={0}
                    aria-label="Select next week as the task date"
                    role="button"
                >
                    <span>
                        <FaRegPaperPlane />
                    </span>
                    <span>Next Week</span>
                </div>
            </li>
        </ul>
    </div>
)
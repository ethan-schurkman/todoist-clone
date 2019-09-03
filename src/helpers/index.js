import { collatedTasks } from '../constants';

export const getCollatedTasksExist = selectedProject => 
    collatedTasks.find(task => task.key === selectedProject);
import { atom, useAtom } from "jotai";

const tasksAtom = atom([]);

export const useTasks = () => {
  const [tasks, setTasks] = useAtom(tasksAtom);
  return {
    tasks,
    setTasks,
  };
};

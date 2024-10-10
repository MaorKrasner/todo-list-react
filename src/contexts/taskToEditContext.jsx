import { atom, useAtom } from "jotai";

const taskToEditAtom = atom(null);

export const useTaskToEdit = () => {
  const [taskToEdit, setTaskToEdit] = useAtom(taskToEditAtom);
  return {
    taskToEdit,
    setTaskToEdit,
  };
};

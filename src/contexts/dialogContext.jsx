import { atom, useAtom } from "jotai";

const dialogAtom = atom(true);

export const useDialogFlag = () => {
  const [isAddingTask, setIsAddingTask] = useAtom(dialogAtom);
  return {
    isAddingTask,
    setIsAddingTask,
  };
};

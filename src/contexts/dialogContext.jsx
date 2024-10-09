import { atom, useAtom } from "jotai";

const dialogAtom = atom(true);

export const useDialogFlag = () => {
  const [isAddingOrEditing, setIsAddingOrEditing] = useAtom(dialogAtom);
  return {
    isAddingOrEditing,
    setIsAddingOrEditing,
  };
};

import { atom, useAtom } from "jotai";

const searchAtom = atom("");

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useAtom(searchAtom);
  return {
    searchQuery,
    setSearchQuery,
  };
};

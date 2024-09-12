import ShowAllTasks from "components/menu/menuButtons/showAll";
import HideCompletedTasks from "components/menu/menuButtons/hideCompleted";
import DeleteCompletedTasks from "components/menu/menuButtons/deleteCompleted";

const Menu = () => {
  return (
    <>
      <HideCompletedTasks />
      <DeleteCompletedTasks />
      <ShowAllTasks />
    </>
  );
};

export default Menu;

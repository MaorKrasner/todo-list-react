import ShowAllTasks from "./menuButtons/showAll";
import HideCompletedTasks from "./menuButtons/hideCompleted";
import DeleteCompletedTasks from "./menuButtons/deleteCompleted";

const Menu = () => {
    return (
      <>
        <HideCompletedTasks />
        <DeleteCompletedTasks />
        <ShowAllTasks />
      </>
    );
}

export default Menu;
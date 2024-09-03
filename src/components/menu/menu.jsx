import ShowAllTasks from "./menuButtons/showAll";
import HideCompletedTasks from "./menuButtons/hideCompleted";
import DeleteCompletedTasks from "./menuButtons/deleteCompleted";

const Menu = ({ showAllTasks, removeCompletedTasks, hideCompleted }) => {
    return (
    <>
      <HideCompletedTasks hideCompleted={hideCompleted} />
      <DeleteCompletedTasks removeCompletedTasks={removeCompletedTasks} />
      <ShowAllTasks showAllTasks={showAllTasks} />
    </>
    );
}

export default Menu;
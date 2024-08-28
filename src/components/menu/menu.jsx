import ShowAllTasks from "./showAll";
import HideCompletedTasks from "./hideCompleted";
import DeleteCompletedTasks from "./deleteCompleted";

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
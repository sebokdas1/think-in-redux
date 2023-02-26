import { useDispatch, useSelector } from "react-redux";
import { statusChanged } from "../redux/filters/actions";

const incompleteTodoNumber = (todo_number) => {
  switch (todo_number) {
    case 0:
      return "No task";
    case 1:
      return "1 task";

    default:
      return `${todo_number} tasks`;
  }
};
export default function Footer() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const { status, color } = filters;
  const todoRemaining = todos.filter((todo) => !todo.completed).length;

  const statusChange = (status) => {
    dispatch(statusChanged(status));
  };
  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{incompleteTodoNumber(todoRemaining)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${status === "All" && "font-bold"}`}
          onClick={() => statusChange("All")}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "Incomplete" && "font-bold"}`}
          onClick={() => statusChange("Incomplete")}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "Complete" && "font-bold"}`}
          onClick={() => statusChange("Complete")}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li className="h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500"></li>
        <li className="h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer"></li>
        <li className="h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer"></li>
      </ul>
    </div>
  );
}

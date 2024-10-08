import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle';
import { TaskList } from '../../components/TaskList/TaskList';
import { TaskEditor } from '../../components/TaskEditor/TaskEditor';
import { fetchTasks } from '../../redux/tasks/operations';
import { selectLoading } from '../../redux/tasks/selectors';
//import { selectError } from "../../redux/tasks/selectors";
import Loader from "../../components/Loader/Loader";

export default function TasksPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  //const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Your Tasks</DocumentTitle>
      <TaskEditor />
      {isLoading && !error && <Loader />}
      <TaskList />
    </>
  );
}

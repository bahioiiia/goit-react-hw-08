import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle';
import { TaskList } from '../../components/TaskList/TaskList/TaskList';
import { TaskEditor } from '../../components/TaskList/TaskEditor/TaskEditor';
import { fetchTasks } from '../../redux/tasks/operations';
import { selectLoading } from '../../redux/tasks/selectors';
import Loader from "../../components/Loader/Loader";

export default function TasksPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Your tasks</DocumentTitle>
      <TaskEditor />
      {isLoading && !error && <Loader />}
      <TaskList />
    </>
  );
}

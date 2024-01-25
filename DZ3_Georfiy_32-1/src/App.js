

function App() {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');
  const [tasks, setTasks] = useState([
    { id: 1, task: 'coding' },
    { id: 2, task: 'eat' },
    { id: 3, task: 'sleep' },
  ]);

  const handleShow = () => setShow(!show);

  const handleAdd = () => {
    setTasks(prevTasks => [
      ...prevTasks,
      {
        id: prevTasks.length + 1,
        task: input,
      },
    ]);
  };

  const onChangeInput = (event) => {
    setInput(event.target.value);
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleSearch = () => {
    const filteredTasks = tasks.filter(task =>
      task.task.toLowerCase().includes(search.toLowerCase())
    );
    setTasks(filteredTasks);
  };

  const onChangeSearch = (event) => {
    setSearch(event.target.value);
    handleSearch();
  };

  return (
    <div>
      {show && (
        <Modal
          handleShow={handleShow}
          onChangeInput={onChangeInput}
          handleAdd={handleAdd}
          onChangeSearch={onChangeSearch}
        ></Modal>
      )}
      <Button action={handleShow} text={'открыть'} />
      <TodoList tasks={tasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;


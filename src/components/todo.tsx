import React, { useState, useEffect, useCallback, useMemo } from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

function todo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);

  // fetch todos from an API when the component mounts
  // useEffect ນີ້ເເມ່ນສຳລັບການດຶງຂໍ້ມູນ todos ຈາກ API ເມື່ອເຊື່ອມຕໍ່(Component)ອົງປະກອບ
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  // filter the todos list based on the input value
  // useEffect ນີ້ເເມ່ນສຳລັບການກັ່ນຕອງລາຍການ todos ໂດຍອີງໃສ່ຄ່າການປ້ອນຂໍ້ມູນ
  useEffect(() => {
    setFilteredTodos(
      todos.filter((todo) => {
        return todo.title.toLowerCase().includes(inputValue.toLowerCase());
      })
    );
  }, [inputValue, todos]);

  // update the input value when the user types in the search bar
  // handleInputChange => ເເກ້ໄຂຄ່າການປ້ອນຂໍ້ມູນເມື່ອຜູ້ໃຊ້ພິມໃນແຖບຄົ້ນຫາ
  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    },
    []
  );

  // toggle the completed state of a todo
  //handleToggleCompleted => toggle ໝາຍຕິກ ສະຖານະທີ່ສຳເລັດແລ້ວຂອງສິ່ງທີ່ຕ້ອງເຮັດS
  const handleToggleCompleted = useCallback((id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        // console.log("=> id...", todo.id, id, todo.id === id, !todo.completed);

        return todo;
      })
    );
  }, []);

  // memoize the completed todos count
  // ຈື່ຈໍາຈໍານວນສິ່ງທີ່ຕ້ອງເຮັດສໍາເລັດ
  const completedTodosCount = useMemo(() => {
    console.log("=> Calculating completed todos count...");
    return todos.filter((todo) => todo.completed).length;
  }, [todos]);

  // Log ຂໍ້ມູນ
  console.log("=> inputValue...", inputValue);

  console.log("=> todos...", todos);

  console.log("=> filteredTodos...", filteredTodos);

  console.log("=> Rendering...");

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        {/* ການປ້ອນຂໍ້ມູນການຊອກຫາ */}
        <label htmlFor="search">Search:</label>
        <input
          id="search"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>

      {/* ຈໍານວນລາຍການທີ່ຕ້ອງເຮັດສໍາເລັດ */}
      <p>Completed todos: {completedTodosCount}</p>

      {/* ລາຍການລາຍການທີ່ຕ້ອງເຮັດ ໄດ້ຖືກກັ່ນຕອງໂດຍອີງໃສ່ມູນຄ່າການປ້ອນຂໍ້ມູນ ແລະ 
      ສາມາດສະຫຼັບລະຫວ່າງສໍາເລັດ ແລະ ບໍ່ສໍາເລັດໂດຍການຄລິກໃສ່ກ່ອງກາເຄື່ອງຫມາຍ
      */}
      <div>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleCompleted(todo.id)}
            />
            <span>{todo.title}</span>
          </li>
        ))}
      </div>
    </div>
  );
}

export default todo;

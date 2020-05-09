import React, { useState, useEffect } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';
import TodoForm from './components/ColorBox/TodoForm';
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import queryString from 'query-string'
import PostFilterForm from './components/PostFilterForm';
import Clock from './components/Clock';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'Đạo đẹp trai' },
    { id: 2, title: 'Đạo đẹp trai quá' },
    { id: 3, title: 'Đạo đẹp trai ghê' }
  ])

  const [postList, setPostList] = useState([])
  const [pagination, setPagination] = useState({ _page: 1, _limit: 10, _totalRows: 11 })
  const [filter, setFilter] = useState({ _limit: 10, _page: 1, title_like: '' })

  function handlePageChange(newPage) {
    setFilter({
      ...filter,
      _page: newPage
    })
  }

  useEffect(() => {
    async function GetPostList() {
      try {
        const parameters = queryString.stringify(filter)
        const requestURL = `http://js-post-api.herokuapp.com/api/posts?${parameters}`
        const response = await fetch(requestURL);
        const dataJson = await response.json();
        const { data, pagination } = dataJson
        setPostList(data)
        setPagination(pagination)
      }
      catch (e) {
        console.log(`Failed to fetch data:${e.message}`)
      }

    }

    GetPostList()
  }, [filter])

  function handleTodoList(todo) {
    const index = todoList.findIndex(x => x.id === todo.id)
    if (index < 0) return

    const newList = [...todoList]
    newList.splice(index, 1)
    setTodoList(newList)
    alert(`Removed item: ${todo.id}-${todo.title}`)
  }

  function handleSubmitTodo(formValues) {
    const newTodoList = [...todoList]
    newTodoList.push({ id: (newTodoList.length + 1), title: formValues.title })
    setTodoList(newTodoList)
  }

  function handleFilterChange(newFilter) {
    setFilter({
      ...filter,
      _page: 1,
      title_like: newFilter.searchTerm
    })
  }

  const [iShowClock, setIsShowClock] = useState(true)

  return (
    <div className="app">
      <h1>Welcome to React Hooks!</h1>
      {/* <ColorBox />
      <TodoList todos={todoList} onClickItem={handleTodoList} />
      <TodoForm onSubmit={handleSubmitTodo} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
      <PostFilterForm onSubmit={handleFilterChange} /> */}
      {iShowClock && <Clock />}
      <button onClick={() => { setIsShowClock(!iShowClock) }}>Click</button>
    </div>
  );
}

export default App;

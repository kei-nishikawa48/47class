import Form from "./Form"
import List from "./List"
import { useState } from "react" //1
const App = () => {
  const [todos, setTodos] = useState([])
  //2
  // const todos=[
  //   {
  //     isDone:false,
  //     content:"課題をする"
  //   },
  //   {
  //     content:"洗濯をする"
  //   },   
  //   {
  //     content:"電話をする"
  //   },
  // ]
  // const [a,seta]=["aaaa","bbbb"]
  // const {bb,kk}={kk:"aaaa",bb:"bbbb"}
  // console.log(kk)
  // console.log(bb)
  // const array = [1, 2, 3, 4, 5, 6, 7]
  // const Filter = array.filter(item => item !== 1)
  // console.log(Filter)
  // todoを消す関数
  const deleteTodo = (id) => {
    //引数で受け取ったidとtodoにあるidが一致した時それを消す
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const changeIsDone = (id) => {
    //setTodos("特定のidを受け取った時そのidと一致するisDoneの値を変更する")
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        }
      } else {
        return todo
      }
    }))
  }
  return (
    <>
      <h1>TODO APP</h1>
      <Form todos={todos} setTodos={setTodos} />
      <List todos={todos} changeIsDone={changeIsDone} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;

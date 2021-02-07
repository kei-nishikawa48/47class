import Item from "./Item";

//listという関数を定義
// const list = (hoge) =>{
//   console.log(hoge)
// }
//list関数を実行
// list("ホゲと入力")

//オブジェクト型の値を定義
// const user ={
//   id:42,
//   name:"hoge"
// }
//分割代入構文を用いてオブジェクトの中身だけ取り出す
// const {id,name}=user
// console.log(name)

// [
//   {
//     content: "課題をする",
//   },
//   {
//     content: "洗濯をする",
//   },
//   {
//     content: "電話をする",
//   },
// ];

const List = ({ todos, deleteTodo, changeIsDone }) => {
  // const todoItem = todos.map((todo) => {
  //   return todo.content + "完了";
  // });
  // console.log(todoItem);

  return (
    <ul>
      {todos.map((todo) => {
        return (
          <Item
            changeIsDone={changeIsDone}
            isDone={todo.isDone}
            key={todo.id}
            deleteTodo={deleteTodo}
            id={todo.id}
            content={todo.content}
          />
        );
      })}
    </ul>
  );
};

export default List;

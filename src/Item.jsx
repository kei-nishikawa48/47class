//reactからuseStateをインポート
import { useState } from "react";
//contentという引数を受け取っている
const Item = ({ content, deleteTodo, id, isDone, changeIsDone }) => {
  //useStateの定義
  // const [isDone, setIsDone] = useState(false);
  // console.log(content);
  // console.log(isDone)
  // if(isDone===true){
  //   console.log("isDoneはtrueです")
  // }else{
  //   console.log("falseです")
  // }
  // isDone ? console.log("isDoneはtrueです") : console.log("falseです");
  // 条件式 ? trueの時 : falseの時
  const handleDelete = () => {
    //削除する関数を呼ぶ
    deleteTodo(id);
  };

  return (
    <li>
      <input
        type="checkbox"
        onChange={() => {
          changeIsDone(id);
        }}
      />
      <span style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {content}
      </span>
      <button onClick={handleDelete}>削除</button>
    </li>
  );
};

export default Item;

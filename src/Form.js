import { useState } from "react"
import { nanoid } from "nanoid"
const Form = ({ todos, setTodos }) => {
  const [value, setValue] = useState("")
  const handleSubmit = (e) => {
    // formの内容をtodoの配列に追加する処理を書く
    e.preventDefault()
    // console.log(...todos)
    //valueに値がはいっていればtrue
    // console.log(value)
    // console.log(value.trim())
    if (value.trim()) {
      setTodos([
        ...todos,
        {
          content: value,
          id: nanoid(),//nanoid()でランダムなidを生成,
          isDone:false
        }
      ])// 追加処理
      setValue("")
    } else {
      alert("空白です")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        type="text"
        onChange={e => {
          // console.log(e.target.value)
          setValue(e.target.value)
        }}
      />
    </form>
  );
}

export default Form;
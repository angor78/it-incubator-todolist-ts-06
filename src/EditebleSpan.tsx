import React, {ChangeEvent, useState} from "react";

export type EditebleSpanPropsType = {
  title: string
  onChangeTitle:( newTitle: string)=>void
}
export const EditebleSpan = (props: EditebleSpanPropsType) => {
  let [editMode, setEditMode] = useState<boolean>(true)
  let [title, setTitle] = useState<string>(props.title)
  function onChangeHandler(e:ChangeEvent<HTMLInputElement>) {
    setTitle(e.currentTarget.value)
  }
  function updateTitle() {
    setEditMode(false)
    props.onChangeTitle(title)
  }
  return (
    editMode ?
      <input value={title} onChange={onChangeHandler} onBlur={updateTitle} autoFocus={true}/> :
      <span onDoubleClick={()=>setEditMode(true)}>{props.title}</span>
  )
}
import React from "react";

export type EditebleSpanPropsType = {
  title: string
}
export const EditebleSpan = (props: EditebleSpanPropsType) => {
  return <span>{props.title}</span>
}
import { useState } from "react";

const TextAreaData = (props: any) => {
    return (
        <>
            <div className="inputData flex-column">
                <span className="inputDataSpan">{props.title}</span>
                <textarea className="form-control" value={props.value} onChange={(e) => {
                    props.onChange(e.target.value)
                }} />
            </div>
        </>
    )
}

export default TextAreaData;
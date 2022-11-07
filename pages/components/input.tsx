import { useState } from "react";

const InputData = (props: any) => {
    return (
        <>
            <div className="inputData flex-column">
                <span className="inputDataSpan">{props.title}</span>
                <input type="text" className="form-control" value={props.value} onChange={(e) => {
                    props.onChange(e.target.value)
                }} />
            </div>
        </>
    )
}

export default InputData;
const Button = (props:any) => {
    return(
        <>
        <button className="buttonComponent" onClick={(e)=>props.onClick('ehehe')}>{props.title}</button>
        </>
    )
}

export default Button;
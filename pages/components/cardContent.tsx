const CardContent = (props: any) => {
    return (<>
        <div key={props.key} className="contentData flex-column">
            <div className="creatorData">
                <span>{props.created_at}</span>
                <span className="creatorSpan">{props.creator}</span>
            </div>
            <div className="content">
                <div className="row">
                    <div className="col-2">
                        <span>Title : </span>
                    </div>
                    <div className="col-10">
                        <span className="paleContent">{props.title}</span>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="row">
                    <div className="col-2">
                        <span>Description : </span>
                    </div>
                    <div className="col-10">
                        <span className="paleContent">{props.desc}</span>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default CardContent;
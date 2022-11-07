const Article = (props: any) => {
    return (
        <>
            <div className="ArticleMenu">
                <div className="headPost">
                    <span>POST</span>
                </div>
                <hr />
                <div className="titleArticle">{props.title}</div>
                <div className="createArticle">{props.created_at}</div>
                <div className="baseArticle">
                {
                    props.baseArticle
                }
                </div>
            </div>
        </>
    )
}

export default Article;
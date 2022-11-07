import { useEffect, useState } from "react";
import CardContent from "./cardContent";
import axios from 'axios';
import Article from "./article";


const ContentMenu = () => {
    const [data, setData] = useState<{}[]>([])
    const [article, setArticle] = useState(<></>)
    const [isArticle, setIsArticle] = useState(false)


    const handleLoad = async () => {
        const url = 'http://192.168.38.100:1337/api/migrates'
        await axios.get(url).then(async (resp: any) => {
            const datas = resp.data.data

            let details: any[] = []
            datas.map((detail: any) => {
                data.find(element => {
                    console.log(element);

                })
                setData(oldData => [...oldData, detail['attributes']])
            })
        })
    }
    useEffect(() => {
        handleLoad()
    }, [])


    const handleOnClick = (param: any) => {
        setIsArticle(true)
        setArticle(<Article title={param.title} creator={param.dc_creator} created_at={param.createdAt} baseArticle={param.content_encoded} />)
    }

    return (<>
        <div className="newPost">
            {
                isArticle ? (
                    article
                ) : (
                    <div className="container-fluid">
                        <div className="headPost">
                            <span>Create Post</span>
                        </div>

                        <div className="menuContent">
                            {
                                data.map((detail: any, index) => {
                                    return (
                                        <div key={index} >
                                            <div onClick={() => handleOnClick(detail)}>
                                                <CardContent key={index} id={index} creator={detail.dc_creator} title={detail.title} desc={detail.description} created_at={detail.createdAt} />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            }


        </div>

    </>)
}

export default ContentMenu;
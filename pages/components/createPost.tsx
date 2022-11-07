import axios from "axios";
import { useState } from "react";
import Button from "./button";
import InputData from "./input";
import TextAreaData from "./textArea";

const CreatePost = () => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [content, setContent] = useState("")

    const handleTitle = (param:any) => {
        console.log(param);
        setTitle(param)
    }
    const handleDescription = (param:any) => {
        console.log(param);
        setDesc(param)
    }
    const handleContent = (param:any) => {
        console.log(param);
        setContent(param)
    }

    const handlePost = async(param:any) => {
        const model = {
            'data':{
                'title':title,
                'description':desc,
                'dc_creator':'nasri',
                'content_encoded':content
            }
        }
        await axios.post('http://192.168.38.100:1337/api/migrates', model).then((resp)=>{
            console.log(resp);
        })
        
    }

    return (
        <>
            <div className="newPost">
                <div className="container-fluid">

                    <div className="headPost">
                        <span>Create Post</span>
                        <Button onClick={handlePost} title="Save" />
                    </div>
                    <div className="menuPost">
                        <div className="row">
                            <div className="col-9 postLeft">
                                <div className="cardCreatePost">
                                    <InputData title="title" width={200} value={title} onChange={handleTitle}/>
                                    <InputData title="description" width={200} value={desc} onChange={handleDescription}/>
                                    <TextAreaData title="Content" value={content} onChange={handleContent}/>
                                </div>

                            </div>
                            <div className="col-3 postRight">
                                <div className="information">
                                    <span>Information</span>
                                    <hr />
                                    <div className="informationMenu">
                                        <div className="row">
                                            <div className="col-7">
                                                Created At
                                            </div>
                                            <div className="col-5">
                                                5 day ago
                                            </div>
                                        </div>
                                    </div>
                                    <div className="informationMenu">
                                        <div className="row">
                                            <div className="col-7">
                                                Last Update
                                            </div>
                                            <div className="col-5">
                                                5 day ago
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreatePost;
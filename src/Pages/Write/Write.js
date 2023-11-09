import React, {useRef, useState} from "react";
import "./write.scss"

export default function Write(){
    const inputTitle = useRef(null)

    const [errorHandler, setErrorHandler] = useState({
        id:{
            error: false,
            message:""
        },
        title:{
            error: false,
            message:""
        },
        author:{
            error: false,
            message:""
        },
        creationDate:{
            error: false,
            message:""
        },
        description:{
            error: false,
            message:""
        },
        coverImage:{
            error: false,
            message:""
        },
        readtime:{
            error: false,
            message:""
        }

    })
    const handleSubmit = (e) => {
        e.preventDefault()
        const inputTitle = document.getElementById("postTitle").value
        const inputId = document.getElementById("postID").value
        const inputAuthor = document.getElementById("postAuthor").value
        const inputCreation = document.getElementById("postCreation").value
        const inputDescription = document.getElementById("postDescription").value
        const inputCoverImage = document.getElementById("postCoverImage").value
        const inputReadTime = document.getElementById("postReadtime").value

    }

    return(
        <div className="WriteSection">
            <form className="WriteForm"onSubmit={handleSubmit}>
                <input type="text" id="postID" placeholder="ID"></input>
                <input type="text" id="postAuthor" placeholder="Author"></input>
                <input type="text" id="postTitle" placeholder="Title"></input>
                <input className="postDescription" type="text" id="postDescription" placeholder="Description"></input>
                <input type="text" id="postCoverImage" placeholder="Cover Image"></input>
                <input type="text" id="postReadtime" placeholder="Read Time"></input>
                <input type="text" id="postCreation" placeholder="Creation"></input>
                <button type="submit">Publish</button>
            </form>
        </div>
    )
}



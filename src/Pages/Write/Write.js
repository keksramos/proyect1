import React, { useState} from "react";
import "./write.scss"

export default function Write(){
    const [valid, setValid] = useState({
        postID: false,
        postAuthor: false,
        postTitle: false,
        postDescription: false,
        postCoverImage: false,
        postReadtime: false,
        postCreation: false,
    })

    const isValid = (valid.postID && valid.postAuthor && valid.postTitle && valid.postDescription && valid.postCoverImage && valid.postReadtime && valid.postCreation)

    const handleID = (e) => {
        e.preventDefault()

        const value = e.target.value
        if(value.length <= 1){
            alert("El ID debe tener al menos 1 caracteres")
            setValid({
                ...valid,
                postID:false
            })
        } else {
            setValid({
                ...valid,
                postID:true
            })
        }
    }

    const handleTitle = (e) => {
        e.preventDefault()

        const value = e.target.value
        if(value.length < 4){
            alert("El título debe tener al menos 5 caracteres")
            setValid({
                ...valid,
                postTitle:false
            })
        } else {
            setValid({
                ...valid,
                postTitle:true
            })
        }
    }

    const handleAuthor = (e) => {
        e.preventDefault()

        const value = e.target.value
        if(value === "0"){
            alert("Debes seleccionar un autor")
            setValid({
                ...valid,
                postAuthor:false
            })
        } else {
            setValid({
                ...valid,
                postAuthor:true
            })
        }
    }

    const handleDescription = (e) => {
        e.preventDefault();

        const value = e.target.value;
        if (value.length < 19) {
            alert("El contenido debe tener al menos 20 caracteres.");
            setValid({
                ...valid,
                postDescription: false
            });
        } else {
            setValid({
                ...valid,
                postDescription: true
            });
        }
    }

    const handleCoverImage = (e) => {
        e.preventDefault()

        const value = e.target.value
        if(value.length < 4){
            alert("El título debe tener al menos 5 caracteres")
            setValid({
                ...valid,
                coverImage:false
            })
        } else {
            setValid({
                ...valid,
                coverImage:true
            })
        }
    }

    const handleReadTime = (e) => {
        e.preventDefault();

        const value = e.target.value;
        if (value.length < 2) {
            alert("El contenido debe tener al menos 3 caracteres.");
            setValid({
                ...valid,
                postReadtime: false
            });
        } else {
            setValid({
                ...valid,
                postReadtime: true
            });
        }
    }

    const handleCreation = (e) => {
        e.preventDefault();

        const value = e.target.value;
        if (value.length < 3) {
            alert("La fecha de creación tiene que tener al menos 4 caracteres");
            setValid({
                ...valid,
                postCreation: false
            });
        } else {
            setValid({
                ...valid,
                postCreation: true
            });
        }
    }

    const validateForm = (e) => {
        e.preventDefault();

        const postID = document.getElementById("postID").value;
        const postTitle = document.getElementById("postTitle").value;
        const postAuthor = document.getElementById("postAuthor").value;
        const postDescription = document.getElementById("postDescription").value;
        const postCoverImage = document.getElementById("postCoverImage").value;
        const postReadtime = document.getElementById("postReadtime").value;
        const postCreation = document.getElementById("postCreation").value;


        if (postID.length <= 1) {
            alert("El título debe tener al menos 1 caracteres")

        }
        if (postTitle.length < 4) {
            alert("El titulo debe tener al menos 5 caracteres.");
        }

        if (postAuthor === "0") {
            alert("Debes seleccionar un autor.");
        }

        if (postDescription.length < 19) {
            alert("El contenido debe tener al menos 20 caracteres.");
        }

        if(postCoverImage.length < 4){
            alert("El título debe tener al menos 5 caracteres")
        }

        if (postReadtime.length < 2) {
            alert("El contenido debe tener al menos 3 caracteres.");
        }
        
        if (postCreation.length < 3) {
            alert("La fecha de creación tiene que tener al menos 4 caracteres");
        }

        if (postCoverImage.length >= 5 && postAuthor !== "0" && postDescription.length >= 20 && postID.length <= 1 && postTitle.length < 4 && postReadtime.length < 2 && postCreation.length < 3) {
            alert("Blog creado correctamente.");
        }

                
        const data = {
            postID,
            postTitle,
            postAuthor,
            postDescription,
            postCoverImage,
            postReadtime,
            postCreation
        }

        console.log(data);
    }


    return(
        <div className="WriteSection">
            <form className="WriteForm" onSubmit={validateForm}>
                <label>ID</label>
                <input type="text" id="postID" placeholder="ID" onBlur={handleID}></input>
                <label>Author</label>
                <select id={"postAuthor"} onBlur={handleAuthor}>
                    <option value="0">Selecciona un autor</option>
                    <option value="1">John Doe</option>
                    <option value="2">Jane Doe</option>
                    <option value="3">Juan Camaney</option>
                </select>
                <label>Title</label>
                <input type="text" id="postTitle" placeholder="Title" onBlur={handleTitle}></input>
                <label>Description</label>
                <textarea className="postDescription" id="postDescription" placeholder="Description" onBlur={handleDescription}></textarea>
                <label>Cover Image</label>
                <input type="text" id="postCoverImage" placeholder="URL" onBlur={handleCoverImage}></input>
                <label>Read Time</label>
                <input type="text" id="postReadtime" placeholder="ej. 6 min" onBlur={handleReadTime}></input>
                <label>Created</label>
                <input type="text" id="postCreation" placeholder="Ej. Dic 11" onBlur={handleCreation}></input>
                <button className="publishButton"type="submit" >Publish</button>
            </form>
        </div>
    )
}

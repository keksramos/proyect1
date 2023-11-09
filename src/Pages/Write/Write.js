import React from "react";

export default function Write(){
    render(){
        return(
            <div className="WriteContent-Body">
                <h1>Write</h1>
                <input className="title"></input>
                <input className="author"></input>
                <input className="creationDate"></input>
                <input className="description"></input>
                <input className="coverImage"></input>
                <input className="readTime"></input>
        </div>
      );
    }
}




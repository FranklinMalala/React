import React from 'react';
import './NewPost.css';
import blogFetch from '../Axios/Config';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const NewPost = () => {
  const naviate = useNavigate()

  const[title, setTitle] = useState()
  const[body, setBody]= useState()

  const createPost = async (e) => {
    e.preventDefault();

    const post = {title, body, userId: 1};

    await blogFetch.post("/posts", {
      body: post,
    });

    naviate("/")

  }


  return (
    <div className="NewPost">
      <h2>Inserir novo Post:</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="fromControl">
          <label htmlFor="title">titulo</label>
          <input 
          type="text" 
          name= "title"
          id= "title" 
          placeholder="digite o título"
          onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="fromControl">
          <label htmlFor="body">conteudo</label>
          <textarea 
          name= "body"  
          id= "body" 
          placeholder="Digite o conteudo"
          onChange={(e) => setBody(e.target.value)}>
          </textarea>
        </div>

        <input type="submit" value="Criar post" className="btn"/>

      </form>

    </div>
  )
}

export default NewPost
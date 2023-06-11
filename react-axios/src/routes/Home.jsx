import blogFetch from "../Axios/Config";
import {useState, useEffect} from "react";
import axios from "axios";

import {Link} from "react-router-dom";

import './Home.css'

const Home = () => {

  const [posts, setPosts] = useState([])
  const getPosts = async() => {
    console.log("testando")

    try{

      const response = await blogFetch.get("/posts")
      
      const data = response.data;
      setPosts(data)
    
    }catch(error){
      console.log("Falha ao Conectar com a api")

    }



  };

  useEffect(() =>{

    getPosts();

  },[])


  return (
    <div className="Home">
    <h1>Ultimos Post</h1>
    {posts.length === 0? (<p>carregando...</p>) : (
      posts.map((post) => (
        <div className="post" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Link to={`/posts/${post.id}`} className="btn">Ler mais</Link>
        </div>
      ))
    ) }
    </div>
  )
}

export default Home
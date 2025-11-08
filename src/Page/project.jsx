import { useState, useEffect } from "react";
import Cards from "../Components/cards";
import '../styles/project.css';
import { getPost,getPhoto } from '../api/api.js';

export default function Project() {
   const[photo, setPhoto]=useState([])
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    getPost().then(posts => {
      setData(posts);
      setLoading(false);
    });
  }, []);

  useEffect(()=>{
   getPhoto().then(photo =>{
      setPhoto(photo);
      console.log(photo)
      setLoading(false)
   })
  })

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div id="project">
      {data.map((e) => (
        <Cards
          key={e.id}
          img_src={photo.src.medium}
          title={e.title}
          description={e.body}
        />
      ))}
    </div>
  );
}

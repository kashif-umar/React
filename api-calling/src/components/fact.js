import { useState,useEffect } from "react";
import axios from "axios";


function Fact(){

    const [posts, setPosts] = useState([]);

    useEffect(() => {
      axios.get('https://catfact.ninja/fact')
        .then(response => {
          setPosts(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);

    return (
        <div className="Fact">
            <p>{posts.fact}</p>
        </div>
    );
}
export default Fact;
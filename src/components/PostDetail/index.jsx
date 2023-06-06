import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";

const PostDetail = () => {

    const navigate = useNavigate();
    const {categoria, id} = useParams();

    const [post, setPost] = useState([]);

    useEffect(() => {
        getPost(id);
    }, [])

    
        async function getPost(id) {
            try {
                const response = await api.get(`/posts/${id}`);
                console.log(response);
            } catch (error) {
                console.error(error);
                navigate('/');
            }
        }

    return (
        <div className="post-container">
            <div className="flex">
                <p>{categoria}</p>
                <p>{id}</p>
            </div>
        </div>
    );

}

export default PostDetail;
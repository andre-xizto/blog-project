import api from '../../services/api';
import Post from '../../components/Post';
import {useState, useEffect} from 'react';
import { format } from 'date-fns';

const Main = () => {

    const [post, setPost] = useState([]);

    useEffect(() => {
        handleAxiosPosts();
    }, []);

    async function handleAxiosPosts() {
        try {
        const response = await api.get('/posts');
        setPost(response.data.slice(0, 3));
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <>
        <h3 className='container-posts'>Articles</h3>
        <div className="container-posts">
            {
                post.map(post => {
                    return (
                    <Post key={post.id} id={post.id} title={post.titulo} category={post.categoria} author={post.autor} date={format(post.data_unix, 'MMM dd, yyyy')} tempo={post.tempo_de_leitura}>
                        {post.resumo}
                    </Post>
                    );
                })
            }
        </div>
        </>
    );
}

export default Main;
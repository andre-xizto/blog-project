import { useNavigate } from "react-router-dom";

const Post = (propriedades) => {

    const navigate = useNavigate();

    const handlePostDetail = (categoria, id) =>{
        navigate(`categorias/${categoria}/post/${id}`);
    }

    return (
        <div className="post mr-84" onClick={() =>handlePostDetail(propriedades.category, propriedades.id)}>
            <div className="img-post"></div>
            <h5>{propriedades.category}</h5>
            <h3 className="titulo-post">{propriedades.title}</h3>
            <p className="resume mt-2">{propriedades.children}
            </p>
            <div className="flex p-1 align-center mt-2">
                <div className="img-profile"></div>
                <div className="desc-profile ml-3">
                    <h6 className="color-blue">{propriedades.author}</h6>
                    <p>{propriedades.date} - {propriedades.tempo}</p>
                </div>
            </div>

        </div>
    );
}

export default Post;
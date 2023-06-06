const Post = () => {
    return (
        <div className="post mx-2">
            <div className="img-post"></div>
            <h5>Tecnologia</h5>
            <h3>O título do post</h3>
            <p>Lorem IPSUM DOLOR SIT AMET Lorem IPSUM DOLOR SIT AMET
            Lorem IPSUM DOLOR SIT AMET
            Lorem IPSUM DOLOR SIT AMET
            Lorem IPSUM DOLOR SIT AMET
            Lorem IPSUM DOLOR SIT AMET
            </p>
            <div className="flex p-1 align-center mt-2">
                <div className="img-profile"></div>
                <div className="desc-profile ml-3">
                    <h6 className="color-blue">Fulano de tal</h6>
                    <p>Aug 2, 2023 - 8 min read</p>
                </div>
            </div>

        </div>
    );
}

export default Post;
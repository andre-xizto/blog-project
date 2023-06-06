import Post from '../Post';

const Article = () => {
    return (
        <section className="container p-3">
        <h3>Article</h3>
        <div className="list-posts flex my-4">
            <Post/>
            <Post/>
            <Post/>
        </div>
        </section>
    );
}

export default Article;
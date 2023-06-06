import Post from '../Post';

const Article = () => {
    return (
        <section className="container p-3">
        <h3>Article</h3>
        <div className="list-posts flex my-4">
            <Post title="Um novo post do blog" subtitle="Tecnologia">
                Lorem IPSUM Lorem IPSUM Lorem IPSUM Lorem IPSUM Lorem IPSUM Lorem IPSUM Lorem IPSUM 
                Lorem IPSUM
                Lorem IPSUMLorem IPSUMLorem IPSUMLorem IPSUM
            </Post>
            <Post title="Um novo post do blog 2" subtitle="Música">
                Lorem IPSUM Lorem IPSUM Lorem IPSUM Lorem IPSUM Lorem IPSUM Lorem IPSUM Lorem IPSUM 
                Lorem IPSUM
                Lorem IPSUMLorem IPSUMLorem IPSUMLorem IPSUM
            </Post>
            <Post title="Um novo post do blog 3" subtitle="Arte">
                Lorem IPSUM Lorem IPSUM Lorem IPSUM Lorem IPSUM Lorem IPSUM Lorem IPSUM Lorem IPSUM 
                Lorem IPSUM
                Lorem IPSUMLorem IPSUMLorem IPSUMLorem IPSUM
            </Post>
        </div>
        </section>
    );
}

export default Article;
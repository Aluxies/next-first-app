import Header from "@/components/Header";
import Title from "@/components/Title";
import Container from "@/components/Container";

export default function Article({title, content}) {
    return (
        <div>
            <Header/>
            <Title content={title}/>
            <Container>
                <p>{content}</p>
            </Container>
        </div>
    )
}

export async function getStaticProps({params}){
    const { id } = params;
    const res = await fetch(`http://localhost:3000/api/blog/posts?id=${id}`);
    const postFound = await res.json();

    return {
        props: {
            title : postFound.title,
            content : postFound.content
        }
    }

}

export async function getStaticPaths() {
    const res = await fetch('http://localhost:3000/api/blog/posts');
    const posts = await res.json();

    const paths = posts.map( post => ({
        params: {id: post.id}
    }));

    return { paths, fallback: false}
}
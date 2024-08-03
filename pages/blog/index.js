import Header from "@/components/Header";
import Title from "@/components/Title";
import posts from "../api/blog/post";
import Link from "next/link";
import Container from "@/components/Container";
import linkStyles from "@/styles/Link.module.css";

const APP_BASE_URL = "http://localhost:3000/";

export default function Blog() {
    return (
        <>
            <Header/>
            <Title content="Blog"/>
            <Container>
                <ul>
                    {posts.map(post => {
                        return <li><Link className={linkStyles.link} href={APP_BASE_URL + "blog/" + post.id}>{post.title}</Link></li>
                    })}
                </ul>
            </Container>
        </>
    );
}
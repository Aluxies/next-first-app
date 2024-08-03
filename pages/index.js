import Header from "@/components/Header";
import Title from "@/components/Title";
import Container from "@/components/Container";
import Form from "@/components/Form";

export default function Home() {
  return (
    <>
        <Header/>
        <Title content="Home"/>
        <Container>
            <p>
                This is my first NextJS application. Its purpose is to discover the aspects of this framework.
                <br/><br/>
                These aspects are as follows :
            </p>
            <br/>
            <ul>
                <li>Discovering the routing system</li>
                <li>Creating reusable components</li>
                <li>Using the functions useState() and useEffect()</li>
                <li>Handling navigation throught multiple pages</li>
                <li>Creating a small local API</li>
                <li>Consuming the local API</li>
                <li>Using some other functions as getStaticProps() and getStaticPaths()</li>
            </ul>
            <br/>
            <p>
                That was a beautiful learning that I followed with the YouTuber known as "AKDEV".<br/>
                <br/>
                See his training about NextJS.
            </p>
        </Container>

        <Form/>
    </>
  );
}

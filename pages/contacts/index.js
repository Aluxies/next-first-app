import {useState, useEffect} from "react";
import Header from "@/components/Header";
import Title from "@/components/Title";
import Button from "@/components/Button";
import Container from "@/components/Container";
import styles from "/styles/Contact.module.css"

export default function Contact() {
    const [contacts, setContacts] = useState([]);
    const [isFilled, setIsFilled] = useState(false);

    const updateContacts = () => {
        setContacts([...contacts, "alex.andrie@exemple.com"]);
    }

    useEffect(() => {
        if (isFilled) return;

        const initialContacts = [
            "john.doe@exemple.com",
            "samina.minahehe@exemple.com",
            "joe.forbiden@exemple.com"
        ];

        setContacts([...initialContacts]);
        setIsFilled(true);

    }, [contacts]);

    return (
        <>
            <Header/>
            <Title content="Contacts"/>
            <Container>
                <div className={styles.contact}>
                    <ul>
                        {contacts.map(contact => {
                            return <li>{contact}</li>
                        })}
                    </ul>
                    <Button onClick={updateContacts} value="Add contact"/>
                </div>
            </Container>
        </>
    );
}
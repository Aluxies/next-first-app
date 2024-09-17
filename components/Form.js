import Container from "@/components/Container";
import {useState} from "react";

export default function Form() {

    const [formData, setFormData] = useState({
        lastName: "",
        firstName: "",
        age: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (event) => {
        const {type, name, value} = event.target;

        setFormData(prev => {

            return {
                ...prev,
                [name] : value,
            };

        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitted(true);
        const delay = 5000;
        const timeOutClock = setTimeout(() => {
           setIsSubmitted(false);
            clearTimeout(timeOutClock);
        }, delay);
    }

    return (
        <>
            <Container>
                <form onSubmit={handleSubmit}>
                    <h4>First name</h4>
                    <input
                        type="text"
                        placeholder="Please type your first name"
                        onChange={handleChange}
                        value={formData.firstName || ""}
                        name="firstName"
                    />
                    <h4>Last name</h4>
                    <input
                        type="text"
                        placeholder="Please type your last name"
                        onChange={handleChange}
                        value={formData.lastName || ""}
                        name="lastName"
                    />
                    <h4>Age</h4>
                    <input
                        type="number"
                        defaultValue="1"
                        step="1"
                        min="1"
                        max="130"
                        placeholder="Please choose your age"
                        onChange={handleChange}
                        value={formData.age || 1}
                        name="age"
                    />
                    <input type="submit" value="Submit"/>
                </form>
            </Container>
            {isSubmitted && (
                <Container>
                    <p>Hello {formData.firstName && formData.lastName ? formData.firstName + " " + formData.lastName : "you"}, I am pleased to meet you. It's been {formData.age ? formData.age : "a long time"} that you've been living on this eart !</p>
                </Container>
            )}

        </>
    );
}
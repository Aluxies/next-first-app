import {useState} from "react";
import Header from "@/components/Header";
import Title from "@/components/Title";
import Button from "@/components/Button";
import styles from "/styles/ToDoList.module.css";
import Container from "@/components/Container";

export default function toDoList() {

    const [tache, setTache] = useState("");
    const [tab, setTab] = useState([]);

    const handleChange = (event) => {
        setTache(event.target.value);
    }

    const addTask = () => {
        setTab(prev => {
           return [...prev, {id: prev.length+1, task: tache}];
        });
        setTache("");
    }

    const deleteTask = (id) => {
        const filteredTab = tab.filter(e => e.id !== id);
        setTab(filteredTab);
    }

    return (
        <>
            <Header/>
            <Title content="To do list"/>
            <Container>
                <div className={styles.todolist}>
                    <h4>Add a task</h4>
                    <input type="text" placeholder="Please type a task" value={tache} onChange={handleChange}/>
                    {tache && (
                        <Button onClick={addTask} value="Add"/>
                    )}
                    <h3>To do list</h3>
                    {tab.length === 0 ?
                        (<p>The list is empty</p>)
                        : (
                            <div className={styles.tasklist}>

                                <ul>
                                    {
                                        tab.map(e => {
                                            return (
                                                <div key={e.id + "-div"} className={styles.row}>
                                                    <li key={e.id + "-li"}>{e.task}</li>
                                                    <Button key={e.id + "-button"} onClick={() => deleteTask(e.id)}
                                                            value="Delete"/>
                                                </div>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    }
                </div>
            </Container>
        </>
    )
}
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Message from "../layout/Message";
import Container from "../layout/Container";
import Loading from "../layout/Loading";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";

import styles from './Projects.module.css';

const url = 'http://localhost:5000/projects';

const Projects = () => {

    const [projects, setProjects] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);
    const [projectMessage, setProjectMessage] = useState('');

    const location = useLocation();

    let message = '';

    if(location.state){
        message = location.state.message;
    }

    useEffect(() => {
        //timeout só para simular o loading da página em uma requisição real não é necessário
        // setTimeout(() => { 
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => res.json())
            .then((data) => {
                setProjects(data);
                setRemoveLoading(true);
            })
            .catch((err) => console.log(err));
        // }, 3000);
    }, []);

    function removeProject(id) {
        fetch(url+`/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((res) => res.json())
        .then(() => {
            setProjects(projects.filter(project => project.id !== id));
            setProjectMessage('Projeto removido com sucesso!');
        })
        .catch((err) => console.log(err));
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Novo Projeto" />
            </div>
            {message && <Message type="success" msg={message}/>}
            {projectMessage && <Message type="success" msg={projectMessage}/>}
            <Container customClass="start">
                {projects.length > 0 && projects.map((project) => (
                    <ProjectCard 
                        id={project.id} 
                        name={project.name} 
                        budget={project.budget} 
                        category={project.category.name}
                        key={project.id}
                        handleRemove={removeProject}
                    />
                ))}
                {!removeLoading && <Loading />}
                {removeLoading && projects.length === 0 && (
                    <p>Não há projetos cadastrados!</p>
                )}
            </Container>
        </div>
    );
}

export default Projects;
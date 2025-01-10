import { useState } from "react";
import { Container, Form, Background } from "./styles";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { api } from "../../services/api";


export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp(event) {
        if(!name || !email || !password) {
            return alert("Preencha todos os campos!");
        }
        event.preventDefault()

       api.post("/users", {name, email, password}).
       then(() => {
        alert("Usuário cadsatrado com sucesso!");
        navigate("/");
       })
       .catch(error => {
        if(error.response) {
            alert(error.response.data.message);
        } else {
            alert("Não foi possivel cadastrar");
        }
       })

    }

    return(
        <Container>
            <Form onSubmit={handleSignUp}>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Crie sua conta</h2>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />
                 <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button type="submit" title="Cadastrar" />

                <Link to="/">
                    <BiArrowBack />
                    Voltar para o login
                </Link>
            </Form>

            <Background/>
        </Container>
    );
}
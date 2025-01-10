import { useState } from "react";
import { useAuth } from "../../hooks/auth"
import { Container, Form, Background } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn(event) {
        event.preventDefault()
        signIn({email, password});
    }
   
    return(
        <Container>
            <Form onSubmit={handleSignIn}>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Faça seu login</h2>
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
                <Button type="submit" title="Entrar"/>

                <Link to="/register">
                    Criar conta
                </Link>
            </Form>

            <Background/>
        </Container>
    );
}
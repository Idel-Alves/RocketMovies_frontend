import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import { Container, Head, NewFilm, Content } from "./styles";

import { IoAdd } from "react-icons/io5";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";



export function Home() {
    const [notes, setNotes] = useState([])
    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    function handleDetails(id) {
        navigate(`/details/${id}`)
    }

    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}`);
            setNotes(response.data);
        }

        fetchNotes();

    }, [search]);

    return(
        <Container>
            <Header>
                <div className="search">
                    <Input 
                        placeholder="Pesquisar pelo título"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </Header>    
                    <Head>
                        <h2>
                            Meus filmes
                        </h2>
                        <NewFilm to="/new">
                            <IoAdd/>
                            <p>Adicionar filme</p> 
                        </NewFilm>
                    </Head>
            <main>    
                <Content>   
                   {notes.map(note => (
                    <Note key={String(note.id)} data={note}
                    onClick={() => handleDetails(note.id)}
                    />
                ))
                }

                   
                </Content>
            </main>
        </Container>
    );
}
import { Container, Content, Form, Delete, Save } from "./styles";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { FiArrowLeft } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { Link } from "react-router-dom";

export function New() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");
    const [search, setSearch] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    async function handleNewNote(event) {
        event.preventDefault()
        if (!title) {
            return alert("Digite o título do filme!")
        }

        if (!rating) {
            return alert("Digite a sua avliação do filme!")
        }

        if (newTag) {
            return alert("Você deixout uma tag no campo para adicionar, mas não clicou em adicionar. Clique em adicionar ou deixae o campo vazio");
        }

        await api.post("/notes", {
            title,
            description,
            rating,
            tags
        });
        alert("Nota criada com sucesso!");
        navigate("/");
    }

    return (
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

            <main>
                <Content>
                    <Form onSubmit={handleNewNote}>
                        <header>
                            <Link to="/">
                                <FiArrowLeft />
                                Voltar
                            </Link>
                            <h1>Novo filme</h1>
                        </header>

                        <div>
                            < Input
                                placeholder="Título"
                                onChange={e => setTitle(e.target.value)}
                            />
                            < Input
                                placeholder="Sua nota (de 0 a 5)"
                                onChange={e => setRating(e.target.value)}
                            />
                        </div>
                        <Textarea
                            placeholder="Observações"
                            onChange={e => setDescription(e.target.value)}
                        />
                        <Section title="Marcadores">
                            <div className="tags">
                                {
                                    tags.map((tag, index) => (
                                        <NoteItem
                                            key={String(index)}
                                            value={tag}
                                            onClick={() => handleRemoveTag(tag)}
                                        />
                                    ))
                                }
                                <NoteItem
                                    isNew
                                    placeholder="Novo marcador"
                                    onChange={e => setNewTag(e.target.value)}
                                    value={newTag}
                                    onClick={handleAddTag}
                                />
                            </div>
                        </Section>
                        <div>
                            <Delete type="submit">
                                Excluir filme
                            </Delete>
                            <Save type="submit">
                                Salvar alterações
                            </Save>

                        </div>
                    </Form>
                </Content>
            </main>
        </Container>
    );
}
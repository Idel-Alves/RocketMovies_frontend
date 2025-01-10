import { Container, Content, LinkBack, Name, PublicationDetails, Tags, Text } from "./styles";
import { useParams, useNavigate  } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { IoTimeOutline, IoArrowBackSharp } from "react-icons/io5";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Tag } from "../../components/Tag";
import { Stars } from "../../components/Stars";

export function Details() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [avatarURL, setAvatarURL] = useState(
    user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  );

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, [])

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
      {
        data &&
        <main>
          <Content>
            <LinkBack to="/">
              <IoArrowBackSharp />
              Voltar
            </LinkBack>
            <Name>
              <h2>{data.title}</h2>
              <div>
                <Stars rating={data.rating} />
              </div>
            </Name>

            <PublicationDetails>
              <div>
                <img src={avatarURL} alt={user.name} />
                <span>Por {user.name}</span>
              </div>

              <div>
                <IoTimeOutline />
                {data.updated_ar}
              </div>
            </PublicationDetails>

            {data.tags &&
              <Tags>
                {data.tags.map(tag => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
              </Tags>
            }
            <Text>
              <p>
                {data.description}
              </p>
            </Text>
          </Content>
        </main>
      }
    </Container>
  )
}
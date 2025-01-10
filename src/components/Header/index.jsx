import { Container, Brande, Profile, ProfilePhoto } from "./styles";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header({children}) {
    const { signOut, user } = useAuth();

    const navigation = useNavigate();

    function handleSignOut() {
        navigation("/")
        signOut()
      }

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder; 
    return (
        <Container>
            <Brande>
            <h1>RocketMovies</h1>
            </Brande>

            {children}

            <Profile>
                <div>
                    <strong>{user.name}</strong>
                    <button onClick={handleSignOut}>
                        sair
                    </button>
                </div>

               <ProfilePhoto to="/profile">
                <img src={avatarUrl}
                    alt={user.name} />
               </ProfilePhoto>
            </Profile>
        </Container>
    );
}
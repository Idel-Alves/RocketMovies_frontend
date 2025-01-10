import { StyledButton } from "./styles";

export function Button({title, loading = false, ...rest}) {
    return(
        <StyledButton
        disabled={loading}
        {...rest}
        >
           {loading ? 'Carregando...' : title }
        </StyledButton>
    );
}
import styled from "styled-components";
import cores from "../../global-css";

export const Home_div = styled.div`

.home-bg{
    max-width: 100%;
}

.home {
    /* border-bottom: 2px solid ${cores.verde}; */
    max-width: 100%;
    /* padding: 0 40px 0 40px; */
    min-height: calc(100vh - 60px);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;      
}

.home-info{    
    flex-grow: 1;
    max-width: 30%; 
    min-width: 300px;   
}

.home-info h1{
    font-size: 3em;
    margin-bottom: 0.5em;
    color: ${cores.azulEscuro};
}

.home-info p{
    font-size: 1.25em;
    line-height: 1.4;
    margin-bottom: 1em;
    color: ${cores.azulEscuro};
}

.home-img{
    flex-grow: 1;
    max-width: 50%;
    min-width: 350px;
    margin-right: 10%;
}

/* .img--home {
    
    background-image: url("../../assets/img/home-fundo.JPG");
} */
 
`;
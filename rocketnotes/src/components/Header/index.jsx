import {RiShutDownLine} from 'react-icons/ri'
import { Container,Profile,Logout }  from "./styles";

export function Header(){
  return(
    <Container>
      <Profile>
       <img src="https://github.com/Paulo-xavier-a.png" 
       alt="imagem do usuario" />
       
       <div>
       <span>Bem-vindo</span>
       <strong>Paulo Ricardo</strong>
       </div>
      </Profile>

     <Logout>
      <RiShutDownLine/>
     </Logout>

    </Container>
  )
}
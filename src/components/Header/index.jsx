import Logo from '../../assets/logo.png'
import {Container,Menu, Li} from '../Header/styles'
import {Link} from 'react-router-dom'


function Header(){
    return(
        <Container>
            <img src={Logo} alt='logo-dev-movies' />
           <Menu>
            <Li>
            <Link to={"/"} >Home</Link>
            </Li>
            <Li>
            <Link to={"/filmes"}  >Filmes</Link>
            </Li>
            <Li>
            <Link to={"/series"}>Series</Link>
            </Li>
           </Menu>
           
        </Container>
    )
}

export default Header
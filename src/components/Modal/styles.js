import styled  from 'styled-components'



export const Container = styled.div `
background: #000;
width: 70%;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
padding: 50px;
max-width: 1200px;

iframe{
    border: none;
}


`

export const BackGround = styled.div `
height: 100vh;
width: 100vw;
z-index: 999;
background-color: rgba(0,0,0,0.7);
position: absolute;
display: flex;
justify-content: center;
align-items: center;

`

export const Button = styled.button `
width: 2rem;
position: absolute;
  top: 0;
  right: 0;
cursor: pointer;
`
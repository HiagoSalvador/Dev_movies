import styled, {keyframes}  from 'styled-components'


const scale = keyframes`
from{
    transform: scale(0)
}

to{
    transform: scale(1)
}
`





export const Background = styled.div `
background-image: url(${props => props.img });
height:100vh;
background-position:center;
background-size:cover;
display:flex;
align-items:center;
justify-content:center;
position: relative;

&::before{
    content:"";
    position:absolute;
    top: 0;
    left:0;
    width:100%;
    height:139.7%;
    background-color: rgba(0, 0 ,0, 0.5);
}

&::after{
    content: "";
    position: absolute;
    bottom: 0 ;
    left: 0;
    width: 100%;
    height: 130px;
    background-image: linear-gradient(to top, #000, rgba(0,0,0,0))
}

`

export const Container = styled.div`
display:flex;
flex-direction: row;
justify-content:space-around;
align-items:center;
height: 100%;
max-width: 1500px;
`


export const Info = styled.div `
z-index: 2;
padding:20px;
width:50%;

h1{
    font-size: 4rem;
    font-weight:700;
    color: #fff;
}

p{

    font-size: 20px;
    font-weight: 500;
    color: #fff;
    margin-top:30px;
    margin-bottom: 20px;
}

`

export const Poster = styled.div`
z-index: 2;
animation: ${scale} 0.5s linear;
img{
  width:400px;
  border-radius: 30px;
}
`

export const ContainerButtons = styled.div `
display: flex;
gap: 20px;
margin-top: 30px;
`

    
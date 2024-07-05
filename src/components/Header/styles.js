import styled  from 'styled-components'







export const Container = styled.div `
z-index: 99;
position: fixed;
top: 0;
display: flex;
justify-content: space-between;
align-items: center;

img{
    width: 25%;
    padding: 7px 50px;
}


`

export const Menu = styled.ul `
display: flex;
margin-left: 55rem;
margin-bottom: 30px;
list-style: none;
gap: 50px;



`

export const Li = styled.li `
font-size: 28px;
font-weight: 600;
cursor: pointer;



a{
text-decoration: none;
color: #fff;


}
`




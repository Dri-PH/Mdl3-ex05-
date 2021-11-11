import styled from "styled-components";

export const Container = styled.section`
    height:300rem;
`;
///////////////////Navigation///////////////////////
export const NavSection = styled.section`
    background: url(${props => props.headerback});
    background-blend-mode: darken;
    background-color:rgba(0,133,208,0.19371498599439774);
    background-size: cover;
    height:10vh;
    border-bottom:solid 3px red;
    display:flex;
    align-items:center;
    justify-content: space-around;
    figure{
        width:5rem;
    }
    img{
        width:100%;
    }
`;
export const NavBar = styled.div`
    border:solid 3px;
    display:flex;
    align-items:center;
    justify-content: space-around;
    width:50rem;
    nav{
        width:35rem;
        display:flex;
        align-items:center;
        justify-content: space-around;
        border:solid 3p;
    }
    button{
        font-size:1rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        background:none;
        border-top:none;
        border-bottom:none;
        border-left:solid 2px red;
        border-right:solid 2px red;
        border-radius: 5px;
        &:hover {
            transition: ease 0.75s;
            box-shadow: inset 0 0 50px 0 rgba(193, 168, 101, 0.2329306722689075);
            transition-delay: 1ms;
            background: rgb(226, 225, 223);
            background: radial-gradient(
              circle,
              rgba(226, 225, 223, 0.7259278711484594) 0%,
              rgba(219, 194, 123, 0.6026785714285714) 52%,
              rgba(241, 238, 203, 0) 100%
            );
            color: #eee;
          }
    }
    div{
        width:15rem;
        display:flex;
        justify-content:center;
        align-items:center;
        border:solid 3px red;
    }
    figure{
        border:solid 3px;
        width:1rem;
        display:flex;
        margin:0;
    }
    img{
        width:100%;
    }
    p{
        border:solid 3px;
    }
`;
/////////////////////////////////////////
//////////////////HeaderHub//////////////
export const HeaderHub = styled.section`
    height:90vh;
    background: url(${props => props.back});
    background-attachment: fixed;
    background-size: cover;
    display:flex;
    div{
        height:45%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        margin:1rem;
    }
    figure{
        
        width:25rem;
        margin:0;
    }
    img{
        width:100%;
    }
    span{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
       
    }
    button{
        filter: brightness(110%);
        margin-top:1rem;
        color:#fff;
        font-size:2rem;
        background: rgb(68,0,0);
        background: linear-gradient(0deg, 
            rgba(68,0,0,1) 0%, 
            rgba(182,0,0,1) 25%, 
            rgba(255,0,0,1) 50%,
            rgba(182,0,0,1) 75%, 
            rgba(68,0,0,1) 100%);
            border:none;
            border-radius:3px;
        width:16rem;
        height:3rem;
    }
`;
/////////////////////////////////////////////
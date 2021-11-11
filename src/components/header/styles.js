import styled from "styled-components";

export const Container = styled.section`
`;
///////////////////Navigation///////////////////////
export const NavSection = styled.section`
    background: url(${props => props.headerback});
    background-blend-mode: darken;
    background-color:rgba(12,37,105,0.38323704481792717);
    background-size: cover;
    height:10vh;
    border-bottom:solid 1.5px rgba(148,165,225,0.4805497198879552);
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
    display:flex;
    align-items:center;
    justify-content: space-around;
    width:50rem;
    nav{
        width:35rem;
        display:flex;
        align-items:center;
        justify-content: space-around;
    }
    button{
        color:#fff;
        font-size:1rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        background:none;
        border-top:none;
        border-bottom:none;
        border-left:solid 1px red;
        border-right:solid 1px red;
        border-radius: 5px;
        &:hover {
            filter: brightness(105%);
            transition: ease 1s;
            box-shadow: inset 0 0 50px 0 rgba(255,255,255,0.51416316526610644);
            transition-delay: 175ms;
            background: radial-gradient(circle, 
                rgba(5,24,93,0.35898109243697474) 11%, 
                rgba(10,48,158,0.12637429971988795) 51%, 
                rgba(255,255,255,0.31416316526610644) 74%, 
                rgba(228,229,233,0.07886904761904767) 100%);
            color:black;
            border-left:solid 1px black;
            border-right:solid 1px black;
          }
    }
    div{
        width:15rem;
        display:flex;
        justify-content:center;
        align-items:center;

    }
    figure{
       
        width:1rem;
        display:flex;
        margin:0;
    }
    img{
        width:100%;
    }
    p{
        color:#eee;
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
import styled from "styled-components";

export const Container = styled.section`
    color:#fff;
    background: url(${props => props.footerback});
    figure{
        width:6rem;
    }
    img{
        width:100%;
    }
`;
export const References = styled.section`
    background: linear-gradient(122deg, 
        rgba(47,55,69,0.7707457983193278) 12%, 
        rgba(66,69,77,0.6054796918767507) 52%, 
        rgba(41,41,41,0.8491771708683473) 100%);
    box-shadow: inset 0 0 700px 0 rgba(16,19,17,0.6054796918767507) ;
    span{
        height:20rem;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    div{
        height:12rem;
        width:15rem;
    }
`;
export const Location = styled.div`
    p{
        width:47%;
    }
`;
export const CustonLinks = styled.div`
    ul{
        list-style-type: none;  
        padding:0;
    }
`;
export const CopyRight = styled.section`
    display:flex;
    justify-content:center;
    background:rgba(31,31,31,0.9304096638655462);
    p{
        color:rgba(100,103,108,0.7707457983193278);
        width:60rem;
    }
`;
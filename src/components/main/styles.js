import styled from "styled-components";

export const Container = styled.section`
    height:300rem;
`;
/////////////////SectionList////////////////////
export const MainNav = styled.section`
    display:flex;
    height:20rem;
    align-items:center;
    justify-content:center;
    background:rgba(230,230,230,0.4374124649859944);
    nav{
        width:80vw;
        height:18rem;
        display:flex;
        justify-content:space-around;
    }
    span{
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
    }
    figure{
        margin:0;
        width:15rem;
    }
    img{
        width:100%;
    }
    button{
        filter: brightness(110%);
        text-transform: uppercase;
        margin-top:0.5rem;
        color:#fff;
        font-size:0.75rem;
        background: linear-gradient(0deg, 
            rgba(68,0,0,0.81444) 0%, 
            rgba(182,0,0,1) 25%, 
            rgba(255,0,0,1) 50%,
            rgba(182,0,0,1) 75%, 
            rgba(68,0,0,0.81444) 100%);
            border:none;
            border-radius:3px;
        width:7rem;
        height:2.25rem;
    }
`;
//////////////////////////////////////////////
/////////////////SectionCustumer//////////////
export const MainInf = styled.section`
    background: url(${props => props.mainback});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    height:38rem;
    box-shadow: inset 750px 0 300px 0  rgba(240,240,240,0.9220063025210083);
    div{
        background: linear-gradient(90deg, 
            rgba(183,187,200,1) 0%, 
            rgba(240,240,240,1) 54%, 
            rgba(239,239,239,0.773546918767507) 58%, 
            rgba(228,229,233,0) 72%);
        height:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        width:45rem;
    }
    span{
        width:35rem;
    }
    h1{
        font-size:2.2rem;
    }
    p{
        width:30rem;
        font-size:1.2rem;
    }
`;
export const MainList = styled.nav`
    width:35rem;
}
ul{
    margin:0;
    padding:0;
}
li{
    height:2.5rem;
    display:flex;
    align-items:center;
    width:26rem;
}
figure{
    margin:0;
    width:1rem;
    margin-right:0.3rem;
}
img{
    width:100%;
}
`;
//////////////////////////////////////////////
/////////////////////////////////////////
export const MainSeeMore = styled.section`
    border:solid 3px;   
    div{
        border:solid 3px;
    }
    span{
        border:solid 3px red;
    }
    img{
        width:100%;
    }
`;
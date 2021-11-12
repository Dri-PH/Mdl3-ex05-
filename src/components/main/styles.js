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
        background:  rgba(182,0,0,1);
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
/////////////////FakeVideos///////////////////
export const MainSeeMore = styled.section`
    background: url(${props => props.smokeback});
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: darken;
    box-shadow: inset 70px 0 300px 0  rgba(0,0,0.1);
    border-top:solid 1px rgba(0,0,0.2);
    height:25rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;  
    div{
        color:#fff;
        font-size:1.5rem;
        display:flex;
        align-items:center;
        justify-content:center;
        height:6rem;
    }
`;
export const SmokeBlend = styled.section`
    box-shadow: inset -40px -20px 100px 0px rgba(0,0,0.1);
    background: rgb(29,49,84);
    background: linear-gradient(122deg, 
        rgba(29,49,84,0.9999999) 0%, 
        rgba(97,122,167,0.59) 25%, 
        rgba(141,159,192,0.6) 29%, 
        rgba(212,213,214,0.6) 35%,
        rgba(186,186,186,0.5) 40%, 
        rgba(190,190,190,0.4) 50%, 
        rgba(246,239,239,0.4) 60%, 
        rgba(230,216,216,0.5) 65%, 
        rgba(221,136,136,0.5) 68%, 
        rgba(199,56,56,0.4) 75%, 
        rgba(130,28,28,0.999999) 100%);
    height:100%;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;  
`;
export const NavImg = styled.nav`
    display:flex;
    justify-content:space-around;
    align-items:center;
    width:70%;
`;


export const FakeVideo1 = styled.figure`
    box-shadow: 10px 0 30px 0  rgba(0,0,0.1);
    background: url(${props => props.videoback1});
    background-size: 100%;
    background-position: center;
    display:flex;
    margin:0;
    width:20rem;
    height:10rem;
    display:flex;
    justify-content:center;
    align-items:center;
`;
export const FakeVideo2 = styled.figure`
    box-shadow: 10px 0 30px 0  rgba(0,0,0.1);
    background: url(${props => props.videoback2});
    background-size: 100%;
    background-position: center;
    display:flex;
    margin:0;
    width:20rem;
    height:10rem;
    display:flex;
    justify-content:center;
    align-items:center;
`;
export const TrollButton = styled.span`
    border:solid orange 2px;
    width:3rem;
    &:hover {
        display:none;
        }
    img{
        width:100%;
    }
`;
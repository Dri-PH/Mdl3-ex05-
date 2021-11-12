import React from "react"
import { graphql , useStaticQuery } from "gatsby"
import * as S from "./styles"

export function Header(){
  const data = useStaticQuery(graphql`
    query{
      acdata{
        headers {
          btnabout
          btncontact
          btnhome
          btnreservation
          btnreservenow
          btnservices
          navlogoimg {
            url
          }
          logoimgheader {
            url
          }
          paragraphphone
          backheader {
            url
          }
          phoneicon {
            url
          }
          navback{
            url
          }
        }           
      }
    }
  `)

  const {
    btnabout,
    btncontact,
    btnhome,
    btnreservation,
    btnreservenow,
    btnservices,
    navlogoimg,
    logoimgheader,
    paragraphphone,
    backheader,
    phoneicon,
    navback
  } = data.acdata.headers[0]

  return(
    <S.Container>
      <S.NavSection headerback={navback.url}>
        <figure>
          <img src={navlogoimg.url} alt="AC-logo"/>
        </figure>
        <S.NavBar>
          <nav>
              <button>{btnhome}</button>
              <button>{btnabout}</button>
              <button>{btnservices}</button>
              <button>{btnreservation}</button>
              <button>{btncontact}</button>      
          </nav>
          <div>
            <figure>
              <img src={phoneicon.url} alt="phone icon" />
            </figure>
            <p>{paragraphphone}</p>
          </div>
        </S.NavBar>
      </S.NavSection>
      <S.HeaderHub back={backheader.url}>
        <div>
          <figure>
            <img src={logoimgheader.url} alt="Assassin's Creed Unity" />
          </figure>
          <span>
            <button>{btnreservenow}</button>
          </span>
        </div>
      </S.HeaderHub>
    </S.Container>
  )
}
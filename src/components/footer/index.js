import React from "react"
import { graphql , useStaticQuery } from "gatsby"
import * as S from "./styles"

export function Footer(){
  const data = useStaticQuery(graphql`
    query{
      acdata{
        footers {
          aboutlink
          contactlink
          copyright
          dayparagraph1
          dayparagraph2
          facebook
          googleplus
          reservationlink
          pinterest
          homelink
          subtitleday
          subtitlelinks
          subtitlelocation
          serviceslink
          subtitlesocials
          twitter
          logoimg {
            url
          }
          locationparagraph
          backimg{
            url
          }
        }
      }
    }
  `)

  const {
    locationparagraph,
    aboutlink,
    contactlink,
    copyright,
    dayparagraph1,
    dayparagraph2,
    facebook,
    googleplus,
    reservationlink,
    pinterest,
    homelink,
    subtitleday,
    subtitlelinks,
    subtitlelocation,
    serviceslink,
    subtitlesocials,
    twitter,
    logoimg,
    backimg
  } = data.acdata.footers[0]

  return(
      <S.Container footerback={backimg.url}>
        <S.References>
          <span>
            <figure>
              <img src={logoimg.url} alt="Logo"/>
            </figure>
            <S.Location>
              <h3>{subtitlelocation}</h3>
              <p>{locationparagraph}</p>
            </S.Location>
            <div>
              <h3>{subtitleday}</h3>
              <p>{dayparagraph1}</p>
              <p>{dayparagraph2}</p>
            </div>
            <S.CustonLinks>
              <h3>{subtitlelinks}</h3>
              <nav>
                <ul>
                  <li> 
                    <a>{homelink}</a>
                  </li>
                  <li> 
                    <a>{aboutlink}</a>
                  </li>
                  <li> 
                    <a>{serviceslink}</a>
                  </li>
                  <li> 
                    <a>{reservationlink}</a>
                  </li>
                  <li> 
                    <a>{contactlink}</a>
                  </li>
                </ul>
              </nav>
            </S.CustonLinks>
            <S.CustonLinks>
              <h3>{subtitlesocials}</h3>
              <nav>
                <ul>
                  <li> 
                    <a>{twitter}</a>
                  </li>
                  <li> 
                    <a>{facebook}</a>
                  </li>
                  <li> 
                    <a>{googleplus}</a>
                  </li>
                  <li> 
                    <a>{pinterest}</a>
                  </li>
                </ul>
              </nav>
            </S.CustonLinks>
          </span>
        </S.References>
        <S.CopyRight>
          <p>{copyright}</p>
        </S.CopyRight>
      </S.Container>
  )
}
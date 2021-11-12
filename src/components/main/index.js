import React from "react"
import { graphql , useStaticQuery } from "gatsby"

import * as S from "./styles"

export function Main(){
  const data = useStaticQuery(graphql`
    query{
      acdata{
        mains {
          btnlearn
          backmain {
            url
          }
          imglearn1 {
            url
          }
          imglearn4 {
            url
          }
          imglearn3 {
            url
          }
          imglearn2 {
            url
          }
          mainiconlist {
            url
          }
          mainsubtitle
          maintopics1
          maintopics2
          maintopics3
          maintopics4
          paragraphmain
          titlemain
          promotionalpic1{
            url
          }
          promotionalpic2{
            url
          }
          playbtn{
            url
          }
          smokeback{
            url
          }
        }
      }
    }
  `)

  const {
    mainsubtitle,
    maintopics1,
    maintopics2,
    maintopics3,
    maintopics4,
    paragraphmain,
    titlemain,
    btnlearn,
    backmain,
    imglearn1,
    imglearn4,
    imglearn3,
    imglearn2,
    mainiconlist,
    promotionalpic1,
    promotionalpic2,
    playbtn,
    smokeback

  } = data.acdata.mains[0]

  return(
    <S.Container>
      <S.MainNav>
        <nav>
          <span>
            <figure>
              <img src={imglearn1.url} alt="model"/>
            </figure>
            <div>
              <button>{btnlearn}</button>
            </div>
          </span>
          <span>
            <figure>
              <img src={imglearn2.url} alt="model"/>
            </figure>
            <div>
              <button>{btnlearn}</button>
            </div>
          </span>
          <span>
            <figure>
              <img src={imglearn3.url} alt="model"/>
            </figure>
            <div>
              <button>{btnlearn}</button>
            </div>
          </span>
          <span>
            <figure>
              <img src={imglearn4.url} alt="model"/>
            </figure>
            <div>
              <button>{btnlearn}</button>
            </div>
          </span>
        </nav>
      </S.MainNav>
      <S.MainInf mainback={backmain.url}>
        <div>
          <span>
            <h1>{titlemain}</h1>
            <p>{paragraphmain}</p>
          </span>
          <S.MainList>
            <ul>
              <li>
                <figure>
                  <img src={mainiconlist.url} alt="icon"/>
                </figure>
                <p>{maintopics1}</p>
              </li>
              <li>
                <figure>
                  <img src={mainiconlist.url} alt="icon"/>
                </figure>
                <p>{maintopics2}</p>
              </li>
              <li>
                <figure>
                  <img src={mainiconlist.url} alt="icon"/>
                </figure>
                <p>{maintopics3}</p>
              </li>
              <li>
                <figure>
                  <img src={mainiconlist.url} alt="icon"/>
                </figure>
                <p>{maintopics4}</p>
              </li>
            </ul>
          </S.MainList>
        </div>
      </S.MainInf>
      <S.MainSeeMore smokeback={smokeback.url}>
        <S.SmokeBlend>
          <div>
            <h2>{mainsubtitle}</h2>
          </div>
          <S.NavImg>
            <S.FakeVideo1 videoback1={promotionalpic1.url}>
              <S.TrollButton>
                <img src={playbtn.url} alt="button"/>
              </S.TrollButton>
            </S.FakeVideo1>
            <S.FakeVideo2 videoback2={promotionalpic2.url}>
              <S.TrollButton>
                <img src={playbtn.url} alt="button"/>
              </S.TrollButton>
            </S.FakeVideo2>
          </S.NavImg>
        </S.SmokeBlend>
      </S.MainSeeMore>
    </S.Container>
  )
}
import styled from 'styled-components'
import { Article } from './Article'
import Link from 'next/link'

// import Image from 'next/image'
export const HomePost = ({ article, isLink }) => {
  return (
    <Container>
      {article.order == true && (
        <ImgCont alignRight={article.order != true}>
          <Image alt={article.title} src={article.image} />
        </ImgCont>
      )}
      <ArticleCont>
        <Article
          isLink={!!isLink}
          homePage={true}
          record={{ ...article, dir: 'home' }}
          isClickable={true}
        />
        {article.button && isLink && (
          <ClickCont>
            <Link
              key={article.slug}
              href={{
                pathname:
                  article.linkTo != 'false'
                    ? article.linkTo
                    : `/home/${article.slug}`,
              }}
            >
              <a>
                <A>Mehr erfahren</A>
              </a>
            </Link>
          </ClickCont>
        )}
      </ArticleCont>
      {article.order != true && (
        <ImgCont alignRight={article.order != true}>
          <Image
            alt={article.title}
            objectFit="contain"
            layout="fill"
            src={article.image}
          />
        </ImgCont>
      )}
    </Container>
  )
}

let Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 18px;
  padding-top: 85px;
  width: 100%;
  &:first-child {
    margin-top: 30px;
  }
  &:last-child {
    margin-bottom: 100px;
  }
  @media (max-width: 1080px) {
    flex-direction: column;
    margin-bottom: 35px;
    &:first-child {
      margin-top: 40px;
    }
    &:last-child {
      margin-bottom: 30px;
    }
  }
  @media (max-width: 768px) {
    padding-top: 0;
    &:first-child {
      margin-top: 0;
    }
  }
`

let ImgCont = styled.div`
  display: flex;
  justify-content: ${({ alignRight }) =>
    alignRight ? 'flex-end' : 'flex-start'};
  max-width: 600px;
  margin: 0;
  padding: 0;
  max-height: 396px;
  flex: 1;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  @media (max-width: 1080px) {
    justify-content: flex-start;
    order: 1;
    margin-bottom: 10px;
    margin-top: 30px;
  }
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`

let ArticleCont = styled.div`
  flex: 1;
  max-width: 550px;
  padding: 20px 20px 20px 0;
  @media (max-width: 1080px) {
    order: 2;
  }
`

let A = styled.span`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  outline: none;
  width: 211.75px;
  height: 59px;
  background: linear-gradient(0deg, #fff5f5, #fff5f5);
  border: 2px solid #3a4b6d;
  cursor: pointer;
  text-align: center;
  vertical-align: center;
  margin-top: 50px;
  padding: 20px 17px;
  &:active {
    transform: translateY(2px);
  }
  &:hover {
    background: linear-gradient(0deg, #6380ba, #6380ba), #fff5f5;
    border: 2px solid #6380ba;
    color: #fff;
  }
`
let ClickCont = styled.div`
  margin-top: 30px;
`
let Image = styled.img`
  object-fit: contain;
  width: 640px;
  height: 395px;
  @media (max-width: 1650px) {
    width: 580px;
    height: 345px;
  }

  @media (max-width: 1366px) {
    width: 540px;
    height: 310px;
  }
`

import styled from 'styled-components';

export const NavBarStyled = styled.nav`
  display: flex;
  background-color: white;
  box-shadow: 0px 3px 10px grey;
  margin-bottom: 3px;

  ul {
    display: flex;
    list-style: none;
    text-decoration: none;
    flex-direction: row-reverse;
    flex-grow: inherit;
    margin: 0;
    margin-left: auto;
  }

  ul > li {
    display: flex;
    align-items: center;
  }

  p {
    float: left;
    color: black;
    font-weight: bold;
    margin-left: 10px;
    font-size: large;
  }

  ul > li > a {
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: large;
    margin: 20px;
  }
  ul > li > .active {
    color: #43b8d9;
  }

  ul > :first-child {
    background-color: #43b8d9;
    cursor: pointer;
    > a {
      color: white;
    }
    :hover {
      background-color: grey;
    }
    > :hover {
      color: white;
    }
  }

  ul > li > a:hover {
    cursor: pointer;
    color: #43b8d9;
  }
  @media all and (max-width: 800px) {
    flex-direction: column;
    li {
      margin-left: 1px;
      margin-right: 1px;
    }
    ul {
      margin: 0 auto;
      padding: 0;
    }
    p {
      margin: 0 auto;
    }
    ul > li > a {
      margin-left: 15px;
      margin-right: 15px;
    }
  }
  @media all and (max-width: 500px) {
    ul {
      flex-direction: column;
      > * {
        margin: 0 auto;
        height: 30px;
      }
    }
  }
`;

export const ArticlesSectionStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  > * {
    background-color: lightgray;
    text-align: center;
    height: 280px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  > *:hover {
    cursor: pointer;
    background-color: #43b8d9;
    color: white;
  }
  > * > * {
    margin: 0 auto;
    font-size: 40px;
  }
  @media all and (min-width: 800px) {
    > :nth-child(1) {
      margin: 0;
      height: 310px;
      grid-column-start: 1;
      grid-column-end: 5;
      grid-row-start: 1;
      grid-row-end: 2;
      :hover {
        cursor: auto;
        background-color: lightgray;
        color: black;
      }
    }
    > :nth-child(2) {
      margin: 20px 40px 30px 50px;
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 2;
      grid-row-end: 3;
    }
    > :nth-child(3) {
      margin: 20px 50px 0px 0px;
      grid-column-start: 2;
      grid-column-end: 5;
      grid-row-start: 2;
      grid-row-end: 3;
    }
    > :nth-child(4) {
      height: 310px;
      margin: 0px 50px 10px 50px;
      grid-column-start: 1;
      grid-column-end: 5;
      grid-row-start: 3;
      grid-row-end: 4;
    }
  }

  @media all and (max-width: 800px) {
    display: flex;
    grid: none;
    flex-direction: column;
    > * {
      margin: 10px;
    }
  }
  @media all and (max-width: 500px) {
  }
`;

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: white;
  justify-content: space-evenly;
`;

export const OfficesSection = styled.section`
  display: flex;
  flex-direction: column;
  h2 {
    margin: 20px;
    font-weight: bold;
  }
`;

export const BannerStyled = styled.section`
  margin: 0;
  height: 310px;
  background-color: lightgray;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  > * {
    margin: 0 auto;
    font-size: 40px;
  }
`;

export const OfficesCollectionGridStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
`;

export const OfficeCardStyled = styled.article`
  border: 2px solid grey;
  margin: 10px;
  > * {
    margin: 15px;
  }
  > :first-child {
    font-weight: bold;
  }
  :hover {
    cursor: pointer;
    background-color: lightgray;
  }
`;

export const OfficesButtonUiSection = styled.section`
  > * {
    outline: none;
    float: right;
    margin-right: 10px;
    margin-top: 10px;
    height: 43px;
    border-style: none;
    width: 43px;
    background-color: whitesmoke;
  }
  > :nth-child(1) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    > * {
      background-color: black;
      margin: 0 auto;
      width: 13px;
      height: 13px;
      margin-top: 2.5px;
    }
    :focus {
      > * {
        background-color: #43b8d9;
      }
    }
    :hover {
      > * {
        background-color: #43b8d9;
      }
      cursor: pointer;
    }
  }
  > :nth-child(2) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    > * {
      background-color: black;
      margin: 0 auto;
      width: 30px;
      height: 5px;
    }
    > :first-child {
      margin-top: 5px;
      margin-bottom: 7px;
    }
    :focus {
      > * {
        background-color: #43b8d9;
      }
    }
    :hover {
      > * {
        background-color: #43b8d9;
      }
      cursor: pointer;
    }
  }
  > :last-child {
    width: 120px;
    border-style: none;
    background-color: lightgray;
    color: black;
    font-weight: bold;
    :hover {
      cursor: pointer;
    }
  }
`;

export const OfficesCollectionListStyled = styled.section`
  display: flex;
  flex-direction: column;
`;

export const OfficeListElementStyled = styled.article`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  :hover {
    cursor: pointer;
    background-color: lightgray;
  }
  > * {
    margin: 10px;
  }
  > :first-child {
    background-color: black;
    color: white;
    padding: 3px;
    width: 16px;
    text-align: center;
  }
`;

export const WelcomeArticleStyled = styled.article`
  display: flex;
  flex-direction: column;
  > h2 {
    font-size: 30px;
  }
  > p {
    margin: 25px;
    margin-top: 0;
  }
  > button {
    width: 100px;
    height: 30px;
    margin-left: 20px;
    margin-top: 10px;
    border: none;
    color: white;
    background-color: #43b8d9;
  }
  > button:hover {
    background-color: gray;
    cursor: pointer;
  }
`;

export const DetailedOfficeSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 90vw;
  margin: 0 auto;
  > :last-child {
    margin-bottom: 40px;
  }
`;

export const EmployeeGridSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20ch, 1fr));
  margin: 20px;
`;

export const EmployeeCardStyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  width: 130px;
  height: 180px;
  margin: 5px;
  > section {
    width: 120px;
    height: 100px;
    background-color: lightgray;
  }
  > p {
    margin-top: 0;
    margin-bottom: 0;
  }
  > :nth-child(2) {
    margin-top: 5px;
  }
`;

export const ArticlesSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 60vw;
`;

export const ArticleButtonsUiSection = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  font-weight: bold;
  font-size: 13px;
  margin-bottom: 40px;
  > button:first-child {
    margin-right: auto;
    margin-left: 0;
    background-color: #43b8d9;
    color: white;
    :hover {
      background-color: darkgray;
      cursor: pointer;
    }
  }
  > * {
    margin-left: 10px;
  }
  > textarea:first-child {
    margin-left: auto;
  }
  > textArea {
    height: 30px;
    margin-top: 22px;
    font-size: 18px;
    resize: none;
    border: solid 2px lightgray;
  }
  > select {
    height: 60px;
    margin-top: 10px;
    border: none;
    background-color: lightgray;
    width: 140px;
  }
`;

export const StandardButton = styled.button`
  width: 140px;
  height: 60px;
  background-color: lightgray;
  border: none;
  padding: 0;
  display: inline-block;
  line-height: 58px;
  text-align: center;
  margin-top: 10px;
`;

export const ArticleCardWrapperGrid = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  height: 240px;
  margin: 0 auto;
  padding-right: 10px;
  padding-left: 10px;
  :hover {
    cursor: pointer;
    background-color: darkgray;
    color: black;
    border-radius: 5px;
  }
  > :nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 4;
    height: 180px;
    width: 220px;
    margin: auto 0;
    background-color: lightgray;
    margin-bottom: 30px;
  }
  > :nth-child(2) {
    grid-column-start: 2;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 2;
    margin: auto 0;
    margin-bottom: 0;
    margin-left: 30px;
    font-size: 40px;
    font-weight: bold;
  }
  > :nth-child(3) {
    grid-column-start: 5;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 2;
    margin: auto 0;
    margin-bottom: 0;
    font-weight: bold;
    text-align: right;
  }
  > :nth-child(4) {
    grid-column-start: 2;
    grid-column-end: 6;
    grid-row-start: 2;
    grid-row-end: 4;
    margin: auto 0;
    margin-left: 30px;
    font-size: 14px;
    margin-top: 10px;
  }
`;

export const PageNumberButtonsSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 10px;
  margin-top: 10px;
  > * {
    margin-left: 5px;
    border: none;
    background-color: darkgray;
    color: white;
    width: 20px;
    height: 20px;
    :hover {
      cursor: pointer;
    }
  }
`;

export const DetailedArticleSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 60vw;
  margin: 0 auto;
  > :first-child {
    width: 100px;
    height: 30px;
    margin-left: 0;
    margin-top: 10px;
    border: none;
    color: white;
    background-color: #43b8d9;
    :hover {
      background-color: gray;
      cursor: pointer;
    }
  }

  > :nth-child(2) {
    display: flex;
    > :last-child {
      margin-left: auto;
    }
    > * {
      font-weight: bold;
      font-size: 13px;
    }
  }
  > :nth-child(3) {
    margin-top: 0;
  }
  > :nth-child(8) {
    font-weight: bold;
    font-size: 13px;
  }
  h2 {
    margin-bottom: 0;
    font-weight: bold;
  }
`;

export const DetailedArticleButtonSection = styled.section`
  display: flex;
  flex-direction: row;
  > :first-child {
    margin-right: 10px;
    background-color: #d14040;
    color: white;
  }
  > :last-child {
    background-color: #adad44;
    color: white;
  }
  > * {
    margin-bottom: 40px;
    margin-top: 40px;
  }
`;

export const CreateArticleFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 55vw;
  margin: 0 auto;
  margin-top: 80px;
  > label {
    font-weight: bold;
  }

  > select {
    font-size: 20px;
    height: 50px;
    border: solid 2px lightgray;
    margin-top: 5px;
    margin-bottom: 25px;
    border-radius: 5px;
  }
  > input {
    font-size: 20px;
    height: 50px;
    border: solid 2px lightgray;
    margin-top: 5px;
    margin-bottom: 25px;
    border-radius: 5px;
  }
  > button {
    margin-bottom: 10px;
  }
  > :nth-child(18) {
    width: 30px;
    height: 30px;
    background: white;
    border-radius: 5px;
    border: 2px solid #555;
  }
`;

export const CategoryOptionSection = styled.section`
  display: flex;
  flex-direction: row;
  margin-bottom: 25px;
  > * {
    height: 50px;
  }
  > :first-child {
    width: 50vw;
    margin-right: 20px;
    font-size: 20px;
    border: solid 2px lightgray;
    border-radius: 5px;
  }
  > :last-child {
    width: 6vw;
    margin-right: 0;
    border: none;
    background-color: #43b8d9;
    color: white;
  }
  > button {
    :hover {
      background-color: darkgray;
      cursor: pointer;
    }
  }
`;

export const RegisterAndLoginWrapperSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin: 0 auto;
`;

export const RegisterAndLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: lightgray;
  padding: 20px;
  margin-top: 80px;
  > input {
    height: 30px;
    margin-bottom: 20px;
    border: solid 2px lightgray;
  }
  > p {
    color: #43b8d9;
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
  > button {
    margin: 0 auto;
    margin-top: 20px;
    background-color: #43b8d9;
    color: white;
    font-size: 18px;
    :hover {
      cursor: pointer;
      background-color: darkgray;
    }
  }
`;

export const CreateCategoryFormWrapper = styled.section`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  z-index: 2;
  height: 150vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
`;

export const CreateCategoryForm = styled.form`
  background-color: white;
  width: 400px;
  height: 170px;
  opacity: 1;
  margin: auto auto;
  display: flex;
  flex-direction: column;
  > * {
    margin: 10px;
  }
  > label {
    margin-left: 45px;
    font-weight: bold;
    margin-top: 30px;
  }
  > textarea {
    margin: 0 auto;
    width: 300px;
    resize: none;
    border: solid lightgray 2px;
  }
  > button {
    height: 40px;
    width: 100px;
    text-align: center;
    line-height: 25px;
    margin-left: auto;
    margin-right: 45px;
    color: white;
    background-color: #43b8d9;
    :hover {
      cursor: pointer;
      background-color: darkgray;
    }
  }
`;

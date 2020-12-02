import styled from 'styled-components';

export const NavBarStyled = styled.nav`
    display: flex;
    background-color: white;
    box-shadow: 0px 6px 6px grey;

    ul{
        display: flex;
        list-style: none;
        text-decoration: none;
        flex-direction: row-reverse;
        flex-grow: inherit;
        margin: 0;
        margin-left: auto;
    }

    ul>li{
        display: flex;
        align-items: center;
    }

    p{
        float: left;
        color: black;
        font-weight: bold;
        margin-left: 10px;
        font-size: large;
    }

    ul>li>a{
        text-decoration: none;
        color: black;
        font-weight: bold;
        font-size: large;
        margin: 20px;

    }
    ul>li>.active{
        color: #43b8d9;
    }

    ul>:first-child{
        background-color: #43b8d9;
        cursor: pointer;
        >a{
            color: white;
        }
        :hover{
            background-color: grey;
        }
        >:hover{
            color: white;
        }
    }

    ul>li>a:hover{
        cursor: pointer;
        color: #43b8d9;
    }
    @media all and (max-width: 800px){
        flex-direction: column;
        li{
            margin-left: 1px;
            margin-right: 1px;
        }
        ul{
            margin: 0 auto;
            padding: 0;
        }
        p{
            margin: 0 auto;
        }
        ul>li>a{
            margin-left: 15px;
            margin-right: 15px;
        }
    }
    @media all and (max-width: 500px){
        
        ul{
            flex-direction: column;
            >*{
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
    >*{
        background-color: lightgray;
        text-align: center;
        height: 280px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    >*:hover{
        cursor: pointer;
    }
    >*>*{
        margin: 0 auto;
        font-size: 40px;
    }
    @media all and (min-width: 800px){
    >:nth-child(1){
        margin: 0;
        height: 310px;
        grid-column-start: 1;
        grid-column-end: 5;
        grid-row-start: 1;
        grid-row-end: 2;
        :hover{
            cursor: auto;
        }
    };
    >:nth-child(2){
        margin: 20px 40px 30px 50px;
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 2;
        grid-row-end: 3;
    }>:nth-child(3){
        margin: 20px 50px 0px 0px;
        grid-column-start: 2;
        grid-column-end: 5;
        grid-row-start: 2;
        grid-row-end: 3;
    }>:nth-child(4){
        height: 310px;
        margin: 0px 50px 10px 50px;
        grid-column-start: 1;
        grid-column-end: 5;
        grid-row-start: 3;
        grid-row-end: 4;
    }
}

    @media all and (max-width: 800px){
       display: flex;
       grid: none;
       flex-direction: column;
       >* {
           margin: 10px;
       }
    }
    @media all and (max-width: 500px){
        
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
    h2{
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
    >*{
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
    >*{
        margin: 15px;
    }
    >:first-child{
        font-weight: bold;
    }
`;

export const OfficesButtonUiSection = styled.section`
    >*{
        outline: none;
        float: right;
        margin-right: 10px;
        margin-top: 10px;
        height: 43px;
        border-style: none;
        width: 43px;
        background-color: whitesmoke;
    }
    >:nth-child(1){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        >*{
            background-color: black;
            margin: 0 auto;
            width: 13px;
            height: 13px;
            margin-top: 2.5px;
        }
        :focus{
            >*{
                background-color: #43b8d9;
            }
        }
    }
    >:nth-child(2){
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        >*{
            background-color: black;
            margin: 0 auto;
            width: 30px;
            height: 5px;
        }
        >:first-child{
            margin-top: 5px;
            margin-bottom: 7px;
        }
        :focus{
            >*{
                background-color: #43b8d9;
            }
        }
    }
    >:last-child{
        width: 120px;
        border-style: none;
        background-color: lightgray;
        font-weight: bold;
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
    >*{
        margin: 10px;
    }
    >:first-child{
        background-color: black;
        color: white;
        padding: 3px;
    }
`;

export const WelcomeArticleStyled = styled.article`
    display: flex;
    flex-direction: column;
    >h2{
        font-size: 30px;
    }
    >p{
        margin: 25px;
        margin-top: 0;
    }
`;

export const DetailedOfficeSection = styled.section`
    display: flex;
    flex-direction: column;
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
    >section{
        width: 120px;
        height: 100px;
        background-color: lightgray;
    }
    >p{
        margin-top: 0;
        margin-bottom: 0;
    }
    >:nth-child(2){
        margin-top: 5px;
    }
`;


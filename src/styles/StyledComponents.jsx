import styled from 'styled-components';

export const NavBarStyled = styled.nav`
    display: flex;
    background-color: white;
    flex-wrap: wrap;
    box-shadow: 0px 3px 4px gray;

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
        flex-direction: row;
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
    @media all and (max-width: 700px){
        flex-direction: column;
        li{
            margin-left: 7px;
            margin-right: 7px;
        }
        ul{
            margin: 0 auto;
            padding: 0;
        }
        p{
            margin: 0 auto;
        }
    }
`;
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        padding: 0 4px;
    }

    /* Create four equal columns that sits next to each other */
    .item {
        flex: 25%;
        max-width: 25%;
        padding: 0 4px;
    }

    /* Responsive layout - makes a two column-layout instead of four columns */
    @media (max-width: 900px) {
        .item {
            flex: 50%;
            max-width: 50%;
        }
    }

    /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
    @media (max-width: 600px) {
        .item {
            flex: 100%;
            max-width: 100%;
        }
    }
    html{
            &::-webkit-scrollbar{
                width: 0.5rem;
                
            }
            &::-webkit-scrollbar-thumb{
                background-color: darkgrey;
            }
            &::-webkit-scrollbar-track {
            background: white;
        }
    }
    body {
        font-family: 'Rajdhani', sans-serif;
        }
    .sections{
        padding: 5px;
    }
    .title{
        background-color: pink;
        font-size: 2rem;
    }
    .syn{
        background-color: lightgreen;
    }
    img{
        display: inline;
    }
`;

export default GlobalStyles;

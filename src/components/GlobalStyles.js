import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
}
@keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
        
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        padding: 0 4px;
    }

    /* Create four equal columns that sits next to each other */
    .item {
        flex: 0 1 25%;
        max-width: 25%;
        padding: 0 1px;
        justify-content: space-between;
    }
    h1{
        display: flex;
        justify-content: center;
        margin: auto;
        padding: 2rem;
        font-size: 50px;
        font-family: 'Monoton', cursive;
    }
    .days {
        display: flex;
        justify-content: center;
        padding: 5px;
    }

    /* Responsive layout - makes a two column-layout instead of four columns */
    @media (max-width: 1800px) {
        .item {
            flex: 30%;
            max-width: 50%;
        }
    }

    /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
    @media (max-width: 800px) {
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
        background-color: #fffaff;
        }
    .sections{
        padding: 5px;
    }
    .title{
        padding: 1rem;
        display: flex;
        justify-content: center;
        background-color: pink;
        font-size: 35px;
        color: #f0ffff;
        text-shadow: 2px 2px #696969;
    }
    @media (max-width: 1800px) {
        .title{
            font-size: 25px;
        }
    }
    .card{
        background-color: #ffc0cb;
        padding: 1rem;
        margin: 0.5rem;
        color: #f0ffff;
        font-size: 25px;
        text-shadow: 1px 1px #696969;
        border-radius: 25px;
    }
    @media (max-width: 1800px) {
        .card {
            flex: 100%;
            max-width: 100%;
            padding: 25px;
            margin: 20px;
            font-size: 20px;
        }
    }
    .syn{
        padding: 1.5rem;
    }

    .info{
        display: flex;
        justify-content: space-evenly;
        padding: 1rem;
        color: #f0ffff;
    }
    .cover{
        display: block;
        padding: 1rem;
        margin: auto;
        object-fit: contain;
        width: 400px;
        box-shadow: 4px 8px 11px 3px rgba(0,0,0,0.48);
        background-color: #fffaff;
    }
    @media (max-width: 1800px) {
        .cover {
            flex: 100%;
            max-width: 100%;
            width: 75%;
            padding: 5px;
        }
    }
    @media (max-width: 800px) {
        .cover {
            flex: 100%;
            max-width: 100%;
            width: 50%;
            padding: 5px;
        }
    }
    *{
        animation: fadeIn ease 1s;
-webkit-animation: fadeIn ease 1s;
-moz-animation: fadeIn ease 1s;
-o-animation: fadeIn ease 1s;
-ms-animation: fadeIn ease 1s;
    }







`;

export default GlobalStyles;

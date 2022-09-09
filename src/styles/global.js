import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://rsms.me/inter/inter.css');

* {
    padding: 0;
    margin: 0;
    border: 0;
    outline: none;
    list-style: none;
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
}

:root {
    //-------Primary Palette-------
    --color-primary: 39, 174, 96; //#27ae60
    --color-primary-50: 147, 215, 175; //#93d7af
    --color-secondary: 235, 87, 87; //#eb5757
    //-------Grey Scale Palette-------
    --grey-100 : 51, 51, 51; //#333333
    --grey-50: 130, 130, 130; //#828282
    --grey-20: 224, 224, 224; //#e0e0e0
    --grey-0: 245, 245, 245; //#F5F5F5
    --pure-white: 255, 255, 255; //#FFFFFF
    //-------Feedback Palette-------
    --negative:230, 0, 0; //#e60000
    --warning:255, 205, 7; //#ffcd07
    --success:22, 136, 33; //#168821
    --information: 21, 91, 203; //#155bcb
}

@keyframes pulse {
    0% {
        transform: scale(0.97);
        box-shadow: 0 0 0 0 rgba(var(--color-primary-50));
        
    }
    30% {
        transform: scale(0.95);
        box-shadow: 0 0 5px 10px rgba(var(--color-primary-50));
    }
    70% {
        transform: scale(1);
        box-shadow: 0 0 25px 10px rgba(var(--color-primary-50), 0.8);
        
    }
    100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(var(--color-primary-50));
    }
  }

body {
    height: 100vh;
    width: 100vw;
   
}
#root {
    width: 100%;
    height: 100%;
}
.App {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    overflow: hidden;

    .app__comercial--wrapper {
        max-width: 1600px;
        padding: 2rem 0 0 0;
        height: 88%;
        display: flex;
        flex-direction: row;
        gap: 2.6rem;

        @media screen AND (max-width: 1600px) {
            max-width: 90%;
        }

        @media screen AND (max-width: 1400px) {
            max-width: 100%
        }
        
        @media screen AND (max-width: 580px) {
            height: 82%;
        }
    }
}
`;

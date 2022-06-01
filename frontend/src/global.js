import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
    }

    h1 {
        color: ${({ theme }) => theme.h1}
    }

    h2 {
        color: ${({ theme }) => theme.h2}
    }

    h3 {
        color: ${({ theme }) => theme.h3}
    }

    p {
        color: ${({ theme }) => theme.p}
    }

    span {
        color: ${({ theme }) => theme.span}
    }

    .circle1 {
        background: ${({ theme }) => theme.circle1};
    }

    .herotxt {
        color: ${({ theme }) => theme.herotxt}
    }

    .btnColorOnChange {
        background: ${({ theme }) => theme.btnColorOnChange}
    }

    .submitSubscribeBtn {
        background: ${({ theme }) => theme.submitSubscribeBtn}
    }


`;

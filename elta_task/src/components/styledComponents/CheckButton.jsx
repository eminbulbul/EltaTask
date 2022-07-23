import styled from "styled-components";

export default styled.div`
  display: none;

  @media (max-width: 700px) {
    display:block ;
    background-color: #1d62e2;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2.5rem;
    width: 80%;
    margin: auto;
    border-radius: 1.11rem;

    /* margin: auto; */
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    cursor: pointer;
  }
`;

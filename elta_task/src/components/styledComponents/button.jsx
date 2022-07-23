import styled from "styled-components";

export default styled.div`
  background-color: #1d62e2;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.05rem;
  font-weight: bold;
  border-radius: 0.22rem;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 10.83rem;
  height: 3.5238rem;
  cursor: pointer;
  margin-top: 4.05rem;
  @media (max-width: 700px) {
    text-transform: capitalize;
  }
`;

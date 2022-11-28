import styled from "styled-components"

export const Title = styled.div`
  min-height: 150px;
`

export const ButtonHome = styled.button`
  width: 160px; height: 40px;
  font-size: 18px; border-radius: 20px; 
  border: none; color: white;
  background-color: #998A00; margin: 20px;
`
export const Button = styled.button`
  width: 450px; height: 80px;
  font-size: 16px; border-radius: 20px; 
  border: none; color: white;
  background-color: #F09661; margin: 20px;
`


export const Container = styled.div`
  height: 100vh; display: flex; 
  justify-content: center; align-items: center;
`

export const HomeImg = styled.img`
  height : 200px; width : 200px;
  pointer-events: none;
  
  @media (prefers-reduced-motion: no-preference) {
      animation: App-logo-spin infinite 20s linear;
  }
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  } */
`

export const Img = styled.img`
  height : 300px; width : 300px;
  pointer-events: none;
  `

export const H2 = styled.h2`
`

export const P = styled.p`
font-size : 24px; color :red;
`
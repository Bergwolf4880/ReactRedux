import styled from "@emotion/styled"

export const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  gap: 20px;
  border-radius: 5px;
  padding: 20px;  
  background: linear-gradient(#6539b4, #381f74);
  box-shadow: 0 0 10px #6539b4, 0 0 10px rgba(0, 0, 0, 0.5);
`

export const ButtonControl = styled.div`
  display: flex;
  width: auto;
  gap: 20px;
`

export const CounterValue = styled.p`
  font: bold 72px/1.5 Arial;
 color: #260c31;

`
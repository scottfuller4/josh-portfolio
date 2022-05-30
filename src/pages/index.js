import * as React from 'react'
import styled from 'styled-components'

const StyledMain = styled.main`
  background: #c7c3ae;
  font-family: 'Plus Jakarta Sans';
  min-height: 100vh;
`

const StyledH1 = styled.h1`
  margin: 0;
`

const IndexPage = () => {
  return (
    <StyledMain>
      <title>Josh Boissiere</title>
      <StyledH1>Hi! I'm Josh Boissiere.</StyledH1>
      <h2>
        I’m a digital designer who channels my creativity into improving the
        lives of others through design.
      </h2>
    </StyledMain>
  )
}

export default IndexPage

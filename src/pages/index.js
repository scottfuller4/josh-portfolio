import * as React from 'react'
import styled from 'styled-components'
import SquiggleArrow from '../images/SquiggleArrow.svg'
import JoshPortrait from '../images/josh-portrait.png'

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
      <p>
        I’m a digital designer who channels my creativity into improving the
        lives of others through design.
      </p>
      <img src={SquiggleArrow} alt='' />
      <img src={JoshPortrait} alt='' />
      <h2>More of Josh</h2>
      <p>
        I’m a Toronto based designer who brings simplicity and a clear aesthetic
        to every project. From the beginning I’ve always had a strong pull to
        anything expressive, from architecture to food to fashion. I started my
        journey in photography but found purpose through design.
        <br />
        Studying UX design allowed me to utilize my creativity while solving problems all
        focused around people. 
        <br />
        I keep empathy for the user as top priority while
        providing clean, elegantly designed solutions by utilizing my service
        industry experience, as well as professional background in photography.
        <br />
        I am currently working as a freelance designer, but am always looking for my next challenge.
      </p>
    </StyledMain>
  )
}

export default IndexPage

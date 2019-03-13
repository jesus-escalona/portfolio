import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle, TitleWhite } from '../elements/Titles';

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'
import handly from '../images/handly_mockup.png'
import pidgeon from '../images/pidgeon_mockup.png'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello there, <br /> I'm Jesus Escalona.
        </BigTitle>
        <Subtitle>Full stack software engineer who loves coding and facing new challenges.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          {/* <ProjectCard
            title="Sendger"
            link="https://www.sendger.com"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Mobile app that helps you send your things over the air by finding travelers.
          </ProjectCard>*/}
          <ProjectCard
            title="Handly"
            link="https://handlysearch.herokuapp.com"
            mockup={handly}
            tech="Rails API + React hooks & Redux"
          >
            Single-page app that gets you estimates from moving companies depending on your relocation needs.
          </ProjectCard>
          <ProjectCard
            title="Pidgeon"
            link="https://pidgeon.herokuapp.com"
            mockup={pidgeon}
            tech="Pure Rails + ERB"
          >
            Responsive MVC app that handles money transactions between users (Venmo style).
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <TitleWhite>About</TitleWhite>
        <AboutHero>
          <Avatar src={avatar} alt="Jesus Escalona" />
          <AboutSub>
            I'm a Fast learner, self-teaching, DRY-code lover, looking to break down complex problems to conquer them.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I seek experiences, people, and culture, everywhere that I go. My passion for coding is big, but my will to
          help people is bigger, I hope one day I will be able to give the world something that improves the life of
          each one of us, but until that day and after, I will keep on learning and working hard to make that dream come
          to reality. Together we will make something to remember.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Hit me up</Title>
          <ContactText>
            Say <a href="mailto:jesusescalona@me.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://dribbble.com/LekoArts">Dribbble</a> &{' '}
            <a href="https://www.instagram.com/lekoarts.de/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Jesus Escalona.{' '}
          <a href="https://github.com/jesus-escalona">Github Repository</a>. Made by{' '}
          <a href="https://jcode.dev">jcode.dev</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index

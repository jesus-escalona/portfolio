import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle, TitleWhite } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'
import handly from '../images/handly_mockup.png'
import pidgeon from '../images/pidgeon_mockup.png'
import snooze from '../images/snooze_mockup.png'
import fsds from '../images/fsds_mockup.png'
import ios from '../images/sendger_mockup.png'

const ProjectsWrapper = styled.div`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  @media (max-width: 1200px) {
    grid-gap: 2rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 4rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-48 xl:w-64 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 font-serif lg:pt-0 lg:pl-12 text-xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-md md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-black font-sans text-xl md:text-2xl lg:text-3xl`};
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
          👋 Hello there, <br /> I'm Jesus.
        </BigTitle>
        <Subtitle>Full stack software engineer who loves coding and facing new challenges.</Subtitle>
      </Hero>
      <About offset={1}>
        <TitleWhite>Me</TitleWhite>
        <AboutHero>
          <Avatar src={avatar} alt="Jesus Escalona" />
          <AboutSub>
            I'm a fast learner, self-teaching, DRY-code lover, looking to break down complex problems to conquer them.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I seek experiences and meeting new people. I hope one day I will be able to give the world something that
          improves the life of each one of us, but until that day and after, I will keep on learning and working hard to
          make that dream come to reality. Together we will make something to remember.
        </AboutDesc>
      </About>
      <Projects offset={2}>
        <Title>My work</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Sendger"
            link="https://itunes.apple.com/us/app/sendger/id1447288598?mt=8"
            mockup={ios}
            iphone
            tech="React Native + Firebase"
          >
            Sendger is an iOs and Android app that helps you send anything you want, to any country in the world, by
            connecting you with the right people, at the right time.
          </ProjectCard>
          <ProjectCard
            title="Snooze, an AM Eatery"
            link="https://snoozeeatery.com"
            mockup={snooze}
            tech="Wordpress + React.js"
          >
            Using Wordpress as a headless CMS, an incredible content input interface experience was created, allowing
            the user to manage data, notifications, module behavior, copy and more, in a simple an frictionless way,
            leaving the React frontend stateless.
          </ProjectCard>
          <ProjectCard
            title="Food Systems Dialogue's Event Planner"
            link="https://fsds-tool.herokuapp.com"
            mockup={fsds}
            tech="React.js + Google Docs API"
          >
            This event planner system was finely crafted to help coordinators at Food Systems Dialogue's organize
            participants, visualize data, get insights and create invitations for their events around the world.
          </ProjectCard>
          <ProjectCard
            title="Handly"
            link="https://handlysearch.herokuapp.com"
            mockup={handly}
            tech="Rails API + React & Redux"
          >
            Handly is a single-page app that gets you a fair price estimation from moving companies around you, based on
            things like distance, location and how much help do you need with your relocation needs.
          </ProjectCard>
          <ProjectCard title="Pidgeon" link="https://pidgeon.herokuapp.com" mockup={pidgeon} tech="Pure Rails + ERB">
            Pidgeon is a responsive MVC app that handles money transactions between users (Venmo style).
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <Contact offset={4}>
        <Inner>
          <Title>Hit me up</Title>
          <ContactText>
            Say{' '}
            <a href="mailto:jesusescalona@me.com?subject=Just%20saying%20hello%20!&amp;body=Dear%20Jesus%2C%0AI'm%20interested%20in%20discussing%20project%20opportunities%20with%20you.%0Asincerely%2C%0A%5B%20your%20name%3F%20%5D">
              Hi,
            </a>{' '}
            find me on other platforms: <a href="https://linkedin.com/in/jesusescalona19/">LinkedIn</a> &{' '}
            <a href="https://telegram.me/eyisus">Telegram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Jesus Escalona. <a href="https://github.com/jesus-escalona">Github Repository</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Wrapper = styled.a`
  width: 100%;
  text-align: center;
  ${tw`no-underline md:py-20`};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
`

const Text = styled.div`
  ${tw`text-black font-sans text-sm md:text-base`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  margin-top: 1em;
`

const Text2 = styled.div`
  ${tw`text-black font-semibold font-sans text-md md:text-lg`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  margin-top: 1em;
`

const Title = styled.div`
  ${tw`text-black uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans pt-8`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`

const Mockup = styled.img`
  ${tw`w-80 xl:w-128 h-auto`};
  margin-top: 2em;
`

const Iphone = styled.img`
  ${tw`w-24 xl:w-40 h-auto`};
  margin-top: 2em;
`

const ProjectCard = ({ title, link, children, mockup, tech, iphone }) => (
  <Wrapper href={link} target="_blank" rel="noopener noreferrer">
    <Title>{title}</Title>
    {iphone ?
      <Iphone src={mockup} alt={title}/> : <Mockup src={mockup} alt={title} />}
    <Text2>{tech}</Text2>
    <Text>{children}</Text>
  </Wrapper>
)

export default ProjectCard

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
  mockup: PropTypes.string.isRequired,
  iphone: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
}

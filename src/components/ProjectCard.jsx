import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Wrapper = styled.a`
  width: 100%;
  ${tw`relative no-underline px-8 py-8 md:py-24`};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
`

const Text = styled.div`
  ${tw`text-black font-sans text-sm md:text-base`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`

const Text2 = styled.div`
  ${tw`text-black font-semibold font-sans text-md md:text-lg`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`

const Title = styled.div`
  ${tw`text-black uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans pt-8`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`

const Mockup = styled.img`
  ${tw`w-80 xl:w-128 h-auto`};
`

const ProjectCard = ({ title, link, children, mockup, tech }) => (
  <Wrapper href={link} target="_blank" rel="noopener noreferrer">
    <Title>{title}</Title>
    <Mockup src={mockup} alt={title} />
    <Text2>{tech}</Text2>
    <Text>{children}</Text>
  </Wrapper>
)

export default ProjectCard

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
}

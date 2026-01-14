import React from 'react'
import { styled } from '../../stitches.config'
import { Modal } from '../modal/Modal'

export default function ProjectModal({ project, isOpen, onClose }) {
    if (!project) return null

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <Header>
                <Logo src={project.projectLogo} alt={`${project.title} logo`} />
            </Header>

            <HeaderText>
                <Title>{project.title}</Title>
                <Stats>{project.stats}</Stats>
            </HeaderText>

            <MetaInfo>
                <span>Year: {project.year}</span>
                <span>{project.description}</span>
            </MetaInfo>

            {project.highlights && project.highlights.length > 0 && (
                <Highlights>
                    {project.highlights.map((item, index) => (
                        <HighlightItem key={index}>✨ {item}</HighlightItem>
                    ))}
                </Highlights>
            )}

            <Description>
                {project.description_points?.map((item, index) => (
                    <DescriptionItem
                        key={index}
                        dangerouslySetInnerHTML={{ __html: item }}
                    />
                ))}
            </Description>

            {project.technologies && project.technologies.length > 0 && (
                <TechStack>
                    <TechTitle>Technologies</TechTitle>
                    <TechList>
                        {project.technologies.map((tech, idx) => (
                            <TechItem key={idx}>{tech}</TechItem>
                        ))}
                    </TechList>
                </TechStack>
            )}

            {project.url && (
                <Link href={project.url} target="_blank" rel="noopener noreferrer">
                    View on GitHub →
                </Link>
            )}
        </Modal>
    )
}

const Header = styled('div', {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '30px',
    gap: '25px',
})

const Logo = styled('img', {
    width: '50px',
    height: '50px',
    objectFit: 'contain',
    flexShrink: 0,
    marginTop: '5px',
})

const HeaderText = styled('div', {
    flex: 1,
    minWidth: 0,
    textAlign: 'center',
})

const Title = styled('h1', {
    fontSize: '24px',
    fontWeight: '600',
    color: '$primary',
    margin: '0 0 4px 0',
    lineHeight: 1.3,
    wordBreak: 'break-word',
})

const Stats = styled('h2', {
    fontSize: '18px',
    fontWeight: '400',
    color: '$secondary',
    margin: 0,
    lineHeight: 1.4,
    wordBreak: 'break-word',
})

const MetaInfo = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '8px',
    padding: '10px',
    borderTop: '1px solid $hover',
    borderBottom: '1px solid $hover',
    marginTop: '20px',
    marginBottom: '20px',
    fontSize: '14px',
    color: '$secondary',
    lineHeight: 1.5,

    '@bp1': {
        flexDirection: 'row',
    },
})

const Description = styled('div', {
    color: 'white',
    fontSize: '16px',
    lineHeight: 1.7,
})

const DescriptionItem = styled('p', {
    margin: '0 0 12px 0',
    paddingLeft: '20px',
    position: 'relative',
    '&::before': {
        content: '"•"',
        position: 'absolute',
        left: '0',
        color: '$primary',
        fontWeight: 'bold',
    },
})

const Highlights = styled('div', {
    backgroundColor: '$hover',
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '20px',
})

const HighlightItem = styled('p', {
    fontSize: '14px',
    margin: '0 0 8px 0',
    color: '$highlight',
})

const TechStack = styled('div', {
    marginTop: '30px',
})

const TechTitle = styled('h3', {
    color: '$primary',
    fontSize: '16px',
    marginBottom: '10px',
})

const TechList = styled('div', {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
})

const TechItem = styled('span', {
    backgroundColor: '$hover',
    color: '$primary',
    fontSize: '13px',
    padding: '6px 12px',
    borderRadius: '999px',
})

const Link = styled('a', {
    display: 'inline-block',
    fontSize: '14px',
    color: '$primary',
    textDecoration: 'none',
    fontWeight: '500',
    marginTop: '10px',
    '&:hover': {
        textDecoration: 'underline',
    },
})

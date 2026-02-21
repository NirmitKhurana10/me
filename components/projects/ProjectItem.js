import React from 'react'
import { styled } from '../../stitches.config'
import { CardVisual } from './CardVisual'
import Link from 'next/link'

export default function ProjectItem({ project }) {
    return (
        <Link href={`/projects/${project.slug}`} passHref>
            <CardContainer>
                <CardVisual
                    type={project.VisualType || 'schematic'}
                    src={project.coverImage || project.projectLogo}
                />

                <CardContent>
                    <Header>
                        <Title>{project.title}</Title>
                        <Description>{project.description}</Description>
                    </Header>

                    <TechStack>
                        {project.technologies.slice(0, 4).map((tech) => (
                            <TechBadge key={tech}>{tech}</TechBadge>
                        ))}
                        {project.technologies.length > 4 && (
                            <TechBadge>+{project.technologies.length - 4}</TechBadge>
                        )}
                    </TechStack>

                    <Divider />

                    <StatsRow>
                        <StatValue>{project.StatHighlight?.Value || '0%'}</StatValue>
                        <StatLabel>{project.StatHighlight?.Label || 'IMPACT'}</StatLabel>
                    </StatsRow>
                </CardContent>
            </CardContainer>
        </Link>
    )
}

const CardContainer = styled('a', {
    backgroundColor: '#08070b',
    border: '1px solid #333',
    borderRadius: '8px',
    overflow: 'hidden',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'transform 0.2s, border-color 0.2s',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',

    '&:hover': {
        transform: 'translateY(-4px)',
        borderColor: '$secondary',
    },
})

const CardContent = styled('div', {
    padding: '24px 24px 14px 24px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#0e0e10',
})

const Header = styled('div', {
    marginBottom: '12px',
    flex: 1,
})

const Title = styled('h3', {
    fontSize: '20px',
    fontWeight: '700',
    color: '$primary',
    marginBottom: '12px',
    lineHeight: '1.2',
    marginTop: 0,
})

const Description = styled('p', {
    fontSize: '15px',
    color: '$secondary',
    lineHeight: '1.6',
    marginBottom: '0',
})

const TechStack = styled('div', {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '24px',
})

const TechBadge = styled('span', {
    fontSize: '11px',
    color: '$primary',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '4px 8px',
    borderRadius: '4px',
    fontWeight: '500',
    fontFamily: '$code',
})

const Divider = styled('div', {
    height: '1px',
    backgroundColor: '#333',
    width: '100%',
    marginBottom: '20px',
})

const StatsRow = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
})

const StatValue = styled('span', {
    fontSize: '32px',
    fontWeight: '600',
    color: '$green',
    lineHeight: '1',
    letterSpacing: '-1px',
    fontFamily: '$heading',
})

const StatLabel = styled('span', {
    fontSize: '12px',
    color: '$secondary',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: '600',
})

import React from 'react'
import { styled } from '../../stitches.config'

export const CardVisual = ({ type = 'schematic', src }) => {
    return (
        <VisualContainer>
            <GridPattern />
            <ContentWrapper>
                {type === 'image' && src ? (
                    <ProjectImage src={src} alt="Project Visual" />
                ) : type === 'schematic' ? (
                    <SchematicIcon />
                ) : (
                    <AbstractIcon />
                )}
            </ContentWrapper>
        </VisualContainer>
    )
}

const ProjectImage = styled('img', {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 0.8,
    transition: 'opacity 0.2s',
    'div:hover &': {
        opacity: 1,
    }
})

const VisualContainer = styled('div', {
    height: '140px', // Reduced from 200px
    width: '100%',
    position: 'relative',
    backgroundColor: '#111',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

const GridPattern = styled('div', {
    position: 'absolute',
    inset: 0,
    opacity: 0.15,
    backgroundImage: `linear-gradient(#444 1px, transparent 1px),
    linear-gradient(90deg, #444 1px, transparent 1px)`,
    backgroundSize: '20px 20px',
})

const ContentWrapper = styled('div', {
    position: 'relative',
    zIndex: 1,
    opacity: 0.8,
    transition: 'opacity 0.2s',
    'div:hover &': {
        opacity: 1,
    },
})

// Simple SVG Schematic representing connected nodes (Data Pipeline)
const SchematicIcon = () => (
    <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="15" width="20" height="20" rx="4" stroke="#8aff80" strokeWidth="1.5" />
        <rect x="50" y="15" width="20" height="20" rx="4" stroke="#8aff80" strokeWidth="1.5" />
        <rect x="95" y="15" width="20" height="20" rx="4" stroke="#8aff80" strokeWidth="1.5" />
        <line x1="28" y1="25" x2="47" y2="25" stroke="#FFFFFF" strokeOpacity="0.3" />
        <line x1="73" y1="25" x2="92" y2="25" stroke="#FFFFFF" strokeOpacity="0.3" />
    </svg>
)

const AbstractIcon = () => (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="20" stroke="#8aff80" strokeWidth="1.5" strokeDasharray="4 4" />
        <circle cx="30" cy="30" r="10" stroke="#8aff80" strokeWidth="1.5" />
    </svg>
)

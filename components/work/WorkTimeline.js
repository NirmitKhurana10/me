import { motion } from 'framer-motion'
import { format, parseISO } from 'date-fns'
import React from 'react'
import { styled } from '../../stitches.config'

export default function WorkTimeline({ work, onClick, getDuration, index }) {
    return (
        <TimelineItem
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                delay: index * 0.1,
                duration: 0.5,
                type: 'spring',
                stiffness: 60,
            }}
        >
            <TimelineLine />
            <TimelineDot>
                <CompanyLogo src={work.companyLogo} alt={`${work.company} logo`} />
            </TimelineDot>

            <TimelineContent onClick={onClick}>
                <TimelineHeader>
                    <DateRange>
                        {format(parseISO(work.startDate), 'MMM yyyy')} -{' '}
                        {work.endDate && work.endDate !== 'Present'
                            ? format(parseISO(work.endDate), 'MMM yyyy')
                            : 'Present'}
                        {' • '}
                        <Duration>{getDuration(work.startDate, work.endDate)}</Duration>
                    </DateRange>
                </TimelineHeader>

                <JobTitle>{work.jobTitle}</JobTitle>
                <Company>{work.company}</Company>
                <Location>{work.location} • {work.roleType}</Location>

                {work.highlights && work.highlights.length > 0 && (
                    <Highlights>
                        {work.highlights.map((highlight, idx) => (
                            <HighlightItem key={idx}>✨ {highlight}</HighlightItem>
                        ))}
                    </Highlights>
                )}

                <TechList>
                    {work.technologies?.slice(0, 6).map((tech, idx) => (
                        <TechBadge key={idx}>{tech}</TechBadge>
                    ))}
                    {work.technologies?.length > 6 && (
                        <MoreTech>+{work.technologies.length - 6} more</MoreTech>
                    )}
                </TechList>

                <ClickPrompt>Click to view details →</ClickPrompt>
            </TimelineContent>
        </TimelineItem>
    )
}

const TimelineItem = styled(motion.div, {
    position: 'relative',
    paddingLeft: '45px',
    paddingBottom: '24px',

    '&:last-child': {
        paddingBottom: '0',

        '& $TimelineLine': {
            display: 'none',
        },
    },
})

const TimelineLine = styled('div', {
    position: 'absolute',
    left: '14px',
    top: '32px',
    bottom: '-12px',
    width: '1px',
    background: '$secondary',
    opacity: 0.2,
})

const TimelineDot = styled('div', {
    position: 'absolute',
    left: '0',
    top: '12px',
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    background: '$hover',
    border: '2px solid $primary',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
})

const CompanyLogo = styled('img', {
    width: '18px',
    height: '18px',
    objectFit: 'contain',
    borderRadius: '3px',
})

const TimelineContent = styled('div', {
    background: 'transparent',
    borderRadius: '8px',
    padding: '8px 16px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    border: '1px solid transparent',
    borderLeft: '2px solid transparent',

    '&:hover': {
        background: 'rgba(255, 255, 255, 0.02)',
        borderLeftColor: '$primary',
    },
})

const TimelineHeader = styled('div', {
    marginBottom: '4px',
})

const DateRange = styled('div', {
    fontSize: '11px',
    color: '$secondary',
    fontWeight: '400',
    letterSpacing: '0.3px',
    opacity: 0.7,
})

const Duration = styled('span', {
    color: '$highlight',
})

const JobTitle = styled('h3', {
    fontSize: '16px',
    fontWeight: '600',
    color: '$primary',
    margin: '4px 0 2px 0',
    lineHeight: 1.2,
})

const Company = styled('h4', {
    fontSize: '13px',
    fontWeight: '400',
    color: '$secondary',
    margin: '0 0 2px 0',
})

const Location = styled('p', {
    fontSize: '11px',
    color: '$secondary',
    margin: '0 0 8px 0',
    opacity: 0.6,
})

const Highlights = styled('div', {
    margin: '8px 0',
    padding: '0',
    display: 'none', // Hide highlights to keep it minimal
})

const HighlightItem = styled('p', {
    fontSize: '11px',
    color: '$highlight',
    margin: '0 0 3px 0',

    '&:last-child': {
        marginBottom: 0,
    },
})

const TechList = styled('div', {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '4px',
    marginTop: '6px',
})

const TechBadge = styled('span', {
    background: 'rgba(255, 255, 255, 0.05)',
    color: '$secondary',
    fontSize: '10px',
    padding: '2px 8px',
    borderRadius: '4px',
    fontWeight: '400',
    opacity: 0.8,
})

const MoreTech = styled('span', {
    color: '$secondary',
    fontSize: '10px',
    alignSelf: 'center',
    fontStyle: 'italic',
    opacity: 0.6,
})

const ClickPrompt = styled('p', {
    fontSize: '10px',
    color: '$secondary',
    margin: '6px 0 0 0',
    fontWeight: '400',
    opacity: 0,
    transition: 'opacity 0.2s',

    '$TimelineContent:hover &': {
        opacity: 0.5,
    },
})

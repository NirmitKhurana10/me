import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { styled } from '../../stitches.config'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Flowchart from '../../components/projects/Flowchart'
import { FiTarget, FiCode, FiBarChart2, FiPieChart, FiChevronRight, FiUser } from 'react-icons/fi'
import items from '../../data/projects'
import { CardVisual } from '../../components/projects/CardVisual'

export async function getStaticPaths() {
    const paths = items.map((project) => ({
        params: { slug: project.slug },
    }))
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const project = items.find((p) => p.slug === params.slug)
    return { props: { project } }
}

export default function ProjectPost({ project }) {
    const router = useRouter()

    if (!project) return <div>Project not found</div>

    return (
        <>
            <Head>
                <title>{project.title} | Nirmit Khurana</title>
                <meta name="description" content={project.description} />
            </Head>

            <Navbar />

            <Container>
                <BackButton onClick={() => router.push('/projects')}>
                    ← Back to Works
                </BackButton>

                <HeroSection>
                    <Title>{project.title}</Title>

                    <ButtonGroup>
                        {project.url && (
                            <SecondaryButton href={project.url} target="_blank">
                                Github Repo
                            </SecondaryButton>
                        )}
                    </ButtonGroup>

                    <MetaGrid>
                        <MetaItem>
                            <Label>ROLE</Label>
                            <Value>{project.header?.role || 'Developer'}</Value>
                        </MetaItem>
                        <MetaItem>
                            <Label>TIMELINE</Label>
                            <Value>{project.header?.timeline || 'Ongoing'}</Value>
                        </MetaItem>
                        <MetaItem>
                            <Label>TOOLS</Label>
                            <Value>{project.technologies?.slice(0, 3).join(', ')}</Value>
                        </MetaItem>
                        <MetaItem>
                            <Label>PLATFORM</Label>
                            <Value>{project.header?.platform || 'Web'}</Value>
                        </MetaItem>
                    </MetaGrid>
                </HeroSection>

                <VisualSection>
                    {project.VisualType === 'image' && project.coverImage ? (
                        <ProjectImage src={project.coverImage} alt={project.title} />
                    ) : (
                        <SchematicWrapper>
                            <CardVisual type="schematic" />
                        </SchematicWrapper>
                    )}
                </VisualSection>

                {/* ========== PHASE 1: THE PROBLEM ========== */}
                <ProblemSection>
                    <ProblemContainer>
                        <ProblemHeader>
                            <ProblemNumber>01</ProblemNumber>
                            <ProblemLabel>THE PROBLEM</ProblemLabel>
                            <ProblemLine />
                        </ProblemHeader>

                        <ProblemGrid>
                            <ProblemLeft>
                                <ProblemSubtitle>Identifying the Core Issue</ProblemSubtitle>
                                <ProblemHeadline>{project.story?.problem?.headline || project.description}</ProblemHeadline>
                                <ProblemDescription>{project.story?.situation}</ProblemDescription>
                            </ProblemLeft>

                            <ProblemRight>
                                <ProblemStatCard>
                                    <ProblemStatCardInner>
                                        <BigStatValue>{project.StatHighlight?.Value}</BigStatValue>
                                        <BigStatLabel>{project.StatHighlight?.Label}</BigStatLabel>
                                    </ProblemStatCardInner>
                                    <BigStatBg>{project.StatHighlight?.Value?.replace('%', '')}</BigStatBg>
                                </ProblemStatCard>
                            </ProblemRight>
                        </ProblemGrid>
                    </ProblemContainer>
                </ProblemSection>

                {/* ========== PHASE 2: RESEARCH & STRATEGY ========== */}
                <ResearchSection>
                    <ResearchContainer>
                        <ResearchHeader>
                            <ResearchNumber>02</ResearchNumber>
                            <ResearchLabel>RESEARCH & STRATEGY</ResearchLabel>
                            <ResearchLine />
                        </ResearchHeader>

                        <ResearchTitleBlock>
                            <ResearchTitle>Synthesizing User Needs</ResearchTitle>
                            <ResearchSubtitle>Understanding the stakeholders through research</ResearchSubtitle>
                            <ResearchDescription>
                                To design an effective solution, I conducted stakeholder interviews and synthesized
                                two distinct user archetypes representing the core needs and pain points.
                            </ResearchDescription>
                        </ResearchTitleBlock>

                        <StakeholderGrid>
                            {project.stakeholders?.map((s, i) => (
                                <StakeholderCard key={i}>
                                    <StakeholderHeader>

                                        <StakeholderInfo>
                                            <StakeholderNameRow>
                                                <StakeholderName>{s.name}</StakeholderName>
                                                {s.archetype && <StakeholderArchetype>({s.archetype})</StakeholderArchetype>}
                                            </StakeholderNameRow>
                                            <StakeholderRole>{s.role}</StakeholderRole>
                                        </StakeholderInfo>
                                    </StakeholderHeader>
                                    <StakeholderSection>
                                        <StakeholderSectionTitle>GOAL</StakeholderSectionTitle>
                                        <StakeholderText>{s.goal}</StakeholderText>
                                    </StakeholderSection>
                                    <StakeholderSection>
                                        <StakeholderSectionTitle>FRUSTRATIONS</StakeholderSectionTitle>
                                        <FrustrationList>
                                            {s.frustrations?.map((f, j) => <li key={j}>{f}</li>)}
                                        </FrustrationList>
                                    </StakeholderSection>
                                </StakeholderCard>
                            ))}
                        </StakeholderGrid>
                    </ResearchContainer>
                </ResearchSection>
                {/* ========== PHASE 3: THE WORKFLOW ========== */}
                <WorkflowSection>
                    <WorkflowContainer>
                        <WorkflowSectionHeader>
                            <WorkflowNumber>03</WorkflowNumber>
                            <WorkflowLabel>THE WORKFLOW</WorkflowLabel>
                            <WorkflowLine />
                        </WorkflowSectionHeader>

                        <WorkflowTitleBlock>
                            <WorkflowSectionTitle>From Data to Dashboard</WorkflowSectionTitle>
                            <WorkflowSubtitleText>A systematic approach to building the solution</WorkflowSubtitleText>
                        </WorkflowTitleBlock>

                        <WorkflowFlow>
                            {project.workflow?.map((step, i) => (
                                <React.Fragment key={i}>
                                    <WorkflowCard>
                                        <WorkflowStepNumber>0{i + 1}</WorkflowStepNumber>
                                        <WorkflowIcon>
                                            {step.icon === 'target' && <FiTarget />}
                                            {step.icon === 'code' && <FiCode />}
                                            {step.icon === 'bar-chart' && <FiBarChart2 />}
                                            {step.icon === 'pie-chart' && <FiPieChart />}
                                        </WorkflowIcon>
                                        <WorkflowCardContent>
                                            <WorkflowTitle>{step.title}</WorkflowTitle>
                                            <WorkflowSubtitle>{step.subtitle}</WorkflowSubtitle>
                                            <WorkflowTools>{step.tools}</WorkflowTools>
                                        </WorkflowCardContent>
                                    </WorkflowCard>
                                    {i < project.workflow.length - 1 && (
                                        <WorkflowArrow>
                                            <FiChevronRight />
                                        </WorkflowArrow>
                                    )}
                                </React.Fragment>
                            ))}
                        </WorkflowFlow>
                    </WorkflowContainer>
                </WorkflowSection>

                {/* ========== PHASE 4: SYSTEM & ARCHITECTURE ========== */}
                <ArchitectureSection>
                    <ArchitectureContainer>
                        <ArchitectureHeader>
                            <ArchitectureNumber>04</ArchitectureNumber>
                            <ArchitectureLabel>SYSTEM & ARCHITECTURE</ArchitectureLabel>
                            <ArchitectureLine />
                        </ArchitectureHeader>

                        <ArchitectureTitleBlock>
                            <ArchitectureTitle>Data Pipeline Architecture</ArchitectureTitle>
                            <ArchitectureSubtitle>How the data flows from source to insight</ArchitectureSubtitle>
                        </ArchitectureTitleBlock>

                        <SystemDescription>{project.system}</SystemDescription>
                        {project.flowchart && (
                            <FlowchartWrapper>
                                <Flowchart
                                    nodes={project.flowchart.nodes}
                                    edges={project.flowchart.edges}
                                />
                            </FlowchartWrapper>
                        )}
                    </ArchitectureContainer>
                </ArchitectureSection>

                {/* ========== PHASE 5: THE SOLUTION ========== */}
                <SolutionSection>
                    <SolutionContainer>
                        <SolutionHeader>
                            <SolutionNumber>05</SolutionNumber>
                            <SolutionLabel>THE SOLUTION</SolutionLabel>
                            <SolutionLine />
                        </SolutionHeader>

                        <SolutionTitleBlock>
                            <SolutionTitle>{project.solution?.title || 'Designing the Dashboard'}</SolutionTitle>
                            <SolutionSubtitle>{project.solution?.subtitle || 'Turning insights into actionable visualizations'}</SolutionSubtitle>
                        </SolutionTitleBlock>

                        {project.solution?.dashboard && (
                            <SolutionHero>
                                <SolutionText>{project.solution.dashboard.description}</SolutionText>
                                <SolutionImage src={project.solution.dashboard.image} alt="Dashboard" />
                            </SolutionHero>
                        )}
                        <MetricsList>
                            {project.solution?.metrics?.map((m, i) => (
                                <MetricRow key={i} reverse={i % 2 !== 0}>
                                    <MetricInfo>
                                        <MetricKPI>{m.kpi}</MetricKPI>
                                        <MetricLabel>{m.label}</MetricLabel>
                                        <MetricDescription>{m.description}</MetricDescription>
                                    </MetricInfo>
                                    {m.chartImage && <MetricChart src={m.chartImage} alt={m.label} />}
                                </MetricRow>
                            ))}
                        </MetricsList>
                    </SolutionContainer>
                </SolutionSection>

                {/* ========== PHASE 6: RETROSPECTIVE ========== */}
                <RetroSection>
                    <RetroContainer>
                        <RetroHeader>
                            <RetroNumber>06</RetroNumber>
                            <RetroLabel>RETROSPECTIVE</RetroLabel>
                            <RetroLine />
                        </RetroHeader>

                        <RetroTitleBlock>
                            <RetroTitle>Outcome & Learnings</RetroTitle>
                            <RetroSubtitle>Reflecting on what was built and what comes next</RetroSubtitle>
                        </RetroTitleBlock>

                        <RetrospectiveGrid>
                            <RetroCard>
                                <RetroCardTitle>Outcome</RetroCardTitle>
                                <RetroCardText>{project.retrospective?.outcome}</RetroCardText>
                            </RetroCard>
                            <RetroCard>
                                <RetroCardTitle>Key Learnings</RetroCardTitle>
                                <RetroCardText>{project.retrospective?.learnings}</RetroCardText>
                            </RetroCard>
                            <RetroCard highlight>
                                <RetroCardTitle>Future Work</RetroCardTitle>
                                <RetroCardText>{project.retrospective?.futureWork}</RetroCardText>
                            </RetroCard>
                        </RetrospectiveGrid>
                    </RetroContainer>
                </RetroSection>

                <Footer />
            </Container>
        </>
    )
}

const Container = styled('div', {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 20px',
    marginTop: '100px', // Spacing for fixed navbar
})

const BackButton = styled('button', {
    background: 'transparent',
    border: '1px solid #333',
    color: '#888',
    padding: '8px 16px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '40px',
    transition: 'all 0.2s',
    '&:hover': {
        color: '#fff',
        borderColor: '#fff',
    }
})

const HeroSection = styled('div', {
    marginBottom: '60px',
})

const Title = styled('h1', {
    fontSize: '48px',
    lineHeight: '1.1',
    fontWeight: '800',
    color: '$primary',
    marginBottom: '30px',
    '@bp2': { fontSize: '64px' },
})

const ButtonGroup = styled('div', {
    display: 'flex',
    gap: '16px',
    marginBottom: '60px',
})

const PrimaryButton = styled('a', {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '12px 24px',
    background: 'transparent',
    border: '1px solid $green',
    color: '$green',
    borderRadius: '4px',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    transition: 'all 0.2s',
    '&:hover': {
        background: 'rgba(0, 255, 0, 0.1)',
    }
})

const SecondaryButton = styled('a', {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '12px 24px',
    background: 'transparent',
    border: '1px solid #333',
    color: '#fff',
    borderRadius: '4px',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    transition: 'all 0.2s',
    '&:hover': {
        borderColor: '#fff',
    }
})

const MetaGrid = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    borderTop: '1px solid #333',
    borderBottom: '1px solid #333',
    padding: '20px 0',
    '@bp2': {
        gridTemplateColumns: 'repeat(4, 1fr)',
    }
})

const MetaItem = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
})

const Label = styled('span', {
    fontSize: '11px',
    color: '#888',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: '600',
})

const Value = styled('span', {
    fontSize: '14px',
    color: '#fff',
    fontWeight: '500',
})

const VisualSection = styled('div', {
    marginBottom: '80px',
    borderRadius: '8px',
    overflow: 'hidden',
    border: '1px solid #333',
})

const ProjectImage = styled('img', {
    width: '100%',
    height: 'auto',
    display: 'block',
})

const SchematicWrapper = styled('div', {
    height: '400px',
    width: '100%',
    position: 'relative',
    background: '#08070b',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

const ContentWrapper = styled('div', {
    maxWidth: '800px',
    margin: '0 auto',
    paddingBottom: '100px',
})

const Section = styled('div', {
    marginBottom: '80px',
})

const SectionHeader = styled('h3', {
    fontSize: '12px',
    color: '$green', // Accent color
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: '24px',
})

const BigStatement = styled('p', {
    fontSize: '24px',
    lineHeight: '1.5',
    color: '$primary',
    fontWeight: '600',
    marginBottom: '24px',
})

const BodyText = styled('p', {
    fontSize: '16px',
    lineHeight: '1.8',
    color: '$secondary',
    marginBottom: '20px',
    whiteSpace: 'pre-line', // Preserve line breaks in MD
})

const StatsGrid = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '20px',
    marginBottom: '40px',
    '@bp2': { gridTemplateColumns: 'repeat(2, 1fr)' },
})

const StatCard = styled('div', {
    padding: '30px',
    background: '#111',
    border: '1px solid #333',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
})

const StatVal = styled('span', {
    fontSize: '48px',
    fontWeight: '700',
    color: '$green',
    lineHeight: '1',
    marginBottom: '8px',
})

const StatLab = styled('span', {
    fontSize: '12px',
    color: '#888',
    textTransform: 'uppercase',
    letterSpacing: '1px',
})

// ========== 6-PHASE STYLED COMPONENTS ==========

const PhaseSection = styled('section', {
    padding: '80px 0',
})

const SectionLabel = styled('span', {
    display: 'block',
    fontSize: '12px',
    fontWeight: '600',
    color: '#d4a24c', // Gold accent
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: '16px',
    fontFamily: 'Outfit, sans-serif',
})

const PhaseTitle = styled('h2', {
    fontSize: '32px',
    fontWeight: '700',
    color: '#fff',
    marginBottom: '40px',
    fontFamily: 'Outfit, sans-serif',
    '@bp2': { fontSize: '42px' },
})

// --- Phase 1: Problem (Enhanced) ---
const ProblemSection = styled('section', {
    padding: '100px 0',
    position: 'relative',
    overflow: 'hidden',
    background: '#08070b',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(212,162,76,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
    }
})

const ProblemContainer = styled('div', {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 24px',
    position: 'relative',
    zIndex: 1,
})

const ProblemHeader = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '60px',
})

const ProblemNumber = styled('span', {
    fontSize: '48px',
    fontWeight: '800',
    color: 'rgba(212,162,76,0.15)',
    fontFamily: 'Outfit, sans-serif',
    lineHeight: '1',
})

const ProblemLabel = styled('span', {
    fontSize: '12px',
    fontWeight: '600',
    color: '#d4a24c',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    fontFamily: 'Outfit, sans-serif',
})

const ProblemLine = styled('div', {
    flex: 1,
    height: '1px',
    background: 'linear-gradient(90deg, rgba(212,162,76,0.4) 0%, rgba(212,162,76,0) 100%)',
})

const ProblemGrid = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '60px',
    '@bp2': { gridTemplateColumns: '1.2fr 1fr' },
})

const ProblemLeft = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
})

const ProblemSubtitle = styled('span', {
    display: 'block',
    fontSize: '11px',
    fontWeight: '600',
    color: '#666',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: '16px',
})

const ProblemHeadline = styled('h2', {
    fontSize: '36px',
    fontWeight: '400',
    color: '#fff',
    lineHeight: '1.25',
    marginBottom: '28px',
    fontFamily: '"Playfair Display", serif',
    '@bp2': { fontSize: '44px' },
})

const ProblemDescription = styled('p', {
    fontSize: '16px',
    color: '#888',
    lineHeight: '1.8',
    maxWidth: '520px',
})

const ProblemRight = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@bp2': { justifyContent: 'flex-end' },
})

const ProblemStatCard = styled('div', {
    position: 'relative',
    padding: '48px 56px',
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(212,162,76,0.2)',
    borderRadius: '20px',
    backdropFilter: 'blur(12px)',
    overflow: 'hidden',
    minWidth: '260px',
    textAlign: 'center',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(212,162,76,0.6), transparent)',
    }
})

const ProblemStatCardInner = styled('div', {
    position: 'relative',
    zIndex: 1,
})

const BigStatValue = styled('span', {
    display: 'block',
    fontSize: '72px',
    fontWeight: '700',
    color: '#d4a24c',
    lineHeight: '1',
    fontFamily: 'Outfit, sans-serif',
    textShadow: '0 0 60px rgba(212,162,76,0.3)',
    '@bp2': { fontSize: '96px' },
})

const BigStatLabel = styled('span', {
    display: 'block',
    fontSize: '13px',
    color: '#999',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    marginTop: '16px',
    fontWeight: '500',
})

const BigStatBg = styled('span', {
    position: 'absolute',
    right: '-20px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '160px',
    fontWeight: '900',
    color: 'rgba(255,255,255,0.015)',
    lineHeight: '1',
    zIndex: 0,
    pointerEvents: 'none',
    fontFamily: 'Outfit, sans-serif',
    '@bp2': { fontSize: '220px' },
})

// --- Phase 2: Research & Strategy (Enhanced) ---
const ResearchSection = styled('section', {
    padding: '100px 0',
    position: 'relative',
    overflow: 'hidden',
    background: '#08070b',
})

const ResearchContainer = styled('div', {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 24px',
    position: 'relative',
    zIndex: 1,
})

const ResearchHeader = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '40px',
})

const ResearchNumber = styled('span', {
    fontSize: '48px',
    fontWeight: '800',
    color: 'rgba(212,162,76,0.15)',
    fontFamily: 'Outfit, sans-serif',
    lineHeight: '1',
})

const ResearchLabel = styled('span', {
    fontSize: '12px',
    fontWeight: '600',
    color: '#d4a24c',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    fontFamily: 'Outfit, sans-serif',
})

const ResearchLine = styled('div', {
    flex: 1,
    height: '1px',
    background: 'linear-gradient(90deg, rgba(212,162,76,0.4) 0%, rgba(212,162,76,0) 100%)',
})

const ResearchTitleBlock = styled('div', {
    textAlign: 'center',
    marginBottom: '60px',
})

const ResearchTitle = styled('h2', {
    fontSize: '36px',
    fontWeight: '600',
    color: '#fff',
    lineHeight: '1.2',
    marginBottom: '12px',
    fontFamily: 'Outfit, sans-serif',
    '@bp2': { fontSize: '44px' },
})

const ResearchSubtitle = styled('p', {
    fontSize: '16px',
    color: '#888',
    marginBottom: '16px',
})

const ResearchDescription = styled('p', {
    fontSize: '14px',
    color: '#666',
    lineHeight: '1.7',
    maxWidth: '600px',
    margin: '0 auto',
})

const StakeholderGrid = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '24px',
    '@bp2': { gridTemplateColumns: 'repeat(2, 1fr)' },
})

const StakeholderCard = styled('div', {
    background: 'rgba(15,12,18,0.8)',
    border: '1px solid rgba(212,162,76,0.15)',
    borderLeft: '3px solid #d4a24c',
    borderRadius: '16px',
    padding: '28px',
    transition: 'all 0.3s ease',
    '&:hover': {
        borderColor: 'rgba(212,162,76,0.3)',
        background: 'rgba(20,16,24,0.9)',
    }
})

const StakeholderHeader = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '24px',
})

const StakeholderAvatar = styled('div', {
    width: '56px',
    height: '56px',
    minWidth: '56px',
    minHeight: '56px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #d4a24c 0%, #b8860b 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    flexShrink: 0,
})

const StakeholderInfo = styled('div', {
    flex: 1,
})

const StakeholderNameRow = styled('div', {
    display: 'flex',
    alignItems: 'baseline',
    gap: '8px',
    flexWrap: 'wrap',
})

const StakeholderName = styled('span', {
    fontSize: '18px',
    fontWeight: '600',
    color: '#fff',
})

const StakeholderArchetype = styled('span', {
    fontSize: '14px',
    color: '#888',
    fontStyle: 'italic',
})

const StakeholderRole = styled('span', {
    display: 'block',
    fontSize: '11px',
    color: '#d4a24c',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    marginTop: '4px',
})

const StakeholderSection = styled('div', {
    marginTop: '20px',
})

const StakeholderSectionTitle = styled('span', {
    display: 'block',
    fontSize: '10px',
    color: '#666',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    marginBottom: '10px',
    fontWeight: '600',
})

const StakeholderText = styled('p', {
    fontSize: '14px',
    color: '#bbb',
    lineHeight: '1.6',
    margin: 0,
})

const FrustrationList = styled('ul', {
    margin: 0,
    paddingLeft: '16px',
    '& li': {
        fontSize: '13px',
        color: '#999',
        lineHeight: '1.7',
        marginBottom: '6px',
        '&::marker': {
            color: '#d4a24c',
        }
    }
})

// --- Phase 3: Workflow (Enhanced) ---
const WorkflowSection = styled('section', {
    padding: '100px 0',
    position: 'relative',
    overflow: 'hidden',
    background: '#08070b',
})

const WorkflowContainer = styled('div', {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 24px',
    position: 'relative',
    zIndex: 1,
})

const WorkflowSectionHeader = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '40px',
})

const WorkflowNumber = styled('span', {
    fontSize: '48px',
    fontWeight: '800',
    color: 'rgba(212,162,76,0.15)',
    fontFamily: 'Outfit, sans-serif',
    lineHeight: '1',
})

const WorkflowLabel = styled('span', {
    fontSize: '12px',
    fontWeight: '600',
    color: '#d4a24c',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    fontFamily: 'Outfit, sans-serif',
})

const WorkflowLine = styled('div', {
    flex: 1,
    height: '1px',
    background: 'linear-gradient(90deg, rgba(212,162,76,0.4) 0%, rgba(212,162,76,0) 100%)',
})

const WorkflowTitleBlock = styled('div', {
    textAlign: 'center',
    marginBottom: '60px',
})

const WorkflowSectionTitle = styled('h2', {
    fontSize: '36px',
    fontWeight: '600',
    color: '#fff',
    lineHeight: '1.2',
    marginBottom: '12px',
    fontFamily: 'Outfit, sans-serif',
    '@bp2': { fontSize: '44px' },
})

const WorkflowSubtitleText = styled('p', {
    fontSize: '16px',
    color: '#888',
})

const WorkflowFlow = styled('div', {
    display: 'flex',
    alignItems: 'stretch',
    gap: '0',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '@bp2': { flexWrap: 'nowrap' },
})

const WorkflowArrow = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#d4a24c',
    fontSize: '24px',
    padding: '0 4px',
    flexShrink: 0,
    '& svg': {
        width: '28px',
        height: '28px',
        strokeWidth: '2px',
        filter: 'drop-shadow(0 0 6px rgba(212,162,76,0.4))',
    },
    '@media (max-width: 768px)': {
        transform: 'rotate(90deg)',
        padding: '4px 0',
    },
})

const WorkflowCard = styled('div', {
    background: 'rgba(15,12,18,0.8)',
    border: '1px solid rgba(212,162,76,0.15)',
    borderRadius: '16px',
    padding: '28px 20px',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    flex: '1',
    minWidth: '180px',
    position: 'relative',
    '&:hover': {
        borderColor: 'rgba(212,162,76,0.3)',
        background: 'rgba(20,16,24,0.9)',
        transform: 'translateY(-4px)',
    }
})

const WorkflowStepNumber = styled('span', {
    position: 'absolute',
    top: '12px',
    right: '14px',
    fontSize: '11px',
    fontWeight: '700',
    color: 'rgba(212,162,76,0.25)',
    fontFamily: 'Outfit, sans-serif',
    letterSpacing: '1px',
})

const WorkflowIcon = styled('div', {
    fontSize: '28px',
    color: '#d4a24c',
    marginBottom: '20px',
    '& svg': {
        width: '32px',
        height: '32px',
        strokeWidth: '1.5px',
    }
})

const WorkflowCardContent = styled('div', {})

const WorkflowTitle = styled('span', {
    display: 'block',
    fontSize: '16px',
    fontWeight: '600',
    color: '#fff',
    marginBottom: '6px',
    fontFamily: 'Outfit, sans-serif',
})

const WorkflowSubtitle = styled('span', {
    display: 'block',
    fontSize: '13px',
    color: '#888',
    marginBottom: '10px',
})

const WorkflowTools = styled('span', {
    display: 'block',
    fontSize: '11px',
    color: '#d4a24c',
    textTransform: 'uppercase',
    letterSpacing: '1px',
})

// --- Phase 4: System & Architecture (Enhanced) ---
const ArchitectureSection = styled('section', {
    padding: '100px 0',
    position: 'relative',
    overflow: 'hidden',
    background: '#08070b',
})

const ArchitectureContainer = styled('div', {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 24px',
    position: 'relative',
    zIndex: 1,
})

const ArchitectureHeader = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '40px',
})

const ArchitectureNumber = styled('span', {
    fontSize: '48px',
    fontWeight: '800',
    color: 'rgba(212,162,76,0.15)',
    fontFamily: 'Outfit, sans-serif',
    lineHeight: '1',
})

const ArchitectureLabel = styled('span', {
    fontSize: '12px',
    fontWeight: '600',
    color: '#d4a24c',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    fontFamily: 'Outfit, sans-serif',
})

const ArchitectureLine = styled('div', {
    flex: 1,
    height: '1px',
    background: 'linear-gradient(90deg, rgba(212,162,76,0.4) 0%, rgba(212,162,76,0) 100%)',
})

const ArchitectureTitleBlock = styled('div', {
    textAlign: 'center',
    marginBottom: '40px',
})

const ArchitectureTitle = styled('h2', {
    fontSize: '36px',
    fontWeight: '600',
    color: '#fff',
    lineHeight: '1.2',
    marginBottom: '12px',
    fontFamily: 'Outfit, sans-serif',
    '@bp2': { fontSize: '44px' },
})

const ArchitectureSubtitle = styled('p', {
    fontSize: '16px',
    color: '#888',
})

const SystemDescription = styled('p', {
    fontSize: '16px',
    color: '#aaa',
    lineHeight: '1.8',
    marginBottom: '40px',
    maxWidth: '800px',
    margin: '0 auto 40px',
    textAlign: 'center',
})

const FlowchartWrapper = styled('div', {
    background: 'rgba(15,12,18,0.6)',
    border: '1px solid rgba(212,162,76,0.12)',
    borderRadius: '16px',
    padding: '32px',
    marginTop: '20px',
})

// --- Phase 5: Solution (Enhanced) ---
const SolutionSection = styled('section', {
    padding: '100px 0',
    position: 'relative',
    overflow: 'hidden',
    background: '#08070b',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(212,162,76,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
    }
})

const SolutionContainer = styled('div', {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 24px',
    position: 'relative',
    zIndex: 1,
})

const SolutionHeader = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '40px',
})

const SolutionNumber = styled('span', {
    fontSize: '48px',
    fontWeight: '800',
    color: 'rgba(212,162,76,0.15)',
    fontFamily: 'Outfit, sans-serif',
    lineHeight: '1',
})

const SolutionLabel = styled('span', {
    fontSize: '12px',
    fontWeight: '600',
    color: '#d4a24c',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    fontFamily: 'Outfit, sans-serif',
})

const SolutionLine = styled('div', {
    flex: 1,
    height: '1px',
    background: 'linear-gradient(90deg, rgba(212,162,76,0.4) 0%, rgba(212,162,76,0) 100%)',
})

const SolutionTitleBlock = styled('div', {
    textAlign: 'center',
    marginBottom: '60px',
})

const SolutionTitle = styled('h2', {
    fontSize: '36px',
    fontWeight: '600',
    color: '#fff',
    lineHeight: '1.2',
    marginBottom: '12px',
    fontFamily: 'Outfit, sans-serif',
    '@bp2': { fontSize: '44px' },
})

const SolutionSubtitle = styled('p', {
    fontSize: '16px',
    color: '#888',
})

const SolutionHero = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '48px',
    marginBottom: '80px',
    padding: '36px',
    background: 'rgba(15,12,18,0.5)',
    border: '1px solid rgba(212,162,76,0.1)',
    borderRadius: '20px',
    backdropFilter: 'blur(12px)',
    '@bp2': { gridTemplateColumns: '1fr 1.2fr' },
})

const SolutionText = styled('p', {
    fontSize: '16px',
    color: '#aaa',
    lineHeight: '1.9',
    alignSelf: 'center',
    letterSpacing: '0.2px',
})

const SolutionImage = styled('img', {
    width: '100%',
    height: 'auto',
    maxHeight: '380px',
    objectFit: 'contain',
    borderRadius: '14px',
    background: 'rgba(255,255,255,0.95)',
    padding: '16px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
})

const MetricsList = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '0',
})

const MetricRow = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '40px',
    alignItems: 'center',
    padding: '48px 0',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    transition: 'background 0.3s ease',
    '&:first-child': {
        borderTop: '1px solid rgba(255,255,255,0.06)',
    },
    '&:hover': {
        background: 'rgba(212,162,76,0.02)',
    },
    '@bp2': { gridTemplateColumns: '1fr 1fr' },
    variants: {
        reverse: {
            true: {
                '@bp2': {
                    '& > *:first-child': { order: 2 },
                    '& > *:last-child': { order: 1 },
                }
            }
        }
    }
})

const MetricInfo = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
})

const MetricKPI = styled('span', {
    display: 'block',
    fontSize: '56px',
    fontWeight: '700',
    color: '#d4a24c',
    lineHeight: '1',
    marginBottom: '4px',
    fontFamily: 'Outfit, sans-serif',
    textShadow: '0 0 40px rgba(212,162,76,0.15)',
})

const MetricLabel = styled('span', {
    display: 'block',
    fontSize: '15px',
    color: '#fff',
    fontWeight: '600',
    letterSpacing: '0.5px',
    marginBottom: '8px',
})

const MetricDescription = styled('p', {
    fontSize: '14px',
    color: '#888',
    lineHeight: '1.7',
    margin: 0,
    maxWidth: '420px',
})

const MetricChart = styled('img', {
    width: '100%',
    maxWidth: '420px',
    height: 'auto',
    maxHeight: '280px',
    objectFit: 'contain',
    borderRadius: '14px',
    background: 'rgba(255,255,255,0.95)',
    padding: '14px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
        transform: 'scale(1.02)',
        boxShadow: '0 12px 48px rgba(0,0,0,0.35)',
    },
})

// --- Phase 6: Retrospective (Enhanced) ---
const RetroSection = styled('section', {
    padding: '100px 0',
    position: 'relative',
    overflow: 'hidden',
    background: '#08070b',
})

const RetroContainer = styled('div', {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 24px',
    position: 'relative',
    zIndex: 1,
})

const RetroHeader = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '40px',
})

const RetroNumber = styled('span', {
    fontSize: '48px',
    fontWeight: '800',
    color: 'rgba(212,162,76,0.15)',
    fontFamily: 'Outfit, sans-serif',
    lineHeight: '1',
})

const RetroLabel = styled('span', {
    fontSize: '12px',
    fontWeight: '600',
    color: '#d4a24c',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    fontFamily: 'Outfit, sans-serif',
})

const RetroLine = styled('div', {
    flex: 1,
    height: '1px',
    background: 'linear-gradient(90deg, rgba(212,162,76,0.4) 0%, rgba(212,162,76,0) 100%)',
})

const RetroTitleBlock = styled('div', {
    textAlign: 'center',
    marginBottom: '60px',
})

const RetroTitle = styled('h2', {
    fontSize: '36px',
    fontWeight: '600',
    color: '#fff',
    lineHeight: '1.2',
    marginBottom: '12px',
    fontFamily: 'Outfit, sans-serif',
    '@bp2': { fontSize: '44px' },
})

const RetroSubtitle = styled('p', {
    fontSize: '16px',
    color: '#888',
})

const RetrospectiveGrid = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '24px',
    '@bp2': { gridTemplateColumns: 'repeat(3, 1fr)' },
})

const RetroCard = styled('div', {
    background: 'rgba(15,12,18,0.8)',
    border: '1px solid rgba(212,162,76,0.12)',
    borderRadius: '16px',
    padding: '28px',
    transition: 'all 0.3s ease',
    '&:hover': {
        borderColor: 'rgba(212,162,76,0.25)',
        background: 'rgba(20,16,24,0.9)',
        transform: 'translateY(-4px)',
    },
    variants: {
        highlight: {
            true: {
                borderColor: 'rgba(212,162,76,0.3)',
                background: 'rgba(212, 162, 76, 0.05)',
                borderLeft: '3px solid #d4a24c',
            }
        }
    }
})

const RetroCardTitle = styled('span', {
    display: 'block',
    fontSize: '12px',
    fontWeight: '600',
    color: '#d4a24c',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: '16px',
    fontFamily: 'Outfit, sans-serif',
})

const RetroCardText = styled('p', {
    fontSize: '15px',
    color: '#ccc',
    lineHeight: '1.7',
    margin: 0,
})

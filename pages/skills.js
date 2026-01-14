import Head from 'next/head'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'
import { styled } from '../stitches.config'

export async function getStaticProps() {
    const meta = {
        title: 'Skills // Nirmit Khurana',
        description:
            'My technical skills and expertise in Business Intelligence, Data Analytics, and Automation.',
        tagline: 'Technical Skills & Expertise',
        image: '/static/images/skills-bw.jpg',
        primaryColor: 'cyan',
        secondaryColor: 'green',
    }

    return { props: meta }
}

function Skills() {
    return (
        <>
            <Head>
                <title>Skills // Nirmit Khurana</title>
                <meta content="Skills // Nirmit Khurana" property="og:title" />
                <meta
                    content="My technical skills and expertise in Business Intelligence, Data Analytics, and Automation."
                    name="description"
                />
                <meta
                    content="My technical skills and expertise in Business Intelligence, Data Analytics, and Automation."
                    property="og:description"
                />
                <meta content="https://nirmitkhurana.com/skills" property="og:url" />
                <meta
                    content="https://nirmitkhurana.com/static/images/skills-bw.jpg"
                    property="og:image"
                />
            </Head>

            <Container>
                <h1>Skills & Expertise</h1>
                <ComingSoon>
                    <p>🚧 This page is under construction</p>
                    <p>Coming soon: My complete technical skill set and expertise areas</p>
                </ComingSoon>
            </Container>
        </>
    )
}

const Container = styled('div', {
    marginTop: '60px',
})

const ComingSoon = styled('div', {
    textAlign: 'center',
    padding: '60px 20px',
    opacity: 0.7,
    '& p:first-child': {
        fontSize: '48px',
        marginBottom: '20px',
    },
    '& p:last-child': {
        fontSize: '16px',
    },
})

Skills.Layout = Base

export default Skills

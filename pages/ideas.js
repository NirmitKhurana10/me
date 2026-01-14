import Head from 'next/head'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'
import { styled } from '../stitches.config'

export async function getStaticProps() {
    const meta = {
        title: 'Ideas // Nirmit Khurana',
        description:
            'A collection of my thoughts, ideas, and insights on data, technology, and innovation.',
        tagline: 'Thoughts & Ideas',
        image: '/static/images/ideas-bw.jpg',
        primaryColor: 'yellow',
        secondaryColor: 'orange',
    }

    return { props: meta }
}

function Ideas() {
    return (
        <>
            <Head>
                <title>Ideas // Nirmit Khurana</title>
                <meta content="Ideas // Nirmit Khurana" property="og:title" />
                <meta
                    content="A collection of my thoughts, ideas, and insights on data, technology, and innovation."
                    name="description"
                />
                <meta
                    content="A collection of my thoughts, ideas, and insights on data, technology, and innovation."
                    property="og:description"
                />
                <meta content="https://nirmitkhurana.com/ideas" property="og:url" />
                <meta
                    content="https://nirmitkhurana.com/static/images/ideas-bw.jpg"
                    property="og:image"
                />
            </Head>

            <Container>
                <h1>Ideas</h1>
                <ComingSoon>
                    <p>💡 This page is under construction</p>
                    <p>Coming soon: My thoughts and ideas on data, technology, and innovation</p>
                    <p style={{ fontSize: '14px', marginTop: '20px', opacity: 0.6 }}>
                        This page will be powered by Notion
                    </p>
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
    '& p:nth-child(2)': {
        fontSize: '16px',
    },
})

Ideas.Layout = Base

export default Ideas

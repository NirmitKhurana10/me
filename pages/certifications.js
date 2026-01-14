import Head from 'next/head'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'
import { styled } from '../stitches.config'

export async function getStaticProps() {
    const meta = {
        title: 'Certifications // Nirmit Khurana',
        description:
            'Professional certifications and credentials in Data Analytics and Business Intelligence.',
        tagline: 'Certifications & Credentials',
        image: '/static/images/certifications-bw.jpg',
        primaryColor: 'purple',
        secondaryColor: 'blue',
    }

    return { props: meta }
}

function Certifications() {
    return (
        <>
            <Head>
                <title>Certifications // Nirmit Khurana</title>
                <meta content="Certifications // Nirmit Khurana" property="og:title" />
                <meta
                    content="Professional certifications and credentials in Data Analytics and Business Intelligence."
                    name="description"
                />
                <meta
                    content="Professional certifications and credentials in Data Analytics and Business Intelligence."
                    property="og:description"
                />
                <meta content="https://nirmitkhurana.com/certifications" property="og:url" />
                <meta
                    content="https://nirmitkhurana.com/static/images/certifications-bw.jpg"
                    property="og:image"
                />
            </Head>

            <Container>
                <h1>Certifications</h1>
                <ComingSoon>
                    <p>🏆 This page is under construction</p>
                    <p>Coming soon: My professional certifications and credentials</p>
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

Certifications.Layout = Base

export default Certifications

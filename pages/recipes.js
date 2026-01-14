import Head from 'next/head'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'
import { styled } from '../stitches.config'

export async function getStaticProps() {
    const meta = {
        title: 'Recipes // Nirmit Khurana',
        description:
            'My culinary experiments and favorite recipes - where data meets the kitchen.',
        tagline: 'Culinary Experiments',
        image: '/static/images/recipes-bw.jpg',
        primaryColor: 'orange',
        secondaryColor: 'red',
    }

    return { props: meta }
}

function Recipes() {
    return (
        <>
            <Head>
                <title>Recipes // Nirmit Khurana</title>
                <meta content="Recipes // Nirmit Khurana" property="og:title" />
                <meta
                    content="My culinary experiments and favorite recipes - where data meets the kitchen."
                    name="description"
                />
                <meta
                    content="My culinary experiments and favorite recipes - where data meets the kitchen."
                    property="og:description"
                />
                <meta content="https://nirmitkhurana.com/recipes" property="og:url" />
                <meta
                    content="https://nirmitkhurana.com/static/images/recipes-bw.jpg"
                    property="og:image"
                />
            </Head>

            <Container>
                <h1>Recipes</h1>
                <ComingSoon>
                    <p>👨‍🍳 This page is under construction</p>
                    <p>Coming soon: My culinary experiments and favorite recipes</p>
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

Recipes.Layout = Base

export default Recipes

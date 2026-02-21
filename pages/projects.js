import { motion, AnimateSharedLayout } from 'framer-motion'
import Head from 'next/head'
import React, { useState } from 'react'
import ProjectItem from '../components/projects/ProjectItem'
import items from '../data/projects'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'
import { styled } from '../stitches.config'

export async function getStaticProps() {
  const meta = {
    title: 'Projects // Nirmit Khurana',
    tagline: 'Build. Automate. Optimize.',
    image: '/static/images/projects-bw.jpg',
    primaryColor: 'cyan',
    secondaryColor: 'green',
  }

  return { props: meta }
}

function Projects(props) {
  const { title, image } = props
  const description = `I love building impactful <strong>data projects</strong>. Here you can explore <strong>${items.length} major projects</strong> where I've leveraged automation and analytics to drive measurable business outcomes.`

  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://nirmitkhurana.com/projects" property="og:url" />
        <meta content={`https://nirmitkhurana.com${image}`} property="og:image" />
      </Head>

      <AnimateSharedLayout>
        <p dangerouslySetInnerHTML={{ __html: description }} />

        <h2>Featured Projects</h2>
        <Grid>
          {items.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
                type: 'spring',
                stiffness: 60,
              }}
            >
              <ProjectItem
                project={project}
              />
            </motion.div>
          ))}
        </Grid>
      </AnimateSharedLayout>
    </>
  )
}

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '20px',
  padding: '40px 0',
})

Projects.Layout = Base

export default Projects

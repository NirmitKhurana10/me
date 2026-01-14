import { motion } from 'framer-motion'
import {
  SiPython,
  SiTableau,
  SiAmazonwebservices,
  SiSnowflake,
  SiMysql,
  SiJira,
} from 'react-icons/si'
import {
  FiDatabase,
} from 'react-icons/fi'
import {
  TbChartHistogram,
  TbTable,
  TbShare3,
  TbBolt,
} from 'react-icons/tb'
import { styled } from '../stitches.config'

const tools = [
  { name: 'Power BI', icon: TbChartHistogram, color: '#F2C811' },
  { name: 'SQL', icon: SiMysql, color: '#CC2927' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Excel', icon: TbTable, color: '#217346' },
  { name: 'Tableau', icon: SiTableau, color: '#E97627' },
  { name: 'n8n', icon: TbBolt, color: '#EA4B71' },
  { name: 'SharePoint', icon: TbShare3, color: '#0078D4' },
  { name: 'AWS', icon: SiAmazonwebservices, color: '#FF9900' },
  { name: 'Snowflake', icon: SiSnowflake, color: '#29B5E8' },
  { name: 'Jira', icon: SiJira, color: '#0052CC' },
]

export default function Toolbox() {
  return (
    <ToolboxContainer>
      <h2>My Toolbox</h2>
      <ToolGrid>
        {tools.map((tool, index) => {
          if (!tool.icon) return null
          const IconComponent = tool.icon
          return (
            <Tool key={index} whileHover={{ scale: 1.1 }}>
              <IconWrapper style={{ color: tool.color }}>
                <IconComponent size={40} />
              </IconWrapper>
              <ToolName>{tool.name}</ToolName>
            </Tool>
          )
        })}
      </ToolGrid>
    </ToolboxContainer>
  )
}

const ToolboxContainer = styled('div', {
  marginTop: '2rem',
})

const ToolGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
  gap: '2rem',
  marginTop: '2rem',
})

const Tool = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
  borderRadius: '12px',
  background: '$hover',
  transition: 'background 0.3s ease',
  '&:hover': {
    background: '$background',
  },
})

const IconWrapper = styled('div', {
  fontSize: '2.5rem',
  marginBottom: '0.5rem',
  transform: 'scale(0.9)',
  transition: 'transform 0.3s ease',
  '& svg': {
    transition: 'transform 0.3s ease',
  },
  '&:hover svg': {
    transform: 'rotate(360deg)',
  },
})

const ToolName = styled('span', {
  fontSize: '0.9rem',
  color: '$secondary',
  textAlign: 'center',
})

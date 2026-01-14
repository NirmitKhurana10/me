export const getPersonJsonLd = () => {
  return {
    '@context': 'https://schema.org/',
    '@type': 'Person',
    url: 'https://nirmitkhurana.com/',
    affiliation: [
      {
        '@type': 'Organization',
        '@id': '',
        url: 'https://www.ikea.com/',
        name: 'IKEA',
      },
      {
        '@type': 'Organization',
        '@id': '',
        url: 'https://www.decimaltechnologies.com/',
        name: 'Decimal Technologies',
      },
    ],
    description:
      'Nirmit Khurana is a Business Intelligence & Data Analytics Professional with 2+ years of experience optimizing retail and financial operations through scalable BI pipelines and automated workflows. He currently works as a Data Analyst at IKEA.',
    image: 'https://nirmitkhurana.com/static/images/avatar.jpg',
    name: 'Nirmit Khurana',
    givenName: 'Nirmit',
    familyName: 'Khurana',
    gender: 'Male',
    jobTitle: 'Data Analyst',
    sameAs: [
      'https://www.linkedin.com/in/nirmit-khurana-3852841a6/',
      'https://github.com/Nirmitkhurana10',
    ],
    knowsAbout: [
      {
        '@type': 'Thing',
        '@id': 'https://www.wikidata.org/wiki/Q2539',
        name: 'Business Intelligence',
      },
      {
        '@type': 'Thing',
        '@id': 'https://www.wikidata.org/wiki/Q192776',
        name: 'Data Analytics',
      },
      {
        '@type': 'Thing',
        '@id': 'https://www.wikidata.org/wiki/Q80993',
        name: 'Data Engineering',
      },
    ],
    knowsLanguage: [
      {
        '@type': 'Language',
        '@id': 'https://www.wikidata.org/wiki/Q1860',
        name: 'English',
      },
      {
        '@type': 'Language',
        '@id': 'https://www.wikidata.org/wiki/Q733944',
        name: 'Gujarati',
      },
      {
        '@type': 'Country',
        '@id': 'https://www.wikidata.org/wiki/Q1568',
        name: 'Hindi',
      },
    ],
    nationality: [
      {
        '@type': 'Country',
        '@id': 'https://www.wikidata.org/wiki/Q16',
        name: 'Canada',
      },
      {
        '@type': 'Country',
        '@id': 'https://www.wikidata.org/wiki/Q668',
        name: 'India',
      },
    ],
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        '@id': 'https://www.wikidata.org/wiki/Q1256981',
        name: 'San Francisco State University',
        url: 'https://www.sfsu.edu/',
        startDate: '2023',
        endDate: '2025',
      },
      {
        '@type': 'EducationalOrganization',
        '@id': 'https://www.wikidata.org/wiki/Q2763240',
        name: 'Nirma University',
        url: 'https://nirmauni.ac.in/',
        startDate: '2018',
        endDate: '2022',
        major: [
          {
            '@type': 'DefinedTerm',
            name: 'Computer Science',
          },
        ],
      },
    ],
  }
}
import { useEffect, useMemo, useState } from 'react'
import LayoutComponent from '../../components/layout/layout.component'
import {
  PortfolioSection,
  PageTitle,
  PageSubtitle,
  PortfolioGrid,
  PortfolioCard,
  CardImage,
  CardBody,
  CardTitle,
  CardDescription,
  CardLink,
  GroupSection,
  GroupTitle,
} from './portfolio.style'

interface PortfolioItem {
  title: string
  url: string
  image: string
  description: string
}

const CATEGORY_ORDER = ['Web', 'Mobile App', 'UI/UX']

function getCategory(title: string) {
  if (title.includes('Mobile App')) return 'Mobile App'
  if (title.includes('UI/UX')) return 'UI/UX'
  return 'Web'
}

function PortfolioView() {
  const [items, setItems] = useState<PortfolioItem[]>([])

  useEffect(() => {
    fetch('/portfolio.json')
      .then(res => res.json())
      .then(data => setItems(data.portfolio))
  }, [])

  const grouped = useMemo(() => {
    const map = new Map<string, PortfolioItem[]>()
    for (const item of items) {
      const cat = getCategory(item.title)
      if (!map.has(cat)) map.set(cat, [])
      map.get(cat)!.push(item)
    }
    return CATEGORY_ORDER
      .filter(cat => map.has(cat))
      .map(cat => ({ category: cat, items: map.get(cat)! }))
  }, [items])

  return (
    <LayoutComponent>
      <PortfolioSection>
        <PageTitle>Portfolio</PageTitle>
        <PageSubtitle>A collection of projects I've worked on.</PageSubtitle>
        {grouped.map(group => (
          <GroupSection key={group.category}>
            <GroupTitle>{group.category}</GroupTitle>
            <PortfolioGrid>
              {group.items.map((item, index) => (
                <PortfolioCard key={index}>
                  <CardImage>
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </CardImage>
                  <CardBody>
                    <CardTitle>{item.title.split(' | ')[0]}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                    {item.url && (
                      <CardLink href={item.url} target="_blank" rel="noopener noreferrer">
                        Visit
                      </CardLink>
                    )}
                  </CardBody>
                </PortfolioCard>
              ))}
            </PortfolioGrid>
          </GroupSection>
        ))}
      </PortfolioSection>
    </LayoutComponent>
  )
}

export default PortfolioView

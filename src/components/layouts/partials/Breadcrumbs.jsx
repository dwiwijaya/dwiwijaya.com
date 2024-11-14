// components/Breadcrumbs.js
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BLOG_MENU_ITEMS } from '@/constants/data/menu'
import React from 'react'

const Breadcrumbs = () => {
  const { locale } = useRouter()
  const router = useRouter()

  const pathParts = router.asPath.split('/').filter(Boolean)
  const isLanguageSegment = pathParts[0] === 'en' || pathParts[0] === 'id'
  if (isLanguageSegment) {
    pathParts.shift()
  }

  const breadcrumbItems = pathParts.map((part, index) => {
    const href = `/${pathParts.slice(0, index + 1).join('/')}`
    const isActive = router.asPath === href

    const menuItem = BLOG_MENU_ITEMS.find(item => item.href.includes(part))
    const label = menuItem ? menuItem.label[locale] : capitalize(part.replace('-', ' '))

    return (
      <React.Fragment key={href}>
        <Link className={isActive ? 'text-primary' : ''} href={href}>
          {label}
        </Link>
        {index < pathParts.length - 1 && (
          <i className="fal fa-xs fa-chevron-right" />
        )}
      </React.Fragment>
    )
  })

  return (
    <nav aria-label="Breadcrumbs" className='flex items-center gap-2'>
      <Link href="/">
        Dwi Wijaya
      </Link>
      <i className="fal fa-xs fa-chevron-right" />
      {breadcrumbItems}
    </nav>
  )
}

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default Breadcrumbs

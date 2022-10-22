import { Link as RouterLink } from 'react-router-dom'

const Link = ({ to, external, children, className }) => {
  const LinkTag = external ? 'a' : RouterLink

  return (
    <LinkTag
      rel={external && 'noopener noreferrer'}
      target={external && '_blank'}
      className={className}
      to={!external && to}
      href={to}
    >
      {children}
    </LinkTag>
  )
}

export default Link

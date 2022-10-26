import { Link as RouterLink } from 'react-router-dom'

const Link = ({ to, external, children, className }) => {
  const LinkTag = external ? 'a' : RouterLink

  return (
    <LinkTag
      rel={external ? 'noopener noreferrer' : undefined}
      target={external ? '_blank' : undefined}
      className={className}
      to={!external ? to : undefined}
      href={to}
    >
      {children}
    </LinkTag>
  )
}

export default Link

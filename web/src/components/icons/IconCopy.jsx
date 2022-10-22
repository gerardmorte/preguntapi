export default ({ className, color = 'currentColor' }) => {
  return (
    <svg
      fill='none'
      stroke={color}
      viewBox='0 0 24 24'
      className={className}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
      />
    </svg>
  )
}

import IconCopy from '@/components/icons/IconCopy'

const PreCode = ({ code = '', prefix = '$', copy = true }) => {
  const clickOnCopy = () => {
    navigator.clipboard.writeText(code)
  }

  return (
    <div className='mockup-code'>
      {copy && <p className='absolute right-3 top-4 cursor-pointer' onClick={clickOnCopy}><IconCopy /></p>}
      <pre data-prefix={prefix}>
        <code>{code}</code>
      </pre>
    </div>
  )
}

export default PreCode

import Link from '@/components/Link'
import IconGithub from '@/components/icons/IconGithub'

const Footer = () => {
  return (
    <footer className='container mx-auto'>
      <div className='grid-flow-col p-4 border-t-[1px] border-gray-200 mt-5'>
        <Link
          external
          to='https://github.com/gerardmorte/preguntapi'
          className='flex items-center  gap-2 text-decoration-none font-bold text-gray-700'
        >
          <IconGithub className='h-6 w-6' />
          Contribuye con nuestro proyecto en GitHub
        </Link>
      </div>
    </footer>
  )
}

export default Footer

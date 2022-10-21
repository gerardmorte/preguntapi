import Link from '@/components/Link'
import IconGithub from '@/components/icons/IconGithub'
import IconHamburguer from '@/components/icons/IconHamburguer'

const Navigation = () => {
  return (
    <>
      <div className='bg-sky-900'>
        <div className='container mx-auto items-center'>
          <div className='navbar'>
            <div className='navbar-start'>
              <div className='dropdown md:hiden lg:hidden'>
                <label tabIndex='0' className='btn btn-ghost  text-white'>
                  <IconHamburguer className='h-5 w-5' />
                </label>
                <ul
                  tabIndex='0'
                  className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-sky-900 rounded-box w-52'
                >
                  <li>
                    <Link
                      to='/'
                      className='hover:bg-white hover:text-black text-white no-underline'
                    >
                      Empieza un Quiz!
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/documentation'
                      className='hover:bg-white hover:text-black text-white no-underline'
                    >
                      Documentación
                    </Link>
                  </li>
                </ul>
              </div>
              <Link
                to='/'
                className='normal-case text-2xl cursor-pointer text-white no-underline'
              >
                preguntAPI
              </Link>
            </div>
            <div className='navbar-end hidden lg:flex'>
              <ul className='menu menu-horizontal p-0 m-0'>
                <li>
                  <Link
                    to='/'
                    className='hover:bg-white hover:text-black text-white no-underline'
                  >
                    Empieza un Quiz!
                  </Link>
                </li>
                <li>
                  <Link
                    to='/documentation'
                    className='hover:bg-white hover:text-black text-white no-underline'
                  >
                    Documentación
                  </Link>
                </li>
                <li>
                  <Link
                    external
                    to='https://github.com/gerardmorte/preguntapi'
                    className='hover:bg-white hover:fill-black border-0 gap-2 fill-white'
                  >
                    <IconGithub />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation

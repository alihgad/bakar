import { NavLink, useLocation } from 'react-router-dom'

const navigation = [
  { name: 'Card', href: '/', current: true },
  { name: 'Transactions', href: '/transactions', current: false },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  let path = useLocation().pathname
  console.log(path)
  
  return (
    <>

  
    <nav  className="bg-gray-800">
      <div className="mx-auto max-w-7xl  px-8">
        <div className="relative flex h-16 items-center justify-between">
          
          <div className="flex flex-1   items-stretch justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://media.licdn.com/dms/image/v2/D560BAQE7MNfcHquf9Q/company-logo_200_200/company-logo_200_200/0/1720097520819?e=1744848000&v=beta&t=g2RsG34uhXYlgTNphtBJbrybsRetL7pBP2Zcyw7OW9A"
                className="h-10 w-auto"
              />
            </div>
            <div className="ml-6 block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavLink
                  key={item.name}
                  to={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    path === item.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium',
                  )}
                  >
                    {item.name} 
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
         
        </div>
      </div>

     
    </nav>
    
    </>
  )
}
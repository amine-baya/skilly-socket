import dynamic from 'next/dynamic'
const Navbar = dynamic(() => import('./Navbar'))
function Layout({ children }) {
  return (
    <>
      <div>
        <Navbar />
        {children}
      </div>
    </>
  )
}

export default Layout

// import dynamic from 'next/dynamic'
// const Navbar = dynamic(() => import('./Navbar'))
// import { useRouter } from 'next/router'
// function Layout({ children }) {
//   const loc = useRouter()
//   return (
//     <>
//       <div>
//         {(loc.pathname === '/about' || loc.pathname === '/description') && (
//           <Navbar />
//         )}
//         {children}
//       </div>
//     </>
//   )
// }

// export default Layout

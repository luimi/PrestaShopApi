import { useState } from "react"
import { Link, Outlet } from "react-router-dom"


const pages = [
    { title: 'Home', path: '/' },
    { title: 'Customers', path: '/customers' },
    { title: 'Addresses', path: '/addresses' },
    { title: 'Carts', path: '/carts' },
    { title: 'Orders', path: '/orders' },
]

const Layout = () => {
    const [active, setActive] = useState('Home')
    return <>
        <header>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">PrestaShop - Api</span>
                </div>
            </nav>
        </header>
        <div>
            <ul className="nav nav-underline justify-content-center nav-fill">
                {pages.map((page, index) => {
                    return <li className="nav-item" key={index}>
                        <Link className={`nav-link ${page.title === active ? 'active' : ''}`} aria-current="page" to={page.path} onClick={() => setActive(page.title)}>{page.title}</Link>
                    </li>
                })}
            </ul>
            <div className="p-sm-2 p-md-3 p-lg-4 p-xl-5">
                <Outlet />
            </div>
        </div>
    </>
}

export default Layout
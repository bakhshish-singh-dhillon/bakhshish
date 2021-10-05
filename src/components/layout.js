import React from 'react'

import Header from './header'
import Footer from './footer'
import * as layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (
        <div>
            <div>
            <Header />
                {props.children}
            <Footer />
            </div>
        </div>
    )
}

export default Layout
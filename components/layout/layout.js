import Footer from "./footer"
import Navigation from "./navigation"

function Layout(props) {
    return (
        < >
            <Navigation />
            {props.children}
            <Footer />
        </>
    )
}

export default Layout
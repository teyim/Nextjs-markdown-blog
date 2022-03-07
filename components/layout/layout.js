import Footer from "./footer"
import Navigation from "./navigation"

function Layout(props) {
    return (
        <div className="flex flex-col justify-between h-screen">
            <Navigation />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout
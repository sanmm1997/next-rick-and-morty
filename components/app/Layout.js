import Header from './Header';
import Footer from "./Footer";
import Head from "./Head";
import Error from "next/error";

const Layout = ({ children, title, statusCode }) => {
    const showChildren = (statusCode === 200 || typeof statusCode === 'undefined');

    return (
        <>
            {(showChildren) ? (
                <>
                <Head title={title}/>
                <Header/>
                <section>
                    { children }
                </section>
                <Footer/>
                </>
            ) : (
                <Error statusCode={statusCode}/>
            )}
            <style jsx>
            {`
                section {
                  padding-bottom: 100px;
                }
            `}
            </style>
        </>
    )
};

export default React.memo(Layout);
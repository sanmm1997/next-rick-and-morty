import Header from './Header';
import Footer from "./Footer";
import Head from "./Head";

const Layout = ({ children, title }) => {
  return (
      <>
          <Head title={title}/>
          <Header/>
          <section>
              { children }
          </section>
          <Footer/>
      </>
  )
};

export default React.memo(Layout);
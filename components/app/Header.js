import { memo } from 'react';
import Link from "next/link";

import styles from './../styles/colors.module.scss';
import { fadeIn } from './../styles/animation.module.scss';

const Header = ({ title }) => {
    const classes = [
        fadeIn,
        styles.bgRickAndMorty,
        'navbar navbar-expand-md navbar-dark justify-content-between '
    ].join(' ');

    return (
        <>
          <header>
              <nav className={classes}>
                 <div>
                     <Link  href="/">
                         <a className="navbar-brand">
                             <img src="/logo.png" width="120" height="40"  alt=""/>
                         </a>
                     </Link>
                     <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                         <span className="navbar-toggler-icon"/>
                     </button>
                 </div>
                  <div className="collapse navbar-collapse" id="navbarCollapse">
                      <div className="navbar-nav">
                          <Link href="/">
                              <a className="nav-item nav-link text-white">
                                  <i className="fas fa-home"/>
                                  Home
                              </a>
                          </Link>
                          <Link href="/characters">
                              <a className="nav-item nav-link text-white">
                                  <i className="fas fa-user-tie"/>
                                  Characters
                              </a>
                          </Link>
                      </div>
                  </div>
              </nav>
          </header>
          <style jsx>
              {`
                  .navbar-collapse {
                    flex-grow: unset;
                    padding-right: 3%;
                    width: fit-content;
                  }
                  .navbar {
                    box-shadow: 1px 1px 6px #0000009e;
                  }
              `}
          </style>
        </>
    )
};

export default memo(Header);

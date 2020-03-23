import { memo } from 'react';

import styles from '../styles/colors.module.scss';

const Footer = () => {
  return (
      <footer className={["page-footer font-small blue mt-2", styles.bgRickAndMorty].join(" ")}>
          <div className="footer-copyright text-white text-center py-3">© 2020 Copyright:
              <a href="">&nbsp; Santiago Marulanda Molina</a>
          </div>
      </footer>
  )
};

export default memo(Footer);

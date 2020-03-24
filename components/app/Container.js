import { memo } from 'react';

const Container = ({ title, fluid, children }) => {
  return (
      <div className={`container${fluid === undefined ? '' : '-fluid'}`}>
          {
              title &&
              <div className="row  my-4">
                  <div className="col-12 text-center">
                      <h1>{ title }</h1>
                  </div>
              </div>
          }
          { children }
      </div>
  )
};

export default memo(Container);

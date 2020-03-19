import Link from "next/link";

const Header = ({ title }) => {
  return (
      <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
              <a href="#" className="navbar-brand">Rick and Morty API</a>
              <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                  <span className="navbar-toggler-icon"/>
              </button>

              <div className="collapse navbar-collapse" id="navbarCollapse">
                  <div className="navbar-nav">
                      <Link href="/">
                          <a className="nav-item nav-link">Home</a>
                      </Link>
                      <Link href="/characters">
                          <a className="nav-item nav-link">Characters</a>
                      </Link>
                      <Link href="/about">
                          <a className="nav-item nav-link">About me</a>
                      </Link>
                  </div>
                  <form className="form-inline ml-auto">
                      <input type="text" className="form-control mr-sm-2" placeholder="Search"/>
                          <button type="submit" className="btn btn-outline-light">Search</button>
                  </form>
              </div>
          </nav>
      </header>
  )
};

export default React.memo(Header);

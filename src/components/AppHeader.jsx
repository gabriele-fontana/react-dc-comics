export default function AppHeader(){


  return (
    <header> 
          <nav className="navbar navbar-expand-lg navbar-light bg-white">
              <div className="container-fluid" id=''>
                  <a className="navbar-brand" href="#">
                    <img src="./src/assets/img/dc-logo.png" alt="logo"/>
                  </a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                      aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarID">
                      <div className="navbar-nav ms-auto">
                          <a className="nav-link text-uppercase" aria-current="page" href="#">characters</a>
                          <a className="nav-link text-uppercase" aria-current="page" href="#">comics</a>
                          <a className="nav-link text-uppercase" aria-current="page" href="#">movies</a>
                          <a className="nav-link text-uppercase" aria-current="page" href="#">tv</a>
                          <a className="nav-link text-uppercase" aria-current="page" href="#">games</a>
                          <a className="nav-link text-uppercase" aria-current="page" href="#">collectibles</a>
                          <a className="nav-link text-uppercase" aria-current="page" href="#">videos</a>
                          <a className="nav-link text-uppercase" aria-current="page" href="#">fans</a>
                          <a className="nav-link text-uppercase" aria-current="page" href="#">news</a>
                          <a className="nav-link text-uppercase" aria-current="page" href="#">shop</a>
                          
                      </div>
                  </div>
              </div>
          </nav>
    </header>
  )
}
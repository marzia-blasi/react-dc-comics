import navbar from "./navbar"


export default function Header(){

    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="./src/assets/img/dc-logo.png" alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
        
              {navbar.map(({ id, title}) => {
             return <li className="nav-item" key={id}>
               <a className="nav-link active" aria-current="page" href="#">{title}</a>
              </li>
           })}
      </ul>
      
    </div>
  </div>
</nav>
    )


}

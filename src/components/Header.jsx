import navbar from "./db/navbar";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="./src/assets/img/dc-logo.png" alt="" />
        </a>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navbar.map(({ id, title }) => {
              return (
                <li className="nav-item" key={id}>
                  <a className="nav-link active" aria-current="page" href="#">
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

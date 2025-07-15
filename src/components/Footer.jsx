import navbar from "./db/navbar";

//CAMBIARE TUTTE LE CLASSI APPENA FUNZIONA COME VUOI!

export default function Footer() {
  return (
    <footer>
      <ul className="nav flex-column text-center">
        {navbar.map(({ id, title }) => {
          if (id === 10) return false;
          return (
            <li className="nav-item" key={id}>
              <a className="nav-link text-white">{title}</a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}

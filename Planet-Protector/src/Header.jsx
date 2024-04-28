import "./header.css";
export default function Header() {
  return (
    <>
      <header className="header">
        <h1>Planet Protectors</h1>
        <nav>
          <a className="pp-nav-titles" href="./index.html">
            Home
          </a>
          <a className="pp-nav-titles">About</a>
          <a className="pp-nav-titles">Ticket</a>
          <a className="pp-nav-titles">Rocket</a>
          <a className="pp-nav-titles" href="./space-gallery.html">
            Space Gallery
          </a>
        </nav>
      </header>
    </>
  );
}

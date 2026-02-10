import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <h1>Random Cat Facts</h1>
      <div className="links"><a href="https://catfact.ninja/">API docs</a> | <a href="https://github.com/kaitbrew">Github</a></div>
    </div>
  );
}

export default Navbar;

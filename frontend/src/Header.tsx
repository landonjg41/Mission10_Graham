import logo from './logo.png';

function Header(props: any) {
  return (
    <header className="row navbar navbar-dark bg-dark">
      <div className="col-4">
        <img src={logo} className="logo" alt="logo" width="200" />
      </div>
      <div className="col subtitle">
        <h2 className="text-white">{props.title}</h2>
        <p className="text-white">This website is going to list the information for Barbara & David
        Fournier and the rest of the Bowling crew from the Bowling League Database.</p>
      </div>
    </header>
  );
}

export default Header;

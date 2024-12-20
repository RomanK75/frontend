import getImageUrl from '../../utils/imgImport';

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-dark bg-dark ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          fullstack developer
        </a>
        <div className="d-flex justify-content-between ">
          <a href="https://web.telegram.org/k/#@mytth_75" target="_blank" className="nav-link mx-2">
            <img
              src={getImageUrl('telegram.png')}
              className="rounded mx-auto d-block"
              style={{ width: '25px' }}
            />
            <h6>@mytth_75</h6>
          </a>
          <a
            id="whatsapp-link"
            href="https://wa.me/79138953518"
            target="_blank"
            className="nav-link mx-2"
          >
            <img
              src={getImageUrl('whatsapp.png')}
              className="rounded mx-auto d-block"
              style={{ width: '25px' }}
            />
            <h6>Whatsapp</h6>
          </a>
          <a href="https://github.com/RomanK75" target="_blank" className="nav-link mx-2">
            <img
              src={getImageUrl('github-logo.png')}
              className="rounded mx-auto d-block"
              style={{ width: '25px' }}
            />
            <h6>Github</h6>
          </a>
          <a
            href="https://novosibirsk.hh.ru/resume/5b946b5aff0c8cbaf70039ed1f7158655a5452"
            target="_blank"
            className="nav-link mx-2"
          >
            <img
              src={getImageUrl('resume.png')}
              className="rounded mx-auto d-block"
              style={{ width: '25px' }}
            />
            <h6>hh.ru</h6>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

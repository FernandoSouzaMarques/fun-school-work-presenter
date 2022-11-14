export const Header = (): JSX.Element => {
  return (
    <header className="p-4 flex space-x-10">
      <a href="/">
        <img className="w-32" src="/assets/apresentaflix.svg" alt="" />
      </a>

      <nav>
        <ul className="flex items-center justify-center space-x-4 text-sm">
          <li>
            <a href="/" className="font-bold text-white">Início</a>
          </li>
          <li>
            <a href="/" className="text-off-white">Filmes</a>
          </li>
          <li>
            <a href="/" className="text-off-white">Séries</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

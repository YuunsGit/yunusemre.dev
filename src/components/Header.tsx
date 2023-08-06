import { CodeBracketSquareIcon } from "@heroicons/react/24/solid";

const Header = ({ font }: { font: string }) => {
  return (
    <header className={`${font} font-sans`}>
      <nav className="mx-auto my-4 flex h-16 max-w-6xl px-0 lg:px-12 select-none flex-col items-center justify-center sm:h-32 lg:my-0 lg:h-24 lg:flex-row lg:justify-between">
        <div className="mx-auto flex h-full items-center justify-start gap-x-2 text-3xl font-extrabold text-primary-400 lg:ml-0">
          <CodeBracketSquareIcon className="h-10 w-10" />
          <span data-nosnippet>yuuns.tech</span>
        </div>
        <ul className="mx-auto hidden h-full items-center justify-center gap-x-8 font-semibold text-primary-300 sm:flex lg:mr-0">
          <li>
            <a
                className="rounded-lg bg-stone-200 px-4 py-2 text-primary-400 duration-200 hover:bg-stone-300 hover:duration-200"
                rel="noopener noreferrer"
                href="https://blog.yuuns.tech/"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className="rounded-lg bg-stone-200 px-4 py-2 text-primary-400 duration-200 hover:bg-stone-300 hover:duration-200"
              rel="noopener noreferrer"
              target="_blank"
              href="/Resume.pdf"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

const Footer = ({ font }: { font: string }) => {
  return (
    <footer className={`${font} bg-primary-300 py-6 text-center font-sans`}>
      <div className="mx-auto w-9/12">
        <a
          href="https://github.com/YuunsGit/yuuns-tech"
          rel="noreferrer"
          target="_blank"
          className="relative text-sm text-white duration-100 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-secondary after:duration-150 after:content-[''] sm:text-base sm:hover:after:scale-x-100"
        >
          <code>
            Illustrated, Designed & Built by{" "}
            <span className="whitespace-nowrap">Yunus Emre Kepenek</span>
          </code>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

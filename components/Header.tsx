
export default function Header() {
  return (
    <header className="p-2 w-full flex justify-between items-center font-mono border z-30 border-color-primary rounded fixed top-0 backdrop-blur-lg bg-color-background bg-opacity-50">
      <div className="inline-flex">
        <a href="/" className="px-1 flex items-center gap-2 hover:scale-125 transition-all ease duration-300 hover:text-color-accent">
          <img src="/coobyk.svg" alt="Logo" className="h-10" />
        </a>
        <a href="/" className="px-1 flex items-center gap-2 hover:scale-125 transition-all ease duration-300 hover:text-color-accent">
          <h3 className="text-color-primary font-bold">Coobyk</h3>
        </a>
      </div>
      <ul className="flex gap-4">
        <li className="hover:scale-125 transition-transform ease duration-300">
          <a className="text-color-accent p-1 rounded border border-color-primary hover:text-color-text hover:border-color-accent transition-all duration-300 ease hover:shadow hover:shadow-color-accent backdrop-blur-lg bg-color-background bg-opacity-50" href="#portfolio">Portfolio</a>
        </li>
        <li className="hover:scale-125 transition-transform ease duration-300">
          <a className="text-color-accent p-1 rounded border border-color-primary hover:text-color-text hover:border-color-accent transition-all duration-300 ease hover:shadow hover:shadow-color-accent backdrop-blur-lg bg-color-background bg-opacity-50" href="/blog">Blog</a>
        </li>
        <li className="hover:scale-125 transition-transform ease duration-300">
          <a className="text-color-accent p-1 rounded border border-color-primary hover:text-color-text hover:border-color-accent transition-all duration-300 ease hover:shadow hover:shadow-color-accent backdrop-blur-lg bg-color-background bg-opacity-50" href="#projects">Projects</a>
        </li>
      </ul>
      <ul className="flex gap-4">
        <li className="hover:scale-125 transition-transform ease duration-300">
          <a className="text-color-accent p-1 rounded border border-color-primary hover:text-color-text hover:border-color-accent transition-all duration-300 ease hover:shadow hover:shadow-color-accent backdrop-blur-lg bg-color-background bg-opacity-50" href="https://t.me/Coobyk_Society" target="_blank" rel="noopener noreferrer">Telegram</a>
        </li>
        <li className="hover:scale-125 transition-transform ease duration-300">
          <a className="text-color-accent p-1 rounded border border-color-primary hover:text-color-text hover:border-color-accent transition-all duration-300 ease hover:shadow hover:shadow-color-accent backdrop-blur-lg bg-color-background bg-opacity-50 mr-2" href="https://github.com/Coobyk" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
      </ul>
    </header>
  )
}

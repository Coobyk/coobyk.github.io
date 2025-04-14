import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-color-background text-color-text">
      <header className="p-2 w-full flex justify-between items-center font-mono border z-30 border-color-primary rounded fixed top-0 backdrop-blur-lg bg-color-background bg-opacity-50">
        <div className="inline-flex">
          <Link href="/" className="px-1 flex items-center gap-2 hover:scale-125 transition-all ease duration-300 hover:text-color-accent">
            <Image src="/images/coobyk.svg" alt="Logo" width={40} height={40} className="h-10" />
          </Link>
          <Link href="/" className="px-1 flex items-center gap-2 hover:scale-125 transition-all ease duration-300 hover:text-color-accent">
            <h3 className="text-color-primary font-bold">Coobyk</h3>
          </Link>
        </div>
        <ul className="flex gap-4">
          <li className="hover:scale-125 transition-transform ease duration-300">
            <Link href="/portfolio" className="text-color-accent p-1 rounded border border-color-primary hover:text-color-text hover:border-color-accent transition-all duration-300 ease hover:shadow hover:shadow-color-accent backdrop-blur-lg bg-color-background bg-opacity-50">
              Portfolio
            </Link>
          </li>
          <li className="hover:scale-125 transition-transform ease duration-300">
            <Link href="/blog" className="text-color-accent p-1 rounded border border-color-primary hover:text-color-text hover:border-color-accent transition-all duration-300 ease hover:shadow hover:shadow-color-accent backdrop-blur-lg bg-color-background bg-opacity-50">
              Blog
            </Link>
          </li>
          <li className="hover:scale-125 transition-transform ease duration-300">
            <Link href="#projects" className="text-color-accent p-1 rounded border border-color-primary hover:text-color-text hover:border-color-accent transition-all duration-300 ease hover:shadow hover:shadow-color-accent backdrop-blur-lg bg-color-background bg-opacity-50">
              Projects
            </Link>
          </li>
        </ul>
        <ul className="flex gap-4">
          <li className="hover:scale-125 transition-transform ease duration-300">
            <a href="https://t.me/Coobyk_Society" target="_blank" className="text-color-accent p-1 rounded border border-color-primary hover:text-color-text hover:border-color-accent transition-all duration-300 ease hover:shadow hover:shadow-color-accent backdrop-blur-lg bg-color-background bg-opacity-50">
              Telegram
            </a>
          </li>
          <li className="hover:scale-125 transition-transform ease duration-300">
            <a href="https://github.com/Coobyk" target="_blank" className="text-color-accent p-1 rounded border border-color-primary hover:text-color-text hover:border-color-accent transition-all duration-300 ease hover:shadow hover:shadow-color-accent backdrop-blur-lg bg-color-background bg-opacity-50 mr-2">
              GitHub
            </a>
          </li>
        </ul>
      </header>

      <main className="p-8 justify-center align-center flex flex-col gap-5">
        <div className="inline-flex gap-10 items-center h-fit self-center mt-20">
          <Image src="/images/coobyk.svg" alt="Profile Picture, a big cube" width={384} height={384} className="max-h-96 hover:scale-125 transition-all ease duration-300 z-20 shadow-2xl" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }} />
          <div className="text-center mt-4">
            <div className="flex justify-center font-mono text-color-primary text-9xl font-bold">
              {"Coobyk".split("").map((letter) => (
                <span key={letter} className="hover:scale-150 transition-all ease origin-bottom hover:text-shadow text-shadow-color-primary text-shadow-blur">
                  {letter}
                </span>
              ))}
            </div>
            <h3 className="text-color-secondary transition-all font-serif text-3xl mt-2 hover:text-shadow text-shadow-color-secondary text-shadow-blur">
              &ldquo;I do what I want to do&rdquo;
            </h3>
          </div>
        </div>

        <section className="mt-8 self-center max-w-[66%] bg-opacity-10 bg-color-secondary rounded-3xl p-7">
          <h1 className="text-3xl font-bold font-mono text-color-primary">About Me</h1>
          <ul className="list-[square] mt-4 space-y-2 pl-3">
            <li>I am <span className="font-semibold font-mono text-color-primary">Coobyk</span>, a <span className="font-mono text-[#00ff00]">developer</span>, <span className="font-serif text-xl text-[#ffffff]">artist</span>, gamer, ...</li>
            <li>I know some Python, and I want to learn Rust</li>
            <li>I use Arch, btw</li>
            <li>I use a lot of different ✨AI✨ services</li>
            <li>I play Minecraft, osu!, and Mindustry</li>
            <li>I use Pixelorama to create Minecraft texture packs</li>
            <li>I <em>currently</em> speak 4 languages</li>
            <li>I am <em>already</em> learning another one</li>
            <li>I have two cats</li>
            <li>I love dark humor)</li>
          </ul>
        </section>

        <section className="mt-8 self-center max-w-[66%] bg-opacity-10 bg-color-secondary rounded-3xl p-7">
          <h1 className="text-3xl font-bold font-mono text-color-primary">Portfolio</h1>
          <ul className="list-[square] mt-4 space-y-4 pl-3">
            <li>
              <h3 className="text-xl font-semibold text-color-secondary">This Website</h3>
              <p>I made this website. It was not too easy, but I managed to make it look decent. There's still a lot to do, but it's a great start.</p>
            </li>
          </ul>
        </section>

        <section className="mt-8 self-center max-w-[66%] bg-opacity-10 bg-color-secondary rounded-3xl p-7">
          <div className="inline-flex justify-between align-bottom">
            <h1 className="text-3xl font-bold font-mono text-color-primary">Blog</h1>
            <Link href="/blog" className="block align-baseline justify-center gap-2 border">
              Open full blog
              <span className="material-icons-outlined">open_in_new</span>
            </Link>
          </div>
          <ul className="list-[square] mt-4 space-y-4 pl-3">
            <li>
              <h3 className="text-xl font-semibold font-mono text-color-secondary">15.01.2025</h3>
              <p>Today, I fixed the GitHub Action that redeployed my site to Pages. I needed to go to the repository's settings, then select "GitHub Actions" as the build source under "Pages". Thanks to StackOverflow for this fix. This blog will be expanded to its own page soon, but for now, this is all there is. I plan to use the blog as some form of diary or notification service.</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold font-mono text-color-secondary">16.01.2025</h3>
              <p>Today, my new keyboard was finally shipped to me. Now I have a full 104-key US keyboard. It has RGB keys and I really like this effect. It makes coding and gaming a lot more fun. I only need to get used to the new keys layout, and since I usually type blindly, it might take a while or two.</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold font-mono text-color-secondary">24.01.2025</h3>
              <p>Today, I finally changed the website to use TailwindCSS. I think it looks better now. I really like the use of classes for styling. It's so intuitive and easy to use.</p>
            </li>
          </ul>
        </section>

        <section className="mt-8 self-center max-w-[66%] bg-opacity-10 bg-color-secondary rounded-3xl p-7">
          <h1 className="text-3xl font-bold font-mono text-color-primary">Projects</h1>
          <ul className="list-[square] mt-4 space-y-4 pl-3">
            <li>
              <h3 className="text-xl font-semibold font-mono text-color-secondary">
                <a href="https://github.com/Coobyk/CubyMark" className="text-color-accent">CubyMark</a>
              </h3>
              <p>A Minecraft texture pack that I made. It's not too good, but it's a start.</p>
            </li>
          </ul>
        </section>
      </main>

      <footer className="inline-flex items-center justify-between w-full p-4 border-t border-color-primary border-dashed mt-10">
        <div className="text-left">
          <p>Made with ❤️ by Coobyk</p>
          <p>Copyright &copy; Coobyk (2024–2025)</p>
        </div>
      </footer>
    </div>
  );
}

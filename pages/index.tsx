import Head from 'next/head'
import Layout from '../components/Layout'
import Section from '../components/Section'

export default function Home() {
  return (
    <>
      <Head>
        <title>Coobyk</title>
        <meta name="description" content="Website of Coobyk" />
        <link rel="icon" href="/coobyk.svg" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
        <link rel="stylesheet" href="https://lalten.github.io/lmweb/style/latinmodern-roman.css" type="text/css" />
      </Head>
      <body className="bg-color-background text-color-text">
        <Layout>
          <main className="p-8 justify-center align-center flex flex-col gap-5">
            <div className="inline-flex gap-10 items-center h-fit self-center mt-20">
              <img src="/coobyk.svg" alt="Profile Picture, a big cube" className="max-h-96 hover:scale-125 transition-all ease duration-300 z-20 shadow-2xl" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}} />
              <div className="text-center mt-4">
                <div className="flex justify-center font-mono text-color-primary text-9xl font-bold">
                  {[...'Coobyk'].map((char, i) => (
                    <span key={i} className="hover:scale-150 transition-all ease origin-bottom hover:text-shadow text-shadow-color-primary text-shadow-blur">{char}</span>
                  ))}
                </div>
                <h3 className="text-color-secondary transition-all font-serif text-3xl mt-2 hover:text-shadow text-shadow-color-secondary text-shadow-blur-5">“I do what I want to do”</h3>
              </div>
            </div>
            <Section id="about-me" title="About Me">
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
            </Section>
            <Section id="wall-of-honor" title="Wall of Honor">
              <ul className="list-[square] mt-4 space-y-4 pl-3">
                <li>
                  <h3 style={{background: 'linear-gradient(90deg, #7b5fa3, #FFB86C)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', display: 'inline'}} className="font-mono font-semibold text-xl">
                    <a href="https://www.eternalhosting.cloud/" target="_blank" rel="noopener noreferrer">Eternal Hosting</a>
                  </h3>
                  <p>Thanks to Eternal Hosting for providing me and lots of other people with free high-quality Minecraft servers.</p>
                </li>
              </ul>
            </Section>
            <Section id="portfolio" title="Portfolio">
              <ul className="list-[square] mt-4 space-y-4 pl-3">
                <li>
                  <h3 className="text-xl font-semibold font-mono text-color-secondary">This Website</h3>
                  <p>I made this website. It was not too easy, but I managed to make it look decent. There's still a lot to do, but it's a great start.</p>
                </li>
              </ul>
            </Section>
            <Section id="blog-preview" title="Blog">
              <div className="inline-flex justify-between align-bottom">
                {/* fix this link !!! */}
                <a className="block align-baseline justify-center gap-2 border" href="/blog">Open full blog <small>yes i know this button is ugly</small><i className="material-icons-outlined">open_in_new</i></a>
              </div>
              <ul className="list-[square] mt-4 space-y-4 pl-3">
                <li>
                  <h3 className="text-xl font-semibold font-mono text-color-secondary">15.05.2025</h3>
                  <p>Today, I decided that my new phone is going to be a Nothing Phone (3a) with 256GB storage and 12GB RAM. I want the black one. I'm not sure about the case though, I don't want it to turn yellow over time but I still want a transparent one in order to see the glass surface on the back. Do I even need one...?</p>
                </li>
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
                <li>
                  <h3 className="text-xl font-semibold font-mono text-color-secondary">27.01.2025</h3>
                  <p>Today, I wanted to upgrade to TailwindCSS 4. But this change affected the GitHub Action and I needed to rewrite it to work with the new version. However, the TailwindCSS executable didn't work neither on my machine nor on GitHub Actions, so I spent hours trying to fix this and then gave up. This website will stay on TailwindCSS 3 for now. I will try again if I get to it.</p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold font-mono text-color-secondary">04.02.2025</h3>
                  <p>Today, I finally made the blog page. Well, it's not a blog page, it's rather a placeholder for Avocado, my own blog generator that I will be working on.</p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold font-mono text-color-secondary">22.02.2025</h3>
                  <p>I hope I will finish working on CubyMark. I actually really like all the features I add and all the styling options and configuration.</p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold font-mono text-color-secondary">01.03.2025</h3>
                  <p>Today, I created a Telegram Supergroup for my community. If you want, you can join it. It's called "Coobyk Society". I want it to be a place for all people who are interested in my work and projects. If you want to chat with me, just join the group.</p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold font-mono text-color-secondary">07.03.2025</h3>
                  <p>I'm tired of Hyprland. As much as I love it and as beautiful it looks, I cannot use it as my daily-driver. I spend too much time configuring things that work out-of-the-box on any desktop environment. I'm switching to KDE plasma as soon as I finish backing up all my files in order to not lose anything. I had some issues like screen tearing, freezes, some menus displaying incorrectly. When I left an app in fullscreen mode and went to another workspace, the whole system froze as soon as I went back to the full screen program.</p>
                </li>
              </ul>
            </Section>
            <Section id="projects" title="Projects">
              <ul className="list-[square] mt-4 space-y-4 pl-3">
                <li>
                  <h3 className="text-xl font-semibold font-mono text-color-secondary"><a href="https://github.com/Coobyk/CubyMark" className="text-color-accent">CubyMark</a></h3>
                  <p>My own Markup Language, somewhat similar to Markdown, but with more features, including color, styling, fonts, decorations, lists, images, tables, etc. Basically HTML but easier. Might aswell create a program to compile to HTML.</p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold font-mono text-color-secondary">Avocado</h3>
                  <p>Blog page generator from CubyMark files. I want to write it in Rust, but I will write in Python first.</p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold font-mono text-color-secondary">Guacamole</h3>
                  <p>Presentation page generator from CubyMark files. I want to write it in Rust, but I will write in Python first.</p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold font-mono text-color-secondary">Asparagus</h3>
                  <p>Project page generator from CubyMark files. I want to write it in Rust, but I will write in Python first.</p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold font-mono text-color-secondary">Kviska</h3>
                  <p>My own compiled programming language. I don't know yet. I want to write the compiler in Rust, but for that I will actually need to learn Rust. Syntax will be somewhat similar to C, with brackets {} used instead of indentation like in Python.</p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold font-mono text-color-secondary">⅀IGMA</h3>
                  <p>My interpreted meme-inspired programming language. Will be very simple, for sure. Mainly want to create it for fun. The interpreter will be written in Rust. But at a later point, when I finish Avocado.</p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold font-mono text-color-secondary">Cubyr</h3>
                  <p>A Minecraft clone written in Rust with my own features and updates, and Minecraft texture pack support.</p>
                </li>
              </ul>
            </Section>
          </main>
        </Layout>
      </body>
    </>
  )
}

import Image from "next/image";

export default function Blog() {
  return (
    <div className="bg-color-background text-color-text p-8">
      <h1 className="text-3xl font-bold font-mono text-color-primary mb-8">Blog</h1>
      <div className="space-y-8">
        <article className="bg-opacity-10 bg-color-secondary rounded-3xl p-6">
          <time className="text-sm text-color-secondary mb-2">15.01.2025</time>
          <h2 className="text-xl font-semibold text-color-primary mb-4">GitHub Actions Fix</h2>
          <p>Today, I fixed the GitHub Action that redeployed my site to Pages. I needed to go to the repository's settings, then select "GitHub Actions" as the build source under "Pages". Thanks to StackOverflow for this fix. This blog will be expanded to its own page soon, but for now, this is all there is. I plan to use the blog as some form of diary or notification service.</p>
        </article>
        <article className="bg-opacity-10 bg-color-secondary rounded-3xl p-6">
          <time className="text-sm text-color-secondary mb-2">16.01.2025</time>
          <h2 className="text-xl font-semibold text-color-primary mb-4">New Keyboard</h2>
          <p>Today, my new keyboard was finally shipped to me. Now I have a full 104-key US keyboard. It has RGB keys and I really like this effect. It makes coding and gaming a lot more fun. I only need to get used to the new keys layout, and since I usually type blindly, it might take a while or two.</p>
        </article>
        <article className="bg-opacity-10 bg-color-secondary rounded-3xl p-6">
          <time className="text-sm text-color-secondary mb-2">24.01.2025</time>
          <h2 className="text-xl font-semibold text-color-primary mb-4">TailwindCSS Migration</h2>
          <p>Today, I finally changed the website to use TailwindCSS. I think it looks better now. I really like the use of classes for styling. It's so intuitive and easy to use.</p>
        </article>
      </div>
    </div>
  );
}

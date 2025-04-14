import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="bg-color-background text-color-text p-8">
      <h1 className="text-3xl font-bold font-mono text-color-primary mb-8">Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-opacity-10 bg-color-secondary rounded-3xl p-6">
          <h2 className="text-2xl font-bold text-color-primary mb-4">This Website</h2>
          <p className="mb-4">I made this website. It was not too easy, but I managed to make it look decent. There's still a lot to do, but it's a great start.</p>
          <div className="flex justify-end">
            <a href="/" className="text-color-accent hover:underline">View Project</a>
          </div>
        </div>
        {/* Add more portfolio items as needed */}
      </div>
    </div>
  );
}

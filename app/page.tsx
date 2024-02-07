import Link from "next/link";
import Socials from "./components/contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div>

      <div className="text-center text-7xl font-bold lg:max-w-2xl lg:w-full lg:mb-0">
        Megan Ju
      </div>

      <div className="my-16 text-center ">
        <h2 className={`m-0 text-md opacity-50`}>
          Software developer hard at work
        </h2>
      </div>

      <div>
        <Socials />
      </div>

      <div className="mb-32 grid text-center lg:max-w-2xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <Link
          href="/experience"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Experience{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn more about what I've accomplished!
          </p>
        </Link>

        <Link
          href="/projects"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Projects{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about projects I've worked on!
          </p>
        </Link>
      </div>
    </main>
  );
}

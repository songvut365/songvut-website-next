import Image from "next/image";

export default function About() {
  const about = {
    title: "Hello, 世界",
    name: "Songvut Nakrong",
    position: "Backend Engineer",
    summary:
      "Hi! I'm 25 years old, I have been a Backend Engineer for 1 year 6 months and currently work at Arise by INFINITAS. ",
    subSummary:
      "I am skilled in Golang, Typescript, React and interested in Rust.",
  };

  return (
    <div
      id="about"
      className="flex w-full bg-white select-none drop-shadow-sm pt-20 pb-10 xl:pt-20 xl:pb-20"
    >
      <div className="w-1/3 sm:w-1/4 lg:w-1/4 xl:w-1/6 xl:h-[50vh] flex items-start z-20 slide-in-left">
        <Image
          src="/not.jpg"
          alt="profile"
          width={500}
          height={500}
          placeholder="empty"
          priority={true}
          className="h-full object-cover rounded-r-3xl drop-shadow-md shadow-2xl hover:cursor-pointer hover:drop-shadow-2xl z-20"
        />
      </div>

      <div className="w-2/3 px-5 md:pl-10 sm:px-5 lg:pl-20 xl:pl-60 flex flex-col justify-center">
        <h1
          className="bg-gradient-to-l from-blue-500 to-blue-800 text-gradient-b 
                     text-4xl font-medium text-transparent bg-clip-text w-fit hover:cursor-pointer hover:drop-shadow-xl slide-in-right
                     sm:text-7xl lg:text-8xl xl:text-9xl sm:mb-6"
        >
          {about.title}
        </h1>

        <h2
          className="text-xl font-medium hover:cursor-pointer hover:drop-shadow-xl slide-in-left 
                     sm:text-4xl lg:text-6xl xl:text-7xl"
        >
          {about.name}
        </h2>

        <h3
          className="text-xl font-medium text-zinc-900 hover:cursor-pointer hover:drop-shadow-xl slide-in-right 
                     sm:text-3xl lg:text-5xl xl:text-6xl sm:mb-6"
        >
          {about.position}
        </h3>

        <p className="text-xs hover:cursor-pointer hover:drop-shadow-xl slide-in-left sm:text-lg lg:w-11/12">
          {about.summary}
          <span className="hidden sm:inline">{about.subSummary}</span>
        </p>
      </div>
    </div>
  );
}

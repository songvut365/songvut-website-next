import React from "react";

export default function Experience() {
  const experiences = [
    {
      date: "Aug 2022 - Present",
      exp: "1 year 6 months",
      title: "Backend Engineer",
      location: "Arise by INFINITAS - Bangkok, Thailand",
      details: [],
    },
    {
      date: "Aug 2019 - May 2022",
      title: "Bachelor of Engineering, Computer Engineering",
      location: "King Mongkut's Institute of Technology Ladkrabang",
      details: ["GPA: 3.55"],
    },
    {
      date: "May 2016 - Mar 2018",
      title: "High Vocational Certificate, Computer Technology",
      location: "Hatyai Technical College",
      details: ["GPA: 3.59"],
    },
  ];

  return (
    <div
      id="experience"
      className="mx-5 xl:w-3/5 xl:mx-auto bg-white p-5 md:p-8 lg:p-10 rounded-lg mb-5 drop-shadow-sm"
    >
      <h1 className="text-2xl font-semibold text-blue-500 mb-5">Experience</h1>

      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center">
          {experiences.map((event) => (
            <div key={event.title} className="flex event">
              <div className="lef-box text-right flex flex-col items-end">
                <p className="w-48 text-right font-semibold">{event.date}</p>
                <p className="w-36 text-right">{event.exp}</p>
              </div>

              <div className="middle-box px-3 flex flex-col items-center justify-center">
                <p className="text-zinc-400 font-semibold text-lg m-0 p-0 pb-1 cursor-default select-none leading-none inline-block">
                  o
                </p>
                <div className="h-full w-0.5 bg-zinc-400"></div>
              </div>

              <div className="right-box pb-8">
                <p className="font-semibold">{event.title}</p>
                <p className="">{event.location}</p>
                {event.details.map((detail) => (
                  <p key={detail}>{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

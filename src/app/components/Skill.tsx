import Image from "next/image";
import React from "react";

export default function Skill() {
  const skills = [
    {
      name: "Programming Language",
      lists: [
        {
          index: 1,
          name: "Go",
          image: "/skill/go.webp",
        },
        {
          index: 2,
          name: "Typescript",
          image: "/skill/typescript.webp",
        },
        {
          index: 3,
          name: "Javascript",
          image: "/skill/javascript.webp",
        },
        {
          index: 4,
          name: "Rust",
          image: "/skill/rust.webp",
        },
      ],
    },
    {
      name: "Backend",
      lists: [
        {
          index: 1,
          name: "Echo",
          image: "/skill/echo.webp",
        },
        {
          index: 2,
          name: "Kafka",
          image: "/skill/kafka.webp",
        },
        {
          index: 3,
          name: "gRPC",
          image: "/skill/grpc.webp",
        },
        {
          index: 4,
          name: "Nest.js",
          image: "/skill/nest.webp",
        },
      ],
    },
    {
      name: "Frontend",
      lists: [
        {
          index: 1,
          name: "React",
          image: "/skill/react.webp",
        },
        {
          index: 2,
          name: "Tailwind",
          image: "/skill/tailwind.webp",
        },
        {
          index: 3,
          name: "Vue",
          image: "/skill/vue.webp",
        },
        {
          index: 4,
          name: "Flutter",
          image: "/skill/flutter.webp",
        },
      ],
    },
    {
      name: "Database",
      lists: [
        {
          index: 1,
          name: "PostgreSQL",
          image: "/skill/postgres.webp",
        },
        {
          index: 2,
          name: "Redis",
          image: "/skill/redis.webp",
        },
        {
          index: 3,
          name: "MongoDB",
          image: "/skill/mongodb.webp",
        },
        {
          index: 4,
          name: "Firebase",
          image: "/skill/firebase.webp",
        },
        {
          index: 5,
          name: "Elasticsearch",
          image: "/skill/elastic.webp",
        },
      ],
    },
    {
      name: "Tools",
      lists: [
        {
          index: 1,
          name: "Docker",
          image: "/skill/docker.webp",
        },
        {
          index: 2,
          name: "Kubernetes",
          image: "/skill/kube.webp",
        },
        {
          index: 3,
          name: "Helm Charts",
          image: "/skill/helm.webp",
        },
        {
          index: 4,
          name: "Kustomize",
          image: "/skill/kustomize.webp",
        },
        {
          index: 4,
          name: "ArgoCD",
          image: "/skill/argo.webp",
        },
      ],
    },
  ];

  return (
    <div
      id="skill"
      className="mx-5 xl:w-3/5 xl:mx-auto bg-white p-5 md:p-8 lg:p-10 rounded-lg mb-10 drop-shadow-sm"
    >
      <h1 className="text-2xl font-semibold text-blue-500 mb-5">Skill</h1>

      <div className="grid gap-5 md:gap-8 lg:gap-10 md:grid-cols-2 lg:grid-cols-2">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="border-2 border-zinc-300 p-4 rounded-lg bg-white hover:drop-shadow-md hover:cursor-pointer"
          >
            <h1 className="text-lg font-semibold mb-5">{skill.name}</h1>

            <div className="gap-6 grid grid-cols-4 md:grid-cols-3 lg:grid-cols-5 place-items-center justify-center items-start">
              {skill.lists.map((list) => (
                <div
                  key={list.name}
                  className="flex flex-col justify-center items-center w-fit hover:cursor-pointer hover:drop-shadow-md"
                >
                  <Image
                    className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain mb-2"
                    width={96}
                    height={96}
                    src={list.image}
                    alt={list.name}
                    placeholder="empty"
                    priority={true}
                  />

                  <h1 className="text-xs font-semibold text-center">
                    {list.name}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

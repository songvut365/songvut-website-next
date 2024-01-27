"use client";
import React from "react";

const Navbar = () => {
  const menus = [
    {
      name: "About",
      handler: () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      },
    },
    {
      name: "Skill",
      handler: () => {
        scrollToElementId("skill");
      },
    },
    {
      name: "Experience",
      handler: () => {
        scrollToElementId("experience");
      },
    },
    {
      name: "Project",
      handler: () => {
        scrollToElementId("project");
      },
    },
    {
      name: "Blog",
      handler: () => {
        scrollToElementId("blog");
      },
    },
  ];

  const scrollToElementId = (elementId: string) => {
    const element = document.getElementById(elementId);

    if (element) {
      const rect = element.getBoundingClientRect();

      if (rect) {
        console.log("has rect");

        window.scrollTo({
          top: rect.top + window.scrollY - 50,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div
      id="navbar"
      className="fixed top-0 w-full flex z-10 drop-shadow-md xl:justify-end"
    >
      <div
        className="w-full flex bg-zinc-800 text-white bg-opacity-90 backdrop-blur-lg justify-center
      xl:w-fit xl:rounded-bl-lg
      "
      >
        {menus.map((menu, index) => (
          <p
            key={menu.name}
            className={`py-3 px-4 lg:px-5 hover:cursor-pointer hover:text-zinc-300 text-sm hover:bg-zinc-900 active:bg-zinc-950 select-none ${
              index == 0 ? "lg:hover:rounded-bl-lg" : ""
            }`}
            onClick={menu.handler}
          >
            {menu.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

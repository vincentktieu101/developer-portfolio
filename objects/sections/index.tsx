interface SectionJson {
  name: "home" | "about" | "experience" | "projects" | "contact";
  path: string;
}

const sections: SectionJson[] = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/#about",
  },
  {
    name: "experience",
    path: "/#experience",
  },
  {
    name: "projects",
    path: "/#projects",
  },
  {
    name: "contact",
    path: "/#contact",
  },
];

export default sections;

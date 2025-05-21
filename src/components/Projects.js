const projects = [
    {
      name: "Web Development",
      description: "A modern web application that allows the users to access the internet and trade. The main function of this application was to brig trades especially local farmers who find it hard to sell their products to the market.",
      tech: "React, Firebase, Tailwind. That was for the first face I also did another one with Bootstrap 5 and Python (Flask)",
      link: "https://yourprojectlink.com"
    },
    {
        name: "System Development",
        description: "A simple Water Refill Management system that was in a position to allow users to create accout and manage the operation of a water refill center. This system was design mainly to eradicate the manual use of books to keep record at the refill stations",
        tech: "HTML, CSS, JavaScript, MySQL and Python(Flask)",
        link: "https://yourprojectlink.com"
      },
      {
        name: "Cyber Security",
        description: "This was setting up an Identity and Access Management Tool on Linux(Ubuntu) called Keycloak Server. This appliction would allow users to authenticate and access mdern application securely.",
        tech: "Java, MySQL, NGINX",
        link: "https://yourprojectlink.com"
      },
      {
        name: "IoT Design",
        description: "A modern Smart Farming System with Arduino Uno and soeof its sensors. It funtionality was to control the water flow system on the farm and monitarization of the farm when the farmer is not around. ",
        tech: "C++",
        link: "https://yourprojectlink.com"
      },
    // Add more projects here
  ];
  
  const Projects = () => {
    return (
      <section id="projects" className="py-20 px-4 max-w-5xl mx-auto">
        <h3 className="text-3xl font-semibold mb-8 text-teal-400">Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="text-white font-semibold mb-2">{project.name}</h4>
              <p className="text-gray-400 mb-2">{project.description}</p>
              <p className="text-white text-white-500 mb-2">Tech: {project.tech}</p>
              <a href={project.link} className="text-teal-300 hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  
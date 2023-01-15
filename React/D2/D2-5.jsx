// src/components/ProjectList.js
 
const projects = [
    { _id: '127fae', name: 'EatBCN', techStack: 'React, Express, MongoDB' },
    { _id: '985afw', name: 'TravelLite', techStack: 'React, Express, Redux' },
    { _id: '347eef', name: 'IronClub', techStack: 'Express, HBS, MongoDB' },
    { _id: '90af21', name: 'ChatApp', techStack: 'React, Express, SocketIO' }
  ];
   
  function ProjectList() {
    return (
      <div className="list">
        <h2>Project List</h2>
   
        {projects.map(project => {
          return (
            <div key={`uniq key ... ?`}>
              <h3>{project.name}</h3>
              <p>Tech Stack: {project.techStack}</p>
            </div>
          );
        })}
      </div>
    );
  }
   
  export default ProjectList;
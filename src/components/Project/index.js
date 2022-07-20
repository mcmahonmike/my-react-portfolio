import React from "react";

function Project(props) {
    const currentProject = {
        name: "projectOne",
        description:
          "Photo of project one",
      };
    return (
        <section>
             <section>
      <h1>{currentProject.name}</h1>
      <p>{currentProject.name}</p>
            </section>

        </section>
    )
}

export default Project;
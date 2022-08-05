import React from "react";

function Project(props) {
    const currentProject = {
        name: "Jaguar Games",
        description:
          "https://jaguar-games.herokuapp.com/",
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
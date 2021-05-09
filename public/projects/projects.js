// fetch("/api/projects").then(res => res.json()).then(console.log);

(async function getProjects() {
    const response = await fetch("/api/projects");
    const result = await response.json();

    const projectsDiv = document.getElementById("projects");

    result.projects.map((project, index) => {
        // const projectDiv = document.createElement("div");
        // projectDiv.classList.add("project-card");

        // const projectTitle = document.createElement("h2");
        // projectTitle.classList.add("project-title");
        // projectTitle.innerText = project.title;

        // const projectDescription = document.createElement("p");
        // projectDescription.classList.add("project-description");
        // projectDescription.innerText = project.description;

        // projectDiv.appendChild(projectTitle);
        // projectDiv.appendChild(projectDescription);
        // projectsDiv.appendChild(projectDiv);

        let output = `
            <div id="${index}" class="project-card">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div class="content">
                    <h2 class="project-title">${project.title}</h2>
                    <p class="project-description">${project.description}</p>
                    <a class="project-links" href=""></a>
                </div>
            </div>
        `;
        projectsDiv.innerHTML += output;
    });
})();



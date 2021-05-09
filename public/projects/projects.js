// fetch("/api/projects").then(res => res.json()).then(console.log);

(async function getProjects() {
    const response = await fetch("/api/projects");
    const result = await response.json();

    const projectsDiv = document.getElementById("projects");

    result.projects.map((project, index) => {

        let output = `
            <div id="${index}" class="project-card" style="background-image: url('${project.image}')">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div class="content">
                    <h2 class="project-title">${project.title}</h2>
                    <p class="project-description">${project.description}</p>
                    <a class="button code" href="${project.code[0]}" target="_blank">Code</a>
                    <a class="button deployed" href="${project.published}" target="_blank">Website</a> 
                </div>
            </div>
        `;
        projectsDiv.innerHTML += output;

        if(project.code.length === 0) {
            let card = $('#' + index);

            $('#' + index +' .content .button.code').remove();
            $('#' + index +' .content .button.deployed').text('Video');
        }
    });
})();



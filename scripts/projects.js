async function loadProjects() {

    const response = await fetch("data/projects.json");
    const projects = await response.json();

    const container = document.querySelector("#projects-container");

    projects
        .sort((a, b) => {

            if (a.featured !== b.featured) {
                return b.featured - a.featured;
            }

            return b.year - a.year;

        })
        .forEach(project => {

            const technologies = project.technologies
                .map(technology => `<li>${technology}</li>`)
                .join("");

            const demoButton = project.demo && project.demo !== "#"
                ? `<a href="${project.demo}" target="_blank">Live Demo</a>`
                : "";

            container.innerHTML += `

            <article class="card">

                <img src="${project.image}" alt="${project.title}">

                <div class="project-info">

                    <span class="status ${project.status.toLowerCase().replace(" ", "-")}">
                        ${project.status}
                    </span>

                    <span class="year">
                        ${project.year}
                    </span>

                </div>

                <h3>${project.title}</h3>

                <p>${project.description}</p>

                <ul class="technologies">
                    ${technologies}
                </ul>

                <div class="project-links">

                    <a href="${project.github}" target="_blank">
                        GitHub
                    </a>

                    ${demoButton}

                </div>

            </article>

            `;

        });

}

loadProjects();
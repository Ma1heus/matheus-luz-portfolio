const languagesContainer = document.querySelector("#languages");
const toolsContainer = document.querySelector("#tools");
const learningContainer = document.querySelector("#learning");

async function getSkills() {
    try {
        const response = await fetch("data/skills.json");

        if (!response.ok) {
            throw new Error("Unable to load skills.");
        }

        const data = await response.json();

        displaySkills(data.languages, languagesContainer);
        displaySkills(data.tools, toolsContainer);
        displayLearning(data.learning);
    }
    catch (error) {
        console.error(error);
    }
}

function displaySkills(items, container) {

    items.forEach(item => {

        const card = document.createElement("article");
        card.classList.add("card");

        const image = document.createElement("img");
        image.src = item.image;
        image.alt = `${item.name} logo`;
        image.loading = "lazy";

        const title = document.createElement("h3");
        title.textContent = item.name;

        const description = document.createElement("p");
        description.textContent = item.description;

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(description);

        if (item.topics) {

            const list = document.createElement("ul");
            list.classList.add("technologies");

            item.topics.forEach(topic => {

                const li = document.createElement("li");
                li.textContent = topic;

                list.appendChild(li);

            });

            card.appendChild(list);

        }

        container.appendChild(card);

    });

}

function displayLearning(items) {

    items.forEach(item => {

        const card = document.createElement("article");
        card.classList.add("card");

        const title = document.createElement("h3");
        title.textContent = item.title;

        const description = document.createElement("p");
        description.textContent = item.description;

        card.appendChild(title);
        card.appendChild(description);

        learningContainer.appendChild(card);

    });

}

getSkills();
console.log("Hello");

// Counter & message
const buttonTest = document.getElementById("HelloBtn");
const messageBlaBla = document.getElementById("message");
const counterText = document.getElementById("counter");

// Display profile
const displayProfileButton = document.getElementById("displayProfileBtn");
const profileDiv = document.getElementById("profile");

let count = 0;
let skillClickCount = 0;

function addOne(nbr) {
    count = count + nbr;
    counterText.textContent = count;
}

buttonTest.addEventListener("click", function () {
    console.log("You clicked me!!!");
    messageBlaBla.textContent = "Un compteur de Plumeline";
    addOne(1);
});

displayProfileButton.addEventListener("click", function () {
    profileDiv.innerHTML = `
        <img src="html/allforms.jpg" alt="Photo" width="500">
        <p>Tous les plumelines de chaque ile</p>
    `;
});

// Skill badges
const skillBadges = document.querySelectorAll(".bdg");
const selectedSkillText = document.getElementById("selectedSkillText");

skillBadges.forEach(function (badgeBlaBla) {
    badgeBlaBla.addEventListener("click", function () {
        const isSelected = badgeBlaBla.classList.contains("selected");

	skillBadges.forEach(function (totoBadge) {
    totoBadge.classList.remove("selected");
});
	
	skillClickCount = skillClickCount + 1;
	document.getElementById("skillClickCount").textContent = "Nombre de skills cliqués : " + skillClickCount;
	
	if (isSelected) {
	    selectedSkillText.textContent = "Selected Skill: none";
	} else {
	    badgeBlaBla.classList.add("selected");
	    selectedSkillText.textContent = "Selected Skill: " + badgeBlaBla.textContent;
	}
    });
});
// Toggle Profile Code
const profiles = [
    {
        name: "La danse de Plumeline",
        description: "Voici la danse traditionelle de Plumeline style Pom-Pom",
        image: "html/plumeline.webp"
    },
    {
        name: "Talent de Plumeline",
        description: "Ils possèdent le nouveau talent Danseuse, qui n'avait encore jamais été observé chez un Pokémon.",
        image: "html/pluplu.jpg"
    },
    {
        name: "Plumeline Jujupas",
        description: "Ce Plumeline se surnomme Jujupas parce que sa dresseuse l'a surnommé ainsi.",
        image: "html/jujupas.png"
    }
];

const heroTitle = document.getElementById("hero-title")
const heroDescription = document.getElementById("hero-description")
const profileImage = document.getElementById("profileImage")

// Contact section
const sendEmailButton = document.getElementById("sendEmailButton");
const subjectInput = document.getElementById("subjectInputId");
const messageInput = document.getElementById("messageInputId");

sendEmailButton.addEventListener("click", function () {
    const subject = subjectInput.value;
    const message = messageInput.value;

    if (subject === "") {
        document.getElementById("subjectError").textContent = "Sujet obligatoire";
    } else {
        document.getElementById("subjectError").textContent = "";
    }

    if (message === "") {
        document.getElementById("messageError").textContent = "Message obligatoire";
    } else {
        document.getElementById("messageError").textContent = "";
    }

    if (subject !== "" && message !== "") {
        const mailtoLink = "mailto:ton@email.com?subject=" + subject + "&body=" + message;
        window.location.href = mailtoLink;
    }
});

// Dark Mode
const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});
let currentIndex = 0;

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

prevBtn.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + profiles.length) % profiles.length;
    heroTitle.textContent = profiles[currentIndex].name;
    heroDescription.textContent = profiles[currentIndex].description;
    profileImage.src = profiles[currentIndex].image;
});

nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % profiles.length;
    heroTitle.textContent = profiles[currentIndex].name;
    heroDescription.textContent = profiles[currentIndex].description;
    profileImage.src = profiles[currentIndex].image;
});

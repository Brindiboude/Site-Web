console.log("Hello");

// Counter & message
const buttonTest = document.getElementById("HelloBtn");
const messageBlaBla = document.getElementById("message");
const counterText = document.getElementById("counter");

// Display profile
const displayProfileButton = document.getElementById("displayProfileBtn");
const profileDiv = document.getElementById("profile");

let count = 0;

function addOne(nbr) {
    count = count + nbr;
    counterText.textContent = count;
}

buttonTest.addEventListener("click", function () {
    console.log("You clicked me!!!");
    messageBlaBla.textContent = "Hello! This is a message.";
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
        name: "Plumeline contente",
        description: "Meilleure danse de Plumeline",
        image: "html/plumeline.webp"
    },
    {
        name: "Plumeline festive",
        description: "Plumeline qui s'amuse en dansant",
        image: "html/pluplu.jpg"
    }
];

const toggleProfileButton = document.getElementById("togglePorfileBtn")
const heroTitle = document.getElementById("hero-title")
const heroDescription = document.getElementById("hero-description")
const profileImage = document.getElementById("profileImage")

let currentIndex = 0;

toggleProfileButton.addEventListener("click", function () {
    currentIndex = currentIndex + 1;

    if (currentIndex >= profiles.length) {
	currentIndex = 0;
    }

    heroTitle.textContent = profiles[currentIndex].name;
    heroDescription.textContent = profiles[currentIndex].description
    profileImage.src = profiles[currentIndex].image;
    
});
// Contact section
const sendEmailButton = document.getElementById("sendEmailButton");
const subjectInput = document.getElementById("SubjectInputId");
const messageInput = document.getElementById("MessageInputId");

sendEmailButton.addEventListener("click", function() {
    const subject = subjectInput.value;
    const message = messageInput.value;

    const myEmail = "abbas.sarah2006@gmail.com";
    const mailtoLink = "mailto" + "?subject=" + subject + "&body=" + message;

    mailtoLink;
});

class Player {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;    
    }
    elo = 0;
    team = "no Team";
}

document.getElementById("submitBtn").addEventListener("click", () => {
    const email = document.getElementById("textInput").value + "@fh-wedel.de";
    alert("Bestätigungsemail an " + email  + " versandt!");
});

alert("Ende");
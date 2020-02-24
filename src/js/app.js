import "../css/style.css";

const DEV = true;
const registration = {

    PATH: "/register-user/",

    DOM: {
        matrikelInput: document.querySelector("#textInput"),
        submitBtn: document.querySelector("#submitBtn")
    },

    async registrationHandler() {
        const data = {
            email: `${this.DOM.matrikelInput.value}@fh-wedel.de`
        };

        console.log(`Sending to ${this.PATH} -> ${JSON.stringify(data)}`);

        const response = await fetch(this.PATH, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();

        if (responseData.success) {
            //Notify user of success
            console.info("[DEBUG] Registration success");
        } else {
            //Notify user of error
            console.error("[DEBUG] Registration error");
        }
    },

    bindEvents() {
        this.DOM.submitBtn.addEventListener("click", () => this.registrationHandler());
    },

    init() {
        this.bindEvents();

        if (DEV)
            this.PATH = `/api${this.PATH}`;
    }
};

registration.init();


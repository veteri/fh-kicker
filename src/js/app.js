import "../css/style.css";

/* Set this to true if you  
   are working with webpack */
const DEV = true;

/**
 * Handles user registration
 * @type {object}
 */
const registration = {

	/**
	 * API Path
	 * @type {string}
	 */
    PATH: "/register-user/",

	/**
	 * Convenience access to all
	 * used DOM elements from the page
	 * @type {object}
	 */
    DOM: {
        matrikelInput: document.querySelector("#textInput"),
        submitBtn: document.querySelector("#submitBtn")
    },

	/**
	 * Handles a user registration.
	 * Transmits entered data to the backend
	 * for further validation and processing
	 * @returns {undefined}
	 */
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

	/**
	 * Bind all event listeners
	 * to the DOM elements.
	 * @returns {undefined}
	 */
    bindEvents() {
        //Bind submit button click to our registrationHandler
        this.DOM.submitBtn.addEventListener("click", () => this.registrationHandler());
    },

	/**
	 * Inits the registration object
	 * @returns {undefined}
	 */
    init() {
        this.bindEvents();

		/* webpack dev server will 
		 * proxy /api prefixed paths 
		 * to our backend, see webpack.config.js
		 */
        if (DEV)
            this.PATH = `/api${this.PATH}`;
    }
};

registration.init();


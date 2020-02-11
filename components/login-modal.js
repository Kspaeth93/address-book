Vue.component('login-modal', {
    template:  `<div class="text text-light text-medium">
                    <div class="text-large padding">Contacts</div>
                    <div class="padding">
                        Username<br>
                        <input  v-model="username"
                                id="username"
                                type="text"
                                name="username"
                                class="input" />
                    </div>
                    <div class="padding">
                        Password<br>
                        <input  v-model="password"
                                id="password"
                                type="password"
                                name="password"
                                class="input" />
                    </div>
                    <div class="padding">
                        <input  v-on:click="onLoginClicked"
                                type="button"
                                value="Login"
                                class="button large-button primary-button" />
                    </div>
                </div>`,
    data: function () {
        return {
            username: null,
            password: null
        }
    },
    methods: {
        onLoginClicked: function () {
            var valid = true;

            var username = document.getElementById("username");
            if (this.username === null || this.username.length < 1) {
                username.style.border = "1px solid #cf6679";
                valid = false;
            } else {
                username.style.border = "none";
            }
            
            var password = document.getElementById("password");
            if (this.password === null || this.password.length < 1) {
                password.style.border = "1px solid #cf6679";
                valid = false;
            } else {
                password.style.border = "none";
            }

            if (valid) this.$root.processLogin(this.username);
        }
    }
});
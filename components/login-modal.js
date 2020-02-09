Vue.component('login-modal', {
    template:   '<div class="row horizontal-align">' +
                '    <div class="col-lg-4 col-md-6 col-sm-12 ui-medium shadow">' +
                '        <div class="text text-light text-large">Contacts</div>' +
                '        <form class="text text-light text-medium">' +
                '            <div class="spacing">' +
                '                Username<br>' +
                '                <input v-model="username"' +
                '                       id="username"' +
                '                       type="text"' +
                '                       name="username"' +
                '                       class="input" />' +
                '            </div>' +
                '            <div class="spacing">' +
                '                Password<br>' +
                '                <input v-model="password"' +
                '                       id="password"' +
                '                       type="password"' +
                '                       name="password"' +
                '                       class="input" />' +
                '            </div>' +
                '            <input v-on:click="onLoginClicked"' +
                '                   type="button"' +
                '                   value="Login"' +
                '                   class="button large-button primary-button spacing" />' +
                '        </form>' +
                '    </div>' +
                '</div>',
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
            var password = document.getElementById("password");

            if (this.username === null || this.username.length < 1) {
                username.style.border = "1px solid #cf6679";
                valid = false;
            } else {
                username.style.border = "none";
            }
            
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
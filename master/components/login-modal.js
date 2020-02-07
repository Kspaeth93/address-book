Vue.component('login-modal', {
    template:   '<div class="row horizontal-align">' +
                '    <div class="col-lg-4 col-md-6 col-sm-12 modal">' +
                '        <div class="title-text">Address Book</div>' +
                '        <form>' +
                '            <div>' +
                '                Username<br>' +
                '                <input v-model="username"' +
                '                       id="username"' +
                '                       type="text"' +
                '                       name="username"' +
                '                       class="form-input" />' +
                '            </div>' +
                '            <div>' +
                '                Password<br>' +
                '                <input v-model="password"' +
                '                       id="password"' +
                '                       type="password"' +
                '                       name="password"' +
                '                       class="form-input" />' +
                '            </div>' +
                '            <input v-on:click="onLoginClicked"' +
                '                   type="button"' +
                '                   value="Login"' +
                '                   class="login-button" />' +
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

            if (valid) this.$root.handleLogin(this.username);
        }
    }
});
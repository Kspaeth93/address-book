Vue.component('settings-modal', {
    template:   '<div class="row horizontal-align">' +
                '    <div class="col-lg-4 col-md-6 col-sm-12 ui-medium shadow">' +
                '        <div class="text text-light text-large">Settings</div>' +
                '        <form class="text text-light text-medium">' +
                '            <div class="spacing">' +
                '                Current Username<br>' +
                '                <input v-bind:value="$root.username"' +
                '                       type="text"' +
                '                       name="current-username"' +
                '                       class="input-disabled"' +
                '                       disabled />' +
                '            </div>' +
                '            <div class="spacing">' +
                '                New Username<br>' +
                '                <input v-model="newUsername"' +
                '                       id="newUsername"' +
                '                       type="text"' +
                '                       name="new-username"' +
                '                       class="input" />' +
                '            </div>' +
                '            <input v-on:click="onSaveUsernameClicked"' +
                '                   type="button"' +
                '                   value="Save Username"' +
                '                   class="button large-button primary-button spacing" /><br>' +
                '            <div class="mobile-mode spacing">' +
                '               Mobile Mode' +
                '               <label class="switch">' +
                '                   <input ref="mobileMode"' +
                '                          v-bind:checked="$root.mobile"' +
                '                          type="checkbox" />' +
                '                   <span class="slider round"></span>' +
                '               </label>' +
                '            </div>' +
                '            <input v-on:click="onSaveClicked"' +
                '                   type="button"' +
                '                   value="Save Changes"' +
                '                   class="button large-button primary-button spacing" /><br>' +
                '            <input v-on:click="onCancelClicked"' +
                '                   type="button"' +
                '                   value="Cancel"' +
                '                   class="button large-button secondary-button spacing" />' +
                '        </form>' +
                '    </div>' +
                '</div>',
    data: function () {
        return {
            newUsername: null
        };
    },
    methods: {
        onSaveUsernameClicked: function () {
            var valid = true;
            var newUsername = document.getElementById('newUsername');

            if (this.newUsername === null || this.newUsername.length < 1) {
                newUsername.style.border = "1px solid #cf6679";
                valid = false;
            } else {
                newUsername.style.border = "none";
            }

            if (valid) this.$root.username = this.newUsername;
        },

        onSaveClicked: function () {
            var isMobileModeOn = this.$refs.mobileMode.checked;
            this.$root.setMobile(isMobileModeOn);
        },

        onCancelClicked: function () {
            this.$root.setView('contacts');
        }
    }
});
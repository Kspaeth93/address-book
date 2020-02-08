Vue.component('settings-modal', {
    template:   '<div class="row horizontal-align">' +
                '    <div class="col-lg-4 col-md-6 col-sm-12 modal">' +
                '        <div class="title-text">Settings</div>' +
                '        <form>' +
                '            <div>' +
                '                Current Username<br>' +
                '                <input v-bind:value="$root.username"' +
                '                       type="text"' +
                '                       name="current-username"' +
                '                       class="input-disabled"' +
                '                       disabled />' +
                '            </div>' +
                '            <div>' +
                '                New Username<br>' +
                '                <input v-model="newUsername"' +
                '                       id="newUsername"' +
                '                       type="text"' +
                '                       name="new-username"' +
                '                       class="form-input" />' +
                '            </div>' +
                '            <input v-on:click="onSaveClicked"' +
                '                   type="button"' +
                '                   value="Save Changes"' +
                '                   class="save-button" />' +
                '            <input v-on:click="onCancelClicked"' +
                '                   type="button"' +
                '                   value="Cancel"' +
                '                   class="cancel-button" />' +
                '        </form>' +
                '    </div>' +
                '</div>',
    data: function () {
        return {
            newUsername: null
        };
    },
    methods: {
        onSaveClicked: function () {
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

        onCancelClicked: function () {
            this.$root.setView('contacts');
        }
    }
});
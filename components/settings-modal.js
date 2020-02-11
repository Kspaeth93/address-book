Vue.component('settings-modal', {
    template:  `<div class="text text-light text-medium">
                    <div class="text text-light text-large">Settings</div>
                    <div class="padding">
                        Current Username<br>
                        <input  v-bind:value="$root.username"
                                type="text"
                                name="current-username"
                                class="input input-disabled"
                                disabled />
                    </div>
                    <div class="padding">
                        New Username<br>
                        <input  v-model="newUsername"
                                id="newUsername"
                                type="text"
                                name="new-username"
                                class="input" />
                    </div>
                    <div class="padding">
                        <input  v-on:click="onSaveUsernameClicked"
                                type="button"
                                value="Save Username"
                                class="button large-button primary-button" /><br>
                    </div>
                    <div class="mobile-mode padding">
                        Mobile Mode
                        <label class="slider">
                            <input  ref="mobileMode"
                                    v-bind:checked="$root.mobile"
                                    type="checkbox" />
                            <span class="slider-button"></span>
                        </label>
                    </div>
                    <div class="padding">
                        <input  v-on:click="onSaveClicked"
                                type="button"
                                value="Save Changes"
                                class="button large-button primary-button" /><br>
                    </div>
                    <div class="padding">
                        <input  v-on:click="onCancelClicked"
                                type="button"
                                value="Cancel"
                                class="button large-button secondary-button" />
                    </div>
                </div>`,
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

            if (valid) {
                this.$root.setUsername(this.newUsername);
                this.$root.setCurrentView('contacts');
            }
        },

        onSaveClicked: function () {
            var isMobile = this.$refs.mobileMode.checked;
            this.$root.setMobile(isMobile);
            this.$root.setCurrentView('contacts');
        },

        onCancelClicked: function () {
            this.$root.setCurrentView('contacts');
        }
    }
});
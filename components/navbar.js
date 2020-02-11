Vue.component('navbar', {
    template:  `<div>
                    <input  v-show="showUsername()"
                            v-bind:value="username"
                            class="button small-button background-button left"
                            type="button"
                            disabled="true" />
                    <input  v-show="showLogoutButton()"
                            v-on:click="onLogoutClicked"
                            type="button"
                            value="Log Out"
                            class="button small-button secondary-button right text text-small" />
                    <input  v-show="showSettingsButton()"
                            v-on:click="onSettingsClicked"
                            type="button"
                            value="Settings"
                            class="button small-button primary-button right" />
                    <input  v-show="showContactsButton()"
                            v-on:click="onContactsClicked"
                            type="button"
                            value="Contacts"
                            class="button small-button primary-button right" />
                </div>`,
    props: [ 'username' ],
    methods: {
        showUsername: function () {
            return this.$root.getCurrentView() !== 'login';
        },

        showLogoutButton: function () {
            return this.$root.getCurrentView() !== 'login';
        },

        showSettingsButton: function () {
            var currentView = this.$root.getCurrentView();
            return currentView !== 'login' && currentView !== 'settings';
        },

        showContactsButton: function () {
            return this.$root.getCurrentView() === 'settings';
        },

        onSettingsClicked: function () {
            this.$root.removeSelectedContact();
            this.$root.setCurrentView('settings');
        },

        onLogoutClicked: function () {
            this.$root.setCurrentView('login');
        },

        onContactsClicked: function () {
            this.$root.setCurrentView('contacts');
        }
    }
});
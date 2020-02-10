Vue.component('navbar', {
    template:   '<div class="row">' +
                '    <div class="col-12 ui-medium" style="height: 50px; margin-bottom: 50px;">' +
                '        <input v-show="showUsername()"' +
                '               v-bind:value="username"' +
                '               class="button small-button background-button left"' +
                '               type="button"' +
                '               disabled="true" />' +
                '        <input v-show="showLogoutButton()"' +
                '               v-on:click="onLogoutClicked"' +
                '               type="button"' +
                '               value="Log Out"' +
                '               class="button small-button secondary-button right text text-small" />' +
                '        <input v-show="showSettingsButton()"' +
                '               v-on:click="onSettingsClicked"' +
                '               type="button"' +
                '               value="Settings"' +
                '               class="button small-button primary-button right" />' +
                '        <input v-show="showContactsButton()"' +
                '               v-on:click="onContactsClicked"' +
                '               type="button"' +
                '               value="Contacts"' +
                '               class="button small-button primary-button right" />' +
                '    </div>' +
                '</div>',
    props: [ 'username' ],
    methods: {
        showUsername: function () {
            return this.$root.getView() !== 'login';
        },

        showLogoutButton: function () {
            return this.$root.getView() !== 'login';
        },

        showSettingsButton: function () {
            var currentView = this.$root.getView();
            return currentView !== 'login' && currentView !== 'settings';
        },

        showContactsButton: function () {
            return this.$root.getView() === 'settings';
        },

        onSettingsClicked: function () {
            this.$root.removeSelectedContact();
            this.$root.setView('settings');
        },

        onLogoutClicked: function () {
            this.$root.setView('login');
        },

        onContactsClicked: function () {
            this.$root.setView('contacts');
        }
    }
});
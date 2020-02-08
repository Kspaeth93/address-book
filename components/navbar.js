Vue.component('navbar', {
    template:   '<div class="row">' +
                '    <div class="col-12 navbar">' +
                '        <input v-show="showUsername()"' +
                '               v-bind:value="username"' +
                '               class="button username-button"' +
                '               type="button"' +
                '               disabled="true" />' +
                '        <input v-show="showLogoutButton()"' +
                '               v-on:click="onLogoutClicked"' +
                '               type="button"' +
                '               value="Log Out"' +
                '               class="button logout-button" />' +
                '        <input v-show="showSettingsButton()"' +
                '               v-on:click="onSettingsClicked"' +
                '               type="button"' +
                '               value="Settings"' +
                '               class="button settings-contacts-button" />' +
                '        <input v-show="showContactsButton()"' +
                '               v-on:click="onContactsClicked"' +
                '               type="button"' +
                '               value="Contacts"' +
                '               class="button settings-contacts-button" />' +
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
new Vue({
    el: '#app',
    data: {
        username: null,
        currentView: 'login'
    },
    methods: {
        contacts: function () {
            this.currentView = 'contacts';
        },

        login: function () {
            this.currentView = 'login';
        },

        mContactDetails: function () {
            this.currentView = 'm-contact-details';
        },

        mContactList: function () {
            this.currentView = 'm-contact-list';
        },

        settings: function () {
            this.currentView = 'settings';
        },

        getView: function () {
            return this.currentView;
        },

        setView: function (nextView) {
            this.currentView = nextView;
        },

        handleLogin: function (username) {
            this.username = username;
            this.contacts();
        },

        setUsername: function (username) {
            this.user = username;
            this.$refs.navbar.username = username;
            alert(this.user);
        },

        gotoSettings: function () {
            window.location.href = 'settings.html';
            this.$refs.navbar.username = this.username;
        }
    }
});
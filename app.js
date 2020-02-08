new Vue({
    el: '#app',
    data: {
        mobile: null,
        username: null,
        currentView: 'login'
    },
    methods: {
        getView: function () {
            return this.currentView;
        },

        setView: function (nextView) {
            if (nextView === 'contacts') {
                this.currentView = this.mobile ? 'm-contact-list' : 'contacts';
            } else {
                this.currentView = nextView;
            }
        },

        processLogin: function (username) {
            this.mobile = screen.width < 768 ? true : false;
            this.username = username;
            
            this.setView('contacts');
        }
    }
});
new Vue({
    el: '#app',
    data: {
        mobile: null,
        username: null,
        currentView: 'login',
        contacts: [{
            name: 'John Doe',
            address: '1234 Bob St.',
            phoneNumber1: '123-456-7890',
            phoneNumber2: '123-456-7890',
            phoneNumber3: '123-456-7890',
            phoneNumberType1: 'cell',
            phoneNumberType2: 'cell',
            phoneNumberType3: 'cell'
        },
        {
            name: 'Abe Brownbro',
            address: '1234 Bob St.',
            phoneNumber1: '123-456-7890',
            phoneNumber2: '123-456-7890',
            phoneNumber3: '123-456-7890',
            phoneNumberType1: 'cell',
            phoneNumberType2: 'cell',
            phoneNumberType3: 'cell'
        }],
        selectedContact: {
            name: 'Abe Brownbro',
            address: '1234 Bob St.',
            phoneNumber1: '123-456-7890',
            phoneNumber2: '123-456-7890',
            phoneNumber3: '123-456-7890',
            phoneNumberType1: 'cell',
            phoneNumberType2: 'cell',
            phoneNumberType3: 'cell'
        }
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

        setMobile: function (newOption) {
            this.mobile = newOption;
        },

        processLogin: function (username) {
            this.mobile = window.innerWidth < 768 ? true : false;
            this.username = username;
            
            this.setView('contacts');
        }
    }
});
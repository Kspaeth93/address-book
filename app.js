new Vue({
    el: '#app',
    data: {
        mobile: null,
        username: null,
        currentView: 'login',
        contacts: [{
            id: 1,
            name: 'John Doe',
            address: '1234 Bob St.',
            phoneNumber1: '123-456-7890',
            phoneNumber2: '123-456-7890',
            phoneNumber1Type: 'cell',
            phoneNumber2Type: 'cell'
        },
        {
            id: 2,
            name: 'Abe Brownbro',
            phoneNumber1: '123-456-7890',
            phoneNumber1Type: 'cell'
        }],
        selectedContact:{
            id: null,
            name: null,
            address: null,
            phoneNumber1: null,
            phoneNumber1Type: null,
            phoneNumber2: null,
            phoneNumber2Type: null
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
        },

        addContact: function (contact) {
            contact.id = new Date().getTime();
            this.contacts.push(contact);
            this.removeSelectedContact();
        },

        updateContact: function (contact) {
            console.log(contact);
            for (var i = 0; i < this.contacts.length; i++) {
                if (this.contacts[i].id === contact.id) {
                    console.log('a');
                    this.contacts[i].name = contact.name;
                    this.contacts[i].address = contact.address;
                    this.contacts[i].phoneNumber1 = contact.phoneNumber1;
                    this.contacts[i].phoneNumber1Type = contact.phoneNumber1Type;
                    this.contacts[i].phoneNumber2 = contact.phoneNumber2;
                    this.contacts[i].phoneNumber2Type = contact.phoneNumber2Type;
                }
            }
            this.removeSelectedContact();
        },

        getContactById: function (id) {
            for (var i = 0; i < this.contacts.length; i++) {
                if (this.contacts[i].id === id) {
                    return this.contacts[i];
                }
            }
        },

        deleteContactById: function (id) {
            if (this.contacts.length === 1) {
                this.contacts = [];
            }
            
            for (var i = 0; i < this.contacts.length; i++) {
                if (this.contacts[i].id === id) {
                    this.contacts.splice(i, 1);
                }
            }
        },

        setSelectedContact: function (contact) {
            this.selectedContact = contact;
        },

        removeSelectedContact: function () {
            this.selectedContact = {
                id: null,
                name: null,
                address: null,
                phoneNumber1: null,
                phoneNumber1Type: null,
                phoneNumber2: null,
                phoneNumber2Type: null
            };
        }
    }
});
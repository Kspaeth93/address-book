new Vue({
    el: '#app',
    data: {
        mobile: null,
        username: null,
        currentView: 'login',
        contactsView: 'contact-detail',
        contacts: [{
            id: 1,
            name: 'Carrie Ross',
            address: '1952 Evergreen Lane',
            phoneNumber1: '323-642-8871',
            phoneNumber2: '260-468-4116',
            phoneNumber1Type: 'home',
            phoneNumber2Type: 'cell'
        },
        {
            id: 2,
            name: 'Patrick Johnson',
            address: '3161 Fowler Avenue',
            phoneNumber1: '770-275-5325',
            phoneNumber2: '870-333-5632',
            phoneNumber1Type: 'home',
            phoneNumber2Type: 'work'
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
        getMobile: function () {
            return this.mobile;
        },

        setMobile: function (isMobile) {
            this.mobile = isMobile;
        },

        getUsername: function () {
            return this.username;
        },

        setUsername: function (newUsername) {
            this.username = newUsername;
        },

        getCurrentView: function () {
            return this.currentView;
        },

        setCurrentView: function (nextView) {
            switch (nextView) {
                case 'contacts':
                    if (this.mobile) {
                        this.currentView = 'm-contacts-list';
                    } else {
                        var contacts = this.getContacts();
                        if (contacts.length > 0) {
                            this.setSelectedContact(contacts[0]);
                        }

                         this.currentView = 'contacts';
                         this.contactsView = 'contact-detail';
                    }
                    break;

                case 'editContact':
                    if (this.mobile) {
                        this.currentView = 'm-contacts-edit';
                    } else {
                        this.currentView = 'contacts';
                        this.contactsView = 'edit-contact';
                    }
                    break;

                case 'contactDetails':
                    if (this.mobile) {
                        this.currentView ='m-contacts-details';
                    } else {
                        this.currentView = 'contacts';
                        this.contactsView = 'contact-detail';
                    }
                    break;

                default:
                    this.currentView = nextView;
                    break;
            }
        },

        getContactsView: function () {
            return this.contactsView;
        },

        setContactsView: function (nextView) {
            this.contactsView = nextView;
        },

        addContact: function (contact) {
            /* Works as a quick and dirty id */
            contact.id = new Date().getTime();
            this.contacts.push(contact);
        },

        getContacts: function () {
            return this.contacts;
        },

        getContactById: function (id) {
            for (var i = 0; i < this.contacts.length; i++) {
                if (this.contacts[i].id === id) {
                    return this.contacts[i];
                }
            }
        },

        updateContact: function (contact) {
            for (var i = 0; i < this.contacts.length; i++) {
                if (this.contacts[i].id === contact.id) {
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

        deleteContactById: function (id) {
            if (this.contacts.length === 1) {
                this.contacts = [];
            } else {
                for (var i = 0; i < this.contacts.length; i++) {
                    if (this.contacts[i].id === id) {
                        this.contacts.splice(i, 1);
                    }
                }
            }
        },

        deleteContacts: function () {
            this.contacts = [];
        },

        getSelectedContact: function () {
            return this.selectedContact;
        },

        setSelectedContact: function (contact) {
            this.selectedContact = contact;
        },

        isContactSelected: function () {
            return this.selectedContact.id === undefined || this.selectedContact.id === null;
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
        },

        processLogin: function (username) {
            /* Only set once on login */
            this.mobile = window.innerWidth < 768 ? true : false;
            this.username = username;
            this.setCurrentView('contacts');
        }
    }
});
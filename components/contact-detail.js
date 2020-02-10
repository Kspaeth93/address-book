Vue.component('contact-detail', {
    template:  `<div class="text text-light">
                    <div class="text-large spacing">
                        {{ getName() }}
                    </div>
                    <div class="text-medium italic spacing">
                        {{ getAddress() }}
                    </div>
                    <div class="text-medium spacing">
                        [{{ getPhoneNumber1Type() }}] {{ getPhoneNumber1() }}<br>
                        [{{ getPhoneNumber2Type() }}] {{ getPhoneNumber2() }}<br>
                    </div>
                    <div class="spacing">
                        <input  v-on:click="onEditClicked"
                                type="button"
                                value="Edit"
                                class="button large-button primary-button" />
                    </div>
                    <div class="spacing">
                        <input  v-on:click="onDeleteClicked"
                                type="button"
                                value="Delete"
                                class="button large-button error-button" />
                    </div>
                    <div class="spacing">
                        <input  v-on:click="onBackClicked"
                                type="button"
                                value="Back"
                                class="button large-button secondary-button" />
                    </div>
                </div>`,
    methods: {
        getName: function () {
            return this.$root.selectedContact.name;
        },

        getAddress: function () {
            var address = this.$root.selectedContact.address;

            if (address === undefined || address === null || address.length < 1) {
                return 'No Address';
            } else {
                return address;
            }
        },

        getPhoneNumber1: function () {
            return this.$root.selectedContact.phoneNumber1;
        },

        getPhoneNumber1Type: function () {
            return this.$root.selectedContact.phoneNumber1Type;
        },

        getPhoneNumber2: function () {
            var phoneNumber2 = this.$root.selectedContact.phoneNumber2;

            if (phoneNumber2 === undefined || phoneNumber2 === null || phoneNumber2.length < 1) {
                return 'No Secondary Phone';
            } else {
                return phoneNumber2;
            }
        },

        getPhoneNumber2Type: function () {
            var phoneNumber2Type = this.$root.selectedContact.phoneNumber2Type;

            if (phoneNumber2Type === undefined || phoneNumber2Type === null || phoneNumber2Type.length < 1) {
                return 'NONE';
            } else {
                return phoneNumber2Type;
            }
        },

        onEditClicked: function () {
            this.$root.setView('m-contacts-edit');
        },

        onDeleteClicked: function () {
            var contactId = this.$root.selectedContact.id;
            console.log(contactId);
            this.$root.deleteContactById(contactId);
            this.$root.removeSelectedContact();
            this.$root.setView('contacts');
        },

        onBackClicked: function () {
            this.$root.setView('contacts');
            this.$root.removeSelectedContact();
        }
    }
});
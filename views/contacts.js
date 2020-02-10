Vue.component('contacts', {
    template:   `<div>
                    <navbar v-bind:username="$root.username"></navbar>
                    <div class="row">
                        <div class="col-12 ui-light light-shadow">
                            <contact-toolbar></contact-toolbar>
                        </div>
                        <div class="col-4 ui-medium light-shadow">
                            <contact-list></contact-list>
                        </div>
                        <div class="col-8 ui-medium light-shadow">
                            <component ref="contactsView" v-bind:is="$root.contactsView"></component>
                        </div>
                    </div>
                </div>`,
    methods: {
        getContactName: function () {
            return this.$root.selectedContact.name;
        },

        getContactAddress: function () {
            return this.$root.selectedContact.address;
        },

        getContactPhone1: function () {
            return this.$root.selectedContact.phoneNumber1;
        },

        getContactPhone2: function () {
            return this.$root.selectedContact.phoneNumber2;
        },

        getContactPhone3: function () {
            return this.$root.selectedContact.phoneNumber3;
        },

        getContactPhoneType1: function () {
            return this.$root.selectedContact.phoneNumberType1;
        },

        getContactPhoneType2: function () {
            return this.$root.selectedContact.phoneNumberType2;
        },

        getContactPhoneType3: function () {
            return this.$root.selectedContact.phoneNumberType3;
        }
    }
});
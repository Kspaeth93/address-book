Vue.component('contacts', {
    template:   '<div>'+
                '    <navbar v-bind:username="$root.username"></navbar>' +
                '    <contact-toolbar></contact-toolbar>' +
                '    <div class="row">' +
                '        <div class="col-4">' +
                '            <contact-list></contact-list>' +
                '        </div>' +
                '        <div class="col-8">' +
                '            <contact-detail class="ui-medium shadow"' +
                '                            v-bind:name="getContactName()"' +
                '                            v-bind:address="getContactAddress()"' +
                '                            v-bind:phoneNumber1="getContactPhone1()"' +
                '                            v-bind:phoneNumber2="getContactPhone2()"' +
                '                            v-bind:phoneNumber3="getContactPhone3()"' +
                '                            v-bind:phoneNumberType1="getContactPhoneType1()"' +
                '                            v-bind:phoneNumberType2="getContactPhoneType2()"' +
                '                            v-bind:phoneNumberType3="getContactPhoneType3()">' +
                '            </contact-detail>' +
                '        </div>' +
                '    </div>' +
                '</div>',
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
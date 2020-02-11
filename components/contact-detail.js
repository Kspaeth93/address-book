Vue.component('contact-detail', {
    template:  `<div>
                    <div    v-show="!$root.isContactSelected()"
                            class="text text-light">
                        <div class="text-large padding">
                            {{ $root.getSelectedContact().name }}
                        </div>
                        <div class="text-medium italic padding">
                            {{ getAddress() }}
                        </div>
                        <div class="text-medium padding">
                            <input  v-bind:value="getPhoneNumber1Type()"
                                    :class="getTypeClass(getPhoneNumber1Type())"
                                    type="button"
                                    disabled />
                            {{ $root.getSelectedContact().phoneNumber1 }}<br>
                            <input  v-bind:value="getPhoneNumber2Type()"
                                    :class="getTypeClass(getPhoneNumber2Type())"
                                    type="button"
                                    disabled />
                            {{ getPhoneNumber2() }}<br>
                        </div>
                        <div class="padding">
                            <input  v-on:click="onEditClicked"
                                    type="button"
                                    value="Edit"
                                    class="button large-button primary-button" />
                        </div>
                        <div class="padding">
                            <input  v-on:click="onDeleteClicked"
                                    type="button"
                                    value="Delete"
                                    class="button large-button error-button" />
                        </div>
                        <div class="padding">
                            <input  v-on:click="onBackClicked"
                                    type="button"
                                    value="Back"
                                    class="button large-button secondary-button" />
                        </div>
                    </div>
                    <div    v-show="$root.isContactSelected()"
                            class="text text-light text-large">
                        No Contact Selected :(
                    </div>
                </div>`,
    methods: {
        getAddress: function () {
            var address = this.$root.getSelectedContact().address;

            if (address === undefined || address === null || address.length < 1) {
                return 'No Address';
            } else {
                return address;
            }
        },

        getPhoneNumber1Type: function () {
            var phoneNumber1Type = this.$root.getSelectedContact().phoneNumber1Type;

            if (phoneNumber1Type === undefined || phoneNumber1Type === null || phoneNumber1Type.length < 1) {
                return 'none';
            } else {
                return phoneNumber1Type;
            }
        },

        getPhoneNumber2: function () {
            var phoneNumber2 = this.$root.getSelectedContact().phoneNumber2;

            if (phoneNumber2 === undefined || phoneNumber2 === null || phoneNumber2.length < 1) {
                return 'No Secondary Phone';
            } else {
                return phoneNumber2;
            }
        },

        getPhoneNumber2Type: function () {
            var phoneNumber2Type = this.$root.getSelectedContact().phoneNumber2Type;

            if (phoneNumber2Type === undefined || phoneNumber2Type === null || phoneNumber2Type.length < 1) {
                return 'none';
            } else {
                return phoneNumber2Type;
            }
        },

        getTypeClass(phoneNumberType) {
            var typeClass = 'button small-button disabled-button ';
            
            switch (phoneNumberType) {
                case 'home':
                    typeClass += 'primary-button';
                    break;
                case 'cell':
                    typeClass += 'primary-alt-button';
                    break;
                case 'work':
                    typeClass += 'secondary-button';
                    break;
                default:
                    typeClass += 'background-button';
                    break;
            }

            return typeClass;
        },

        onEditClicked: function () {
            this.$root.setCurrentView('editContact');
        },

        onDeleteClicked: function () {
            var id = this.$root.getSelectedContact().id;
            
            this.$root.deleteContactById(id);
            this.$root.removeSelectedContact();
            this.$root.setCurrentView('contacts');
        },

        onBackClicked: function () {
            this.$root.setCurrentView('contacts');
            this.$root.removeSelectedContact();
        }
    }
});
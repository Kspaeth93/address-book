Vue.component('edit-contact', {
    template:  `<div class="text text-light text-medium">
                    <div class="text-large padding">
                        Edit Contact
                    </div>
                    <div class="padding">
                        Name<br>
                        <input  v-model="name"
                                ref="name"
                                class="input"
                                type="text" />
                    </div>
                    <div class="padding">
                        Address<br>
                        <input  v-model="address"
                                class="input"
                                type="text" />
                    </div>
                    <div class="padding">
                        Phone Number 1<br>
                        <input  v-model="phoneNumber1"
                                ref="phoneNumber1"
                                class="input"
                                type="text" />
                    </div>
                    <div class="padding">
                        Phone Number 1 Type<br>
                        <span class="text-small">Home</span>
                        <label class="radio">
                            <input  v-model="phoneNumber1Type"
                                    type="radio"
                                    name="type1"
                                    value="home" />
                            <span class="radio-button"></span>
                        </label>
                        <span class="text-small">Work</span>
                        <label class="radio">
                            <input  v-model="phoneNumber1Type"
                                    type="radio"
                                    name="type1"
                                    value="work" />
                            <span class="radio-button"></span>
                        </label>
                        <span class="text-small">Cell</span>
                        <label class="radio">
                            <input  v-model="phoneNumber1Type"
                                    type="radio"
                                    name="type1"
                                    value="cell" />
                            <span class="radio-button"></span>
                        </label>
                    </div>
                    <div class="padding">
                        Phone Number 2<br>
                        <input  v-model="phoneNumber2"
                                class="input"
                                type="text" />
                    </div>
                    <div class="padding">
                        Phone Number 2 Type<br>
                        <span class="text-small">Home</span>
                        <label class="radio">
                            <input  v-model="phoneNumber2Type"
                                    type="radio"
                                    name="type2"
                                    value="home" />
                            <span class="radio-button"></span>
                        </label>
                        <span class="text-small">Work</span>
                        <label class="radio">
                            <input  v-model="phoneNumber2Type"
                                    type="radio"
                                    name="type2"
                                    value="work" />
                            <span class="radio-button"></span>
                        </label>
                        <span class="text-small">Cell</span>
                        <label class="radio">
                            <input  v-model="phoneNumber2Type"
                                    type="radio"
                                    name="type2"
                                    value="cell" />
                            <span class="radio-button"></span>
                        </label>
                    </div>
                    <div class="padding">
                        <input  v-on:click="onSaveClicked"
                                type="button"
                                value="Save Changes"
                                class="button large-button primary-button" />
                    </div>
                    <div class="padding">
                        <input  v-on:click="onCancelClicked"
                                type="button"
                                value="Cancel"
                                class="button large-button secondary-button" />
                    </div>
                </div>`,
    data: function () {
        return {
            id: this.$root.selectedContact.id,
            name: this.$root.selectedContact.name,
            address: this.$root.selectedContact.address,
            phoneNumber1: this.$root.selectedContact.phoneNumber1,
            phoneNumber1Type: this.$root.selectedContact.phoneNumber1Type,
            phoneNumber2: this.$root.selectedContact.phoneNumber2,
            phoneNumber2Type: this.$root.selectedContact.phoneNumber2Type
        };
    },
    methods: {
        onCancelClicked: function () {
            var id = this.id;
            var contact = null;

            if (id !== undefined && id !== null) {
                contact = this.$root.getContactById(id);
            }
            
            this.$root.setCurrentView('contacts');
            if (contact) this.$root.setSelectedContact(contact);
        },

        onSaveClicked: function () {
            var valid = true;
            var id = this.id;
            var contact = null;

            var name = this.$refs.name;
            if (name.value.length < 1) {
                name.style.border = '1px solid #cf6679';
                valid = false;
            } else {
                name.style.border = 'none';
            }

            var name = this.$refs.phoneNumber1;
            if (name.value.length < 1) {
                name.style.border = '1px solid #cf6679';
                valid = false;
            } else {
                name.style.border = 'none';
            }

            if (valid) {
                if (this.id === undefined || this.id === null) {
                    this.$root.addContact({
                        id: this.id,
                        name: this.name,
                        address: this.address,
                        phoneNumber1: this.phoneNumber1,
                        phoneNumber1Type: this.phoneNumber1Type,
                        phoneNumber2: this.phoneNumber2,
                        phoneNumber2Type: this.phoneNumber2Type
                    });
                } else {
                    this.$root.updateContact({
                        id: this.id,
                        name: this.name,
                        address: this.address,
                        phoneNumber1: this.phoneNumber1,
                        phoneNumber1Type: this.phoneNumber1Type,
                        phoneNumber2: this.phoneNumber2,
                        phoneNumber2Type: this.phoneNumber2Type
                    });
                }

                if (id !== undefined && id !== null) {
                    contact = this.$root.getContactById(id);
                }

                this.$root.setCurrentView('contacts');
                if (contact) this.$root.setSelectedContact(contact);
            }

        }
    }
});
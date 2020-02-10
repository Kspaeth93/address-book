Vue.component('edit-contact', {
    template:  `<div class="text text-light text-medium">
                    <div class="text-large spacing">
                        New Contact
                    </div>
                    <div class="spacing">
                        Name<br>
                        <input  v-model="name"
                                ref="name"
                                class="input"
                                type="text" />
                    </div>
                    <div class="spacing">
                        Address<br>
                        <input  v-model="address"
                                class="input"
                                type="text" />
                    </div>
                    <div class="spacing">
                        Phone Number 1<br>
                        <input  v-model="phoneNumber1"
                                ref="phoneNumber1"
                                class="input"
                                type="text" />
                    </div>
                    <div class="spacing">
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
                    <div class="spacing">
                        Phone Number 2<br>
                        <input  v-model="phoneNumber2"
                                class="input"
                                type="text" />
                    </div>
                    <div class="spacing">
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
                    <div class="spacing">
                        <input  v-on:click="onSaveClicked"
                                type="button"
                                value="Save Changes"
                                class="button large-button primary-button spacing" /><br>
                        <input  v-on:click="onCancelClicked"
                                type="button"
                                value="Cancel"
                                class="button large-button secondary-button spacing" />
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
            this.$root.setView('contacts');
            this.$root.removeSelectedContact();
        },

        onSaveClicked: function () {
            valid = true;

            console.log(this.phoneNumber2Type);

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

                this.$root.setView('contacts');
            }

        }
    }
});
Vue.component('contact-list-item', {
    template:  `<div    v-bind:style="getStyle()" v-on:click="onContactClicked"
                        class="text text-light text-medium medium-shadow padding">
                    {{ name }}
                </div>`,
    props: [ 'id', 'name' ],
    methods: {
        getStyle: function () {
            if (this.$root.selectedContact.id === this.id) {
                return { backgroundColor: '#bb86fc' };
            } else {
                return { backgroundColor: 'transparent' };
            }

        },

        onContactClicked: function () {
            var contact = this.$root.getContactById(this.id);
            
            this.$root.setSelectedContact(contact);

            this.$root.mobile === true ? this.$root.setView('m-contact-details') : this.$root.contactsView = 'contact-detail';
        }
    }
});
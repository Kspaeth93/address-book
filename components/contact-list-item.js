Vue.component('contact-list-item', {
    template:  `<div    v-on:click="onContactClicked" v-on:click.native="onContactClicked"
                        class="contact-list-item text text-light text-medium medium-shadow padding">
                    {{ name }}
                </div>`,
    props: [ 'id', 'name' ],
    methods: {
        onContactClicked: function () {
            var contact = this.$root.getContactById(this.id);
            
            this.$root.setSelectedContact(contact);
            this.$root.setView('m-contact-details');
        }
    }
});
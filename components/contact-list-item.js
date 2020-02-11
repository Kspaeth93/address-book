Vue.component('contact-list-item', {
    template:  `<div    v-on:click="onContactClicked"
                        v-bind:style="getHighlightingStyle()" 
                        class="text text-light text-medium medium-shadow padding">
                    {{ name }}
                </div>`,
    props: [ 'id', 'name' ],
    methods: {
        onContactClicked: function () {
            var contact = this.$root.getContactById(this.id);

            this.$root.setSelectedContact(contact);
            this.$root.setCurrentView('contactDetails');
        },
        
        getHighlightingStyle: function () {
            if (this.$root.getSelectedContact().id === this.id && !this.$root.getMobile()) {
                return { backgroundColor: '#bb86fc' };
            } else {
                return { backgroundColor: 'transparent' };
            }
        }
    }
});
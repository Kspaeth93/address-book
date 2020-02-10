Vue.component('contact-toolbar', {
    template:  `<div>
                    <input  v-on:click="onNewContactClicked"
                            type="button"
                            value="New Contact"
                            class="button small-button primary-button" />
                </div>`,
    methods: {
        onNewContactClicked: function () {
            //this.$root.removeSelectedContact();

            if (this.$root.mobile) {
                this.$root.setView('m-contacts-edit');
            }
        }
    }
});
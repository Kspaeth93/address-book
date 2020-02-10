Vue.component('contact-list', {
    template:   `<div class="ui-light">
                    <contact-list-item  v-for="contact in $root.contacts"
                                        v-bind:id="contact.id"
                                        v-bind:name="contact.name"
                                        v-bind:phoneNumber="contact.phoneNumber"
                                        v-bind:key="contact.id" class="light-shadow">
                    </contact-list-item>
                    <div class="ui-medium text text-light text-large" v-show="$root.contacts.length < 1">
                        No Contacts :(
                    </div>
                </div>`
});
Vue.component('contacts', {
    template:   `<div>
                    <div class="row navbar">
                        <div class="col-12 ui-medium light-shadow">
                            <navbar v-bind:username="$root.username"></navbar>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 ui-light light-shadow">
                            <contact-toolbar></contact-toolbar>
                        </div>
                        <div class="col-4 ui-medium light-shadow">
                            <contact-list></contact-list>
                        </div>
                        <div class="col-8 ui-medium light-shadow">
                            <component v-bind:is="$root.contactsView"></component>
                        </div>
                    </div>
                </div>`
});
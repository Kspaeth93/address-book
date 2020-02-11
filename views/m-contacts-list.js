Vue.component('m-contact-list', {
    template:  `<div>
                    <div class="row navbar">
                        <div class="col-12 ui-medium light-shadow">
                            <navbar v-bind:username="$root.username"></navbar>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 ui-light light-shadow">
                            <contact-toolbar></contact-toolbar>
                        </div>
                        <div class="col-12 ui-medium light-shadow">
                            <contact-list></contact-list>
                        </div>
                    </div>
                </div>`
});
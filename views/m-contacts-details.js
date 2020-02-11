Vue.component('m-contacts-details', {
    template:  `<div>
                    <div class="row navbar">
                        <div class="col-12 ui-medium light-shadow">
                            <navbar v-bind:username="$root.username"></navbar>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 ui-medium light-shadow">
                            <contact-detail></contact-detail>
                        </div>
                    </div>
                </div>`
});
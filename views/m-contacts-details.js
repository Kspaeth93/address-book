Vue.component('m-contact-details', {
    template:  `<div>
                    <navbar v-bind:username="$root.username"></navbar>
                    <div class="row">
                        <div class="col-12 ui-medium light-shadow">
                            <contact-detail></contact-detail>
                        </div>
                    </div>
                    </div>
                </div>`
});
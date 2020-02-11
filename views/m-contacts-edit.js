Vue.component('m-contacts-edit', {
    template:  `<div>
                    <div class="row navbar">
                        <div class="col-12 ui-medium light-shadow">
                            <navbar v-bind:username="$root.username"></navbar>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 ui-medium light-shadow">
                            <edit-contact></edit-contact>
                        </div>
                    </div>
                </div>`
});
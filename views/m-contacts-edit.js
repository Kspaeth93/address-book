Vue.component('m-contacts-edit', {
    template:  `<div>   
                    <navbar v-bind:username="$root.username"></navbar>
                    <div class="row">
                        <div class="col-12 ui-medium light-shadow">
                            <edit-contact></edit-contact>
                        </div>
                    </div>
                </div>`
});
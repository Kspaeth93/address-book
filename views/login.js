Vue.component('login', {
    template:  `<div>
                    <div class="row navbar">
                        <div class="col-12 ui-medium light-shadow">
                            <navbar v-bind:username="$root.username"
                                    style="min-height: 25px;"></navbar>
                        </div>
                    </div>
                    <div class="row modal">
                        <div class="col-lg-4 col-md-6 col-sm-12 ui-medium light-shadow">
                            <login-modal></login-modal>
                        </div>
                    </div>
                </div>`
});
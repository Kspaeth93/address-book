Vue.component('settings', {
    template:  `<div>
                    <div class="row navbar">
                        <div class="col-12 ui-medium light-shadow">
                            <navbar v-bind:username="$root.username"></navbar>
                        </div>
                    </div>
                    <div class="row modal">
                        <div class="col-12 ui-medium light-shadow">
                            <settings-modal></settings-modal>
                        </div>
                    </div>
                </div>` 
});
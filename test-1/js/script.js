var test1 = new Vue({
    el: '#test-1',
    data: {
        contacts: [{
                name: 'Joanne Susan',
                infos: [{
                        type: 'home',
                        value: '(655) 456-7890'
                    },
                    {
                        type: 'work',
                        value: '(784) 333-4531'
                    },
                    {
                        type: 'cell',
                        value: '(453) 489-1212'
                    }
                ]
            },
            {
                name: 'Fred Cunningworth',
                infos: [{
                    type: 'home',
                    value: '(452) 754-1245'
                }]
            },
            {
                name: 'Spencer McMiller',
                infos: [{
                        type: 'home',
                        value: '(455) 442-1587'
                    },
                    {
                        type: 'work',
                        value: '(436) 689-7751'
                    }
                ]
            }
        ]
    }
})
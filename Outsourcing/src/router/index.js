import App from '../App.vue'
export default [{
    path: '/',
    component: App,
    children: [{
            path: '',
            component: r => require.ensure([], () => r(require('../components/basic/home/home.vue')), 'home')
                // meta: {
                //     requireAuth: true
                // }
        },
        {
            path: '/basic',
            component: r => require.ensure([], () => r(require('../components/basic/basic.vue')), 'basic'),
            redirect: '/basic/home',
            meta: {
                requireAuth: true
            },
            children: [{
                path: 'upclass',
                component: r => require.ensure([], () => r(require('../components/basic/upclass/upclass.vue')), 'upclass')
            }, {
                path: 'downwork',
                component: r => require.ensure([], () => r(require('../components/basic/downwork/downwork')), 'downwork')

            }, {
                path: 'upwork',
                component: r => require.ensure([], () => r(require('../components/basic/upwork/upwork.vue')), 'upwork')
            }, {
                path: 'downclass',
                component: r => require.ensure([], () => r(require('../components/basic/downclass/downclass.vue')), 'downclass')

            }, {
                path: 'searchmov/:scorename',
                name: 'score',
                component: r => require.ensure([], () => r(require('../components/basic/mov/searchmov.vue')), 'searchmov')
            }, {
                path: 'showmov/:id',
                name: 'showmov',
                component: r => require.ensure([], () => r(require('../components/basic/mov/showmov.vue')), 'showmov')

            }]

        },
        {
            path: 'manage',
            component: r => require.ensure([], () => r(require('../components/management/management.vue')), 'manage')

        }

        // {

        //     meta: {
        //         requireAuth: true
        //     }
        // }
    ]
}]
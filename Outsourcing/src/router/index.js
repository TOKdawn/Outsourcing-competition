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
            path: 'basic',
            component: r => require.ensure([], () => r(require('../components/basic/basic.vue')), 'basic'),
            meta: {
                requireAuth: true
            },
            children: [{
                path: 'allschool',
                component: r => require.ensure([], () => r(require('../components/basic/allschool/allschool.vue')), 'allschool')
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
                path: 'student/:id',
                name: 'student',
                component: r => require.ensure([], () => r(require('../components/basic/student/student.vue')), 'student'),
                redirect: 'student/:id/classonline',
                children: [{
                    path: 'classonline',
                    component: r => require.ensure([], () => r(require('../components/basic/student/classonline/classonline.vue')), 'classonline'),
                }, {
                    path: 'classdown',
                    component: r => require.ensure([], () => r(require('../components/basic/student/classdown/classdown.vue')), 'classdown'),
                }, {
                    path: 'homework',
                    component: r => require.ensure([], () => r(require('../components/basic/student/classdown/classdown.vue')), 'homework'),
                }, {
                    path: 'shixun',
                    component: r => require.ensure([], () => r(require('../components/basic/student/shixun/shixun.vue')), 'shixun'),
                }]
            }, {
                path: 'teacher/:id',
                name: 'teacher',
                component: r => require.ensure([], () => r(require('../components/basic/teacher/teacher.vue')), 'teacher')

            }, {
                path: 'showmov/:id',
                name: 'showmov',
                component: r => require.ensure([], () => r(require('../components/basic/mov/showmov.vue')), 'showmov')

            }, {
                path: 'login/:schoolId',
                name: 'login',
                component: r => require.ensure([], () => r(require('../components/basic/school/school.vue')), 'login')
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
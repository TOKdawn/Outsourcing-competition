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
                path: 'movieshow/:id',
                name: 'movieshow',
                component: r => require.ensure([], () => r(require('../components/basic/movieshow/movieshow.vue')), 'movieshow')
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
                    component: r => require.ensure([], () => r(require('../components/basic/student/homework/homework.vue')), 'homework'),
                }, {
                    path: 'shixun',
                    component: r => require.ensure([], () => r(require('../components/basic/student/shixun/shixun.vue')), 'shixun'),
                }, {
                    path: 'chengji',
                    component: r => require.ensure([], () => r(require('../components/basic/student/chengji/chengji.vue')), 'chengji'),
                }, {
                    path: 'shoucang',
                    component: r => require.ensure([], () => r(require('../components/basic/student/shoucang/shoucang.vue')), 'shoucang'),
                }, {
                    path: 'shixuntalk',
                    component: r => require.ensure([], () => r(require('../components/basic/student/shixuntalk/shixuntalk.vue')), 'shixuntalk'),
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
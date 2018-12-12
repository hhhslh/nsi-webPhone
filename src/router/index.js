import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index'
import schoolIndex from '../components/schoolIndex'
import Header from '../components/header'
import schoolDetail from '../components/schoolDetail'
import companyIndex from '../components/companyIndex'
import talentIndex from '../components/talentIndex'
import dataIndex from '../components/dataIndex'

Vue.use(Router)

const routes = [{
        path: '/',
        name: 'Header',
        component: Header,
    }, {
        path: '/main',
        name: 'Index',
        component: Index,
        children: [{
            path: '/schoolIndex',
            name: 'schoolIndex',
            component: schoolIndex,
        }, {
            path: '/schoolDetail',
            name: 'schoolDetail',
            component: schoolDetail,
        }, {
            path: '/companyIndex',
            name: 'companyIndex',
            component: companyIndex,
        }, {
            path: '/talentIndex',
            name: 'talentIndex',
            component: talentIndex,
        }, {
            path: '/dataIndex',
            name: 'dataIndex',
            component: dataIndex,
        }]
    }

]

const router = new Router({
    // mode: 'history',
    routes
})

export default router;
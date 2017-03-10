//1.单文件的组件 首先创建一个.vue后缀的文件
//2.在主模块引入此组件并注册使用
//3.在命令行安装vue-loader并在webpack.config.js配置vue-loader
//4.安装vue-template-compiler
//5.执行webpack打包
//npm install vue
// var Vue = require("vue");
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';



//接下来//必须要通过 Vue.use() 明确地安装路由功能


import Vuex from 'vuex';
Vue.use(VueRouter);

Vue.use(VueResource);
Vue.use(Vuex);
var store = new Vuex.Store({
    state: {
        name: "maria"
    },
    mutations: {
        set_fe: function(state, data) {
            state.name = data
        }
    }
})

// const Foo = {
// 	template:'<div>foo</div>'
// };
// const Bar = {
// 	template:'<div>bar</div>'
// };

var Foo = require('./components/foo.vue');
var Bar = require('./components/bar.vue');
var UserProfile = {
    template: '<p>{{name}}</p>',
    data: function() {
        return {
            name: ''
        }
    },
    mounted: function() {
        console.log(this)
        console.log(this.$route.params)
        this.$http.jsonp('test.php', {
            params: {
                callback: "JSON_CALLBACK"
            }
        }).then(function(data) {
            console.log(data.data);
            this.name = data.data.name
        }, function(err) {
            console.log(err) //打印失败的信息
        })
    }
};
var UserPosts = {
    template: '<p>UserPosts</p>',
    mounted: function() {
        console.log(this.$route.params)
    }
}

const router = new VueRouter({
    routes: [{
        path: '/foo',
        component: Foo,
        children: [{
            path: 'a/:id',
            component: UserProfile
        },{
            path: 'b/:id',
            component: UserPosts,
        }]
    }, {
        path: '/bar',
        component: Bar
    }]

})

new Vue({
    //el:'#demo',
    router: router,
    store: store
}).$mount('#demo')

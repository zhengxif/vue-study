let Vue;
const forEach = (obj,cb)=>{ // 迭代对象的 会将对象的 key 和value 拿到
    Object.keys(obj).forEach(key=>{
        cb(key,obj[key]);
    })
}
class ModuleCollection {
    constructor(options) {
        this.register([], options); // 注册模块 将模块注册成树结构
    }
    register(path, rootModule) {
        let module = {
            _rawModule: rootModule,
            _children: {},
            state: rootModule.state
        }
        if (path.length == 0) {
            this.root = module;
        }else {
            let parent = path.slice(0,-1).reduce((root,current) => {
                return root._children[current]
            }, this.root)

            parent._children[path[path.length - 1]] = module;
        }
        // 看当前模块是否有modules
        if (rootModule.modules) {
            Object.keys(rootModule.modules).forEach( moduleName => {
                this.register(path.concat(moduleName), rootModule.modules[moduleName]);
            })
        }
    }
}
const installModule = (store, rootState, path, rootModule) => {
    // 处理state
    if (path.length > 0) {
        let parent = path.slice(0, -1).reduce((root, current) => {
            return root[current];
        }, rootState)
        Vue.set(parent, path[path.length-1], rootModule.state);
    }
    // 以下代码都是在处理  模块中 getters actions mutation
    debugger
    let getters = rootModule._rawModule.getters;
    if (getters) {
        forEach(getters, (gettersName, fn) => {
            Object.defineProperty(store.getters, gettersName, {
                // 让getter执行当自己的状态
                get() {
                    return fn(rootModule.state);
                }
            })
        })
    }
    let mutations = rootModule._rawModule.mutations;
    if (mutations) {
        forEach(mutations, (mutationName, fn) => {
            let mutations = store.mutations[mutationName] || [];
            mutations.push((payload) => {
                fn(rootModule.state, payload)
            });
            store.mutations[mutationName] = mutations;
        })
    }
    let actions = rootModule._rawModule.actions;
    debugger
    if (actions) {
        forEach(actions, (actionName, fn) => {
            let actions = store.actions[actionName] || [];
            actions.push((payload) => {
                fn(store, payload);
            });
            store.actions[actionName] = actions;
        })
    }
    // 挂载儿子
    forEach(rootModule._children, (moduleName,module) => {
        installModule(store, rootState, path.concat(moduleName), module);
    })
}
class Store {
    constructor(options = {}) {
        // 将用户的状态放到store中
        // 并支持响应式, 数据更新，更新视图
        this.s = new Vue({
            data() {
                return {
                    state: options.state
                }
            }
        });
        // 维护全局数据
        this.getters = {};
        this.mutations = {};
        this.actions = {};
        this._modules = new ModuleCollection(options);

        // 递归将结果进行分类
        // this 整个store
        // this.state 当前的根状态
        // [] 为了递归创建
        // this._modules.root  从根模块开始安装
        installModule(this, this.state, [], this._modules.root);
        // let getters = options.getters;
        // this.getters = {};

        // 计算属性
        // Object.keys(getters).forEach(getterName => {
        //     Object.defineProperty(this.getters, getterName, {
        //         get: () => {
        //             return getters[getterName](this.state);
        //         }
        //     })
        // })

        // let mutations = options.mutations;
        // this.mutations = {};
        //订阅mutations
        // Object.keys(mutations).forEach( mutationName => {
        //     this.mutations[mutationName] = (payload) => {
        //         // 内部的第一个参数是状态
        //         mutations[mutationName](this.state, payload);
        //     }
        // })

        // let actions = options.actions;
        // this.actions = {};
        //订阅actions
        // Object.keys(actions).forEach( actionName => {
        //     this.actions[actionName] = (payload) => {
        //         // 内部的第一个参数是store
        //         actions[actionName](this, payload);
        //     }
        // })
        
    }
    get state() { // 类的属性访问器
        return this.s.state;
    }
    // 提交更改，找到对应函数执行， 发布mutations
    commit = (mutationName, payload) => {
        this.mutations[mutationName].forEach( fn => fn(payload));
    }
    // 提交更改，找到对应函数执行， 发布actions
    dispatch = (actionName, payload) => {
        this.actions[actionName].forEach( fn => fn(payload));
    }

}
const install = (_Vue) => {
    Vue = _Vue; // vue的构造函数
    Vue.mixin({
        // 在组件创建之前会被调用
        beforeCreate() {
            //没有将$store放在原型上，Vue.prototype.$store
            // 在这里，需要拿到store，给每个组件都增加$sotre属性
            if (this.$options && this.$options.store) {
                // 给根实例增加$store属性，
                this.$store = this.$options.store;
            }else {
                // 有可能单独创建实例，那就获取不到$store属性
                this.$store = this.$parent && this.$parent.$store;
            }
        }
    })
}
export default {
    // 给用户提供install方法，默认在use时会被调用
    install,
    Store
}


// let root = {
//     _raw: options,
//     _children: {
//         a: {
//             _raw: {},
//             _children: {},
//             state: { a: 1 }
//         },
//         b: {
//             _raw: {},
//             _children: {},
//             state: { b: 1 }
//         },
//     },
//     state: options.state
// }
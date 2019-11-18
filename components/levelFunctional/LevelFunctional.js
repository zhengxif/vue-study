/* eslint-disable */

// 函数式组件
export default {
    props: {
        type: {
            type: String
        }
    },
    data() {
        return {
            val: 1
        }
    },
    methods: {
        input(e) {
            this.val = e.target.value;
        }
    },
    render(h) { // createElement的简写，生成vnode
        // return h('h' + this.type, {}, this.$slots.default);

        // 用jsx
        // let tag = 'h' + this.type;
        // return <tag>{this.$slots.default}</tag>

        return <div>
            {this.val}
            <input type="text" value={this.val} on-input={this.input} />
        </div>
    }
}
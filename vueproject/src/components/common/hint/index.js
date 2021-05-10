import hint from "@/components/common/hint/hint";

const obj = {}

obj.install = Vue => {
    //1.创建组件构造器
    const hintContrustor = Vue.extend(hint)
    //2.new 通过组件构造器，创建组件对象
    const Hint = new hintContrustor()
    //3. 手动挂载到某个元素上
    Hint.$mount(document.createElement('div'))
    //4.toast.$el对应的就是div
    document.body.appendChild(Hint.$el)

    Vue.prototype.$hint = Hint
}
export default obj

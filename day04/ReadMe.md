# React 利用 state 和 onChange 自动收集表单数据(受控组件)

## React 利用 props 进行组件间的数据传递(有外向内传)

## React 利用函数传递的方式,实现子组件向父组件传递数据(由内向外传)

## React 生命周期函数

`旧版`

1. 组件初始化挂载阶段的勾子函数`只会调用一次`

   1. constructor()
   2. UNSAFE_componentWillMount()
   3. render() (`有用`)
      - 通常用于设置要渲染的虚拟 DOM 对象
   4. componentDidMount() (`有用`)
      - 通常用于设置一次性任务如:
        (1) `发送 ajax 请求`
        (2) `设置定时器`
        (3) `绑定事件等`
        (4) `操作 DOM`

2. 组件更新阶段的勾子函数
   1. UNSAFE_componentWillReceivedProps()
   2. shouldComponentUpdate() (`有用`)
      - 返回 true/false (true:表示重新渲染,false 表示不渲染)
      - 优化: 对比新旧 state 和 props 数据,如果相同不渲染,如果不同,则重新渲染
      - 原因: `因为父组件更新,会导致所有子组件全部更新`
   3. UNSAFE_componentWillUpdate()
   4. render()
   5. componentDidUpdate()
3. 组件卸载阶段的勾子函数
   1. componentWillUnmount() (`有用`)
      - 通常用于做一些收尾任务,例如:清除定时器,解绑事件等,防止内存泄露

`新版`

1. 组件初始化挂载阶段
   - constructor()
   - getDerivedStateFromProps()
   - render()
   - componentDidMount()
2. 组件更新阶段
   - getDerivedStateFromProps()
   - shouldComponentUpdate()
   - render()
   - getSnapshotBeforeUpdate()
     - `可以操作DOM`
   - componentDidUpdate()
3. 组件卸载阶段
   - componentWillUnmount()

## 虚拟 DOM Diff 算法

1.  虚拟 DOM 与真实 DOM

    - 虚拟 DOM 是一个 js 对象,记录了关联真实 DOM 的所有信息
    - 真实 DOM 就是页面上 DOM 元素,有展示效果
    - React/vue 框架,为了提升页面渲染效果,在数据和真实 DOM 元素之间加了一层虚拟 DOM,根据数据操作虚拟 DOM,最后再渲染为真实 DOM 元素

2.  虚拟 DOM Diff 算法的缘由

    - 页面渲染的过程是,先根据数据,生成虚拟 DOM 树,再根据虚拟 DOM 树,渲染对应的真实 DOM 元素
    - 组件更新时,数据发生了修改,会生成新的虚拟 DOM 树,通过比较新旧虚拟 DOM 树,找出差异点,最终渲染为真实 DOM 树时,只渲染差异部分,相同部分则不去重新渲染,从而达到提升渲染效率的目的

3.  虚拟 DOM Diff 算法优化的三个方面

    - tree diff
      - 树形结构对比不同
      - 基于场景:
        - 通常情况下,我们对页面进行更新时,不会跨层级移动 dom 节点,即虚拟 dom 树的结构相对稳定
      - 优化算法:
        - 只比较同层级的虚拟 dom 节点,如果相同,再进行子节点的对比,依次下去;如果不同,则直接删除旧 dom 节点,替换为新的 dom 节点
      - 特殊需求:
        - 如果确实存在移动 dom 节点的需求,可以通过 css 样式定位的方式尝试去实现
    - component diff

      - 组件对比不同
      - 基于的前提:
        - 常用的组件时类组件,相同类的组件,其生成的虚拟 dom 树结构相似,不同类的组件,生成的虚拟 dom 树一定不同
      - 优化算法:

        - 新旧虚拟 dom 树对比时,如果是组件,先对比两组件的类是否相同,如果不同,则直接创建新的替换;如果相同,则再进行 tree diff 环节

    - element diff
      - 元素对比不同
      - 基于的前提:
        react 要求给同层级同组的元素添加唯一的 key 属性
      - 优化算法:
        - 进行新旧虚拟 dom 元素对比时,先比较 key 属性,如果不同,直接创建新的虚拟 dom 元素替换;如果相同,再判断位置是否相同,如果不同,则进行位置的交换

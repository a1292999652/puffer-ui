// 导入组件，组件必须声明 name
import pufferButton from './src/puffer-button'

// 为组件提供 install 安装方法，供按需引入
pufferButton.install = function (Vue) {
    Vue.component(pufferButton.name, pufferButton)
};

// 默认导出组件
export default pufferButton

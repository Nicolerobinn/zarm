(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{465:function(n,e,s){"use strict";s.r(e);var a=s(4),o=s.n(a),r=s(5),t=s.n(r),c=s(2),i=s.n(c),d=s(6),m=s.n(d),g=s(488),l=(s(756),function(n){function e(){var n,a,r,c;t()(this,e);for(var d=arguments.length,m=Array(d),g=0;g<d;g++)m[g]=arguments[g];return a=r=i()(this,(n=e.__proto__||o()(e)).call.apply(n,[this].concat(m))),r.document=function(){return{document:s(515),className:"message-page"}},c=a,i()(r,c)}return m()(e,n),e}(g.a));e.default=l},515:function(n,e){n.exports="# 消息 Message\n\n\n\n## 基本用法\n```jsx\nimport { Message, Icon } from 'zarm';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Message>普通</Message>\n        <Message theme=\"danger\">自定义主题</Message>\n        <Message icon={<Icon type=\"wrong-round\" />}>自定义图标</Message>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 可操作\n```jsx\nimport { Message } from 'zarm';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Message hasArrow onClick={() => alert('click this message!')}>链接样式的</Message>\n        <Message closable>可关闭的</Message>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| theme | string | 'primary' | 主题，可选值 `default`、`primary`、`success`、`warning`、`danger` |\n| size | string | 'md' | 设置大小，可选值为 `md`、`lg` |\n| icon | ReactNode | - | 设置图标 |\n| closable | boolean | false | 是否显示关闭按钮 |\n| hasArrow | boolean | false | 是否显示箭头 |\n| onClick | () => void | - | 点击后触发的回调函数 |\n"},756:function(n,e,s){}}]);
# ng1-ant
我能用[ant design](https://github.com/ant-design/ant-design)的样式做一套angular的组件吗……

做的过程中，对原代码存疑的地方：

日历控件：

- ant-calendar下面的tbody被命名为ant-calendartbody，感觉没有必要。
- 用于表达“上个月的日期”的样式是“ant-calendar-cell ant-calendar-last-month-cell”，这类复合的东西，特例部分名称可简化。
- ant-calendar-year-panel等结构不合理，合理的结构应当是：

	- 日历有外围容器，内部三个元素，分别是：日期选择表格，月份选择表格，年份选择表格。
	- 三个元素各自是独立的，始终只有一个显示
	- 三者的内部结构也应当是一致的，包括各自的header，body，footer，或者可以考虑header和footer的共用（有些麻烦，而且意义不大）
	- 现在的版本中，ant-calendar-year-panel位于ant-calendar-header中，这个很不合适，虽然说它是从这里的年份上面点击出来的，但不代表就应当放在这里。现在的结构看上去比较乱。



# 进度

- [x] checkbox凑合能用了，可以设置disabled，绑定数据
- [x] calendar凑合能用，但样式不太合理，已经向ant那边提了[issue](https://github.com/ant-design/ant-design/issues/282)，看能不能优化下
- [x] datepicker能点出来了，可以设置disabled，最大最小日期
- [x] number input凑合能用了，可以设置disabled，最大最小值
- [x] slider 凑合能用了，可以设置disabled，待优化

- [x] tree凑合能用了，可以加载数据，可以选中，可以复选，可以获取选中数据


# 运行方式

- npm install
- npm run dev

浏览器打开：http://localhost:8080/



# todo

我想了一个办法，在一套组件中使用不同的模板，然后生成两套长相不同，但逻辑一致的控件库 :100:

- 每个组件都引入多种模板，模板从属于主题
- 在config中切换当前主题，然后每个组件中引用config，选取当前模板

这样在使用的时候，只要切换这个config的配置，就可以动态换模板了。但是有个问题，这样就把多套模板都打包进去了，感觉不太好，所以考虑把所有模板集中放置？模板打成单独的包。

所以，最后就会变成组件库只存放核心逻辑，外围多套界面模板和样式。


但是还要解决几个问题：

- 如果想要打出包含不同主题的bundle文件，应该如何配置（这是不考虑运行时切换主题的情况），打出来的bundle每个都单独可用，分别是独立的主题
- 如果想要打出核心逻辑bundle，加上若干外挂的模板、样式bundle，应该如何配置？（这种情况下可以运行时切换主题），使用的时候，必须至少引入核心逻辑bundle和一个主题bundle
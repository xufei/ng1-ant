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
- [ ] slider


# 运行方式

- npm install
- npm run dev

浏览器打开：http://localhost:8080/
# my-ts-cli

## 设计初衷

最近开始学习TS，想要将每天学习时使用的小demo统一保存起来，但是每次都创建一模一样的目录结构感觉太麻烦了，刚好朋友跟我说了一下他最近做了一个简单的脚手架，于是我也就想着查查资料自己捣鼓一个出来。于是经过了几天的努力和完善，做出了这样一个简单的脚手架。

## 简介

御用ts项目脚手架！从构建项目到运行项目一气呵成！只需要一个根目录，可以下其下构建更多子项目，并且用一套命令对子项目进行运行，无需更多的配置。生成的目录结构如下：

```
|-- rootProject
	|-- subProject1
		|-- script
			|-- subProject1.ts
		|-- style
			|-- subProject1.css
		|-- images
		|-- subProject1.html
	|-- subProject2
		|-- script
			|-- subProject2.ts
		|-- style
			|-- subProject2.css
		|-- images
		|-- subProject2.html
	|-- package.json
	|-- webpack.config.dev.js
	|-- webpack.config.js
```

## 使用

1. 安装和初始化项目：

```shell
# 下载my-ts-cli
npm i my-ts-cli -g
# 初始化项目根目录
my-ts-cli init
# 下载项目依赖
npm i
# 或者
yarn
```

2. 创建、删除子项目：

```shell
my-ts-cli create <subProject>
my-ts-cli delete <subProject>
```

3. 运行子项目：

```shell
yarn sever -sub <subProject>
# 或者
npm run serve -- --sub <subProject>
```


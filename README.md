## 简介

支持模板管理的项目初始化工具

### 安装 eve

`tnpm install -g eve`

### 模板管理

+ `eve` 不单独维护模板，任何用户可以将自己常用的模板上传到 git 中，然后通过 adam 基于模板做项目初始化，并可自动填入需要的信息

### 添加模板

+ 通过命令 `eve tpl add <template-name> <template-git-repo-url>` 添加模板

### 项目初始化

+ 添加模板后，就可以通过 `eve` （不加任何参数）基于已添加的模板初始化项目

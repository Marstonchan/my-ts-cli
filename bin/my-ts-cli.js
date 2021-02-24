#!/usr/bin/env node

const { program } = require('commander');
const version = require('../package.json').version;

// 引入初始化项目函数
const initFn = require('./init');
// 引入创建项目函数
const createFn = require('./create');
// 引入删除项目函数
const deleteFn = require('./delete');

program.version(version, "-v, --version");

program
    .command("init")
    .description("初始化项目")
    .action(initFn);
// 创建子项目
program
    .command("create <app-name>")
    .description("新建子项目")
    .action(createFn);
// 删除子项目
program
    .command('delete <app-name>')
    .description("删除子项目")
    .action(deleteFn);
program.parse(process.argv);

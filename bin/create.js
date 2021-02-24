const path = require('path');
const mkdirp = require('mkdirp');
const fs = require('fs');
const chalk = require('chalk');
const inquirer = require('inquirer');

module.exports = function (name) {
    // 判断子项目是否存在
    if (fs.existsSync(path.join(process.cwd(), name))) {
        console.log(chalk.blue('目录已经存在，请重新输入(或者按回车取消创建)'));
        inquirer
            .prompt([
                {
                    type: 'string',
                    name: 'subObjectName',
                    message: `子项目名称：`
                }
            ])
            .then((res) => {
                if (res.subObjectName) {
                    createObj(res.subObjectName);
                } else {
                    return
                }
            })
    } else {
        createObj(name);
    }
}
// 创建工程的主要函数
async function createObj(name) {
    let subProjectDir = path.join(process.cwd(), name);
    // 创建项目根目录
    await mkdirp(subProjectDir);
    // 创建项目下的子目录
    console.log(chalk.cyan('\n构建目录结构......'));
    let tsDir = await mkdirp(path.join(subProjectDir, 'script'));
    let cssDir = await mkdirp(path.join(subProjectDir, 'style'));
    await mkdirp(path.join(subProjectDir, 'images'));
    console.log(chalk.cyan('目录结构构建完成!'));
    console.log(chalk.cyan('构建模板文件......'));

    // 在子目录下创建文件
    await writeFile(path.join(subProjectDir, `${name}.html`), require('./templete').htmlTemp(name));
    await writeFile(path.join(tsDir, `${name}.ts`), require('./templete').tsTemp(name));
    await writeFile(path.join(cssDir, `${name}.css`), '');
    await writeFile(path.join(subProjectDir, 'tsconfig.json'), require('./templete').tsConfig)
    console.log(chalk.cyan('模板文件创建完成!'));

    console.log(chalk.green('\n项目创建成功！可以使用以下命令运行项目：'))
    console.log(chalk.magenta(`\tyarn dev -sub ${name}`))
}
// 向文件中写入内容
function writeFile(filePath, data) {
    return new Promise((resolved, rejected) => {
        fs.writeFile(filePath, data, (err) => {
            if (err) {
                rejected(err)
            } else {
                resolved('written complited')
            }
        })
    })
}
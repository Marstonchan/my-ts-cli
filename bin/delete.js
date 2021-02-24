const path = require('path');
const mkdirp = require('mkdirp');
const fs = require('fs');
const chalk = require('chalk');
const inquirer = require('inquirer');

module.exports = function (name) {
    if (fs.existsSync(path.join(process.cwd(), name))) {
        inquirer
            .prompt([
                {
                    type: 'confirm',
                    name: 'ifDelete',
                    message: `你确定要删除${name}吗？删除后不可恢复！`,
                    default: false
                }
            ])
            .then(res => {
                if (res.ifDelete) {
                    fs.rmdirSync(path.join(process.cwd(), name), { recursive: true });
                    console.log(chalk.green(`成功删除子项目${name}`))
                } else {
                    return
                }
            })
    } else {
        console.log(chalk.cyan('子项目不存在'))
    }
}
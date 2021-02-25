const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

module.exports = async function () {
    let root = process.cwd();
    await writeFile(path.join(root, 'package.json'), require('./templete').packageJSonTemp);
    await writeFile(path.join(root, 'webpack.config.dev.js'), require('./templete').webpackDev);
    await writeFile(path.join(root, 'webpack.config.js'), require('./templete').webpack);
    console.log(chalk.green('\n项目初始化完成！在运行之前请先安装依赖：'))
    console.log(chalk.magenta(`\tnpm install 或 yarn`));
    console.log(chalk.green('\n安装完成后使用以下命令运行子项目'));
    console.log(chalk.magenta(`\tyarn serve -sub <subProjectName>`), 'or', chalk.magenta(`npm run serve -- -sub <subProjectName>`));
}

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
module.exports = (api, options) => {
    const fs = require('fs')

    // 通过preset的形式配置opts.router，这里则不需要
    const routerPath = api.resolve('./src/router.js')
    options.router = options.router || fs.existsSync(routerPath)

    const filesToDelete = [
        'src/assets/logo.png',
        'src/views/About.vue',
        'src/views/Home.vue',
    ]
    console.log('\n[custom-tpl plugin tips]\n \t GeneratorAPI options:', options)

    api.render(files => {
        Object.keys(files)
            .filter(name => filesToDelete.indexOf(name) > -1)
            .forEach(name => delete files[name])
    })

    // 公共基础目录和文件
    api.render('./template/default');

    // 安装一些基础公共库
    api.extendPackage({
        dependencies: {
            "axios": "^0.18.0",
            "lodash": "^4.17.10",
            "keymirror": "^0.1.1"
        },
        devDependencies: {
            "mockjs": "^1.0.1-beta3"
        }
    });

    // 安装 vuex
    if (options.vuex) {
        api.extendPackage({
            dependencies: {
                vuex: '^3.0.1'
            }
        });

        api.render('./template/vuex');
    }

    // 安装 element-ui 库
    if (options.elementUI) {
        api.extendPackage({
            devDependencies: {
                "element-ui": "^2.4.6"
            }
        });
    }



    // 配置文件
    api.render({
        './.eslintrc.js': './template/_eslintrc.js',
        './.gitignore': './template/_gitignore',
        './.postcssrc.js': './template/_postcssrc.js',
        './a.yaml': './template/a.yaml'
    });
}
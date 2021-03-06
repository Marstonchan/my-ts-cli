
const htmlTemp = function (name) {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

</body>

</html>`
}
const tsTemp = function (name) {
    return `import '../style/${name}.css';
    console.log('hello world ${name}')`
}
const tsConfig = `{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */
    /* Basic Options */
    // "incremental": true,                   /* Enable incremental compilation */
    "target": "es5", /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "commonjs", /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    // "lib": [],                             /* Specify library files to be included in the compilation. */
    // "allowJs": true,                       /* Allow javascript files to be compiled. */
    // "checkJs": true,                       /* Report errors in .js files. */
    // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
    // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
    // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
    // "sourceMap": true,                     /* Generates corresponding '.map' file. */
    // "outFile": "./",                       /* Concatenate and emit output to single file. */
    "outDir": "./js/", /* Redirect output structure to the directory. */
    // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    // "composite": true,                     /* Enable project compilation */
    // "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information */
    // "removeComments": true,                /* Do not emit comments to output. */
    // "noEmit": true,                        /* Do not emit outputs. */
    // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
    // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */
    /* Strict Type-Checking Options */
    "strict": true, /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,              /* Enable strict null checks. */
    // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
    // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */
    /* Additional Checks */
    // "noUnusedLocals": true,                /* Report errors on unused locals. */
    // "noUnusedParameters": true,            /* Report errors on unused parameters. */
    // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
    // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */
    // "noUncheckedIndexedAccess": true,      /* Include 'undefined' in index signature results */
    /* Module Resolution Options */
    // "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
    // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "typeRoots": [],                       /* List of folders to include type definitions from. */
    // "types": [],                           /* Type declaration files to be included in compilation. */
    // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    "esModuleInterop": true, /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */
    // "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules. */
    /* Source Map Options */
    // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
    // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */
    /* Experimental Options */
    // "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
    // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */
    /* Advanced Options */
    "skipLibCheck": true, /* Skip type checking of declaration files. */
    "forceConsistentCasingInFileNames": true /* Disallow inconsistently-cased references to the same file. */
  }
}`
const packageJSonTemp = `{
  "name": "index",
  "version": "0.1.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "serve": "webpack-dev-server --config webpack.config.dev.js --progress",
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "chalk": "^4.1.0",
    "commander": "^7.1.0",
    "css-loader": "^5.0.2",
    "file-loader": "^6.2.0",
    "html-loader": "^2.1.0",
    "html-webpack-plugin": "^4.5.2",
    "inquirer": "^7.3.3",
    "ip": "^1.1.5",
    "mkdirp": "^1.0.4",
    "style-loader": "^2.0.0",
    "ts-loader": "^8.0.17",
    "typescript": "^4.1.5",
    "url-loader": "^4.1.1"
  },
  "devDependencies": {
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.11",
    "webpack-dev-server": "^3.11.0"
  }
}
`
const webpackDev = `const { program } = require('commander');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

program
    .option('-sub --subProject <subProjecttName>')
    .option('--config')
    .option('--progress')
program.parse(process.argv);
const subProjectName = program.opts().subProject;

module.exports = {
    entry: `+ '`./${ subProjectName }/script/${ subProjectName }.ts`' + `,
    output: {
        filename: ` + '`./${ subProjectName }.js`' + `,
        path: path.resolve(__dirname, ` + '`${ subProjectName }/dist`' + `)
    },
devServer: {
    host: 'localhost',
        open: true,
            port: 8888,
                hot: true
},
module: {
    rules: [
        {
            test: /.ts$/,
            use: ['ts-loader']
        },
        {
            test: /.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /.(jpg|png|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'images/[name].[ext]'
                }
            }
        }
    ]
},
plugins: [
    new HtmlWebpackPlugin({
        template: `+ '`./${subProjectName}/${subProjectName}.html`' + `
    })
]
}`
const webpack = `const { program } = require('commander');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

program
    .option('-sub --subProject <subProjecttName>')
    .option('--config')
    .option('--progress')
program.parse(process.argv);
const subProjectName = program.opts().subProject;

module.exports = {
    entry: `+ '`./${ subProjectName }/script/${ subProjectName }.ts`' + `,
    output: {
        filename: `+ '`./${ subProjectName }.js`' + `,
        path: path.resolve(__dirname, ` + '`${ subProjectName }/dist`' + `)
    },
devServer: {
    host: 'localhost',
        open: true,
            port: 8888,
                hot: true
},
module: {
    rules: [
        {
            test: /.ts$/,
            use: ['ts-loader']
        },
        {
            test: /.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /.(jpg|png|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'images/[name].[ext]'
                }
            }
        }
    ]
},
plugins: [
    new HtmlWebpackPlugin({
        template: ` + '`./${ subProjectName }/${subProjectName}.html`' + `
    }),
new CleanWebpackPlugin()
],
mode: 'production'
}`
module.exports = {
    htmlTemp: htmlTemp,
    tsConfig: tsConfig,
    tsTemp: tsTemp,
    packageJSonTemp: packageJSonTemp,
    webpackDev: webpackDev,
    webpack: webpack
}
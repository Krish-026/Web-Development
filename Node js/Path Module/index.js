const path = require('node:path')
// 14 different properties and method
// In this we study 7 of them

console.log(__filename)
console.log(__dirname)
console.log('************************************')
console.log(path.parse(__filename))
console.log(path.parse(__dirname))
console.log(path.format(path.parse(__filename)))

console.log(path.isAbsolute(__filename))
console.log(path.isAbsolute('./index.js'))

console.log(__filename);
console.log(__dirname)

console.log(path.basename(__filename))
console.log(path.basename(__dirname))

console.log(path.extname(__filename))
console.log(path.extname(__dirname))
console.log('************************************')
console.log('Path Join')
console.log(path.join('OuterFolder', 'InnerFolder', 'index.js'))
console.log(path.join('/OuterFolder', 'InnerFolder', 'index.js'))
console.log(path.join('/OuterFolder', '//InnerFolder', 'index.js'))
console.log(path.join('/OuterFolder', '//InnerFolder', '../index.js'))
console.log(path.join('/OuterFolder', '//InnerFolder', '../../index.js'))
console.log(path.join(__dirname, 'data.json'))
console.log('************************************')
console.log('************************************')
console.log('Path resolve')
console.log(path.resolve('OuterFolder', 'InnerFolder', 'index.js'))
console.log(path.resolve('/OuterFolder', 'InnerFolder', 'index.js'))
console.log(path.resolve('/OuterFolder', '//InnerFolder', 'index.js'))
console.log(path.resolve('/OuterFolder', '//InnerFolder', '../index.js'))
console.log(path.resolve('/OuterFolder', '//InnerFolder', '../../index.js'))
console.log(path.resolve(__dirname, 'data.json'))
console.log('************************************')
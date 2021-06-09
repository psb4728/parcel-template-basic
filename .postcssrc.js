// ESM
// CommonJS node.js에서는 

// import sutoperfixer from 'autoprefixer'
// const autoprefixer = require('autoprefixer')

// export {
//  plugins: [
//    autoprefixer
//  ]
// }
// module.exports = {
//   plugins: [
//     autoprefixer
//   ]
// }

// 변수를 선언하지 않고 최대한 간소하게 작성하는 방법
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}

const pack = [
  require('./models'),
  // require('./CRS'),
].reduce((all, pack) => {
  Object.assign(all, pack)
  return all
}, {})

const { split } = require('./split-merge')
split(Object.keys(pack).map(k => pack[k]), './models')

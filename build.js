const fs = require('fs-extra')

// Remove dist
fs.removeSync('public')

// This is a sample, so it only copy.
// In fact, the result of the build by webpack, etc. will be output to the public.
fs.copySync('src', 'public')

export function mergeOptions (defaults, settings) {
  let options = Object.assign({}, defaults, settings)

  // `Object.assign` do not deeply merge objects, so we
  // have to do it manually for every nested object
  // in options. Although it does not look smart,
  // it's smaller and faster than some fancy
  // merging deep-merge algorithm script.
  //
  // example below of nested object mergin if needed
  //
  // if (settings.hasOwnProperty('classes')) {
  //   options.classes = Object.assign({}, defaults.classes, settings.classes)

  //   // Merge
  //   const properties = ['direction', 'type', 'slide', 'arrow', 'nav']
  //   properties.forEach(property => {
  //     if (settings.classes.hasOwnProperty(property)) {
  //       options.classes[property] = { ...defaults.classes[property], ...settings.classes[property] }
  //     }
  //   })
  // }

  // if (settings.hasOwnProperty('breakpoints')) {
  //   options.breakpoints = Object.assign({}, defaults.breakpoints, settings.breakpoints)
  // }

  return options
}

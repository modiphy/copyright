export default function addPipe(color = 'inherit', opacity = 0.5, margin = '0 0.5em') {
  return `
    <span style="color: ${color}; opacity: ${opacity}; margin: ${margin};">|</span>
  `
}

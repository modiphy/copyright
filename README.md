# Modiphy Copyright
### simple example
```html
<div id="modiphy-copyright">
</div>

<script src="https://cdn.jsdelivr.net/gh/modiphy/copyright@latest/dist/index.js"></script>
<script>
 addCopyright('#modiphy-copyright',{
  companyName: 'Cancare, Inc.'
 })
</script>
```

### with all the options
```html
<script>
 addCopyright('#modiphy-copyright',{
  companyName: 'Southease Community Health Systems',
  color: '#ccc', // inherit
  logoColor: '#fff', // currentColor
  logoHeight: '2em', // 1.25em
  logoMargin: '0.02 0 0 0.3em', // '0.02 0 0 0.3em',
  pipeColor: '#ff0', // inherit
  pipeOpacity: 1, // 0.5
  pipeMargin: '0 1em', // 0 0.5em
 })
</script>
```

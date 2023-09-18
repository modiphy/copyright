import defaults from './defaults'
import { mergeOptions } from '../utils/object'
import modiphyLogo from './modiphy-logo'
import addPipe from './add-pipe'

export default class Copyright {
  /**
   * Construct copyright.
   *
   * @param  {String} selector
   * @param  {Object} options
   */
  constructor(selector, options = {}) {
    this.selector = selector
    this.settings = mergeOptions(defaults, options)
    this.container = document.querySelector(this.selector)

    this.currentYear = new Date().getFullYear()
    this.companyName = this.settings.companyName
    this.container.style.display = 'inline-flex'
    this.container.style.alignItems = 'center'
    this.container.style.flexWrap = 'wrap'
    this.container.style.color = this.settings.color

    this.container.innerHTML = `
      <span>©${this.currentYear} ${this.companyName}</span>
      ${addPipe(this.settings.pipeColor, this.settings.pipeOpacity, this.settings.pipeMargin)}
      <span>All rights reserved</span>
      ${addPipe(this.settings.pipeColor, this.settings.pipeOpacity, this.settings.pipeMargin)}
      <span>Built by</span>
      <a href="https://www.modiphy.com" title="MODIPHY® DESIGN" style="display: inline-flex; color: inherit;">${modiphyLogo(
        this.settings.logoColor,
        this.settings.logoHeight,
        this.settings.logoMargin,
      )}</a>
    `
  }
}

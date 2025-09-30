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
    // get domain name from window.location.href
    this.domainName = window.location.href.split('/')[2]

    this.logoLinkUrl = `https://www.modiphy.com?utm_campaign=copyright_footer&utm_content=${this.domainName}`

    this.currentYear = new Date().getFullYear()
    this.companyName = this.settings.companyName
    this.container.style.display = 'inline-flex'
    this.container.style.alignItems = 'center'
    this.container.style.flexWrap = 'wrap'
    this.container.style.justifyContent = 'center'
    this.container.style.color = this.settings.color

    this.container.innerHTML = `
      <span>©${this.currentYear} ${this.companyName}</span>
      ${addPipe(this.settings.pipeColor, this.settings.pipeOpacity, this.settings.pipeMargin)}
      <span>All rights reserved</span>
    `
    if (!this.settings.hideBuiltBy) {
      this.container.innerHTML += `
      ${addPipe(this.settings.pipeColor, this.settings.pipeOpacity, this.settings.pipeMargin)}
        <span>Built by</span>
        <a id="modiphy-copyright-logo" href="${this.logoLinkUrl}" title="MODIPHY® WEB DESIGN" style="color: inherit;"><span style="position: absolute;width: 1px;height: 1px;padding: 0;margin: -1px;overflow: hidden;clip: rect(0, 0, 0, 0);white-space: nowrap;border-width: 0;">MODIPHY® WEB DESIGN</span>${modiphyLogo(
        this.settings.logoColor,
        this.settings.logoHeight,
        this.settings.logoMargin,
      )}</a>
      `
    }

    const logoHoverCss = `#modiphy-copyright-logo:hover svg{ fill: ${this.settings.logoHoverColor} !important; }`
    let style = document.createElement('style')

    if (style.styleSheet) {
      style.styleSheet.cssText = logoHoverCss
    } else {
      style.appendChild(document.createTextNode(logoHoverCss))
    }

    document.getElementsByTagName('head')[0].appendChild(style)
  }
}

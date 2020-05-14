import { parseDom } from '../../../utils/parse-dom'
import { reportBehavior } from '@/api/record'

function listeners() {
  let html = document.querySelector('html') as HTMLElement
  let content = parseDom(html.outerHTML)
  reportBehavior(content)
}

export function report() {
  removeReport()
  let html = document.querySelector('html') as HTMLElement
  html.addEventListener('click', listeners, true)
}
export function removeReport() {
  if (!listeners) return
  let html = document.querySelector('html') as HTMLElement
  html.removeEventListener('click', listeners, true)
}

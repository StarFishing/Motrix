/**
 * 接收一个HTML字符串，返回处理后的结果
 */
export function parseDom(content: string): string {
  let cache = `${content}`
  cache = cache.replace(/<script[^>]*?>.*?<\/script[^>]*?>/g, '')
  cache = cache.replace(/<link[^>]*?.*?as=["|']script["|'][^>]*?\/>/g, '')
  cache = cache.replace(/'/g, '"')
  return cache
}

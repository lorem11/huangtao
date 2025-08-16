const siteUrl = 'https://huangtaowiki.vercel.app'

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  // 以下路由不生成sitemap
  exclude: ['/admin/*', '/auth/*', '/api/*', '/server-sitemap.xml'],
  generateRobotsTxt: true, // (optional)
  // ...other options
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
      },
      {
        userAgent: '*',
        disallow: ['/admin/', '/admin/*'],
      },
      {
        userAgent: '*',
        disallow: ['/auth/', '/auth/*'],
      },
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}

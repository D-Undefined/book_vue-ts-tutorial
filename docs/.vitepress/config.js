module.exports = {
  title: 'TypeScript で書く Vue.js 入門',
  description: 'composition API 入門',
  themeConfig: {
    sidebar: [
      {
        text: 'はじめに',
        link: '/guide/0-はじめに',
      },
      {
        text: 'Composition API とは',
        link: '/guide/1-what-is-composition-api',
      },
      {
        text: 'ハンズオン',
        link: '/guide/2-ハンズオン',
      }
    ],
    repoLabel: 'Github',
    editLinks: true,
    editLinkText: 'ページに不明点や誤字等があれば、Github にて修正を提案してください！',
  },
  dest: "dist"
}
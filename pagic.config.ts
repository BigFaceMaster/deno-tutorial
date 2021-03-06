export default {
  srcDir: '.',
  ignore: [/\/demos\//, /\/public\//, /\/\./, /\/LICENSE/, /\/original-articles\//, /\/work-in-progress\//],
  theme: 'docs',
  plugins: ['sidebar', 'script', 'ga'],
  title: 'Deno 钻研之术',
  sidebar: [
    'README.md',
    {
      link: 'articles/README.md',
      children: [
        'articles/001-install-and-hello-world.md',
        'articles/002-awesome-deno-cn.md'
      ]
    },
    {
      link: 'translations/README.md',
      children: [
        'translations/001-the-deno-handbook.md',
        'translations/002-deno-chat-app.md',
        'translations/003-from-node-to-deno.md'
      ]
    }
  ],
  nav: [
    {
      text: '源码',
      link: 'https://github.com/hylerrix/deno-tutorial'
    },
    {
      text: '官网',
      link: 'https://github.com/hylerrix/awesome-deno-cn'
    },
    {
      text: '资源',
      link: 'https://github.com/hylerrix/awesome-deno-cn'
    },
    {
      text: '论坛 A',
      link: 'https://deno.js.cn'
    },
    {
      text: '论坛 B',
      link: 'https://denocn.org'
    },
    {
      text: '关于作者',
      link: 'https://github.com/hylerrix'
    }
  ],
  ga: {
    id: 'UA-169223577-1'
  }
};

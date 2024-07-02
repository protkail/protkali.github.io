import{_ as s,c as n,o as a,x as l}from"./chunks/framework.B5f4V-xG.js";const p="/vitepress-theme-sakura/assets/preview.kkPMeHdE.webp",h=JSON.parse('{"title":"vitepress-theme-sakura","description":"","frontmatter":{},"headers":[],"relativePath":"readme.md","filePath":"readme.md"}'),e={name:"readme.md"},r=l('<h1 id="vitepress-theme-sakura" tabindex="-1">vitepress-theme-sakura <a class="header-anchor" href="#vitepress-theme-sakura" aria-label="Permalink to &quot;vitepress-theme-sakura&quot;">​</a></h1><p><a href="https://www.npmjs.com/package/vitepress-theme-sakura" target="_blank" rel="noreferrer"><img src="https://img.shields.io/npm/v/vitepress-theme-sakura?logo=npm" alt="npm"></a><a href="https://github.com/flaribbit/vitepress-theme-sakura/actions" target="_blank" rel="noreferrer"><img src="https://github.com/flaribbit/vitepress-theme-sakura/actions/workflows/build.yml/badge.svg" alt="Build"></a></p><p>可爱又轻量的二次元博客主题！大概是隔壁wp主题的移植吧</p><p><a href="https://flaribbit.github.io/vitepress-theme-sakura/" target="_blank" rel="noreferrer">在线预览</a></p><p><img src="'+p+`" alt="preview"></p><h2 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h2><p>安装依赖，推荐使用 pnpm 包管理器，如果没有的话根据自己的情况把命令中的 <code>pnpm</code> 换成 <code>npm</code> 或者 <code>yarn</code>。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span>pnpm add vitepress vitepress-theme-sakura sass</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>创建配置文件</p><p><code>.vitepress/config.ts</code></p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> ThemeConfig } </span><span style="color:#D73A49;">from</span><span style="color:#032F62;"> &#39;vitepress-theme-sakura/.vitepress/config&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineConfigWithTheme } </span><span style="color:#D73A49;">from</span><span style="color:#032F62;"> &#39;vitepress&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> fixKatex </span><span style="color:#D73A49;">from</span><span style="color:#032F62;"> &#39;vitepress-theme-sakura/.vitepress/fix-katex&#39;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#D73A49;"> default</span><span style="color:#6F42C1;"> defineConfigWithTheme</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">ThemeConfig</span><span style="color:#24292E;">&gt;({</span></span>
<span class="line"><span style="color:#24292E;">  lang: </span><span style="color:#032F62;">&#39;zh-CN&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  title: </span><span style="color:#032F62;">&#39;xxx的小站&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  head: [</span></span>
<span class="line"><span style="color:#6A737D;">    // 字体支持</span></span>
<span class="line"><span style="color:#24292E;">    [</span><span style="color:#032F62;">&#39;link&#39;</span><span style="color:#24292E;">, { rel: </span><span style="color:#032F62;">&#39;stylesheet&#39;</span><span style="color:#24292E;">, href: </span><span style="color:#032F62;">&#39;https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.0.0/css/regular.min.css&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">    [</span><span style="color:#032F62;">&#39;link&#39;</span><span style="color:#24292E;">, { rel: </span><span style="color:#032F62;">&#39;stylesheet&#39;</span><span style="color:#24292E;">, href: </span><span style="color:#032F62;">&#39;https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.0.0/css/all.min.css&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">    [</span><span style="color:#032F62;">&#39;link&#39;</span><span style="color:#24292E;">, { rel: </span><span style="color:#032F62;">&#39;stylesheet&#39;</span><span style="color:#24292E;">, href: </span><span style="color:#032F62;">&#39;https://fonts.googleapis.com/css?family=Noto+Serif+SC&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#6A737D;">    // waline</span></span>
<span class="line"><span style="color:#24292E;">    [</span><span style="color:#032F62;">&#39;script&#39;</span><span style="color:#24292E;">, { src: </span><span style="color:#032F62;">&#39;https://cdn.jsdelivr.net/npm/@waline/client@1.5.4/dist/Waline.min.js&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#6A737D;">    // katex</span></span>
<span class="line"><span style="color:#24292E;">    [</span><span style="color:#032F62;">&#39;script&#39;</span><span style="color:#24292E;">, { src: </span><span style="color:#032F62;">&#39;https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.js&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">    [</span><span style="color:#032F62;">&#39;script&#39;</span><span style="color:#24292E;">, { src: </span><span style="color:#032F62;">&#39;https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/contrib/auto-render.min.js&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">    [</span><span style="color:#032F62;">&#39;link&#39;</span><span style="color:#24292E;">, { rel: </span><span style="color:#032F62;">&#39;stylesheet&#39;</span><span style="color:#24292E;">, href: </span><span style="color:#032F62;">&#39;https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  markdown: {</span></span>
<span class="line"><span style="color:#24292E;">    theme: </span><span style="color:#032F62;">&#39;github-light&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    lineNumbers: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">    config</span><span style="color:#24292E;">: </span><span style="color:#E36209;">md</span><span style="color:#D73A49;"> =&gt;</span><span style="color:#24292E;"> { md.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(fixKatex) },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#6A737D;">    // ...</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>其中 <code>themeConfig</code> 里面的内容就是要手动填写的主题配置。</p><p><code>.vitepress/theme/index.ts</code></p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> EnhanceAppContext } </span><span style="color:#D73A49;">from</span><span style="color:#032F62;"> &#39;vitepress&#39;</span></span>
<span class="line"><span style="color:#6A737D;">// @ts-ignore</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Layout </span><span style="color:#D73A49;">from</span><span style="color:#032F62;"> &#39;vitepress-theme-sakura&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#D73A49;"> default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  Layout,</span></span>
<span class="line"><span style="color:#6F42C1;">  NotFound</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#032F62;"> &#39;custom 404&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// &lt;- this is a Vue 3 functional component</span></span>
<span class="line"><span style="color:#6F42C1;">  enhanceApp</span><span style="color:#24292E;">({ </span><span style="color:#E36209;">app</span><span style="color:#24292E;">, </span><span style="color:#E36209;">router</span><span style="color:#24292E;">, </span><span style="color:#E36209;">siteData</span><span style="color:#24292E;"> }</span><span style="color:#D73A49;">:</span><span style="color:#6F42C1;"> EnhanceAppContext</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // app is the Vue 3 app instance from \`createApp()\`. router is VitePress&#39;</span></span>
<span class="line"><span style="color:#6A737D;">    // custom router. \`siteData\`\` is a \`ref\`\` of current site-level metadata.</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>然后创建 <code>posts</code> 目录，编写 markdown 文件保存到 <code>posts</code> 目录中。</p><p>执行 <code>vitepress dev</code> 命令，以开发模式预览效果；</p><p>执行 <code>vitepress build</code> 命令，构建用于发布的网页文件，输出到 <code>.vitepress/dist</code> 目录中。</p><h2 id="主题配置" tabindex="-1">主题配置 <a class="header-anchor" href="#主题配置" aria-label="Permalink to &quot;主题配置&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#D73A49;"> interface</span><span style="color:#6F42C1;"> ThemeConfig</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#E36209;">  name</span><span style="color:#D73A49;">?:</span><span style="color:#005CC5;"> string</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 名字，用于显示文章作者等</span></span>
<span class="line"><span style="color:#E36209;">  cover</span><span style="color:#D73A49;">?:</span><span style="color:#005CC5;"> string</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 首页封面图</span></span>
<span class="line"><span style="color:#E36209;">  hello</span><span style="color:#D73A49;">?:</span><span style="color:#005CC5;"> string</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 首页问候语</span></span>
<span class="line"><span style="color:#E36209;">  motto</span><span style="color:#D73A49;">?:</span><span style="color:#005CC5;"> string</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 首页签名</span></span>
<span class="line"><span style="color:#E36209;">  social</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> { </span><span style="color:#E36209;">icon</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;"> string</span><span style="color:#24292E;">, </span><span style="color:#E36209;">url</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;"> string</span><span style="color:#24292E;"> }[], </span><span style="color:#6A737D;">// 联系方式</span></span>
<span class="line"><span style="color:#E36209;">  waline</span><span style="color:#D73A49;">?:</span><span style="color:#005CC5;"> string</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// waline 评论系统服务端地址</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>代码块主题配置，参见 <a href="https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes" target="_blank" rel="noreferrer">shiki 主题</a></p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#D73A49;"> type</span><span style="color:#6F42C1;"> Theme</span><span style="color:#D73A49;"> =</span></span>
<span class="line"><span style="color:#D73A49;">  |</span><span style="color:#032F62;"> &#39;css-variables&#39;</span></span>
<span class="line"><span style="color:#D73A49;">  |</span><span style="color:#032F62;"> &#39;dark-plus&#39;</span></span>
<span class="line"><span style="color:#D73A49;">  |</span><span style="color:#032F62;"> &#39;dracula-soft&#39;</span></span>
<span class="line"><span style="color:#D73A49;">  |</span><span style="color:#032F62;"> &#39;dracula&#39;</span></span>
<span class="line"><span style="color:#D73A49;">  |</span><span style="color:#032F62;"> &#39;github-dark-dimmed&#39;</span></span>
<span class="line"><span style="color:#D73A49;">  |</span><span style="color:#032F62;"> &#39;github-dark&#39;</span></span>
<span class="line"><span style="color:#D73A49;">  |</span><span style="color:#032F62;"> &#39;github-light&#39;</span></span>
<span class="line"><span style="color:#D73A49;">  |</span><span style="color:#032F62;"> &#39;hc_light&#39;</span></span>
<span class="line"><span style="color:#D73A49;">  |</span><span style="color:#032F62;"> &#39;light-plus&#39;</span></span>
<span class="line"><span style="color:#D73A49;">  |</span><span style="color:#032F62;"> &#39;material-darker&#39;</span></span>
<span class="line"><span style="color:#D73A49;">  |</span><span style="color:#032F62;"> &#39;material-default&#39;</span></span>
<span class="line"><span style="color:#D73A49;">  |</span><span style="color:#032F62;"> &#39;material-lighter&#39;</span></span>
<span class="line"><span style="color:#D73A49;">  |</span><span style="color:#032F62;"> &#39;material-ocean&#39;</span></span>
<span class="line"><span style="color:#D73A49;">  |</span><span style="color:#032F62;"> &#39;material-palenight&#39;</span></span>
<span class="line"><span style="color:#D73A49;">  |</span><span style="color:#032F62;"> &#39;min-dark&#39;</span></span>
<span class="line"><span style="color:#D73A49;">  |</span><span style="color:#032F62;"> &#39;min-light&#39;</span></span>
<span class="line"><span style="color:#D73A49;">  |</span><span style="color:#032F62;"> &#39;monokai&#39;</span></span>
<span class="line"><span style="color:#D73A49;">  |</span><span style="color:#032F62;"> &#39;nord&#39;</span></span>
<span class="line"><span style="color:#D73A49;">  |</span><span style="color:#032F62;"> &#39;one-dark-pro&#39;</span></span>
<span class="line"><span style="color:#D73A49;">  |</span><span style="color:#032F62;"> &#39;poimandres&#39;</span></span>
<span class="line"><span style="color:#D73A49;">  |</span><span style="color:#032F62;"> &#39;rose-pine-dawn&#39;</span></span>
<span class="line"><span style="color:#D73A49;">  |</span><span style="color:#032F62;"> &#39;rose-pine-moon&#39;</span></span>
<span class="line"><span style="color:#D73A49;">  |</span><span style="color:#032F62;"> &#39;rose-pine&#39;</span></span>
<span class="line"><span style="color:#D73A49;">  |</span><span style="color:#032F62;"> &#39;slack-dark&#39;</span></span>
<span class="line"><span style="color:#D73A49;">  |</span><span style="color:#032F62;"> &#39;slack-ochin&#39;</span></span>
<span class="line"><span style="color:#D73A49;">  |</span><span style="color:#032F62;"> &#39;solarized-dark&#39;</span></span>
<span class="line"><span style="color:#D73A49;">  |</span><span style="color:#032F62;"> &#39;solarized-light&#39;</span></span>
<span class="line"><span style="color:#D73A49;">  |</span><span style="color:#032F62;"> &#39;vitesse-dark&#39;</span></span>
<span class="line"><span style="color:#D73A49;">  |</span><span style="color:#032F62;"> &#39;vitesse-light&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="文章配置" tabindex="-1">文章配置 <a class="header-anchor" href="#文章配置" aria-label="Permalink to &quot;文章配置&quot;">​</a></h2><div class="language-md line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">标题</span></span>
<span class="line"><span style="color:#22863A;">date</span><span style="color:#24292E;">: </span><span style="color:#032F62;">日期</span></span>
<span class="line"><span style="color:#22863A;">cover</span><span style="color:#24292E;">: </span><span style="color:#032F62;">封面图</span></span>
<span class="line"><span style="color:#22863A;">tags</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">标签1</span><span style="color:#24292E;">, </span><span style="color:#032F62;">标签2</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">这里的文字会作为预览显示在文章列表中</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">这里的文字点进文章才能看到</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="功能" tabindex="-1">功能 <a class="header-anchor" href="#功能" aria-label="Permalink to &quot;功能&quot;">​</a></h2><ul><li>[x] 首页横幅</li><li>[x] 文章列表</li><li>[x] 文章样式</li><li>[x] waline 评论</li><li>[x] 文章导航</li><li>[x] 代码高亮</li><li>[x] 手机端适配</li><li>[x] 目录</li><li>[x] 目录锚点双向同步</li><li>[x] 标签页面</li><li>[x] latex 公式</li><li>[x] RSS</li><li>[ ] 页脚</li><li>[ ] 搜索</li><li>[ ] PWA</li></ul><h2 id="其他说明" tabindex="-1">其他说明 <a class="header-anchor" href="#其他说明" aria-label="Permalink to &quot;其他说明&quot;">​</a></h2><p>如你所见，这个博客主题完成度不是很高。</p><p>我写这个主题的初衷有两个，一是为了学习前端，二是看到隔壁 wordpress 主题的性能太烂了，所以就想着移植一下。</p><p>如果你想安安静静写博客，需要体验友好、性能绝佳、扩展性出色的博客系统，推荐看一下 <a href="https://valaxy.site/" target="_blank" rel="noreferrer">Valaxy</a>.</p><p>如果你希望学习自制博客所需要的前端技术，但目前是小白，那或许可以参考本项目代码。本项目代码质量不高，但毕竟也是小白写的，所以应该比较容易看懂。如果不是小白，则可以参考 <a href="https://github.com/YunYouJun/valaxy" target="_blank" rel="noreferrer">云猫猫的 Valaxy 仓库</a>。</p><h2 id="感谢" tabindex="-1">感谢 <a class="header-anchor" href="#感谢" aria-label="Permalink to &quot;感谢&quot;">​</a></h2><ul><li><a href="https://github.com/mashirozx/sakura" target="_blank" rel="noreferrer">wordpress-theme-sakura</a></li><li><a href="https://github.com/YunYouJun/hexo-theme-yun" target="_blank" rel="noreferrer">hexo-theme-yun</a></li><li><a href="https://github.com/vuejs/blog" target="_blank" rel="noreferrer">vuejs/blog</a></li><li><a href="https://github.com/mirai-mamori/Sakurairo" target="_blank" rel="noreferrer">wordpress-theme-Sakurairo</a></li><li><a href="https://api.ixiaowai.cn/" target="_blank" rel="noreferrer">xiaowai-api</a></li></ul><h2 id="不感谢" tabindex="-1">不感谢 <a class="header-anchor" href="#不感谢" aria-label="Permalink to &quot;不感谢&quot;">​</a></h2><ul><li>某个关闭图床的网站</li></ul>`,34),o=[r];function t(c,i,y,b,m,u){return a(),n("div",null,o)}const g=s(e,[["render",t]]);export{h as __pageData,g as default};

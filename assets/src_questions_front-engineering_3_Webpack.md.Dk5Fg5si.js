import{_ as e,c as s,a0 as i,o as l}from"./chunks/framework.HNGcFqhl.js";const t="/mb-front-end-interview/assets/image.gss6bXac.png",n="/mb-front-end-interview/assets/image2.C2qCmXCO.png",u=JSON.parse('{"title":"webpack","description":"","frontmatter":{},"headers":[],"relativePath":"src/questions/front-engineering/3_Webpack.md","filePath":"src/questions/front-engineering/3_Webpack.md","lastUpdated":1734922754000}'),h={name:"src/questions/front-engineering/3_Webpack.md"};function r(o,a,d,p,c,k){return l(),s("div",null,a[0]||(a[0]=[i('<h1 id="webpack" tabindex="-1">webpack <a class="header-anchor" href="#webpack" aria-label="Permalink to &quot;webpack&quot;">​</a></h1><h2 id="webpack-的热更新是什么" tabindex="-1">webpack 的热更新是什么? <a class="header-anchor" href="#webpack-的热更新是什么" aria-label="Permalink to &quot;webpack 的热更新是什么?&quot;">​</a></h2><h4 id="类型-架构" tabindex="-1">类型：<code>架构</code> <a class="header-anchor" href="#类型-架构" aria-label="Permalink to &quot;类型：`架构`&quot;">​</a></h4><h4 id="级别-w3、w4、w5、w6" tabindex="-1">级别：<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w3、w4、w5、w6" aria-label="Permalink to &quot;级别：`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-2-分" tabindex="-1">解答（2 分） <a class="header-anchor" href="#解答-2-分" aria-label="Permalink to &quot;解答（2 分）&quot;">​</a></h4><ul><li><strong>1：</strong> Hot Module Replacement 简称 HRM</li><li><strong>1：</strong> 模块热替换，指在应用程序运行过程中，替换、添加、删除模块，而无需重新刷新整个应用</li></ul><h2 id="webpack-中如何配置开启热更新" tabindex="-1">webpack 中如何配置开启热更新？ <a class="header-anchor" href="#webpack-中如何配置开启热更新" aria-label="Permalink to &quot;webpack 中如何配置开启热更新？&quot;">​</a></h2><h4 id="类型-架构-1" tabindex="-1">类型：<code>架构</code> <a class="header-anchor" href="#类型-架构-1" aria-label="Permalink to &quot;类型：`架构`&quot;">​</a></h4><h4 id="级别-w3、w4、w5、w6-1" tabindex="-1">级别：<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w3、w4、w5、w6-1" aria-label="Permalink to &quot;级别：`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-2-分-1" tabindex="-1">解答（2 分） <a class="header-anchor" href="#解答-2-分-1" aria-label="Permalink to &quot;解答（2 分）&quot;">​</a></h4><ul><li><strong>2：</strong></li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> webpack</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;webpack&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  devServer: {</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // HMR</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    hot: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // hotOnly: true</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h2 id="webpack-的热更新原理" tabindex="-1">webpack 的热更新原理? <a class="header-anchor" href="#webpack-的热更新原理" aria-label="Permalink to &quot;webpack 的热更新原理?&quot;">​</a></h2><h4 id="类型-架构-2" tabindex="-1">类型：<code>架构</code> <a class="header-anchor" href="#类型-架构-2" aria-label="Permalink to &quot;类型：`架构`&quot;">​</a></h4><h4 id="级别-w3、w4、w5、w6-2" tabindex="-1">级别：<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w3、w4、w5、w6-2" aria-label="Permalink to &quot;级别：`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-4-分" tabindex="-1">解答（4 分） <a class="header-anchor" href="#解答-4-分" aria-label="Permalink to &quot;解答（4 分）&quot;">​</a></h4><ul><li><strong>1：</strong> 在编写未经过 webpack 打包的源代码后，Webpack Compile 将源代码和 HMR Runtime 一起编译成 bundle 文件，传输给 Bundle Server 静态资源服务器，</li><li><strong>1：</strong> 当某一个文件或者模块发生变化时，webpack 监听到文件变化对文件重新编译打包，编译生成唯一的hash 值，这个 hash 值用来作为下一次热更新的标识根据变化的内容生成两个补丁文件: manifest (包含了 hash 和 chundId ，用来说明变化的内容)和 chunk.js 模块。</li><li><strong>1：</strong> 由于 socket 服务器在 HMR Runtime 和 HMR Server 之间建立 websocket 链接，当文件发生改动的时候，服务端会向浏览器推送一条消息，消息包含文件改动后生成的 hash 值，如下图的h 属性，作为下一次热更细的标识</li><li><strong>1：</strong> 在浏览器接受到这条消息之前，浏览器已经在上一次 socket 消息中已经记住了此时的 hash 标识这时候我们会创建一个 ajax 去服务端请求获取到变化内容的 manifest 文件mainfest 文件包含重新 build 生成的 hash 值，以及变化的模块，对应上图的 c 属性浏览器根据 manifest 文件获取模块变化的内容，从而触发 render 流程，实现局部模块更新。 <img src="'+t+'" alt="alt text"></li></ul><h2 id="简述webpack的构建流程" tabindex="-1">简述webpack的构建流程？ <a class="header-anchor" href="#简述webpack的构建流程" aria-label="Permalink to &quot;简述webpack的构建流程？&quot;">​</a></h2><h4 id="类型-架构-3" tabindex="-1">类型：<code>架构</code> <a class="header-anchor" href="#类型-架构-3" aria-label="Permalink to &quot;类型：`架构`&quot;">​</a></h4><h4 id="级别-w3、w4、w5、w6-3" tabindex="-1">级别：<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w3、w4、w5、w6-3" aria-label="Permalink to &quot;级别：`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-3-分" tabindex="-1">解答（3 分） <a class="header-anchor" href="#解答-3-分" aria-label="Permalink to &quot;解答（3 分）&quot;">​</a></h4><ul><li><strong>1：</strong> 初始化流程：从配置文件和 Shell 语句中读取与合并参数，并初始化需要使用的插件和配置插件等执行环境所需要的参数</li><li><strong>1：</strong> 编译构建流程：从 Entry 发出，针对每个 Module 串行调用对应的 Loader 去翻译文件内容，再找.到该 Module 依赖的 Module，递归地进行编译处理</li><li><strong>1：</strong> 输出流程：对编译后的 Module 组合成 Chunk，把 Chunk 转换成文件，输出到文件系统 <img src="'+n+'" alt="alt text"></li></ul><h2 id="webpack-proxy是什么" tabindex="-1">webpack proxy是什么？ <a class="header-anchor" href="#webpack-proxy是什么" aria-label="Permalink to &quot;webpack proxy是什么？&quot;">​</a></h2><h4 id="类型-架构-4" tabindex="-1">类型：<code>架构</code> <a class="header-anchor" href="#类型-架构-4" aria-label="Permalink to &quot;类型：`架构`&quot;">​</a></h4><h4 id="级别-w3、w4、w5、w6-4" tabindex="-1">级别：<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w3、w4、w5、w6-4" aria-label="Permalink to &quot;级别：`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-2-分-2" tabindex="-1">解答（2 分） <a class="header-anchor" href="#解答-2-分-2" aria-label="Permalink to &quot;解答（2 分）&quot;">​</a></h4><ul><li><strong>2：</strong> webpack proxy，是 webpack 提供的代理服务，基本行为就是接收客户端发送的请求后转发给其他服务器，其目的是为了便于开发者在开发模式下解决跨域问题(浏览器安全策略限制)</li></ul><h2 id="webpack-中提供服务器的工具是什么" tabindex="-1">webpack 中提供服务器的工具是什么？ <a class="header-anchor" href="#webpack-中提供服务器的工具是什么" aria-label="Permalink to &quot;webpack 中提供服务器的工具是什么？&quot;">​</a></h2><h4 id="类型-架构-5" tabindex="-1">类型：<code>架构</code> <a class="header-anchor" href="#类型-架构-5" aria-label="Permalink to &quot;类型：`架构`&quot;">​</a></h4><h4 id="级别-w3、w4、w5、w6-5" tabindex="-1">级别：<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w3、w4、w5、w6-5" aria-label="Permalink to &quot;级别：`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-1-分" tabindex="-1">解答（1 分） <a class="header-anchor" href="#解答-1-分" aria-label="Permalink to &quot;解答（1 分）&quot;">​</a></h4><ul><li><strong>1：</strong> webpack 中提供服务器的工具为 webpack-dev-server</li></ul><h2 id="webpack-dev-server是什么" tabindex="-1">webpack-dev-server是什么？ <a class="header-anchor" href="#webpack-dev-server是什么" aria-label="Permalink to &quot;webpack-dev-server是什么？&quot;">​</a></h2><h4 id="类型-架构-6" tabindex="-1">类型：<code>架构</code> <a class="header-anchor" href="#类型-架构-6" aria-label="Permalink to &quot;类型：`架构`&quot;">​</a></h4><h4 id="级别-w3、w4、w5、w6-6" tabindex="-1">级别：<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w3、w4、w5、w6-6" aria-label="Permalink to &quot;级别：`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-1-分-1" tabindex="-1">解答（1 分） <a class="header-anchor" href="#解答-1-分-1" aria-label="Permalink to &quot;解答（1 分）&quot;">​</a></h4><ul><li><strong>1：</strong> webpack-dev-server是官方推出的一款开发工具，将自动编译和自动刷新浏览器等一系列对开发友好的功能全部集成在了一起，目的是为了提高开发者日常的开发效率，只适用在开发阶段关于配置方面。</li></ul><h2 id="webpack代理怎么配置-proxy中常用的属性是什么" tabindex="-1">webpack代理怎么配置？proxy中常用的属性是什么？ <a class="header-anchor" href="#webpack代理怎么配置-proxy中常用的属性是什么" aria-label="Permalink to &quot;webpack代理怎么配置？proxy中常用的属性是什么？&quot;">​</a></h2><h4 id="类型-架构-7" tabindex="-1">类型：<code>架构</code> <a class="header-anchor" href="#类型-架构-7" aria-label="Permalink to &quot;类型：`架构`&quot;">​</a></h4><h4 id="级别-w3、w4、w5、w6-7" tabindex="-1">级别：<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w3、w4、w5、w6-7" aria-label="Permalink to &quot;级别：`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-3-分-1" tabindex="-1">解答（3 分） <a class="header-anchor" href="#解答-3-分-1" aria-label="Permalink to &quot;解答（3 分）&quot;">​</a></h4><ul><li><strong>1：</strong> 配置如下：</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> path</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  devServer: {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    contentBase: path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">join</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(__dirname, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dist&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    compress: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    port: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    proxy: {</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;/api&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        target: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://api.github.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// </span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ...</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><ul><li><strong>2：</strong> 常用属性：</li></ul><blockquote><p>target：表示的是代理到的目标地址<br> pathRewrite：默认情况下，我们的 /api-hy 也会被写入到URL中，如果希望删除、可以使用pathRewrite<br> secure：默认情况下不接收转发到https的服务器上，如果希望支持，可以设置为false<br> changeOrigin：它表示是否更新代理后请求的 headers 中host地址</p></blockquote><h2 id="proxy是工作原理" tabindex="-1">proxy是工作原理？ <a class="header-anchor" href="#proxy是工作原理" aria-label="Permalink to &quot;proxy是工作原理？&quot;">​</a></h2><h4 id="类型-架构-8" tabindex="-1">类型：<code>架构</code> <a class="header-anchor" href="#类型-架构-8" aria-label="Permalink to &quot;类型：`架构`&quot;">​</a></h4><h4 id="级别-w3、w4、w5、w6-8" tabindex="-1">级别：<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w3、w4、w5、w6-8" aria-label="Permalink to &quot;级别：`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-1-分-2" tabindex="-1">解答（1 分） <a class="header-anchor" href="#解答-1-分-2" aria-label="Permalink to &quot;解答（1 分）&quot;">​</a></h4><ul><li><strong>1：</strong> proxy 工作原理实质上是利用 http-proxy-middleware 这个 http 代理中间件，实现请求转发给其他服务器</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> express</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;express&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> proxy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;http-proxy-middleware&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> app</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> express</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/api&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">proxy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({target: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;http://www.example.org&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, changeOrigin: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}));</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">listen</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="webpack-proxy-为什么能解决跨域" tabindex="-1">webpack proxy 为什么能解决跨域？ <a class="header-anchor" href="#webpack-proxy-为什么能解决跨域" aria-label="Permalink to &quot;webpack proxy 为什么能解决跨域？&quot;">​</a></h2><h4 id="类型-架构-9" tabindex="-1">类型：<code>架构</code> <a class="header-anchor" href="#类型-架构-9" aria-label="Permalink to &quot;类型：`架构`&quot;">​</a></h4><h4 id="级别-w3、w4、w5、w6-9" tabindex="-1">级别：<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w3、w4、w5、w6-9" aria-label="Permalink to &quot;级别：`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-2-分-3" tabindex="-1">解答（2 分） <a class="header-anchor" href="#解答-2-分-3" aria-label="Permalink to &quot;解答（2 分）&quot;">​</a></h4><ul><li><strong>2：</strong> 在开发阶段，webpack-dev-server 会启动一个本地开发服务器，所以我们的应用在开发阶段是独立运行在 localhost 的一个端口上，而后端服务又是运行在另外一个地址上所以在开发阶段中，由于浏览器同源策略的原因，当本地访问后端就会出现跨域请求的问题通过设置 webpack proxy 实现代理请求后，相当于浏览器与服务端中添加一个代理者当本地发送请求的时候， 代理服务器响应该请求，并将请求转发到目标服务器，目标服务器响应数据后再将数据返回给代理服务器，最终再由代理服务器将数据响应给本地。<br> 在代理服务器传递数据给本地浏览器的过程中，两者同源，并不存在跨域行为，这时候浏览器就能正常接收数据。<br><strong>注意：服务器与服务器之间请求数据并不会存在跨域行为，跨域行为是浏览器安全策略限制。</strong></li></ul><h2 id="webpack的loader是什么-为什么使用它-它有哪几种配置方式" tabindex="-1">webpack的loader是什么？为什么使用它？它有哪几种配置方式 <a class="header-anchor" href="#webpack的loader是什么-为什么使用它-它有哪几种配置方式" aria-label="Permalink to &quot;webpack的loader是什么？为什么使用它？它有哪几种配置方式&quot;">​</a></h2><h4 id="类型-架构-10" tabindex="-1">类型：<code>架构</code> <a class="header-anchor" href="#类型-架构-10" aria-label="Permalink to &quot;类型：`架构`&quot;">​</a></h4><h4 id="级别-w3、w4、w5、w6-10" tabindex="-1">级别：<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w3、w4、w5、w6-10" aria-label="Permalink to &quot;级别：`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-5-分" tabindex="-1">解答（5 分） <a class="header-anchor" href="#解答-5-分" aria-label="Permalink to &quot;解答（5 分）&quot;">​</a></h4><ul><li><strong>1：</strong> loader 用于对模块的&quot;源代码&quot;进行转换，在 import 或&quot;加载&quot;模块时预处理文件</li><li><strong>1：</strong> webpack 做的事情，仅仅是分析出各种模块的依赖关系，然后形成资源列表，最终打包生成到指定的文件中。<br> 在 webpack 内部中，任何文件都是模块，不仅仅只是js 文件。默认情况下，在遇到 import 或者 require 加载模块的时候，webpack 只支持对 js 和 json文件打包，像 css、 sass、 png 等这些类型的文件的时候，webpack 则无能为力，这时候就需要配置对应的 loader 进行文件内容的解析。</li><li><strong>3：</strong> 关于配置 loader 的方式有三种: <blockquote><p>配置方式(推荐)：在 webpack.config.js文件中指定 loader<br> 内联方式：在每个 import 语句中显式指定 loader<br> Cl 方式：在 shell 命令中指定它们</p></blockquote></li></ul><h2 id="webpack的plugin是什么" tabindex="-1">webpack的Plugin是什么 <a class="header-anchor" href="#webpack的plugin是什么" aria-label="Permalink to &quot;webpack的Plugin是什么&quot;">​</a></h2><h4 id="类型-架构-11" tabindex="-1">类型：<code>架构</code> <a class="header-anchor" href="#类型-架构-11" aria-label="Permalink to &quot;类型：`架构`&quot;">​</a></h4><h4 id="级别-w3、w4、w5、w6-11" tabindex="-1">级别：<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w3、w4、w5、w6-11" aria-label="Permalink to &quot;级别：`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-2-分-4" tabindex="-1">解答（2 分） <a class="header-anchor" href="#解答-2-分-4" aria-label="Permalink to &quot;解答（2 分）&quot;">​</a></h4><ul><li><strong>2：</strong> webpack 中的 plugin 赋予其各种灵活的功能，例如打包优化、资源管理、环境变量注入等，它们会运行在 webpack 的不同阶段(钩子/生命周期)，贯穿了 webpack 整个编译周期，目的在于解决 loader 无法实现的其他事</li></ul><h2 id="webpack的plugin和loader的区别" tabindex="-1">webpack的Plugin和Loader的区别 <a class="header-anchor" href="#webpack的plugin和loader的区别" aria-label="Permalink to &quot;webpack的Plugin和Loader的区别&quot;">​</a></h2><h4 id="类型-架构-12" tabindex="-1">类型：<code>架构</code> <a class="header-anchor" href="#类型-架构-12" aria-label="Permalink to &quot;类型：`架构`&quot;">​</a></h4><h4 id="级别-w3、w4、w5、w6-12" tabindex="-1">级别：<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w3、w4、w5、w6-12" aria-label="Permalink to &quot;级别：`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-2-分-5" tabindex="-1">解答（2 分） <a class="header-anchor" href="#解答-2-分-5" aria-label="Permalink to &quot;解答（2 分）&quot;">​</a></h4><ul><li><strong>1：</strong>【Loader】：用于对模块源码的转换， loader可以将文件从不同的语言（如TypeScript）转换为JavaScript，或者将内联图像转换为data URL。比如说：CSS-Loader，Style-Loader等。</li><li><strong>1：</strong>【Plugin】：目的在于解决loader无法实现的其他事，从打包优化和压缩，到重新定义环境变量，功能强大到可以用来处理各种各样的任务。webpack提供了很多开箱即用的插件：CommonChunkPlugin主要用于提取第三方库和公共模块，避免首屏加载的bundle文件，或者按需加载的bundle文件体积过大，导致加载时间过长，是一把优化的利器。而在多页面应用中，更是能够为每个页面间的应用程序共享代码创建bundle。</li></ul><h2 id="webpack常见的提升构建速度的方法" tabindex="-1">webpack常见的提升构建速度的方法 <a class="header-anchor" href="#webpack常见的提升构建速度的方法" aria-label="Permalink to &quot;webpack常见的提升构建速度的方法&quot;">​</a></h2><h4 id="类型-架构-13" tabindex="-1">类型：<code>架构</code> <a class="header-anchor" href="#类型-架构-13" aria-label="Permalink to &quot;类型：`架构`&quot;">​</a></h4><h4 id="级别-w3、w4、w5、w6-13" tabindex="-1">级别：<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w3、w4、w5、w6-13" aria-label="Permalink to &quot;级别：`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-2-分-6" tabindex="-1">解答（2 分） <a class="header-anchor" href="#解答-2-分-6" aria-label="Permalink to &quot;解答（2 分）&quot;">​</a></h4><ul><li><strong>2：</strong> 常见的有一下几种：</li></ul><blockquote><p>优化 loader 配置<br> 合理使用 resolve.extensions<br> 优化 resolve.modules<br> 优化 resolve.alias<br> 使用 DLLPlugin 插件<br> 使用 cache-loader<br> terser 启动多线程<br> 合理使用 sourceMap</p></blockquote>',77)]))}const w=e(h,[["render",r]]);export{u as __pageData,w as default};

webpackJsonp([0xf0b9ad8cbc70],{325:function(t,e){t.exports={data:{markdownRemark:{html:'<p>Github Pages 是 github 公司提供的免费的静态网站托管服务，用起来方便而且功能强大，不仅没有空间限制，还可以绑定自己的域名。在 <a href="https://pages.github.com/">https://pages.github.com/</a> 首页上可以看到很多用 Github Pages 托管的网站，很漂亮。另外很多非常著名的公司和项目也都用这种方式来搭建网站，如<a href="http://microsoft.github.io/">微软</a>和 <a href="http://twitter.github.io/">twitter</a> 的网站，还有 <a href="http://google.github.io/material-design-icons/">谷歌的 Material Design 图标</a> 网站。</p>\n<p><img src="https://github.com/happypeter/gitbeijing/blob/master/data/posts/images/pages/logo.png?raw=true"></p>\n<h3>分类和文档</h3>\n<p>到 <a href="https://pages.github.com/">https://pages.github.com/</a> 上，看到可以创建的网站有两类，一类是为自己或者是自己的组织创建站点，就是新建一个仓库，仓库的名字叫做，username.github.io 或者是 orgnizationname.github.io ，注意这里的 username 和 orgnizationname 要严格替换成你自己的用户名或者组织名，大小写也要区分，不然就会有问题。然后就往仓库里面放页面内容就行了。第二类是为项目创建网站，这个其实主要步骤都是一样的，只不过稍微比创建用户或组织网站复杂一点点，下面就以它为例来演示。</p>\n<p>建一个项目网站的详细步骤在 <a href="https://pages.github.com/">https://pages.github.com/</a> 页面上是有的，如下图</p>\n<p><img src="https://github.com/happypeter/gitbeijing/blob/master/data/posts/images/pages/project_site.png?raw=true"></p>\n<p>选择 <code>Project Site</code> 然后下面有两项，一个是用自动生成器自动生成（ Generate a site ）一个漂亮的网站，另一个方案是自己手写，咱们选后者，因为这个方案比较能展示清楚整个 Github Pages 的使用原理。</p>\n<p>一路沿着文档给出的步骤坐下来，网站就有了。下面实际来动手弄弄。</p>\n<h3>制作过程</h3>\n<p>首先来到项目首页，例如 <a href="https://github.com/happypeter/coco">https://github.com/happypeter/coco</a> 。</p>\n<p><img src="https://github.com/happypeter/gitbeijing/blob/master/data/posts/images/pages/site_branch.png?raw=true"></p>\n<p>上图中，点 <code>master</code> 按钮，弹出的输入框中输入 <code>gh-pages</code> ，注意拼写和大小写都不要写错。然后回车，就可以创建出新分支 gh-pages 了。如下图</p>\n<p><img src="https://github.com/happypeter/gitbeijing/blob/master/data/posts/images/pages/site_branch_created.png?raw=true"></p>\n<p>上图中看到，现在项目以及切换到了 gh-pages 分支，如大箭头所指。虽然 coco 项目不是开源的，但是我们放到 gh-pages 分支上的内容是会被公开成网页的，这个要注意。点击大圆圈中的加号，来添加第一个文件。</p>\n<p><img src="https://github.com/happypeter/gitbeijing/blob/master/data/posts/images/pages/first_page.png?raw=true"></p>\n<p>名字一定要叫 index.html ，里面的内容就随便写了。保存之后，过几分钟就可以到 username.github.io/project 这个链接中看到页面了，对于这类的情况就是 <a href="http://happypeter.github.io/coco/">http://happypeter.github.io/coco/</a> 这个链接就是网站的公网 url 了。后面可以继续添加 HTML，CSS 和 JS 进来，丰富网站功能。</p>\n<p>上面这些还只是展示了 Github Pages 的托管静态页面的功能，但是其实故事并不停在这个地方。在 <a href="https://pages.github.com/">https://pages.github.com/</a> 的最低端还可以看到下面三个事情：</p>\n<p><img src="https://github.com/happypeter/gitbeijing/blob/master/data/posts/images/pages/more_function.png?raw=true"></p>\n<p>最后一项“指南”大家可以用来参考。下面分别来介绍一下 Jekyll 和绑定自己域名的功能。</p>\n<h3>jekyll</h3>\n<blockquote>\n<p>Jekyll 是一个简单的，支持博客结构的，静态网站生成器。</p>\n</blockquote>\n<p>上面这段话是 Jekyll 之父 Tom 在一篇文章叫做 <a href="http://tom.preston-werner.com/2008/11/17/blogging-like-a-hacker.html">blogging-like-a-hacker</a> 中说的。</p>\n<p>Jeklly 的具体使用本身跟 git 没有直接联系，所以这里就不细说了。它主要能完成的功能有下面几项：</p>\n<ol>\n<li>页面不用 html 来写了，而用更为简单的 markdown 格式来写</li>\n<li>可以使用布局文件和片段文件</li>\n<li>代码高亮支持</li>\n<li>可以使用变量</li>\n</ol>\n<p>详细内容参考 <a href="http://jekyllrb.com/">jekyll 官网</a> 。 我也录了一期详细的 Jekyll 使用视频，放在我的<a href="http://haoduoshipin.com/episodes/113">好多视频</a>网站上。</p>\n<h3>绑定自己的域名</h3>\n<p>有一个功能其实很重要，就是绑定自己的域名。想想如果有天 github 网站被依法和谐了，那怎么办？如果一开始就是用自己的域名，那就简单了，直接换一台服务器就好了。</p>\n<p>绑定域名的具体的操作步骤在<a href="https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/">这里</a> 。</p>\n<p>DNS 设置的方式并不唯一，但也是大同小异，下面演示一下我自己的操作过程。我的 gitbeijing.com 这个域名是在 godaddy.com 上买的。 首先在 godaddy.com 上，让 gitbeijing.com 使用 digitalocean 的 domain server : ns1.digitalocean.com 。</p>\n<p>下一步，到 digitalocean 网站上，添加 A Record 指向 192.30.252.153 和 192.30.252.154 也就是设置成下图这样</p>\n<p><img src="https://github.com/happypeter/gitbeijing/blob/master/data/posts/images/pages/do_dns.png?raw=true"></p>\n<p>也就是添加了四个 <code>A</code> 记录，这样后面用 <a href="http://gitbeijing.com">http://gitbeijing.com</a> 或者 <a href="http://www.gitbeijing.com">http://www.gitbeijing.com</a> 就都可以指向 github pages 的服务器了。</p>\n<p>插一句，以前我还设置过一个 coldbutsweet.com 是在万网 net.cn 上设置的，操作完全一样，下面是截图</p>\n<p><img src="https://github.com/happypeter/gitbeijing/blob/master/data/posts/images/pages/netcn_dns.png?raw=true"></p>\n<p>到这里，如果有人访问 gitbeijing.com 就可以指向 github 了，但是 github pages 上面网站众多，如何能找到我自己的那个特定网站呢？要到 <a href="https://github.com/happypeter/gitbeijing">happypeter/gitbeijing</a>项目的 gh-pages 分支，创建 CNAME 文件，里面的内容为</p>\n<p>{% highlight console %}\ngitbeijing.com\n{% endhighlight %}</p>\n<p>这样操作结束，当然还要稍微等几个小时给 DNS 扩散。晚上做完上面的操作，第二天早上访问 <a href="http://gitbeijing.com">http://gitbeijing.com</a> 已经可以访问到我的网站了，如果访问 <a href="http://www.gitbeijing.com">http://www.gitbeijing.com</a> 则可以跳转到 <a href="http://gitbeijing.com">http://gitbeijing.com</a> ，效果完美。</p>\n<h3>总结</h3>\n<p>喜欢分享是一个好程序员的标志，我给我的很多初学编程的朋友的建议就是，先学习如何用 Github Pages 搭建自己的个人网站，一来可以锻炼一些基本的网站开发技巧，二来可以建立一个分享的阵地。</p>',fields:{slug:"/pages/"}},indexJson:{articles:[{link:"introduction.html",title:"简介"},{link:"github_in_browser.html",title:"浏览器中使用 GitHub"},{link:"github_for_mac.html",title:"GitHub For Mac 客户端"},{link:"simple_branching.html",title:"简单分支操作"},{link:"merge.html",title:"合并分支"},{link:"github_flow.html",title:"团队协作流程"},{link:"fork_flow.html",title:"开源项目贡献流程"},{link:"issues.html",title:"GitHub Issues"},{link:"pages.html",title:"GitHub Pages 搭建网站"},{link:"more.html",title:"更多 GitHub 技巧"}]}},pathContext:{slug:"/pages/"}}}});
//# sourceMappingURL=path---pages-html-f5530a0a6dd5bd7c3ede.js.map
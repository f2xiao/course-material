"use strict";(self.webpackChunkcourse_material=self.webpackChunkcourse_material||[]).push([[7410],{7059:(e,t,s)=>{s.r(t),s.d(t,{default:()=>Je});var n=s(6252);const a=(0,n._)("h1",{id:"http-and-web-applications",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#http-and-web-applications","aria-hidden":"true"},"#"),(0,n.Uk)(" HTTP and Web Applications")],-1),r=(0,n.Uk)("The web is built on a protocol called the "),o=(0,n._)("em",null,"HyperText Transfer Protocol",-1),i=(0,n.Uk)(" (HTTP). To build proper web applications, it is essential to understand how this protocol works. "),l={href:"https://tools.ietf.org/html/rfc2616",target:"_blank",rel:"noopener noreferrer"},c=(0,n.Uk)("The HTTP specification"),u=(0,n.Uk)(" explains it all, but since it's a specification it can be quite hard to read, so let me give you a quick introduction to HTTP before you read the details in the HTTP specification."),d=(0,n._)("iframe",{width:"560",height:"314",src:"https://www.youtube.com/embed/kuTKFoU5v7k",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,-1),h=(0,n.uE)('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="http-and-web-applications.pdf">http-and-web-applications.pdf</a></li><li><a href="http-and-web-applications.pptx">http-and-web-applications.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>',3),p={href:"https://launchschool.com/books/http",target:"_blank",rel:"noopener noreferrer"},m=(0,n.Uk)("Introduction to HTTP"),_=(0,n.Uk)(" by Launch School "),b=(0,n._)("ul",null,[(0,n._)("li",null,"Up to (including) the chapter HTTP --\x3e Processing Responses")],-1),k={href:"https://tools.ietf.org/html/rfc2616",target:"_blank",rel:"noopener noreferrer"},T=(0,n.Uk)("HTTP/1.1 specification"),g=(0,n._)("ul",null,[(0,n._)("li",null,"Don't read and learn everything by heart, but just enough so you get comfortable looking up things (methods, status codes, etc.) in it.")],-1),w=(0,n._)("h2",{id:"interesting-reading",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#interesting-reading","aria-hidden":"true"},"#"),(0,n.Uk)(" Interesting reading")],-1),f={href:"https://www.reddit.com/r/dataisbeautiful/comments/cxuah9/usage_share_of_internet_browsers_1996_2019_oc/",target:"_blank",rel:"noopener noreferrer"},U=(0,n.Uk)("Usage Share of Internet Browsers 1996 - 2019 (visualized)"),v=(0,n._)("h2",{id:"clients-and-servers",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#clients-and-servers","aria-hidden":"true"},"#"),(0,n.Uk)(" Clients and Servers")],-1),y=(0,n._)("p",null,[(0,n.Uk)("The HTTP protocol is built on a "),(0,n._)("em",null,"client-server"),(0,n.Uk)(" architecture. That means that some computers on the web acts as "),(0,n._)("em",null,"servers"),(0,n.Uk)(", and all other computers acts as "),(0,n._)("em",null,"clients"),(0,n.Uk)(". When you browse the web through a web browser, your web browser is a client.")],-1),q=(0,n.Uk)("A client can send an HTTP request to a server, asking the server to do something for it. When a server receives the HTTP request, it should carry out the request, and then send back an HTTP response to the client. This is visualized in "),H=(0,n.Uk)(" below. Having a server on it own is useless; servers exist to serve clients (that's why we call them servers)."),P=(0,n.uE)('<p>For example, when you click on a link in your web browser, your web browser sends an HTTP request to a server, requesting the server to send back the webpage the link leads to. When the server receives this request it generates the webpage/loads it from a file and sends it back in an HTTP response, and when your web browser receives the HTTP response it displays the webpage on the screen.</p><p>In general, any computer can act as a client or a server. It is also possible for a computer to be both a client and a server at the same time. For example, when you (acting as a client) send an HTTP request to <code>Server A</code>, that server might in turn send an HTTP request to <code>Server B</code> to handle your request. Then <code>Server A</code> acts both as a server and a client at the same time. This is for example used when you login with your Google account on a website that doesn&#39;t belong to Google. Then the website you send your login request to will send its own requests to Google to check which Google account that belongs to you (this example is a bit simplified; in practice it is a bit more complicated than this).</p><h2 id="resources-and-uris" tabindex="-1"><a class="header-anchor" href="#resources-and-uris" aria-hidden="true">#</a> Resources and URIs</h2><p>Servers in HTTP are expected to contain resources. It is up to each server to decide what type of resources it should contain, but some resources commonly found on websites includes:</p><ul><li>Images (<code>.png</code> files, <code>.jpeg</code> files, etc.)</li><li>Sounds (<code>.mp3</code> files, etc.)</li><li>Videos (<code>.mp4</code> files, etc.)</li><li>Documents (<code>.pdf</code> files, <code>.docx</code> files, <code>.txt</code> files, etc.)</li><li>Static webpages (<code>.html</code> files, <code>.css</code> files, <code>.js</code> files, etc.)</li><li>General data, such as: <ul><li>Accounts</li><li>Blogposts</li><li>Guestbook posts</li><li>Articles</li><li>Private Messages</li><li>Comments</li><li>etc.</li></ul></li></ul><p>Some resources (images, videos, documents, etc.) are simply stored as files on the server, while other resources can be stored in a database, or some other way. For now, we don&#39;t really care about how the resources are being stored on the server, as long as they are stored somehow.</p><p>When a client wants to work with a resource, it sends an HTTP requests to the server, asking the server to do something with the resource. There are primarilly four different types of requests clients can send. These are known as CRUD operations, and they are:</p><ul><li><u>C</u>reate (ask the server to create a new resource)</li><li><u>R</u>etrieve/<u>R</u>ead (ask the server to send back a resource)</li><li><u>U</u>pdate (ask the server to change a resource)</li><li><u>D</u>elete (ask the server to delete a reosurce)</li></ul><p>In English, an HTTP request could say something like:</p><ul><li><em>Send back the contact page to me</em></li><li><em>Delete the last comment I wrote</em></li><li><em>Change the title of the blog post I wrote yesterday to &quot;Congratulations&quot;</em> (the client sends the new title to the server)</li><li><em>Create a new friend relationship with the user Alice for me</em> (the client sends a new resource representing the friend relationship to the server)</li></ul><div class="custom-container tip"><p class="custom-container-title">Example</p><p>When you create a new account on a website, your web browser sends an HTTP request to the server asking the server to create a new resource representing your account containing your username and password (and possibly some additional information).</p></div><p>Each request sent to a server is about doing something with a resource. The client tells the server which resource that is through a <em>Uniform Resource Identifier</em> (URI). Each resource on the server should have a URI that uniquely identifies it, and it is the server that decides which URI each resource should have. Each time you view a webpage (webpage = resource) in a web browser, you can see the URI that uniquely identifies that webpage in the address bar (usually located at the top of the web browser).</p>',12),x=(0,n.Uk)("For example, "),E={href:"https://en.wikipedia.org/wiki/Mathematics",target:"_blank",rel:"noopener noreferrer"},R=(0,n.Uk)("Wikipedia's article/webpage about Mathematics"),I=(0,n.Uk)(" has the URI "),W=(0,n._)("code",null,"/wiki/Mathematics",-1),S=(0,n.Uk)(", while their "),A={href:"https://en.wikipedia.org/wiki/Computer_science",target:"_blank",rel:"noopener noreferrer"},D=(0,n.Uk)("article/webpage about Computer Science"),C=(0,n.Uk)(" has the URI "),O=(0,n._)("code",null,"/wiki/Computer_science",-1),X=(0,n.Uk)("."),L=(0,n.Uk)("The "),G={href:"https://tools.ietf.org/html/rfc3986",target:"_blank",rel:"noopener noreferrer"},j=(0,n.Uk)("URI specification"),F=(0,n.Uk)(" specifies the format of URIs. Simply put, it is a sequence of characters, where the slash character "),M=(0,n._)("code",null,"/",-1),N=(0,n.Uk)(" is used to group relevant resources together. URIs also include the protocol used to access the resource (e.g. HTTP) and an identifier indicating which server that stores the resource (a domain or an IP adress), so a complete URI could for example be "),B=(0,n._)("code",null,"https://en.wikipedia.org/wiki/Mathematics",-1),V=(0,n.Uk)(", where "),z=(0,n._)("code",null,"https",-1),K=(0,n.Uk)(" indicates that the HTTPS protocol should be used to send the HTTP request, and the computer containing the resource is the one with the IP address the domain name "),Y=(0,n._)("code",null,"wikipedia.org",-1),Z=(0,n.Uk)(" maps to."),J=(0,n.uE)('<div class="custom-container tip"><p class="custom-container-title">HTTP VS HTTPS</p><p>The web is built on the HTTP protocol. The HTTP protocol is not encrypted, so it&#39;s a bad idea to send sensitive information (such as passwords, credit card numbers, etc.) using it. Therefore the HTTPS protocol were invented. HTTPS does more or less work the same way as HTTP, but with the addition being encrypted, so even though you learn HTTP here, you can just as well later use HTTPS.</p></div><p>URIs usually identifies a single resource or a collection of multiple resources. It is quite common that the beginning of a URI identifies a collection of resources, and the end of the URI identifies a specific resource within that collection. For example, the URI <code>/accounts</code> could identify the collection of all accounts on a website, and the URI <code>/accounts/Alice</code> identifies the specific account with the username <em>Alice</em>. We can also see this pattern in the example before with URIs on Wikipedia.</p><h2 id="requests" tabindex="-1"><a class="header-anchor" href="#requests" aria-hidden="true">#</a> Requests</h2><p>So, a client can send an HTTP request to a server to request the server to do something for it. The HTTP specification have specified the structure of these HTTP requests, so it is very important that clients send HTTP requests using the structure specified in the HTTP specification. If they don&#39;t, servers will not understand the request and simply ignore it or send back an HTTP response indicating that something was wrong with the request.</p>',4),Q=(0,n.Uk)("The structure of an HTTP request is shown in "),$=(0,n.Uk)(" below."),ee=(0,n._)("div",{class:"language-http ext-http line-numbers-mode"},[(0,n._)("pre",{class:"language-http"},[(0,n._)("code",null,[(0,n.Uk)("METHOD URI VERSION\n"),(0,n._)("span",{class:"token header-name keyword"},"HEADER1:"),(0,n.Uk)(" VALUE1\n"),(0,n._)("span",{class:"token header-name keyword"},"HEADER2:"),(0,n.Uk)(" VALUE2\n...\n\nBODY\n")])]),(0,n._)("div",{class:"line-numbers"},[(0,n._)("span",{class:"line-number"},"1"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"2"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"3"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"4"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"5"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"6"),(0,n._)("br")])],-1),te=(0,n.uE)("<p>The first line in an HTTP request is called the <em>request line</em>. It consists of three parts.</p><p>The first part on the request line is called the <code>METHOD</code>. It is also known as the <em>verb</em>, but the HTTP specification calls it method, so it is better to stick with that. The method indicates what the client wants to do with the resource identified by the <code>URI</code> (the second part). For example, the <code>GET</code> method indicates that the client wants to retrieve the resource, so the server should send back the resource in the HTTP request. The <code>DELETE</code> method indicates that the client wants the server to delete the resource, so the server should delete the resource before it sends back an HTTP response.</p><p>The third part on the request line, <code>VERSION</code>, indicates which version of HTTP the client is using, so the server can use the same version. A common value used here is <code>HTTP/1.1</code>.</p><p>Below the request line you find <em>the headers</em>. These are key-value pairs with additional information about the request. For example, the <code>Host</code> header is used to indicate the domain name of the server the request is sent to (for example <code>Host: ju.se</code>), and the <code>Accept</code> header is used to indicate which data format the client would like to get back the requested resource in (for example <code>Accept: text/html</code>).</p><p>Below the headers you find <em>the body</em> of the request. Here the client can pass a resource to the server in the HTTP request. This is used when the client wants to create a new resource on the server or update an existing resource. If no resource needs to be sent to the server, you omit the body (leave it empty/blank).</p>",5),se=(0,n.Uk)("An example of an actual HTTP request is shown in "),ne=(0,n.Uk)(" below."),ae=(0,n._)("div",{class:"language-http ext-http line-numbers-mode"},[(0,n._)("pre",{class:"language-http"},[(0,n._)("code",null,[(0,n._)("span",{class:"token request-line"},[(0,n._)("span",{class:"token method property"},"POST"),(0,n.Uk)(),(0,n._)("span",{class:"token request-target url"},"/accounts"),(0,n.Uk)(),(0,n._)("span",{class:"token http-version property"},"HTTP/1.1")]),(0,n.Uk)("\n"),(0,n._)("span",{class:"token header-name keyword"},"Host:"),(0,n.Uk)(" game-site.com\n"),(0,n._)("span",{class:"token header-name keyword"},"Content-Type:"),(0,n.Uk)(" application/json\n"),(0,n._)("span",{class:"token header-name keyword"},"Accept:"),(0,n.Uk)(" text/html"),(0,n._)("span",{class:"token application-json"},[(0,n.Uk)("\n\n"),(0,n._)("span",{class:"token punctuation"},"{"),(0,n._)("span",{class:"token string"},'"username"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'"Alice"'),(0,n._)("span",{class:"token punctuation"},","),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'"password"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'"abc123"'),(0,n._)("span",{class:"token punctuation"},"}"),(0,n.Uk)("\n")])])]),(0,n._)("div",{class:"line-numbers"},[(0,n._)("span",{class:"line-number"},"1"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"2"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"3"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"4"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"5"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"6"),(0,n._)("br")])],-1),re=(0,n._)("h4",{id:"request-headers",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#request-headers","aria-hidden":"true"},"#"),(0,n.Uk)(" Request Headers")],-1),oe=(0,n.Uk)(" below describes some of the headers you can use in an HTTP request. "),ie=(0,n._)("table",null,[(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"Name"),(0,n._)("th",null,"Example"),(0,n._)("th",null,"Description")])]),(0,n._)("tbody",null,[(0,n._)("tr",null,[(0,n._)("td",null,[(0,n._)("code",null,"Host")]),(0,n._)("td",null,[(0,n._)("code",null,"Host: nintendo.se")]),(0,n._)("td",null,"Identifies the domain the HTTP request is sent to.")]),(0,n._)("tr",null,[(0,n._)("td",null,[(0,n._)("code",null,"Accept")]),(0,n._)("td",null,[(0,n._)("code",null,"Accept: text/html")]),(0,n._)("td",null,"Identifies the data format the client wants the resource back in.")]),(0,n._)("tr",null,[(0,n._)("td",null,[(0,n._)("code",null,"Content-Type")]),(0,n._)("td",null,[(0,n._)("code",null,"Content-Type: application/json")]),(0,n._)("td",null,"Identifies the data format the body of the HTTP request is written in.")])])],-1),le=(0,n.uE)('<h4 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h4><p>There exists a bunch of different HTTP methods, but web developers primarily need to know four of them: <code>GET</code>, <code>POST</code>, <code>PUT</code> and <code>DELETE</code>. These maps well to the commonly used CRUD operations:</p><ul><li>Create: <code>POST</code></li><li>Retrieve: <code>GET</code></li><li>Update: <code>PUT</code></li><li>Delete: <code>Delete</code></li></ul>',3),ce=(0,n._)("p",null,[(0,n.Uk)("A client can send a "),(0,n._)("code",null,"GET"),(0,n.Uk)(" request to a server to tell the server to send back the resource identified through the URI in the request. A "),(0,n._)("code",null,"GET"),(0,n.Uk)(" requests contains no body since the request is only about fetching a resource from the server, and not sending a resource to the server.")],-1),ue=(0,n._)("div",{class:"custom-container tip"},[(0,n._)("p",{class:"custom-container-title"},"Example"),(0,n._)("div",{class:"language-http ext-http line-numbers-mode"},[(0,n._)("pre",{class:"language-http"},[(0,n._)("code",null,[(0,n._)("span",{class:"token request-line"},[(0,n._)("span",{class:"token method property"},"GET"),(0,n.Uk)(),(0,n._)("span",{class:"token request-target url"},"/accounts"),(0,n.Uk)(),(0,n._)("span",{class:"token http-version property"},"HTTP/1.1")]),(0,n.Uk)("\n"),(0,n._)("span",{class:"token header-name keyword"},"Host:"),(0,n.Uk)(" game-site.com\n"),(0,n._)("span",{class:"token header-name keyword"},"Accept:"),(0,n.Uk)(" text/html\n")])]),(0,n._)("div",{class:"line-numbers"},[(0,n._)("span",{class:"line-number"},"1"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"2"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"3"),(0,n._)("br")])])],-1),de=(0,n._)("p",null,":::",-1),he=(0,n._)("p",null,[(0,n.Uk)("A client can send a "),(0,n._)("code",null,"POST"),(0,n.Uk)(" request to a server to tell the server to create a new resource. The URI in the request should identify what type of resource that should be created, and the body of the request should contain the resource.")],-1),pe=(0,n._)("div",{class:"custom-container tip"},[(0,n._)("p",{class:"custom-container-title"},"Example"),(0,n._)("div",{class:"language-http ext-http line-numbers-mode"},[(0,n._)("pre",{class:"language-http"},[(0,n._)("code",null,[(0,n._)("span",{class:"token request-line"},[(0,n._)("span",{class:"token method property"},"POST"),(0,n.Uk)(),(0,n._)("span",{class:"token request-target url"},"/contact-messages"),(0,n.Uk)(),(0,n._)("span",{class:"token http-version property"},"HTTP/1.1")]),(0,n.Uk)("\n"),(0,n._)("span",{class:"token header-name keyword"},"Host:"),(0,n.Uk)(" a-store.com\n"),(0,n._)("span",{class:"token header-name keyword"},"Content-Type:"),(0,n.Uk)(" application/json"),(0,n._)("span",{class:"token application-json"},[(0,n.Uk)("\n\n"),(0,n._)("span",{class:"token punctuation"},"{"),(0,n._)("span",{class:"token string"},'"name"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'"Alice"'),(0,n._)("span",{class:"token punctuation"},","),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'"message"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'"Hi, I bought a thing from you, and it\'s not working. Please get back to me with info on how to proceed."'),(0,n._)("span",{class:"token punctuation"},","),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'"email"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'"alice@wonderland.com"'),(0,n._)("span",{class:"token punctuation"},"}"),(0,n.Uk)("\n")])])]),(0,n._)("div",{class:"line-numbers"},[(0,n._)("span",{class:"line-number"},"1"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"2"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"3"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"4"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"5"),(0,n._)("br")])])],-1),me=(0,n._)("p",null,":::",-1),_e=(0,n._)("p",null,[(0,n.Uk)("A client can send a "),(0,n._)("code",null,"PUT"),(0,n.Uk)(" request to a server to tell the server to replace an existing resource on the server with a new one the client sends it. The URI in the request should identify which resource on the server to be replaced, and the body of the request should contain the new resource.")],-1),be=(0,n._)("div",{class:"custom-container tip"},[(0,n._)("p",{class:"custom-container-title"},"Example"),(0,n._)("div",{class:"language-http ext-http line-numbers-mode"},[(0,n._)("pre",{class:"language-http"},[(0,n._)("code",null,[(0,n._)("span",{class:"token request-line"},[(0,n._)("span",{class:"token method property"},"PUT"),(0,n.Uk)(),(0,n._)("span",{class:"token request-target url"},"/diary-entries/2020-02-13"),(0,n.Uk)(),(0,n._)("span",{class:"token http-version property"},"HTTP/1.1")]),(0,n.Uk)("\n"),(0,n._)("span",{class:"token header-name keyword"},"Host:"),(0,n.Uk)(" diaries.com\n"),(0,n._)("span",{class:"token header-name keyword"},"Content-Type:"),(0,n.Uk)(" application/json"),(0,n._)("span",{class:"token application-json"},[(0,n.Uk)("\n\n"),(0,n._)("span",{class:"token punctuation"},"{"),(0,n._)("span",{class:"token string"},'"date"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'"2020-02-13"'),(0,n._)("span",{class:"token punctuation"},","),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'"message"'),(0,n._)("span",{class:"token operator"},":"),(0,n.Uk)(),(0,n._)("span",{class:"token string"},'"Today was a wonderful day, Kim proposed to me, and I said yes :D We will live happily ever after now. (update 2020-04-15: Me and Kim are no longer together)."'),(0,n._)("span",{class:"token punctuation"},"}"),(0,n.Uk)("\n")])])]),(0,n._)("div",{class:"line-numbers"},[(0,n._)("span",{class:"line-number"},"1"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"2"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"3"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"4"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"5"),(0,n._)("br")])])],-1),ke=(0,n._)("p",null,":::",-1),Te=(0,n._)("p",null,[(0,n.Uk)("A client can send a "),(0,n._)("code",null,"DELETE"),(0,n.Uk)(" request to a server to tell the server to delete all resources on the server identified through the URI in the request.")],-1),ge=(0,n._)("div",{class:"custom-container tip"},[(0,n._)("p",{class:"custom-container-title"},"Example"),(0,n._)("div",{class:"language-http ext-http line-numbers-mode"},[(0,n._)("pre",{class:"language-http"},[(0,n._)("code",null,[(0,n._)("span",{class:"token request-line"},[(0,n._)("span",{class:"token method property"},"DELETE"),(0,n.Uk)(),(0,n._)("span",{class:"token request-target url"},"/guestbook-posts/123"),(0,n.Uk)(),(0,n._)("span",{class:"token http-version property"},"HTTP/1.1")]),(0,n.Uk)("\n"),(0,n._)("span",{class:"token header-name keyword"},"Host:"),(0,n.Uk)(" football-lovers.com\n")])]),(0,n._)("div",{class:"line-numbers"},[(0,n._)("span",{class:"line-number"},"1"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"2"),(0,n._)("br")])])],-1),we=(0,n._)("p",null,":::",-1),fe=(0,n.uE)('<div class="custom-container warning"><p class="custom-container-title">PUT and DELETE not in HTML</p><p>In the language used to build web pages, HTML, it&#39;s only possible to send <code>GET</code> and <code>POST</code> requests. Therefore, web developers rarely use <code>PUT</code> and <code>DELETE</code> requests. On websites, <code>PUT</code> and <code>DELETE</code> requests are often implemented as <code>POST</code> requests, and the URI is used to indicate if it should be a create, update or a delete operation.</p></div><h2 id="responses" tabindex="-1"><a class="header-anchor" href="#responses" aria-hidden="true">#</a> Responses</h2>',2),Ue=(0,n.Uk)("When a server receives an HTTP request, it should look at the request (i.e. the method and the URI) to figure out what the request is about, then carry out the request and then send back an HTTP response. The structure of an HTTP response is shown in "),ve=(0,n.Uk)(" below."),ye=(0,n._)("div",{class:"language-http ext-http line-numbers-mode"},[(0,n._)("pre",{class:"language-http"},[(0,n._)("code",null,[(0,n.Uk)("VERSION STATUS_CODE REASON_PHRASE\n"),(0,n._)("span",{class:"token header-name keyword"},"HEADER1:"),(0,n.Uk)(" VALUE1\n"),(0,n._)("span",{class:"token header-name keyword"},"HEADER2:"),(0,n.Uk)(" VALUE2\n...\n\nBODY\n")])]),(0,n._)("div",{class:"line-numbers"},[(0,n._)("span",{class:"line-number"},"1"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"2"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"3"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"4"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"5"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"6"),(0,n._)("br")])],-1),qe=(0,n.uE)('<p>The first line in the HTTP response is called <em>the status line</em>. It first contains the HTTP version the server is using (<code>VERSION</code>), and then a <code>STATUS_CODE</code> (a three digit number) indicating how the server handled the request (e.g. did it carry out the request? Or why didn&#39;t carry it out?), and then a <code>REASON_PHRASE</code>, which just is a very short human readable text for what the status code mean. For programmers using HTTP, it&#39;s primarily the status code that&#39;s interesting to look at.</p><p>Just as HTTP requests, HTTP responses can contain headers and a body too.</p><div class="custom-container warning"><p class="custom-container-title">Request Headers != Response Headers</p><p>Although HTTP requests and HTTP responses both contain headers, which headers they can contain depends on if it&#39;s a request or a response. For example, the <code>Accept</code> header can only be used in HTTP requests, and the <code>Content-Type</code> header can be used in both HTTP requests and HTTP responses.</p></div><h3 id="status-codes" tabindex="-1"><a class="header-anchor" href="#status-codes" aria-hidden="true">#</a> Status codes</h3><p>The three digit status code can either start with the digit <code>1</code>, <code>2</code>, <code>3</code>, <code>4</code> or <code>5</code>. Which digit it is hints about how the server handled the request.</p>',5),He=(0,n._)("p",null,[(0,n.Uk)("The "),(0,n._)("code",null,"1XX"),(0,n.Uk)(" status codes indicate an "),(0,n._)("em",null,"informational"),(0,n.Uk)(" response. These aren't that important to know for programmers using HTTP.")],-1),Pe=(0,n._)("p",null,[(0,n.Uk)("The "),(0,n._)("code",null,"2XX"),(0,n.Uk)(" status codes indicate that the server successfully carried out the HTTP request. The most commonly used ones are (reason phrase shown after the status code):")],-1),xe=(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("code",null,"200"),(0,n.Uk)(" OK"),(0,n._)("br"),(0,n.Uk)(" The server carried out the request and sends back a resource in the body of the response.")]),(0,n._)("li",null,[(0,n._)("code",null,"201"),(0,n.Uk)(" Created"),(0,n._)("br"),(0,n.Uk)(" The server carried out the request and a new resource was created while carrying out the request. The "),(0,n._)("code",null,"Location"),(0,n.Uk)(" header in the HTTP response contains the URI for the newly created resource.")]),(0,n._)("li",null,[(0,n._)("code",null,"204"),(0,n.Uk)(" No Content"),(0,n._)("br"),(0,n.Uk)(" The server carried out the request, but the response contains no body.")])],-1),Ee=(0,n._)("p",null,[(0,n.Uk)("The "),(0,n._)("code",null,"3XX"),(0,n.Uk)(" status codes indicate that the server encourages the client to send a new HTTP request using another URI (i.e. redirecting the client).")],-1),Re=(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("code",null,"302"),(0,n.Uk)(" Found"),(0,n._)("br"),(0,n.Uk)(" The server encourages the client to send the same HTTP request again but with the URI specified in the "),(0,n._)("code",null,"Location"),(0,n.Uk)(" response header instead. This is useful if you change URIs on a website. For example, first maybe "),(0,n._)("code",null,"/about-us"),(0,n.Uk)(" was used to identify the about page on the website, and then you changed that to just "),(0,n._)("code",null,"/about"),(0,n.Uk)(". Then when a client sends a "),(0,n._)("code",null,"GET"),(0,n.Uk)(" request to "),(0,n._)("code",null,"/about-us"),(0,n.Uk)(" you can send back a "),(0,n._)("code",null,"302"),(0,n.Uk)(" response with the header "),(0,n._)("code",null,"Location: /about"),(0,n.Uk)(" to indicate that the URI for the page has changed to "),(0,n._)("code",null,"/about"),(0,n.Uk)(".")])],-1),Ie=(0,n._)("p",null,[(0,n.Uk)("The "),(0,n._)("code",null,"4XX"),(0,n.Uk)(" status codes indicate that the server didn't carry out the request because the client has done something wrong with the request. The client needs to fix the problem and try again.")],-1),We=(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("code",null,"400"),(0,n.Uk)(" Bad Request"),(0,n._)("br"),(0,n.Uk)(" The server didn't carry out the request because something is wrong with it. The body of the response can contain additional information about what's wrong. Better to use another "),(0,n._)("code",null,"4XX"),(0,n.Uk)(" status code if a more specific that describes the problem exists.")]),(0,n._)("li",null,[(0,n._)("code",null,"401"),(0,n.Uk)(" Unauthorized"),(0,n._)("br"),(0,n.Uk)(" The server didn't carry out the request because the client is not authorized to request it (the client might for example need to login first).")]),(0,n._)("li",null,[(0,n._)("code",null,"404"),(0,n.Uk)(" Not Found"),(0,n._)("br"),(0,n.Uk)(" The server didn't carry out the request because the URI in the request doesn't identify a resource that exists.")])],-1),Se=(0,n._)("p",null,[(0,n.Uk)("The "),(0,n._)("code",null,"5XX"),(0,n.Uk)(" status codes indicates that the server couldn't carry out the request because something is wrong on the server-side. Maybe the server crashed, or maybe the server needs an external resource (e.g. a database) to carry out the request, and it doesn't have access to it the moment, etc.")],-1),Ae=(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("code",null,"500 "),(0,n.Uk)(" Internal Server Error"),(0,n._)("br"),(0,n.Uk)(" The server couldn't carry out the request.")])],-1),De=(0,n._)("h2",{id:"world-wide-web",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#world-wide-web","aria-hidden":"true"},"#"),(0,n.Uk)(" World Wide Web")],-1),Ce={class:"custom-container tip"},Oe=(0,n._)("p",{class:"custom-container-title"},"Terminology",-1),Xe=(0,n._)("p",null,[(0,n.Uk)("A "),(0,n._)("em",null,"web application"),(0,n.Uk)(" is the application running on the server that receives HTTP requests and sends back HTTP responses.")],-1),Le=(0,n._)("p",null,[(0,n.Uk)("A "),(0,n._)("em",null,"webpage"),(0,n.Uk)(" is a single page you can view in your web browser. Each HTTP response usually contains a single webpage.")],-1),Ge=(0,n.Uk)("A "),je=(0,n._)("em",null,"website",-1),Fe=(0,n.Uk)(" is the collection of all webpages on one and the same server (i.e. all webpages on the same domain, for example all webpages at "),Me={href:"https://ju.se",target:"_blank",rel:"noopener noreferrer"},Ne=(0,n.Uk)("ju.se"),Be=(0,n.Uk)(")."),Ve=(0,n.Uk)("So, why is it called "),ze=(0,n._)("em",null,"the world wide web",-1),Ke=(0,n.Uk)("? Webpages can contain links to other webpages, and if you try to visualize this structure, you end up with something looking like a web, as shown in "),Ye=(0,n.Uk)(" below (some imagination required!)."),Ze={},Je=(0,s(3744).Z)(Ze,[["render",function(e,t){const s=(0,n.up)("OutboundLink"),Ze=(0,n.up)("FigureNumber"),Je=(0,n.up)("RenderMermaid"),Qe=(0,n.up)("Figure"),$e=(0,n.up)("CodeGroupItem"),et=(0,n.up)("CodeGroup");return(0,n.wg)(),(0,n.iD)(n.HY,null,[a,(0,n._)("p",null,[r,o,i,(0,n._)("a",l,[c,(0,n.Wm)(s)]),u]),d,h,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("a",p,[m,(0,n.Wm)(s)]),_,b]),(0,n._)("li",null,[(0,n._)("a",k,[T,(0,n.Wm)(s)]),g])]),w,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("a",f,[U,(0,n.Wm)(s)])])]),v,y,(0,n._)("p",null,[q,(0,n.Wm)(Ze),H]),(0,n.Wm)(Qe,{caption:"Example of Client-Server communication."},{default:(0,n.w5)((()=>[(0,n.Wm)(Je,{"graph-definition":"\nsequenceDiagram\n    participant Client\n    participant Server\n    Client->>+Server: 1. HTTP Request\n    Note right of Server: 2. Carry out request\n    Server--\x3e>-Client: 3. HTTP Response\n"})])),_:1}),P,(0,n._)("p",null,[x,(0,n._)("a",E,[R,(0,n.Wm)(s)]),I,W,S,(0,n._)("a",A,[D,(0,n.Wm)(s)]),C,O,X]),(0,n._)("p",null,[L,(0,n._)("a",G,[j,(0,n.Wm)(s)]),F,M,N,B,V,z,K,Y,Z]),J,(0,n._)("p",null,[Q,(0,n.Wm)(Ze),$]),(0,n.Wm)(Qe,{caption:"The structure of an HTTP request."},{default:(0,n.w5)((()=>[ee])),_:1}),te,(0,n._)("p",null,[se,(0,n.Wm)(Ze),ne]),(0,n.Wm)(Qe,{caption:"Example of an HTTP request asking the server to create a new account."},{default:(0,n.w5)((()=>[ae])),_:1}),re,(0,n.Wm)(Ze),oe,(0,n.Wm)(Qe,{caption:"Description of some of the HTTP request headers."},{default:(0,n.w5)((()=>[ie])),_:1}),le,(0,n.Wm)(et,null,{default:(0,n.w5)((()=>[(0,n.Wm)($e,{title:"GET"},{default:(0,n.w5)((()=>[ce,ue])),_:1}),de,(0,n.Wm)($e,{title:"POST"},{default:(0,n.w5)((()=>[he,pe])),_:1}),me,(0,n.Wm)($e,{title:"PUT"},{default:(0,n.w5)((()=>[_e,be])),_:1}),ke,(0,n.Wm)($e,{title:"DELETE"},{default:(0,n.w5)((()=>[Te,ge])),_:1}),we])),_:1}),fe,(0,n._)("p",null,[Ue,(0,n.Wm)(Ze),ve]),(0,n.Wm)(Qe,{caption:"The structure of an HTTP response."},{default:(0,n.w5)((()=>[ye])),_:1}),qe,(0,n.Wm)(et,null,{default:(0,n.w5)((()=>[(0,n.Wm)($e,{title:"1XX"},{default:(0,n.w5)((()=>[He])),_:1}),(0,n.Wm)($e,{title:"2XX"},{default:(0,n.w5)((()=>[Pe,xe])),_:1}),(0,n.Wm)($e,{title:"3XX"},{default:(0,n.w5)((()=>[Ee,Re])),_:1}),(0,n.Wm)($e,{title:"4XX"},{default:(0,n.w5)((()=>[Ie,We])),_:1}),(0,n.Wm)($e,{title:"5XX"},{default:(0,n.w5)((()=>[Se,Ae])),_:1})])),_:1}),De,(0,n._)("div",Ce,[Oe,Xe,Le,(0,n._)("p",null,[Ge,je,Fe,(0,n._)("a",Me,[Ne,(0,n.Wm)(s)]),Be])]),(0,n._)("p",null,[Ve,ze,Ke,(0,n.Wm)(Ze),Ye]),(0,n.Wm)(Qe,{caption:"A visualization of some webpages and where their links lead."},{default:(0,n.w5)((()=>[(0,n.Wm)(Je,{"graph-definition":"\ngraph TD\n  a[Webpage A]\n  b[Webpage B]\n  c[Webpage C]\n  d[Webpage D]\n  e[Webpage E]\n  f[Webpage F]\n  g[Webpage G]\n  a--\x3eb\n  c--\x3eb\n  c--\x3ea\n  c--\x3ed\n  d--\x3ea\n  d--\x3eb\n  e--\x3eb\n  e--\x3ec\n  f--\x3ec\n  f--\x3ed\n  f--\x3ea\n  b--\x3ef\n  g--\x3eb\n  g--\x3ef\n  g--\x3ee\n  d--\x3eg\n  c--\x3eg\n"})])),_:1})],64)}]])},3744:(e,t)=>{t.Z=(e,t)=>{const s=e.__vccOpts||e;for(const[e,n]of t)s[e]=n;return s}},5177:(e,t,s)=>{s.r(t),s.d(t,{data:()=>n});const n={key:"v-1195968e",path:"/lectures/http-and-web-applications/",title:"HTTP and Web Applications",lang:"en-US",frontmatter:{sidebar:"auto",navbarTitle:"HTTP and Web Applications"},excerpt:"",headers:[{level:2,title:"Lecture material",slug:"lecture-material",children:[]},{level:2,title:"Recommended reading",slug:"recommended-reading",children:[]},{level:2,title:"Interesting reading",slug:"interesting-reading",children:[]},{level:2,title:"Clients and Servers",slug:"clients-and-servers",children:[]},{level:2,title:"Resources and URIs",slug:"resources-and-uris",children:[]},{level:2,title:"Requests",slug:"requests",children:[]},{level:2,title:"Responses",slug:"responses",children:[{level:3,title:"Status codes",slug:"status-codes",children:[]}]},{level:2,title:"World Wide Web",slug:"world-wide-web",children:[]}],filePathRelative:"lectures/http-and-web-applications/README.md",git:{updatedTime:1637582377e3}}}}]);
//# sourceMappingURL=v-1195968e.95f6a90b.js.map
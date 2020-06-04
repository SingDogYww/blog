<template>
    <a-list size="large" :pagination="pagination" :data-source="listData">
        <a-list-item slot="renderItem" key="item.title" slot-scope="item, index">
            <img
                style="float: left"
                class="itemimg"
                width="272"
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
            <div class="itemcontainer">
                <div class="blog-title">
                    <h2>{{item.title}}</h2>
                </div>
                <div class="blog-abstract">
                    <p>{{item.description}}</p>
                </div>
                <div class="blog-footer">
                    <a-avatar style="backgroundColor:#87d068">张飞</a-avatar>
                    <span style="margin-left: 5px">发布于: {{item.date}}</span>
                    <span style="margin-left: 20px">
                        <a-icon type="eye" />
                        {{ 256 }}
                    </span>
                    <span style="margin-left: 20px">
                        <a-icon type="like-o" style="margin-right: 8px" />
                        {{ 256 }}
                    </span>
                    <span style="margin-left: 20px">
                        <a-icon type="message" style="margin-right: 8px" />
                        {{ 256 }}
                    </span>
                </div>
            </div>
        </a-list-item>
    </a-list>
</template>
<script>
const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: "https://www.antdv.com/",
        title: `Http缓存总体流程 ${i}`,
        avatar:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        description: `浏览器加载一个页面的缓存流程如下：

浏览器先根据Http Header信息来判断是否命中强缓存。如果命中则直接加载本地缓存中的资源，并不会将请求发送到服务器。
如果未命中强缓存，则浏览器会将资源加载请求发送到服务器。服务器来判断浏览器本地缓存是否失效。若可以使用，则服务器并不会返回资源信息，浏览器继续从缓存加载资源，虽然与强缓存加载的是“同一份缓存”，但是由于流程与性质不一样，我们把它叫做协商缓存。
如果未命中协商缓存，则服务器会将完整的资源返回给浏览器，浏览器加载新资源，并更新缓存。
强缓存：不会向服务器发送请求,直接从本地缓存中读取资源返回200的状态码。

from memory cache一般脚本、字体、图片会存在内存当中

from disk cache一般非脚本会存在磁盘当中，如css等

协商缓存：向服务器发送请求,服务器根据请求中的Header的字段判断是否命中协商缓存,如果命中,则返回304状态码并带上新的响应头通知浏览器从缓存中读取资源

与之相关的字段为：
强缓存：cache-control、expires
协商缓存：Last-Modified/if-Modified-Since、Etag/if-None-Match.

其实整个缓存机制也就是围绕着这几个字段所展开`,
        content:
            "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
        date: "2020-05-20"
    });
}

export default {
    data() {
        return {
            listData,
            pagination: {
                onChange: page => {
                    console.log(page);
                },
                pageSize: 10
            },
            actions: [
                { type: "star-o", text: "156" },
                { type: "like-o", text: "156" },
                { type: "message", text: "2" }
            ]
        };
    }
};
</script>
<style>
.itemcontainer {
    margin-left: 20px;
}
.blog-abstract {
    margin-top: 20px;
}

.blog-abstract p {
    font-size: 14px;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 3;
}

.blog-title {
}

.blog-footer {
    margin-top: 20px;
}
</style>

<template>
    <div id="components-layout-demo-basic">
        <a-layout>
            <a-layout-header>
                <a-row>
                    <a-col class="icon" :span="6">网站标题</a-col>
                    <a-col class="menu" :span="12">
                        <a-menu v-model="current" mode="horizontal">
                            <a-menu-item key="index" @click="toIndex">
                                <!-- <a-icon type="mail" /> -->
                                首页
                            </a-menu-item>
                            <a-menu-item key="label" @click="toLabale">
                                <!-- <a-icon type="mail" /> -->
                                Java
                            </a-menu-item>
                            <a-menu-item key="python">
                                <!-- <a-icon type="mail" /> -->
                                Python
                            </a-menu-item>
                            <a-menu-item key="web">
                                <!-- <a-icon type="mail" /> -->
                                Web安全
                            </a-menu-item>
                            <a-menu-item key="Kotlin">
                                <!-- <a-icon type="mail" /> -->
                                Kotlin
                            </a-menu-item>
                            <a-menu-item key="Groovy">
                                <!-- <a-icon type="mail" /> -->
                                Groovy
                            </a-menu-item>
                            <a-menu-item key="basic">
                                <!-- <a-icon type="mail" /> -->
                                计算机基础
                            </a-menu-item>
                            <a-menu-item key="other">
                                <!-- <a-icon type="mail" /> -->
                                其他
                            </a-menu-item>
                        </a-menu>
                    </a-col>
                    <a-col class="search" :span="6">
                        <a-input-search
                            placeholder="input search text"
                            enter-button="Search"
                            size="large"
                        />
                    </a-col>
                </a-row>
            </a-layout-header>
            <a-layout-content class="content">
                <a-row :gutter="32">
                    <!-- <a-col :span="6">
                        <div class="body-left">
                            <group-list></group-list>
                        </div>
                    </a-col>-->
                    <a-col :span="18" class="body-contain">
                        <keep-alive include="CountChartIndex">
                            内容
                            <router-view />
                        </keep-alive>
                    </a-col>
                    <a-col :span="6">
                        <div class="body-right">
                            <!-- 个人信息 -->
                            <!-- 分类 -->
                            <!-- 标签 -->
                            <!-- 最新文章 -->
                            <!-- 推荐 -->
                            <!-- 点击排行 -->
                            <!-- 归档 -->
                            <Userinfo></Userinfo>
                            <group-list></group-list>
                            <tags></tags>
                        </div>
                    </a-col>
                </a-row>
            </a-layout-content>
            <a-layout-footer>Footer</a-layout-footer>
        </a-layout>
    </div>
</template>
<script>
import Userinfo from "./component/Userinfo";
import GroupList from "./component/GroupList";
import Tags from "./component/Tags";
export default {
    name: "Layout",
    data() {
        return {
            current: ["mail"]
        };
    },
    components: { Userinfo, GroupList, Tags },
    methods: {
        toLabale() {
            this.$router.push("/label");
        },
        toIndex() {
            this.$router.push("/home");
        }
    }
};
</script>
<style>
/* #components-layout-demo-basic {
    text-align: center;
} */

.content {
    max-width: 1200px;
    margin: 0 auto;
}

.icon {
    width: 20rem;
    height: 2.9rem;
    float: left;
}

.search {
    width: 30rem;
    height: 2.9rem;
    float: left;
}

.search .ant-input {
    background-color: rgba(255, 255, 255, 0);
}

.menu {
    height: 2.9rem;
    float: left;
}

.menu .ant-menu-horizontal {
    background-color: rgba(255, 255, 255, 0);
}

.menu .ant-menu-horizontal {
    border-bottom: 0px solid transparent;
}

.body-contain {
    background-color: rgba(255, 255, 255, 0.9);
    box-sizing: border-box;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.06);
}

.body-left {
    background-color: rgba(255, 255, 255, 0.9);
    box-sizing: border-box;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.06);
}

.body-right,
.body-left {
    margin-top: 50px;
}

.body-right .ant-card {
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.06);
    margin-bottom: 16px;
}

.menu .ant-menu-horizontal > .ant-menu-item,
.ant-menu-horizontal > .ant-menu-submenu {
    border-bottom: 0px solid transparent;
}

#components-layout-demo-basic .ant-layout-header {
    position: fixed;
    z-index: 20;
    top: 0;
    left: 0;
    right: 0;
    height: 3.6rem;
    background-color: rgba(255, 255, 255, 0.9);
    box-sizing: border-box;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.06);
    padding: 0.7rem 1.5rem;
    line-height: 2.2rem;
    transition: transform 0.3s;
}

#components-layout-demo-basic .ant-layout-footer {
    line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
    background: #3ba0e9;
    color: #fff;
    line-height: 100%;
}
#components-layout-demo-basic .ant-layout-content {
    color: #fff;
    margin-top: 3.6rem;
}
#components-layout-demo-basic > .ant-layout {
    margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
    margin: 0;
}
</style>

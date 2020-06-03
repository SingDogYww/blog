<template>
    <div id="components-layout-demo-basic">
        <a-layout>
            <a-layout-header>
                <a-row>
                    <a-col class="icon" :span="6">网站标题</a-col>
                    <a-col class="search" :span="10">
                        <a-input-search
                            placeholder="input search text"
                            enter-button="Search"
                            size="large"
                        />
                    </a-col>
                    <a-col class="menu" :span="8">
                        <a-menu v-model="current" mode="horizontal">
                            <a-menu-item key="index" @click="toIndex">
                                <a-icon type="mail" />首页
                            </a-menu-item>
                            <a-menu-item key="label" @click="toLabale">
                                <a-icon type="mail" />标签页
                            </a-menu-item>
                            <a-menu-item key="java">
                                <a-icon type="mail" />标签页
                            </a-menu-item>
                        </a-menu>
                    </a-col>
                </a-row>
            </a-layout-header>
            <a-layout-content>
                <a-row :gutter="32">
                    <a-col :span="5">
                        <div class="body-left"></div>
                    </a-col>
                    <a-col :span="12" class="body-contain">
                        <keep-alive include="CountChartIndex">
                            内容
                            <router-view />
                        </keep-alive>
                    </a-col>
                    <a-col :span="5">
                        <div class="body-right">
                            <div>
                                <Userinfo></Userinfo>
                            </div>
                            <div>
                                <group-list></group-list>
                            </div>
                            <div>
                                <tags></tags>
                            </div>
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
    methods:{
        toLabale(){
            this.$router.push("/label")
        },
        toIndex(){
            this.$router.push("/home")
        }
    }
};
</script>
<style>
#components-layout-demo-basic {
    text-align: center;
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

.body-right {
    margin-top: 50px;
}

.body-right div{
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.06);
    margin-bottom: 16px;
}

.userinfo {
    height: 325px;
    margin-top: 50px;
    background-color: rgba(255, 255, 255, 0.9);
    box-sizing: border-box;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.06);
    margin-bottom: 16px;
}

.group {
    height: 400px;
    background-color: rgba(255, 255, 255, 0.9);
    box-sizing: border-box;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.06);
    margin-bottom: 16px;
}

.tags {
    height: 200px;
    background-color: rgba(255, 255, 255, 0.9);
    box-sizing: border-box;
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
    background-color: green;
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

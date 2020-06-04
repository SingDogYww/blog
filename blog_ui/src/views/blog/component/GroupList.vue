<template>
    <a-card>
        <a-list item-layout="horizontal" :data-source="data" :split="false">
            <a-list-item slot="renderItem">
                <div>分类</div>
                <div>50</div>
            </a-list-item>
        </a-list>
    </a-card>
</template>

<script>
const data = [
    {
        title: "Ant Design Title 1"
    },
    {
        title: "Ant Design Title 2"
    },
    {
        title: "Ant Design Title 3"
    },
    {
        title: "Ant Design Title 4"
    }
];
export default {
    name: "GroupList",
    data() {
        return {
            data
        };
    }
};
</script>

<style>
</style>
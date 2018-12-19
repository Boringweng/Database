<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-nav{
    width: 400px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>
<template>
    <div class="layout">
        <Layout :style="{minHeight: '100vh'}">
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-nav">
                        <MenuItem name="1">
                        <router-link to="ResumeAdd">
                            <Icon type="md-add" style="color:white"></Icon>
                            <font face="DFKai-sb" size="3" style="color:white"><b>新增履歷表</b></font>
                        </router-link>
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-hammer-outline" style="color:white"></Icon>
                            <font face="DFKai-sb" size="3" style="color:white"><b>修改履歷表</b></font>
                        </MenuItem>
                        <MenuItem name="3">
                        <router-link to="/">
                            <Icon type="md-redo" style="color:white"></Icon>
                            <font face="DFKai-sb" size="3" style="color:white"><b>登出</b></font>
                        </router-link>
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            Item 4
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Layout :style="{padding: '0 36px 36px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>找工作</BreadcrumbItem>
                        <BreadcrumbItem>找員工</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        Content
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
export default {
}
</script>

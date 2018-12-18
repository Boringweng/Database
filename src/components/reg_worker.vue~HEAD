<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 100px;
    margin: 0 auto;
    margin-right: 0px;
}
.layout-footer-center{
    text-align: center;
}
input {padding:8px 15px; background:#ccc; border:0 none;
-webkit-border-radius: 5px;
border-radius: 5px; }
#REGISTER{
    text-align:center;
}
.button {
    background-color: #4CAF50; /* Green */
    border: none;
    padding: 5px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    margin: 3px 3px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
}
.button1 {
    background-color: #4CAF50;
    color: black;
    border: 2px solid #4CAF50;
}
.button1:hover {
    background-color: gray;
    color: rgb(0, 0, 0);
}
.button2 {
    background-color: #4CAF50;
    color: black;
    border: 2px solid #4CAF50;
}
.button2:hover {
    background-color: gray;
    color: rgb(0, 0, 0);
}
</style>
<template>
    <div class="layout">
        <Layout>
            <Header :style="{position: 'fixed', width: '100%'}">
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-nav">
                        <MenuItem name="1">
                        <router-link to="home">
                            <Icon type="md-redo" style="color:white"></Icon>
                            <font face="DFKai-sb" size="3" style="color:white"><b>返回</b></font>
                        </router-link>
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">
                <div id="REGISTER">
                    <form>
                        <br><br>
                        <font face="DFKai-sb" size="5"><b>名字:</b></font> <input type="text" placeholder="請輸入名字"><br><br>
                        <font face="DFKai-sb" size="5"><b>性別:</b></font>
                        <input type="radio" name="sex" value="male"> <font size="5" face="DFKai-sb"><b>男生</b></font>
                        <input type="radio" name="sex" value="female"> <font size="5" face="DFKai-sb"><b>女生</b></font><br><br>
                        <font face="DFKai-sb" size="5"><b>帳號:</b></font> <input type="text" placeholder="請輸入帳號(身分證ID)..."><br><br>
                        <font face="DFKai-sb" size="5"><b>生日:</b></font> <input type="text" placeholder="(民國+月+日EX:851222)"><br><br>
                        <font face="DFKai-sb" size="5"><b>手機:</b></font> <input type="text" placeholder="請輸入電話..."><br><br>
                        <font face="DFKai-sb" size="5"><b>信箱:</b></font> <input type="text" placeholder="請輸入信箱..."><br><br>
                    </form>
                    <router-link to="home">
                    <button class="button button1"><font face="DFKai-sb" size="4">確定</font></button>
                    </router-link>
                </div>
            </Content>
            <Footer class="layout-footer-center">工程師 &copy; 求職網</Footer>
        </Layout>
    </div>
</template>
<script>
export default {
}
</script>

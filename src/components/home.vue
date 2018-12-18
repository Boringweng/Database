    <style scoped>
    input {padding:8px 15px; background:#ccc; border:0 none;
cursor:pointer;
-webkit-border-radius: 5px;
border-radius: 5px; }

legend{
    text-align: center;
}

#INPUT{
    text-align: center;
    display: inline-block;
    width:40%;
}
#HOME{
    text-align: center;
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
.button3 {
    background-color: #4CAF50;
    color: black;
    border: 2px solid #4CAF50;
}
.button3:hover {
    background-color: gray;
    color: rgb(0, 0, 0);
}
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-nav{
        width: 100px;
        margin: 0 auto;
        margin-right: 0px;
    }
    .layout-footer-center{
        text-align: center;
    }
</style>
<template>
    <div class="layout">
        <Layout>
            <Header :style="{position: 'fixed', width: '100%'}">
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <router-link to="register">
                                <Icon type="ios-bookmarks-outline" style="color:white"></Icon>
                                <font face="DFKai-sb" size="3" style="color:white"><b>註冊</b></font>
                            </router-link>
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">
                <div id="HOME">
                    <link rel="stylesheet" href="//at.alicdn.com/t/font_957264_r4qu5k760fj.css">
                    <br><br><br><br>
                    <div id="INPUT">
                        <fieldset>
                            <legend><b><font face="DFKai-sb" size="6">登入</font></b></legend>
                            <font face="DFKai-sb" size="5"><b>帳號:</b></font> <input type="text" placeholder="請輸入帳號(身分證ID)..."><br><br>
                            <font face="DFKai-sb" size="5"><b>密碼:</b></font> <input type="password" placeholder="請輸入密碼..."><br><br>
                            <div id="CHOOSE">
                                <i class="iconfont icon-wode" ></i>
                                <font size="5" face="DFKai-sb"><b>身分:</b></font>
                                <input type="radio" name="identity" value="s1"> <font size="5" face="DFKai-sb"><b>求職者</b></font>
                                <input type="radio" name="identity" value="s2"> <font size="5" face="DFKai-sb"><b>老闆</b></font><br><br>
                            </div>
                            <div id="BUTTON">
                                <router-link to="workerpage">
                                    <button class="button button1"><font face="DFKai-sb" size="4">登入</font></button>
                                </router-link>
                            </div>
                            <br>
                        </fieldset>
                    </div>
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

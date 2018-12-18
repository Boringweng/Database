<template>
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
            <router-link to="register">
                <button class="button button2"><font face="DFKai-sb" size="4">註冊</font></button>
            </router-link>
            <button class="button button3"><font face="DFKai-sb" size="4">忘記密碼</font></button>
        </div>
    </fieldset>
  </div>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
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
body {
    background-image:url( 'https://photo.16pic.com/00/38/62/16pic_3862207_b.jpg' );
    background-repeat:repeat;
    background-size: cover;
}
</style>

<template>
<div id="REGISTER">
    <div id="TITLE">
        <h1><b>工程師求職網</b></h1>
        <hr /><br>
    </div>
    <form>
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
    <button class="button button1"><font face="DFKai-sb" size="4">註冊</font></button>
    </router-link>
    <router-link to="home">
        <button class="button button2"><font face="DFKai-sb" size="4">返回</font></button>
    </router-link>
</div>
</template>

<script>
export default {
}
</script>

<style>
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
body {
    background-image:url( 'https://photo.16pic.com/00/38/62/16pic_3862207_b.jpg' );
    background-repeat:repeat;
    background-size: cover;
}
</style>

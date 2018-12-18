<template>
<div id="WORKER">
    <link rel="stylesheet" href="//at.alicdn.com/t/font_957264_r4qu5k760fj.css">
    <div id="TITLE">
        <h1><b>工程師求職網</b></h1>
    <br>
    </div>
    <div id="worker_button">
        <font face="DFKai-sb" size="3"><b>履歷表</b></font>
        <i class="iconfont icon-wenben" ></i>
        <router-link to="ResumeAdd">
            <Button type="insert" class="button insert">新增</Button>
        </router-link>
        <Button type="modify" class="button modify">修改</Button>
    </div>
    <div id="frame">
    </div>
    <div id="end">
        <router-link to="home">
            <button class="button turn"><font face="DFKai-sb" size="4">返回</font></button>
        </router-link>
    </div>
</div>
</template>

<script>
export default {
}
</script>

<style>
#end{
    text-align: center;
}
#WORKER{
    text-align:center;
}
#worker_button{
    text-align: left;
}
#frame{
    border-top:3px black solid;
    border-right:3px black solid;
    border-left:3px black solid;
    border-bottom:3px black solid;
    padding:0%;
    border-style:double;
}
#info{
    vertical-align:top;
}
body {
    background-image:url( 'https://photo.16pic.com/00/38/62/16pic_3862207_b.jpg' );
    background-repeat:no-repeat;
    background-position: 30% 20%;
    background-size: cover;
}
.button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: black;
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
.insert {
    border: none;
    background-color: inherit;
    padding: 10px 28px;
    font-size: 16px;
    cursor: pointer;
    display: inline-block;
}
.modify {
    border: none;
    background-color: inherit;
    padding: 10px 28px;
    font-size: 16px;
    cursor: pointer;
    display: inline-block;
}
.turn {
    background-color: #4CAF50;
    color: black;
    border: 2px solid #4CAF50;
}
.turn:hover {
    background-color: gray;
    color: rgb(0, 0, 0);
}
.button:hover {background:gray;}
</style>

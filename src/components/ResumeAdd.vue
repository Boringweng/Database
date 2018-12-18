<template>
    <div id="main">
        <div id="TITLE">
            <h1><b>履歷表</b></h1>
            <br>
        </div>
        <div id="personal">
            <div id="bas"></div>
            <div id="exp">
                <font face="DFKai-sb" size="5">基本資料</font><br>
                <font face="DFKai-sb" size="3"><b>身分證字號:</b></font> <input type="text" placeholder="請輸入身分證ID..."><br>
                <font face="DFKai-sb" size="3"><b>期望薪水:</b></font> <input type="text" placeholder="請輸入期望薪水..."><br>
                <font face="DFKai-sb" size="3"><b>申請部門:</b></font> <input type="text" placeholder="請輸入所申請部門..."><br>
                <font face="DFKai-sb" size="3"><b>技能:</b></font> <input type="text" placeholder="請輸入技能..."><br>
                <hr>
                <font face="DFKai-sb" size="5">學歷</font><br>
                <font face="DFKai-sb" size="3"><b>學位:</b></font> <input type="text" placeholder="請輸入最高學位..."><br>
                <font face="DFKai-sb" size="3"><b>學校:</b></font> <input type="text" placeholder="請輸入其學校..."><br>
                <font face="DFKai-sb" size="3"><b>系所:</b></font> <input type="text" placeholder="請輸入其系所..."><br>
                <hr>
                <font face="DFKai-sb" size="5">工作經驗</font><br>
                <input type="button" value="新增" v-on:click="addbox" id="add">
                <template id="expinput">
                    <div v-for="(line, index) in lines" v-bind:key="index">
                        <font face="DFKai-sb" size="3"><b>公司位址:</b></font> <input v-model="line.a" type="text" placeholder="請輸入你公司位址..."><br>
                        <font face="DFKai-sb" size="3"><b>公司職位:</b></font> <input v-model="line.b" type="text" placeholder="請輸入職位..."><br>
                        <font face="DFKai-sb" size="3"><b>在職時間:</b></font> <input v-model="line.c" type="text" placeholder="請輸入在職時間..."><br>
                    </div>
                </template>
                <div id="button_check">
                    <router-link to="home">
                        <button class="button button1"><font face="DFKai-sb" size="4">完成</font></button>
                    </router-link>
                    <router-link to="home">
                        <button class="button button2"><font face="DFKai-sb" size="4">返回</font></button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.21/vue.common.dev.js"></script>

<script>
// var MyPartial = Vue.extend({});
// window.expinput = new MyPartial({
//   template: '#expinput'
// });
window.expinput = Vue.component('modal', {
  template: '#expinput'
})
export default{
    data () {
      return {
        lines: []
      }
    },
    methods: {
        addbox(){
            this.lines.push({
                a: null,
                b: null,
                c: null
            })
        }
    },
    mounted () {
      this.addbox()
    }
}

</script>

<style>
input {padding:8px 15px; background:#ccc; border:0 none;
-webkit-border-radius: 5px;
border-radius: 5px; }
#TITLE{
    text-align:center;
}
#button_check{
    text-align: center;
}
#data{
    text-align: justify;
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
#personal{
    width:100%;
    height:100% ;
}
#bas{
    width:33.3%;
    height:400px;
    text-align:center;
    line-height:60px;
    float:left;
}
#exp{
    width:33.3%;
    height:400px;
    text-align:center;
    line-height:60px;
    float:left;
}
</style>

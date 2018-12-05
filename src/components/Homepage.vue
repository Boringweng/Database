<template>
   <div class="layout">
    <Layout :style="{minHeight: '100vh'}">
        <Header :style="{minHeight: '15vh'}">
           <div class="title"> 
               工程師求職資料庫
           </div>
            
            
        </Header>
        <Content :style="{minHeight: '50vh'}">
             <div class="demo-split">
                <Split v-model="split1">
                <div slot="left" class="demo-split-pane">
                    <img src="https://static.104.com.tw/gtnew/img/character/smallRole/2007001006.jpg" width="460" height="500" alt="engineer" @click="gofirst">
                </div>
                <div slot="right" class="demo-split-pane">
                    <img src="http://n.sinaimg.cn/default/20150213/_vCI-chmifpx7985044.jpg" width="500" height="500" alt="boss">
                </div>
                </Split>
             </div>
        </Content>
        <Footer :style="{minHeight: '15vh'}">
            
        </Footer>
    </Layout>
   </div>
</template>
<script>
export default {
     
}
</script>

<style>
.title{
    text-align: center;
    border: 3px solid green;
}
.demo-split{
        height: 200px;
        border: 1px solid #dcdee2;
        min-height: 70vh;
    }
.layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
       
    }
  .demo-split-pane{
        padding: 10px;
    }
</style>

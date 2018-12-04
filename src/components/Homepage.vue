<template>
   <div class="layout">
    <Layout :style="{minHeight: '100vh'}">
        <Header :style="{minHeight: '15vh'}">
        </Header>
        <Content :style="{minHeight: '50vh'}">
             <div class="demo-split">
                <Split v-model="split1">
                <div slot="left" class="demo-split-pane">
                    Left Pane
                </div>
                <div slot="right" class="demo-split-pane">
                    Right Pane
                </div>
                </Split>
             </div>
        </Content>
        <Footer :style="{minHeight: '15vh'}">
            f
        </Footer>
    </Layout>
   </div>
</template>
<script>
export default {
     
}
</script>

<style>
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

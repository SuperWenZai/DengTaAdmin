<template>
    <div class="aw-content aw-content-itemTittle">
        <div class="pt-left"><h2>{{tittle.toUpperCase()}}</h2></div>
        <div class="pt-right">
            <span class="pt-Home"><router-link to="DashBoard">首页</router-link></span>
            <span class="pt-line"> / </span>
            <span class="pt-page">{{tittle}}</span>
        </div>
    </div>
</template>
<script>
    export default {
        name : 'itemTittle',
        props:{
            tittle : {
                default : "",
                type : String
            }
        }
    }
</script>
<style scoped>
    .aw-content-itemTittle{
        clear:both;
        height:55px;  
    }
    .pt-left{
        float:left;
    }
    .pt-right{
        float:right;
    }
    .pt-Home{
        font-size:20px;
    }
    .pt-line{
        color:#ccc;
    }
    a{
        color:#209e91;
    }
</style>

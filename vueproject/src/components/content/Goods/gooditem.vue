<template>
    <div class="good-item clearfix">
        <div class="content">
            <a :href=" gooditem.link ">
                <div class="item_img">
                    <img :src="gooditem.show.img" alt="">
                </div>
                <div class="item_text">
                    <p>{{gooditem.title}}</p>
                    <span>￥ {{gooditem.price}}</span>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export  default  {
    props:{
        gooditem:{
            type:Object,
            default() {
                return {};
            }
        }
    }
}
</script>

<style>
.good-item {
    width: 50%;
    float: left;
    padding-bottom: .5rem;
    padding-right: .25rem;
    box-sizing: border-box;
}
.content {
    background-color: #fff;
    border-radius: .6rem;
    overflow: hidden;
    position: relative;
}
.item_img {
    text-align: center;
}
.item_img img{
    opacity: 1;
    width: 96%;
    height: 250px;
}
.item_text p{
    box-sizing: border-box;
    height: 31px;
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    color: #1a1a1a;
    margin-top: 5px;
    line-height: 16px;
    margin-bottom: 3px;
    padding: 0 4px;
}
.item_text span {
    color: #fa2c19;
    display: inline-block;
    padding: 0 5px 0 4px;
    position: relative;
    top: 1px;
    height: 25px;
    line-height: 25px;
    font-family: JDZhengHT-EN-Regular;
}
</style>

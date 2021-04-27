<template>
    <div class="out  clearfix">
        <div class="goods">
            <gooditem v-for="item in goods" :gooditem="item"/>
        </div>
    </div>
</template>

<script>
import gooditem from "./gooditem";

export default {
    components: {
        gooditem
    },
    props: {
        goods: {
            type: Array,
            default() {
                return []
            }
        }
    },
}


</script>

<style>
.out {
    background-color: #f7f7f7;
}

.goods {
    background-color: #f7f7f7;
    overflow: hidden;
    position: relative;
    margin-left: .5rem;
    margin-right: .5rem;
    margin-bottom: .5rem;
}
</style>

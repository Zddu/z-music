<template>
    <div class="singer">
        <div class="category">
            <ul class="area">
                <li>
                    华语
                </li>
                <li>欧美</li>
                <li>日本</li>
                <li>韩国</li>
                <li>其他</li>
            </ul>
            <ul class="type">
                <li>男</li>
                <li>女</li>
                <li style="width: auto">组合/其他</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {listSingers} from "../../api/singer/singer";

    export default {
        name: "singer",
        data(){
            return{
                artists:[],
            }
        },
        mounted(){
            this._getListSingers()
        },
        methods:{
            _getListSingers(){
                listSingers('/artist/list',{type:-1,area:-1}).then(res=>{
                    console.log(res);
                    this.artists = res.artists
                })
            }
        }
    }
</script>

<style scoped lang="stylus">
    .singer
        position fixed
        top 88px
        bottom 0
        width 100%
        .category
            width 100%
            padding 20px
            .area,.type
                display flex
                align-items flex-start
                li
                    text-align center
                    width 55px
            .type
                margin-top 15px
</style>

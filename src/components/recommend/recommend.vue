<template>
    <div class="recommend" ref="recommend">
        <scroll ref="scroll" class="recommend-content" :data="personalizedList">
            <div>
                <div v-if="bannerList.length>0" class="slider-wrapper">
                    <slider>
                        <div v-for="item in bannerList">
                            <a>
                                <img @load="loadImage" :src="item.pic" :alt="item.typeTitle">
                            </a>
                        </div>
                    </slider>
                </div>
                <div class="recommend-list">
                    <h1 class="list-title">热门歌单推荐</h1>
                    <ul>
                        <li v-for="item in personalizedList" class="item">
                            <div class="icon">
                                <img width="60" height="60" v-lazy="item.picUrl">
                            </div>
                            <div class="text">
                                <h2 class="name" v-html="item.name"></h2>
                                <p class="desc" v-html="item.copywriter"></p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="loading-container" v-show="!personalizedList.length">
                <loading></loading>
            </div>
        </scroll>
    </div>
</template>

<script>
    import {list, bannerList, playlist} from "@/api/recommend/list";
    import Slider from '@/base/slider/slider'
    import Scroll from "@/base/scroll/scroll";
    import Loading from "../../base/loading/loading";

    export default {
        name: "recommend",
        components: {
            Loading,
            Scroll,
            Slider
        },
        data() {
            return {
                bannerList: [],
                personalizedList: [],
            }
        },
        mounted() {
            this.getList();
            this.getBannerList();
            this.getPlaylist();
        },
        methods: {
            getList() {
                list("/lyric",{id:1832613147}).then(res => {
                    // console.log(res);
                })
            },
            getBannerList() {
                bannerList("/banner", {type: 1}).then(res => {
                    this.bannerList = res.banners
                })
            },
            getPlaylist() {
                playlist("/personalized", {limit: 20}).then(res => {
                    this.personalizedList = res.result;
                })
            },
            loadImage(){
                if (!this.checkLoaded) {
                    this.$refs.scroll.refresh();
                    this.checkLoaded = true;
                }
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "../../assets/stylus/variable.styl"
    .recommend
        position: fixed
        width: 100%
        top: 88px
        bottom: 0

        .recommend-content
            height: 100%
            overflow: hidden

            .slider-wrapper
                position: relative
                width: 100%
                overflow: hidden

            .recommend-list
                .list-title
                    height: 65px
                    line-height: 65px
                    text-align: center
                    font-size: $font-size-medium
                    color: $color-theme

                .item
                    display: flex
                    box-sizing: border-box
                    align-items: center
                    padding: 0 20px 20px 20px

                    .icon
                        flex: 0 0 60px
                        width: 60px
                        padding-right: 20px

                    .text
                        display: flex
                        flex-direction: column
                        justify-content: center
                        flex: 1
                        line-height: 20px
                        overflow: hidden
                        font-size: $font-size-medium

                        .name
                            margin-bottom: 10px
                            color: $color-text

                        .desc
                            color: $color-text-d

            .loading-container
                position: absolute
                width: 100%
                top: 50%
                transform: translateY(-50%)
</style>

<template>
  <div class="videoPlayerWrapper">
    <videoPlayer
      class="video-player TheVideoPlayerWrapper"
      ref="videoPlayer"
      :options="playerOptions"
      :playsinline="true"
    ></videoPlayer>
  </div>

</template>

<script>
  import gob  from  '../../../store/config.js';
  import { videoPlayer } from 'vue-video-player'
    export default {
        name: "videp-player",
      props:["url"],
      watch:{
        url:function(val) {
          this.playerOptions.sources[0].src = gob.apiUrl+ this.url;
        }
      },
      data () {
        return {
          playerOptions:{
            sources: [{
              type: "video/mp4",//视频类型
              src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm",//视频地址
              playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
              autoplay: false, //如果true,浏览器准备好时开始回放。
              muted: false, // 默认情况下将会消除任何音频。
              loop: false, // 导致视频一结束就重新开始。
              preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
              language: 'zh-CN',
              aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
            }],
            poster: "", //你的封面地址
            notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
            controlBar: {
              timeDivider: true,
              durationDisplay: true,
              remainingTimeDisplay: false,
              fullscreenToggle: true  //全屏按钮
            }
          }
        }
      },
      components: {
        videoPlayer
      }
    }
</script>

<style lang="scss">
.videoPlayerWrapper{
  width:798px;
  height:482px;
  background:rgba(43,51,60,1);
  padding: 30px 34px 0px 34px;
  float: left;
  .video-js{
    width: 730px;
    height: 412px;
  }
  .vjs-button > .vjs-icon-placeholder:before {
    font-size: 1.8em;
    line-height: 36px;
  }
  .vjs-slider-horizontal .vjs-volume-level:before {
    top: -0.31em;
    right: -0.5em;
  }
  .video-js .vjs-big-play-button {
    width:70px;
    height:70px;
    background:url("../../../assets/edu/BVideoPlayer.png") no-repeat center center;
    display: block;
    position: absolute;
    top: 171px;
    left: 330px;
    padding: 0;
    cursor: pointer;
    opacity: 1;
    border-radius: 50%;
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
    color: transparent;
    border:none;
    outline: none;
  }
  .vjs-controls-disabled .vjs-big-play-button, .vjs-has-started .vjs-big-play-button, .vjs-using-native-controls .vjs-big-play-button, .vjs-error .vjs-big-play-button
  {
    display: none !important;
  }
}
</style>

<template>
    <div>
       <ul class="detailCommentUl" id="detailTotalUl">
            <li class="comentLi " v-for="(item, index) in list1">
                <div class="userTilTwe">
                    <b>{{item.createTimeDate}}</b>
                    <div class="img">
                        <img width="54" height="54" :src="item.userImg">
                    </div>                
                    <div class="info">
                        <p> {{item.userName}}
                            <em>{{item.userRankName}}</em>
                        </p>
                        <p><i class="startW5"></i></p>
                    </div>
                    <div class="goodClear"></div>
                </div>
                <p>{{item.firstComment.coment}}</p>
                <div class="smallUl">
                    <ul class="smallList">
                        <li v-for="(img, index) in item.firstComment.imgList">
                            <div class="imgBox">
                                <div class="imgHold">
                                </div>
                                <span>
                                    <img :src="img.imgUrl">
                                </span>
                            </div>
                        </li>
                    </ul>
                    <div class="goodClear"></div>
                </div>
            </li>
        </ul>
   </div>
</template>
    
<script>
export default {
  name: "component_name",
  data () {
    return {
        url:'./static/allEval.json',
        list1:[]
    };
  },
  created(){
      this.$http.get(this.url).then (res => {
          console.log(res.body.proEvalList);
          this.list1 = res.body.proEvalList;
      },err => {
          console.log(err);
      });
  }
}
</script>
    
<style lang="css" scoped>
    /* 评论内容 */
    em{
        font-style: normal;
    }
    .detailCommentBDTwe {
        margin-bottom: 8px;
        background-color: #fff;
        border-top: 1px solid #e4e4e4;
        border-bottom: 1px solid #e4e4e4;
        padding: 0 0 10px;
    }
    .detailCommentUl {
        padding: 0 10px;
    }
    .comentLi {
        padding: 10px 0;
        border-bottom: 1px solid #f0f0f0;
        width: 100%;
        border-width: 0 0 1px;
    }
    .comentLi .userTilTwe {
        position: relative;
    }
    .comentLi .userTilTwe b {
        overflow: hidden;
        display: block;
        position: absolute;
        top: 20%;
        right: 5px;
        color: #999;
        font-weight: normal;
    }
    .comentLi .userTilTwe .img {
        width: 54px;
        height: 54px;
        float: left;
        margin-right: 10px;
        overflow: hidden;
    }
    .comentLi .userTilTwe .img img {
        width: 54px;
        height: 54px;
        border-radius: 50%;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
    }
    img{
        border:0;
    }
    .comentLi .userTilTwe .info {
        width: 70%;
        float: left;
        padding-top: 10px;
        overflow: hidden;
        text-align: left;
    }
    .comentLi p {
        padding: 5px 0;
        font-size: 12px;
        color: #252525;
    }
    .comentLi .userTilTwe .info p {
        padding: 0 0 8px;
    }
    .comentLi .userTilTwe .info p em {
        border: 1px solid #ccc;
        border-radius: 3px;
        -moz-border-radius: 3px;
        -webkit-border-radius: 3px;
        padding: 0 5px;
        display: inline-block;
        margin-left: 5px;
        font-size: 10px;
        height: 15px;
        line-height: 15px;
    }
    .comentLi .userTilTwe .info p i {
        width: 45px;
        height: 9px;
        display: inline-block;
        background: url(https://m.jiuxian.com/mjava_statics/images/goods/star.png) no-repeat 0 0;
        background-size: 45px 45px;
    }
    .comentLi .userTilTwe .info p .startW5 {
        background-position: 0 0;
    }
    /* 清除浮动 */
    .goodClear {
        clear: both;
        margin-top: 0!important;
        font-size: 0;
        visibility: hidden;
        width: 1px;
        line-height: 0;
        height: 0;
    }
    .comentLi p {
        padding: 5px 0;
        font-size: 12px;
        color: #252525;
    }
    .comentLi .smallUl {
        width: 100%;
    }
    .comentLi ul {
        width: 100%;
    }
    .comentLi li {
        width: 22%;
        float: left;
        margin: 2% 2% 0 0;
        overflow: hidden;
    }
    .comentLi li .imgBox {
        padding-bottom: 100%;
        position: relative;
    }
    .comentLi li .imgHold {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    .comentLi li .imgBox span {
        font-size: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        display: block;
        font-size: 0;
        height: 100%;
        overflow: hidden;
        width: 100%;
    }
    .comentLi li .imgBox img {
        width: 100%;
        height: auto;
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        z-index: 2;
    }
</style>
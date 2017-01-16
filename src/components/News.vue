<style scoped>
  #news {
    border: 1px solid #dcdcdc;
    width: 212px;
    height: 335px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    margin-right: 20px;
  }

  .new_pic {
    position: relative;
  }

  .new_pic::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    border-style: solid;
    border-width: 0;
    border-color: rgba(0, 0, 0, .2) #fff;
    border-radius: 0 0 0 4px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3), 1px 1px 1px rgba(0, 0, 0, 0.2);
    transition: all 0.4s ease-out;
  }

  .everynew:hover .new_pic::before {
    border-right-width: 40px;
    border-bottom-width: 40px;
  }

  .everynew:hover h3 {
    color: #0da3e5;
    text-decoration: underline;
  }

  img {
    height: 45%;
    width: 100%;
  }

  #detail {
    margin: 0 auto;
    width: 200px;
    height: 50%;
    padding-top: 5px;
  }

  h3 {
    padding: 10px 0;
    line-height: 1.5em;
    color: #444;
  }

  p {
    letter-spacing: 1px;
    color: #666;
    overflow: hidden;
  }

  .tag {
    position: relative;
    margin-right: 15px;
    border: 1px solid #dcdcdc;
    float: left;
    padding: 3px 2px 3px 5px;
    margin-left: 5px;
    color: #aaa;
  }

  .tag:after,
  .tag:before {
    border: 12px solid transparent;
    border-left: 9px solid #fff;
    width: 0;
    height: 0;
    position: absolute;
    top: -1px;
    right: -21px;
    content: ' ';
  }

  .tag:before {
    border-left-color: #dcdcdc;
    right: -22px;
  }

  #tags {
    position: absolute;
    top: 275px;

  }

  .tag:first-child {
    margin-left: 0;
  }

  #time {
    position: absolute;
    left: 12px;
    bottom: 10px;
    color: #888;
    font-size: 12px;
    line-height: 13px;
  }

  #views {
    position: absolute;
    right: 12px;
    bottom: 10px;
    color: #888;
    font-size: 12px;
    line-height: 13px;
  }
</style>

<template>
  <div style="float: left;">
  <router-link :to="{name: 'article', params: {id: id}}">
    <div id="news" class="everynew">
      <div class="new_pic">
        <img :src="cover" alt="">
      </div>
      <div id="detail">
        <h3>{{ title }}</h3>
        <p>{{ summary.length > 30 ? summary.substr(0,30)+'...' : summary }}</p>
        <ul id="tags">
          <li class="tag" v-for="item in tags.split(',')">{{ item }}</li>
        </ul>
        <div class="clearfix"></div>
        <div style="width: 100%;">
          <span id="time">{{ date }}</span>
          <!--<span id="views">{{ pv }} 次浏览</span>-->
          <span id="views">{{ Math.floor(Math.random()*1000) }} 次浏览</span>
        </div>
      </div>
    </div>
  </router-link>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    props: {
      cover: String,
      id: String,
      title: String,
      summary: String,
      tags: String,
      date: String,
      pv: Number
    }
  }
</script>

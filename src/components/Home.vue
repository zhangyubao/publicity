<template>
  <div class="main-container">
    <!--首页banner-->
    <img src='../../static/img/banner.jpg'/>
    <!--搜索框-->
    <div class="search">
      <form action="/search/">
        <i class="iconfont icon-query"></i>
        <input type="text" name="kw" class="search-txt" placeholder="请输入关键字">
        <input type="submit" class="search-sub" value="查询">
      </form>
    </div>
    <div class="middle-main">
      <div class="news-title">
        <i class="el-icon-bell"></i>&nbsp; 公示公告
        <a href="/page/1.html" class="more">查看更多 +</a>
      </div>
      <ul class="inews-list">
        <li class="inews-item" v-for="item in publicity" v-bind:key="item">
          <div class="inews-item-title">{{ item.title }}</div>
          <div class="inews-item-date">{{ item.datetime }}</div>
          <div class="inews-item-info">{{ item.info }}</div>
          <a href="/showinfo/25.html" target="_blank" class="more">
            查看详情 +
          </a>
        </li>
      </ul>

      <div class="news-title" style="margin-top: 30px;">
        <i class="el-icon-bell"></i>&nbsp; 法律法规
        <a href="/page/2.html" class="more">查看更多 +</a>
      </div>
      <ul class="inews-list">
        <li class="inews-item" v-for="rule in rules" v-bind:key="rule">
          <div class="inews-item-title">{{ rule.title }}</div>
          <div class="inews-item-date">{{ rule.datetime }}</div>
          <div class="inews-item-info">{{ rule.info }}</div>
          <a href="/showinfo/3.html" target="_blank" class="more">
            查看详情 +
          </a>
        </li>
      </ul>

      <div class="news-title" style="margin-top: 30px;">
        <i class="el-icon-bell"></i>&nbsp; 验收标准
        <a href="/page/3.html" class="more">查看更多 +</a>
      </div>
      <ul class="inews-list">
        <li class="inews-item" v-for="item in standars" v-bind:key="item">
          <div class="inews-item-title">{{item.title}}</div>
          <div class="inews-item-date">{{item.datetime}}</div>
          <div class="inews-item-info">{{item.info}}</div>
          <a href="/uploads/20171213/f982901aaa4d03fd73edd086f0fbd69b.doc" target="_blank" class="more">
            查看详情 +
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      publicity: [],
      rules: [],
      standars: []
    }
  },

  created () {
    axios.get('../../static/new_file.json').then((data) => {
      this.publicity = data.data.arr
      this.rules = data.data.arr
      this.stander = data.data.arr
    })
  },

  mounted () {

  },

  methods: {},

  watch: {},
  computed: {}
}
</script>

<style>
  .main-container {
    overflow-x: hidden;
  }

  body {
    background: #e8f0e2;
  }

  /* search */

  .search {
    position: relative;
    z-index: 2;
    width: 540px;
    height: 40px;
    border: 3px solid #FFFFFF;
    margin: -30px auto 0;
    background-color: #fff;
    border-radius: 5px;
  }

  .search .iconfont {
    float: left;
    margin-top: 5px;
    margin-left: 10px;
    font-size: 30px;
    color: #999;
  }

  .search-txt {
    float: left;
    margin-right: 10px;
    width: 420px;
    height: 40px;
    padding: 0 10px;
    border: 0;
  }

  .search-sub {
    float: left;
    width: 80px;
    height: 40px;
    background-color: #6ab71d;
    border: 0;
    border-radius: 3px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }

  /*搜索框以下*/

  .middle-main {
    border: 2px solid #6AB71D;
    width: 65%;
    padding: 20px;
    border-radius: 5px;
    margin: 0 auto;
    margin-top: 30px;
  }

  /* news */

  .news-title {
    position: relative;
    font-size: 18px;
    font-weight: 700;
    color: #666;
    line-height: 40px;
    border-bottom: 2px solid #6ab71d;
  }

  .news-title .iconfont {
    font-size: 30px;
    color: #6ab71d;
  }

  .news-title .more {
    position: absolute;
    right: 5px;
    top: 5px;
    font-size: 14px;
    font-weight: normal;
  }

  .inews-item {
    border-bottom: 1px dotted #ccc;
    padding: 30px 0 15px;
  }

  .inews-item-title {
    font-size: 16px;
  }

  .inews-item-date {
    color: #abb5a3;
    font-size: 12px;
  }

  .inews-item-info {
    color: #999;
    line-height: 24px;
  }

  .inews-item .more {
    display: inline-block;
    padding: 3px 30px;
    border: 1px solid #b5ce9a;
    color: #b5ce9a;
    margin-top: 10px;
  }

  #newspage {
    margin-top: 30px;
  }

  /* ---------page-------- */

  .shownews {
    width: 1000px;
    padding: 40px 97px 100px;
    margin: 50px auto;
    background-color: #fff;
    border: 3px solid #6ab71d;
    background-color: #fff;
    border-radius: 5px;
  }

  /* shownews */

  .show-title {
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    margin: 0;
  }

  .show-para {
    font-size: 12px;
    color: #ccc;
    border-bottom: 1px solid #eee;
    text-align: center;
    margin-bottom: 15px;
    padding: 5px 0;
  }

  .show-content {
    line-height: 30px;
    padding: 15px;
  }

  .el-icon-bell {
    color: #6AB71D;
  }
</style>

<template>
  <div>
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
    <div class="shownews">
    <div class="show-title">{{title}}</div>
    <div class="show-para">发布日期：{{datetime}}</div>
    <div class="show-info">
      <table class="layui-table">
        <tbody>
        <tr>
          <td style="width:20%;">
            <p align="center">
              项目名称
            </p>
          </td>
          <td style="width:15%;">
            <p align="center">
              建设地址
            </p>
          </td>
          <td style="width:15%;">
            <p align="center">
              建设单位
            </p>
          </td>
          <td style="width:15%;">
            <p align="center">
              验收监测（调查）单位
            </p>
          </td>
          <td style="width:15%;">
            <p align="center">
              公示时间
            </p>
          </td>
          <td style="width:20%;">
            <p align="center">
              &nbsp;附件链接
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <b><b>{{projectname}}</b></b>
          </td>
          <td>{{address}}</td>
          <td>{{buildname}}</td>
          <td>{{testname}}</td>
          <td>{{publicdate}}</td>
          <td>
            1、<a class="ke-insertfile" href="/uploads/20180314/0731a19ad3eeed47fe5efc8103c12e0d.pdf" target="_blank">{{testinfo}}</a>
            <p>
              2、<a class="ke-insertfile" href="/uploads/20180314/24fa5d9b9554550c1ce53b3f4da5fde3.pdf" target="_blank">{{testreport}}</a>
            </p>
            <p>
              3、<a class="ke-insertfile" href="/uploads/20180314/aec8dfa174e0df7c63b2cf37b12b977d.pdf" target="_blank">{{suggestion}}</a>
            </p>
          </td>
        </tr>
        </tbody>
      </table>
      <p>公示时间：{{datetime}}</p>
      <p>联系人：{{contacts}}</p>
      <p>联系电话：{{phonenum}}
      </p>
      <p>通讯地址：<span style="white-space:normal;"><span style="white-space:normal;"><span style="white-space:normal;"><span style="white-space:normal;"><span style="white-space:normal;"><span style="white-space:normal;"><span style="white-space:normal;">{{address}}</span></span></span></span></span><span style="white-space:normal;"></span></span><span style="white-space:normal;"></span></span>
      </p>
      <p>即日起20个工作日内，公众可以信函、传真或其他方式，向我司咨询相关信息，并提出有关意见和建议，反映问题请留下联系方式（姓名、地址、电话或邮箱），以便我们及时答复反馈。
      </p>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      projectname: '',
      address: '',
      datetime: '',
      title: '',
      phonenum: '',
      buildname: '',
      testname: '',
      publicdate: '',
      contacts: '',
      testinfo: '',
      testreport: '',
      suggestion: ''
    }
  },

  created () {
    axios.get('../../static/new_file.json').then((data) => {
    })
  }
}

</script>

<style>

  .search {
    position: relative;
    z-index: 2;
    width: 520px;
    height: 40px;
    border: 3px solid #6ab71d;
    margin: -30px auto 0;
    background-color: #fff;
    border-radius: 8px;
  }

  .search .iconfont {
    float: left;
    margin-top: 5px;
    font-size: 30px;
    color: #999;
  }

  .search-txt {
    float: left;
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
  #newspage { margin-top: 30px; }
  .shownews { width: 1000px; padding: 40px 97px 100px; margin: 50px auto; background-color: #fff; border: 3px solid #6ab71d; background-color: #fff; border-radius: 5px; }
  /* shownews */
  .show-title { font-size: 18px; line-height: 30px; text-align: center; margin: 0; }
  .show-para { font-size: 12px; color: #ccc; border-bottom: 1px solid #eee; text-align: center; margin-bottom: 15px; padding: 5px 0; }
  .show-content { line-height: 30px; padding: 15px; }
</style>

//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    items: [
      { value: '全面贯彻落实习近平外交思想', moveLeft: 0, checked: false },
      { value: '伟大的航程，离不开思想灯塔的领航。', moveLeft: 0, checked: false },
      { value: '6月22日至23日，中央外事工作会议在京召开，习近平总书记出席会议并发表重要讲话。', moveLeft: 0, checked: true },
      { value: '放眼全球，当今世界正处在大发展大变革大调整时期，人类面临的不稳定不确定因素依然很多。', moveLeft: 0, checked: false },
      
      { value: '习近平总书记关于国际形势与中国发展历史阶段的一系列重要论述，', moveLeft: 0, checked: false },
      { value: '伟大的航程，离不开思想灯塔的领航。', moveLeft: 0, checked: false },
      { value: '6月22日至23日，中央外事工作会议在京召开，习近平总书记出席会议并发表重要讲话。', moveLeft: 0, checked: false },
      { value: '放眼全球，当今世界正处在大发展大变革大调整时期，人类面临的不稳定不确定因素依然很多。', moveLeft: 0, checked: false },

      { value: '习近平总书记关于国际形势与中国发展历史阶段的一系列重要论述，', moveLeft: 0, checked: false },
      { value: '伟大的航程，离不开思想灯塔的领航。', moveLeft: 0, checked: false },
      { value: '6月22日至23日，中央外事工作会议在京召开，习近平总书记出席会议并发表重要讲话。', moveLeft: 0, checked: false },
      { value: '放眼全球，当今世界正处在大发展大变革大调整时期，人类面临的不稳定不确定因素依然很多。', moveLeft: 0, checked: false },

      { value: '习近平总书记关于国际形势与中国发展历史阶段的一系列重要论述，', moveLeft: 0, checked: false },
      { value: '放眼全球，当今世界正处在大发展大变革大调整时期，人类面临的不稳定不确定因素依然很多。', moveLeft: 0, checked: false },

      { value: '习近平总书记关于国际形势与中国发展历史阶段的一系列重要论述，', moveLeft: 0, checked: false },
      { value: '伟大的航程，离不开思想灯塔的领航。', moveLeft: 0, checked: false },
      { value: '6月22日至23日，中央外事工作会议在京召开，习近平总书记出席会议并发表重要讲话。', moveLeft: 0, checked: false },
      { value: '放眼全球，当今世界正处在大发展大变革大调整时期，人类面临的不稳定不确定因素依然很多。', moveLeft: 0, checked: false },

      { value: '习近平总书记关于国际形势与中国发展历史阶段的一系列重要论述，', moveLeft: 0, checked: false }, { value: '放眼全球，当今世界正处在大发展大变革大调整时期，人类面临的不稳定不确定因素依然很多。', moveLeft: 0, checked: false },

      { value: '习近平总书记关于国际形势与中国发展历史阶段的一系列重要论述，', moveLeft: 0, checked: false },
      { value: '伟大的航程，离不开思想灯塔的领航。', moveLeft: 0, checked: false },
      { value: '6月22日至23日，中央外事工作会议在京召开，习近平总书记出席会议并发表重要讲话。', moveLeft: 0, checked: false },
      { value: '放眼全球，当今世界正处在大发展大变革大调整时期，人类面临的不稳定不确定因素依然很多。', moveLeft: 0, checked: false },

      { value: '习近平总书记关于国际形势与中国发展历史阶段的一系列重要论述，', moveLeft: 0, checked: false }, { value: '放眼全球，当今世界正处在大发展大变革大调整时期，人类面临的不稳定不确定因素依然很多。', moveLeft: 0, checked: false },

      { value: '习近平总书记关于国际形势与中国发展历史阶段的一系列重要论述，', moveLeft: 0, checked: false },
      { value: '伟大的航程，离不开思想灯塔的领航。', moveLeft: 0, checked: false },
      { value: '6月22日至23日，中央外事工作会议在京召开，习近平总书记出席会议并发表重要讲话。', moveLeft: 0, checked: false },
      { value: '放眼全球，当今世界正处在大发展大变革大调整时期，人类面临的不稳定不确定因素依然很多。', moveLeft: 0, checked: false },

      { value: '习近平总书记关于国际形势与中国发展历史阶段的一系列重要论述，', moveLeft: 0, checked: false }, { value: '放眼全球，当今世界正处在大发展大变革大调整时期，人类面临的不稳定不确定因素依然很多。', moveLeft: 0, checked: false },

      { value: '习近平总书记关于国际形势与中国发展历史阶段的一系列重要论述，', moveLeft: 0, checked: false },
      { value: '伟大的航程，离不开思想灯塔的领航。', moveLeft: 0, checked: false },
      { value: '6月22日至23日，中央外事工作会议在京召开，习近平总书记出席会议并发表重要讲话。', moveLeft: 0, checked: false },
      { value: '放眼全球，当今世界正处在大发展大变革大调整时期，人类面临的不稳定不确定因素依然很多。', moveLeft: 0, checked: false },

      { value: '习近平总书记关于国际形势与中国发展历史阶段的一系列重要论述，', moveLeft: 0, checked: false }, { value: '放眼全球，当今世界正处在大发展大变革大调整时期，人类面临的不稳定不确定因素依然很多。', moveLeft: 0, checked: false },

      { value: '习近平总书记关于国际形势与中国发展历史阶段的一系列重要论述，', moveLeft: 0, checked: false },
      { value: '伟大的航程，离不开思想灯塔的领航。', moveLeft: 0, checked: false },
      { value: '6月22日至23日，中央外事工作会议在京召开，习近平总书记出席会议并发表重要讲话。', moveLeft: 0, checked: false },
      { value: '放眼全球，当今世界正处在大发展大变革大调整时期，人类面临的不稳定不确定因素依然很多。', moveLeft: 0, checked: false },

      { value: '习近平总书记关于国际形势与中国发展历史阶段的一系列重要论述，', moveLeft: 0, checked: false },
    ],

    allData:[],
    wancheng:[],
    weiwancheng:[],

    delBtnWidth: 180,//删除按钮宽度单位（rpx）
    list:[],
    showView: true,
    svBox: false,
    changeValue: '',
    itemNum: 1,
    pickList: [
      {
        "id": 0,
        "title": "All"
      },
      {
        "id": 1,
        "title": "Active"
      },
      {
        "id": 2,
        "title": "Completed"
      },
      {
        "id": 3,
        "title": "Clear completed"
      }
    ],
    j: 1,//帧动画初始图片
    isSpeaking: false,//是否正在说话
    voices: [],//音频数组
  },
  //键盘右下角按钮事件
  checkboxChange: function (e) {
    let that = this;
    this.data.items[e.currentTarget.id].checked = !this.data.items[e.currentTarget.id].checked;
    this.setData({
      items: this.data.items,
      allData: this.data.items
    })
    console.log(this.data.allData)
  },
  input: function(e){
    this.data.items.unshift({ value: e.detail.value, moveLeft: 0, checked: false });
    this.setData({
      items: this.data.items,
      valName:"",
      allData: this.data.items
    });
  },


  // touchS: function (e) {
  //   let that = this;
  //   // console.log(that.data.items[e.currentTarget.dataset.index]);
  //   if (e.touches.length == 1) {
  //     this.setData({
  //       startX: e.touches[0].clientX
  //     });

  //   }

  // },
  // touchM: function (e) {
  //   let that = this;
  //   if (e.touches.length == 1) {

  //     var moveX = e.touches[0].clientX;
      
  //     var disX = this.data.startX - moveX;
  //     this.data.items[e.currentTarget.dataset.index].moveLeft = disX;
  //     // if (moveX > 45) {
  //     //   this.data.items[e.currentTarget.dataset.index].moveLeft = 90
  //     // }
  //     // else {
  //     //   this.data.items[e.currentTarget.dataset.index].moveLeft = 0
  //     // }



  //     that.setData({
  //       items: this.data.items
  //     });


     
  //   }

  // },
  // touchE: function (e) {
  //   let that = this;
  //   if (e.changedTouches.length == 1) {
  //     if (that.data.items[e.currentTarget.dataset.index].moveLeft > 90) {
  //       that.data.items[e.currentTarget.dataset.index].moveLeft = 90;
  //       that.setData({
  //         items: that.data.items
  //       })
  //     }
  //     that.data.items.forEach(function (currentValue, index, arr){

  //       if (index != e.currentTarget.dataset.index)
  //       {
  //         currentValue.moveLeft = 0
  //       }
  //     })

  //     this.setData({
  //       items: this.data.items
  //     });

  //   }

  // },

  // touchM: function (e){
  //   var setLeft = 0;
  //   var moveX = e.touches[0].clientX;
  //   var disX = this.data.startX - moveX;
  //   if (disX > 90 && disX>45)
  //   {
  //     setLeft = 90;
  //   }
  //   else
  //   {
  //     setLeft = 0;
  //   }
  // },

  onLoad: function () {

  },

  ywc: function(e){
    console.log(this.data.allData);
    var arr = [];
    this.data.allData.forEach(function (a, b, c){
      if (a.checked == true)
      {
        arr.push(a);
      }
    })
    this.setData({
      items: arr
    });
  },
  all: function(e){
    console.log(this.data.allData);
    this.setData({
      items: this.data.allData
    })
  },
  wwc: function(e){
    console.log(this.data.allData);
    var arr = [];
    this.data.allData.forEach(function (a, b, c) {
      if (a.checked == false) {
        arr.push(a);
      }
    })
    this.setData({
      items: arr
    });
  },

  //手指按下
  touchdown: function () {
    console.log("new date : " + new Date)
    var _this = this;
    speaking.call(this);
    this.setData({
      isSpeaking: true
    })
    //开始录音
    wx.startRecord({
      success: function (res) {
        //临时路径,下次进入小程序时无法正常使用
        var tempFilePath = res.tempFilePath
        console.log("tempFilePath: " + tempFilePath)
        //持久保存
        wx.saveFile({
          tempFilePath: tempFilePath,
          success: function (res) {
            //持久路径
            //本地文件存储的大小限制为 100M
            var savedFilePath = res.savedFilePath
            console.log("savedFilePath: " + savedFilePath)
          }
        })
        wx.showToast({
          title: '恭喜!录音成功',
          icon: 'success',
          duration: 1000
        })
        //获取录音音频列表
        wx.getSavedFileList({
          success: function (res) {
            var voices = [];
            for (var i = 0; i < res.fileList.length; i++) {
              //格式化时间
              var createTime = new Date(res.fileList[i].createTime)
              //将音频大小B转为KB
              var size = (res.fileList[i].size / 1024).toFixed(2);
              var voice = { filePath: res.fileList[i].filePath, createTime: createTime, size: size };
              console.log("文件路径: " + res.fileList[i].filePath)
              console.log("文件时间: " + createTime)
              console.log("文件大小: " + size)
              voices = voices.concat(voice);
            }
            _this.setData({
              voices: voices
            })
          }
        })
      },
      fail: function (res) {
        //录音失败
        wx.showModal({
          title: '提示',
          content: '录音的姿势不对!',
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
              return
            }
          }
        })
      }
    })
  },
  //手指抬起
  touchup: function () {
    this.setData({
      isSpeaking: false,
    })
    clearInterval(this.timer)
    wx.stopRecord()
  },
  //点击播放录音
  gotoPlay: function (e) {
    var filePath = e.currentTarget.dataset.key;
    //点击开始播放
    wx.showToast({
      title: '开始播放',
      icon: 'success',
      duration: 1000
    })
    wx.playVoice({
      filePath: filePath,
      success: function () {
        wx.showToast({
          title: '播放结束',
          icon: 'success',
          duration: 1000
        })
      }
    })
  }



})
//麦克风帧动画
function speaking() {
  var _this = this;
  //话筒帧动画
  var i = 1;
  this.timer = setInterval(function () {
    i++;
    i = i % 5;
    _this.setData({
      j: i
    })
  }, 200);
}
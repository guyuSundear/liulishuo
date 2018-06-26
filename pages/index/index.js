//index.js
//获取应用实例
const app = getApp()
const recorderManager = wx.getRecorderManager()

Page({
  itemCreateTime: '',
  progress: '',
  data: {
    items: [{
      value: '顽强的伊朗90分钟后依然对葡萄牙呈围攻之势，在点球扳平比分后，他们本有机会绝杀逆转比分晋级，但塔雷米近在咫尺的射门偏出，葬送了伊朗最后的努力和跻身16强的梦想。',
        moveLeft: 0,
        checked: false,
        isVoice: false,
        pubDate: dateFormat(new Date(),'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      },
      {
        value: '落后大半场的伊朗距离16强几乎只有一个指尖的距离，在塞德里克禁区里犯规主裁通过VAR回看吹给他们点球，第93分钟由安萨里法德打进后，伊朗1-1追平了葡萄牙。1分钟后，伊朗卷土重来杀进禁区。',
        moveLeft: 0,
        checked: false,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      },
      {
        value: '6月22日至23日，中央外事工作会议在京召开，习近平总书记出席会议并发表重要讲话。',
        moveLeft: 0,
        checked: true,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      }, {
        value: '全面贯彻落实习近平外交思想',
        moveLeft: 0,
        checked: false,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      },
      {
        value: '伟大的航程，离不开思想灯塔的领航。',
        moveLeft: 0,
        checked: false,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      },
      {
        value: '6月22日至23日，中央外事工作会议在京召开，习近平总书记出席会议并发表重要讲话。',
        moveLeft: 0,
        checked: true,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      }, {
        value: '全面贯彻落实习近平外交思想',
        moveLeft: 0,
        checked: false,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      },
      {
        value: '伟大的航程，离不开思想灯塔的领航。',
        moveLeft: 0,
        checked: false,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      },
      {
        value: '6月22日至23日，中央外事工作会议在京召开，习近平总书记出席会议并发表重要讲话。',
        moveLeft: 0,
        checked: true,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      }, {
        value: '全面贯彻落实习近平外交思想',
        moveLeft: 0,
        checked: false,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      },
      {
        value: '伟大的航程，离不开思想灯塔的领航。',
        moveLeft: 0,
        checked: false,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      },
      {
        value: '6月22日至23日，中央外事工作会议在京召开，习近平总书记出席会议并发表重要讲话。',
        moveLeft: 0,
        checked: true,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      }, {
        value: '全面贯彻落实习近平外交思想',
        moveLeft: 0,
        checked: false,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      },
      {
        value: '伟大的航程，离不开思想灯塔的领航。',
        moveLeft: 0,
        checked: false,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      },
      {
        value: '6月22日至23日，中央外事工作会议在京召开，习近平总书记出席会议并发表重要讲话。',
        moveLeft: 0,
        checked: true,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      }, {
        value: '全面贯彻落实习近平外交思想',
        moveLeft: 0,
        checked: false,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      },
      {
        value: '伟大的航程，离不开思想灯塔的领航。',
        moveLeft: 0,
        checked: false,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      },
      {
        value: '6月22日至23日，中央外事工作会议在京召开，习近平总书记出席会议并发表重要讲话。',
        moveLeft: 0,
        checked: true,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      }, {
        value: '全面贯彻落实习近平外交思想',
        moveLeft: 0,
        checked: false,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      },
      {
        value: '伟大的航程，离不开思想灯塔的领航。',
        moveLeft: 0,
        checked: false,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      },
      {
        value: '6月22日至23日，中央外事工作会议在京召开，习近平总书记出席会议并发表重要讲话。',
        moveLeft: 0,
        checked: true,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      }, {
        value: '全面贯彻落实习近平外交思想',
        moveLeft: 0,
        checked: false,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      },
      {
        value: '伟大的航程，离不开思想灯塔的领航。',
        moveLeft: 0,
        checked: false,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      },
      {
        value: '6月22日至23日，中央外事工作会议在京召开，习近平总书记出席会议并发表重要讲话。',
        moveLeft: 0,
        checked: true,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      },
      {
        value: '伟大的航程，离不开思想灯塔的领航。',
        moveLeft: 0,
        checked: false,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      },
      {
        value: '6月22日至23日，中央外事工作会议在京召开，习近平总书记出席会议并发表重要讲话。',
        moveLeft: 0,
        checked: true,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      }, {
        value: '全面贯彻落实习近平外交思想',
        moveLeft: 0,
        checked: false,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      },
      {
        value: '伟大的航程，离不开思想灯塔的领航。',
        moveLeft: 0,
        checked: false,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      },
      {
        value: '6月22日至23日，中央外事工作会议在京召开，习近平总书记出席会议并发表重要讲话。',
        moveLeft: 0,
        checked: true,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      },
      {
        value: '伟大的航程，离不开思想灯塔的领航。',
        moveLeft: 0,
        checked: false,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      },
      {
        value: '6月22日至23日，中央外事工作会议在京召开，习近平总书记出席会议并发表重要讲话。',
        moveLeft: 0,
        checked: true,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      }, {
        value: '全面贯彻落实习近平外交思想',
        moveLeft: 0,
        checked: false,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      },
      {
        value: '伟大的航程，离不开思想灯塔的领航。',
        moveLeft: 0,
        checked: false,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      },
      {
        value: '6月22日至23日，中央外事工作会议在京召开，习近平总书记出席会议并发表重要讲话。',
        moveLeft: 0,
        checked: true,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      },
      {
        value: '伟大的航程，离不开思想灯塔的领航。',
        moveLeft: 0,
        checked: false,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      },
      {
        value: '6月22日至23日，中央外事工作会议在京召开，习近平总书记出席会议并发表重要讲话。',
        moveLeft: 0,
        checked: true,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      }, {
        value: '全面贯彻落实习近平外交思想',
        moveLeft: 0,
        checked: false,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      },
      {
        value: '伟大的航程，离不开思想灯塔的领航。',
        moveLeft: 0,
        checked: false,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      },
      {
        value: '6月22日至23日，中央外事工作会议在京召开，习近平总书记出席会议并发表重要讲话。',
        moveLeft: 0,
        checked: true,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      },
      {
        value: '伟大的航程，离不开思想灯塔的领航。',
        moveLeft: 0,
        checked: false,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      },
      {
        value: '6月22日至23日，中央外事工作会议在京召开，习近平总书记出席会议并发表重要讲话。',
        moveLeft: 0,
        checked: true,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      }, {
        value: '全面贯彻落实习近平外交思想',
        moveLeft: 0,
        checked: false,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      },
      {
        value: '伟大的航程，离不开思想灯塔的领航。',
        moveLeft: 0,
        checked: false,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      },
      {
        value: '6月22日至23日，中央外事工作会议在京召开，习近平总书记出席会议并发表重要讲话。',
        moveLeft: 0,
        checked: true,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      },
      {
        value: '伟大的航程，离不开思想灯塔的领航。',
        moveLeft: 0,
        checked: false,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      },
      {
        value: '6月22日至23日，中央外事工作会议在京召开，习近平总书记出席会议并发表重要讲话。',
        moveLeft: 0,
        checked: true,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      }, {
        value: '全面贯彻落实习近平外交思想',
        moveLeft: 0,
        checked: false,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      },
      {
        value: '伟大的航程，离不开思想灯塔的领航。',
        moveLeft: 0,
        checked: false,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      },
      {
        value: '6月22日至23日，中央外事工作会议在京召开，习近平总书记出席会议并发表重要讲话。',
        moveLeft: 0,
        checked: true,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: 0,
        size: 0
      }
    ],


    allData: [],
    wancheng: [],
    weiwancheng: [],

    delBtnWidth: 180, //删除按钮宽度单位（rpx）
    scrollHeight:500,
    scrollToView:'view0',
    list: [],
    showView: true,
    svBox: false,
    changeValue: '',
    itemNum: 1,
    currentMoveLeft: 0,
    startRecordTime: new Date(),
    finish:0,
    unFinish:0,
    pickList: [{
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
      },

    ],
    j: 1, //帧动画初始图片
    isSpeaking: false, //是否正在说话
    voices: [], //音频数组

    backAmin: false,
    isShow: true
  },
  //复选框事件
  checkboxChange: function(e) {
    let that = this;
    var currentTargetID = e.currentTarget.id;
    that.data.items[currentTargetID].checked = !that.data.items[currentTargetID].checked;
    that.data.allData.forEach(function (a, b, c) {
      if (a.id == that.data.items[currentTargetID].id) {
        a.checked = !a.checked;
        return;
      }
    })
    that.setData({
      items: that.data.items,
      allData: that.data.allData
    });
    that.fish();
  },
  input: function (e) {
    let that = this; 
    that.data.items.push({
      id: that.data.allData[that.data.allData.length-1].id+1,
      value: e.detail.value,
      moveLeft: 0,
      checked: false,
      isVoice: false,
      pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
      voiceLength: 0,
      size: 0
    });
    that.setData({
      items: that.data.items,
      valName: "",
      allData: that.data.items,
      scrollToView: 'view' + (that.data.items.length - 1)
    });
    that.fish();
  },
  //开始触摸
  touchS: function(e) {
    let that = this;
    if (e.touches.length == 1) {
      that.data.currentMoveLeft = that.data.items[e.currentTarget.dataset.index].moveLeft;
      that.setData({
        startX: e.touches[0].clientX
      });

    }

  },
  //触摸按住并移动
  touchM: function(e) {
    let that = this;
    if (e.touches.length == 1) {
      var moveX = e.touches[0].clientX;
      var disX = that.data.startX - moveX;
      if (that.data.items[e.currentTarget.dataset.index].moveLeft >= 90) {
        that.data.items[e.currentTarget.dataset.index].moveLeft = disX + 90;
      } else {
        that.data.items[e.currentTarget.dataset.index].moveLeft = disX;
      }
    }
  },
  //停止触摸
  touchE: function(e) {
    let that = this;
    if (e.changedTouches.length == 1) {
      if (that.data.items[e.currentTarget.dataset.index].moveLeft > 90) {
        that.data.currentMoveLeft = 0;
        that.data.items[e.currentTarget.dataset.index].moveLeft = 90;
      } else if (that.data.items[e.currentTarget.dataset.index].moveLeft < 90 && that.data.items[e.currentTarget.dataset.index].moveLeft > 45) {
        that.data.items[e.currentTarget.dataset.index].moveLeft = 90;
      } else {
        that.data.items[e.currentTarget.dataset.index].moveLeft = 0;
        that.data.currentMoveLeft = 1;
      }
      if (that.data.currentMoveLeft != that.data.items[e.currentTarget.dataset.index].moveLeft) {
        that.setData({
          items: that.data.items
        })
        that.data.items.forEach(function(currentValue, index, arr) {

          if (index != e.currentTarget.dataset.index) {
            currentValue.moveLeft = 0
          }
        })

        that.setData({
          items: that.data.items
        });
      }
    }

  },
//触摸至屏幕外或被打断
  touchC: function(e) {
    let that = this;
    if (that.data.items[e.currentTarget.dataset.index].moveLeft > 90) {
      that.data.currentMoveLeft = 0;
      that.data.items[e.currentTarget.dataset.index].moveLeft = 90;
    }
    that.setData({
      items: that.data.items
    });
    that.data.items.forEach(function(currentValue, index, arr) {
      if (index != e.currentTarget.dataset.index) {
        currentValue.moveLeft = 0
      }
    })

    that.setData({
      items: that.data.items
    });
  },

  changes: function() {
    var that = this
    that.setData({
      isShow: !that.data.isShow
    })
  },
  onLoad: function() {
    var _this = this;
    var i=0;
    _this.data.items.forEach(function (a, b, c) {
      i++;
      a.id=i;
    })   
    _this.setData({
      items: _this.data.items,
      allData: _this.data.items,
      scrollHeight: wx.getSystemInfoSync().windowHeight-105 //窗口高度-底部按钮高度
    })
    _this.fish();
  },
  fish: function(e) {
    let finish = 0;
    var _this = this;    
    _this.data.allData.forEach(function(a, b, c) {
      if (a.checked) {
        finish++;
      }
    })
    _this.setData({
      finish: finish,
      unFinish: _this.data.allData.length - finish
    })
  },
  ywc: function(e) {
    var arr = [];
    this.data.allData.forEach(function(a, b, c) {
      if (a.checked == true) {
        arr.push(a);
      }
    })
    this.setData({
      items: arr,
      scrollToView: 'view0'
    });
  },
  all: function(e) {
    this.setData({
      items: this.data.allData,
      scrollToView: 'view0'
    })
  },
  wwc: function(e) {
    var arr = [];
    this.data.allData.forEach(function(a, b, c) {
      if (a.checked == false) {
        arr.push(a);
      }
    })
    this.setData({
      items: arr,
      scrollToView: 'view0'
    });
  },

  //手指按下
  touchdown: function() {
    var _this = this;
    speaking.call(this);
    _this.setData({
      isSpeaking: true,
      startRecordTime: new Date()
    });
    //开始录音
    recorderManager.start({
      format: 'mp3',
    })

  },
  //手指抬起
  touchup: function() {
    var _this = this;
    _this.setData({
      isSpeaking: false,
    })
    recorderManager.onStop((res) => {
      //临时路径,下次进入小程序时无法正常使用
      var tempFilePath = res.tempFilePath
      //持久保存
      wx.saveFile({
        tempFilePath: tempFilePath,
        success: function(res) {
          //持久路径
          //本地文件存储的大小限制为 100M
          var savedFilePath = res.savedFilePath;
          var voice = {
            id: _this.data.allData[_this.data.allData.length - 1].id + 1,
            value: savedFilePath,
            moveLeft: 0,
            checked: false,
            isVoice: true,
            pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
            voiceLength: secondsToHMS(difftime(_this.data.startRecordTime ,new Date())),
            size: 0
          };

          _this.data.items.push(voice);
          _this.setData({
            allData: _this.data.items,
            items: _this.data.items,
            scrollToView: 'view' + (_this.data.items.length-1)
          });
          _this.fish();
        }
      })
      wx.showToast({
        title: '恭喜!录音成功',
        icon: 'success',
        duration: 1000
      })
    })
    clearInterval(this.timer);
    recorderManager.stop();
  },
  //点击播放录音
  gotoPlay: function(e) {
    const innerAudioContext = wx.createInnerAudioContext()
    var filePath = e.currentTarget.dataset.key;
    // console.log(filePath);
    //点击开始播放
    wx.showToast({
      title: "开始播放",
      icon: 'success',
      duration: 1000
    })

    innerAudioContext.onTimeUpdate(() => {
      var progress = parseInt((innerAudioContext.currentTime / innerAudioContext.duration) * 100)
      var that = this
      that.setData({
        progress: progress
      })
    })

    innerAudioContext.src = filePath
    innerAudioContext.onPlay(() => {
      // console.log('开始播放')
    })
    innerAudioContext.onError((res) => {
      // console.log(res.errMsg)
      // console.log(res.errCode)
    })
    innerAudioContext.play();
  },

  // 删除按钮事件
  delItem: function(e) {
    let that = this;
    wx.showModal({
      title: "提示",
      content: "确定要删除吗？",
      success: function(res) {
        if (res.confirm) {
          that.data.items.splice(e.target.id, 1);
          that.setData({
            items: that.data.items,
            allData: that.data.items,
          });
          that.fish();
        }
      }
    })
  },
  // 拖拽
  touchS_0: function(e) {
    let that = this;
    if (e.touches.length == 1) {
      this.setData({
        startY: e.touches[0].clientY
      });
    }
  },
  touchM_0: function(e) {
    let that = this;
    if (e.touches.length == 1) {
      var moveY = e.touches[0].clientY;
      var disY = this.data.startY - moveY;
      that.setData({
        items: this.data.items
      });

    }

  }

})
//麦克风帧动画
function speaking() {
  var _this = this;
  //话筒帧动画
  var i = 1;
  this.timer = setInterval(function() {
    i++;
    i = i % 5;
    _this.setData({
      j: i
    })
  }, 200);
}
function dateFormat(dat,fmt) {
  var o = {
    "M+": dat.getMonth() + 1,                 //月份 
    "d+": dat.getDate(),                    //日 
    "h+": dat.getHours(),                   //小时 
    "m+": dat.getMinutes(),                 //分 
    "s+": dat.getSeconds(),                 //秒 
    "q+": Math.floor((dat.getMonth() + 3) / 3), //季度 
    "S": dat.getMilliseconds()             //毫秒 
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (dat.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return fmt;
}
function difftime(time1, time2) {
  var date1 = new Date(time1);
  var date2 = new Date(time2);
  var date3 = date2.getTime() - date1.getTime();
  //计算出相差天数
  var days = Math.floor(date3 / (24 * 3600 * 1000));
  //计算出小时数
  var leave1 = date3 % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
  var hours = Math.floor(leave1 / (3600 * 1000));
  //计算相差分钟数
  var leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
  var minutes = Math.floor(leave2 / (60 * 1000));
  //计算相差秒数
  var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
  var seconds = Math.round(leave3 / 1000);
  return seconds;
}

function secondsToHMS(seconds){
  var h = parseInt(seconds/60/60);
  var m = parseInt((seconds - h * 60 * 60) / 60);
  var s = parseInt(seconds - h * 60 * 60-m*60);

  return (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s)
}
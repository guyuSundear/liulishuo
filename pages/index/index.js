//index.js
//获取应用实例
const app = getApp()
const recorderManager = wx.getRecorderManager()
const innerAudioContext = wx.createInnerAudioContext()

Page({
  itemCreateTime: '',
  progress: '',
  colorBtn: 'gray',
  addShow: false,
  val: '',
  catogray:0,
  data: {
    isShowBg: true,
    isHide: true,
    items: [{
        value: '顽强的伊朗90分钟后依然对葡萄牙呈围攻之势，在点球扳平比分后，他们本有机会绝杀逆转比分晋级，但塔雷米近在咫尺的射门偏出，葬送了伊朗最后的努力和跻身16强的梦想。',
        moveLeft: 0,
        checked: false,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
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
        isVoice: true,
        src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: '00:06:32',
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
        isVoice: true,
        src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: '00:06:32',
        size: 0
      }, {
        value: '全面贯彻落实习近平外交思想',
        moveLeft: 0,
        checked: false,
        isVoice: true,
        src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: '00:06:32',
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
        isVoice: true,
        src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: '00:06:32',
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
        isVoice: true,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: '00:06:32',
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
        isVoice: true,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: '00:06:32',
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
        voiceLength: '00:06:32',
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
        voiceLength: '00:06:32',
        size: 0
      },
      {
        value: '6月22日至23日，中央外事工作会议在京召开，习近平总书记出席会议并发表重要讲话。',
        moveLeft: 0,
        checked: true,
        isVoice: false,
        pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
        voiceLength: '00:06:32',
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
        voiceLength: '00:06:32',
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
    allClick: false,
    delBtnWidth: 180, //删除按钮宽度单位（rpx）
    scrollHeight: 500,
    scrollToView: 'view0',
    list: [],
    showView: true,
    svBox: false,
    changeValue: '',
    itemNum: 1,
    currentMoveLeft: 0,
    startRecordTime: new Date(),
    finish: 0,
    unFinish: 0,
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
    isShow: true,
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    src: [
      'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    ],
  },
  //复选框事件
  checkboxChange: function(e) {
    let that = this;
    this.data.items[e.currentTarget.id].checked = !this.data.items[e.currentTarget.id].checked;
    that.data.items.forEach(function(a, b, c) {
      that.data.allData.forEach(function(a2, b2, c2) {
        if (a.id == a2.id) {
          if (a.checked != a2.checked) {
            a2.checked = a.checked;
            return;
          }
        }
      })
    })



    this.setData({
      items: this.data.items,
    });
    this.fish();

    if (this.data.allClick) {
      this.data.items.splice(e.currentTarget.id, 1)
      this.setData({
        items: this.data.items
      })
    }
    console.log(this.data.allClick);
  },
  input: function(e) {
    let that = this;
    that.data.items.push({
      id: that.data.allData[that.data.allData.length - 1].id + 1,
      value: e.detail.value,
      moveLeft: 0,
      checked: false,
      isVoice: false,
      pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
      voiceLength: 0,
      timeLength: 6.32,
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
    this.setData({
      numLeft: 0
    });
    if (e.touches.length == 1) {
      that.data.items[e.currentTarget.dataset.index].dhisShow = false;
      that.data.items[e.currentTarget.dataset.index].dhisHiddle = false;
      if (that.data.items[e.currentTarget.dataset.index].moveLeft >= 40) {

        that.data.moveJl = 90;
        that.data.items[e.currentTarget.dataset.index].moveLeft = 90;

      } else {
        that.data.moveJl = 0;
        that.data.items[e.currentTarget.dataset.index].moveLeft = 0;
      }


      this.setData({
        startX: e.touches[0].clientX,
        items: that.data.items
      });

    }

  },
  //触摸按住并移动
  touchM: function(e) {
    let that = this;
    if (e.touches.length == 1) {
      var moveX = e.touches[0].clientX;
      var disX = this.data.startX + that.data.moveJl - moveX;
      this.data.items[e.currentTarget.dataset.index].moveLeft = disX;
      that.setData({
        items: that.data.items,
        numLeft: disX
      })

    }
  },
  //停止触摸
  touchE: function(e) {
    let that = this;
    if (e.changedTouches.length == 1) {
      console.log(that.data.items[e.currentTarget.dataset.index].moveLeft);
      if (that.data.items[e.currentTarget.dataset.index].moveLeft > 40) {
        // this.data.currentMoveLeft=0;
        that.data.items[e.currentTarget.dataset.index].dhisShow = true;
        this.setData({
          items: that.data.items
        })
      } else {
        that.data.items[e.currentTarget.dataset.index].dhisHiddle = true
        that.data.moveJl = 0;
        that.data.items[e.currentTarget.dataset.index].moveLeft = 0;
        that.setData({
          items: that.data.items
        })
      }


      // that.data.items.forEach(function (currentValue, index, arr) {
      //   if (index != e.currentTarget.dataset.index) {
      //     that.data.items[e.currentTarget.dataset.index].dhisHiddle = true;
      //     that.data.items[e.currentTarget.dataset.index].dhisShow = false;
      //   }
      // });

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
      isShow: !that.data.isShow,
      isHide: false
    })
  },
  cha: function() {
    var that = this
    that.setData({
      isShow: !that.data.isShow,
      isHide: true
    })
  },

  onLoad: function() {
    var _this = this;
    wx.showLoading({
      title: "加载中",
      mask: true
    })
    setTimeout(function() {
      wx.hideLoading();
      _this.setData({
        isShowBg: false,
        catogray: 0,
        
      })
    }, 3000);
    var i = 0;
    _this.data.items.forEach(function(a, b, c) {
      i++;
      a.id = i;
      a.picture ="image/play.png";
      a.cssShow=false;
    })
    _this.setData({
      items: _this.data.items,
      allData: _this.data.items,
      scrollHeight: wx.getSystemInfoSync().windowHeight - 105 //窗口高度-底部按钮高度
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
      allClick: true,
      catogray:1
    });
  },
  all: function(e) {
    this.setData({
      items: this.data.allData,
      allClick: false,
      catogray:0
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
      allClick: true,
      catogray:2
    });
  },

  //手指按下
  touchdown: function() {
    var _this = this;
    speaking.call(this);
    _this.setData({
      isSpeaking: true,
      colorBtn: '#73C24F',
      startRecordTime: new Date(),
      progress:''
    });
    innerAudioContext.stop();
    //开始录音
    recorderManager.start({
      format: 'mp3',
    });

  },
  //手指抬起
  touchup: function() {
    var _this = this;
    _this.setData({
      isSpeaking: false,
      colorBtn: 'white',
      // addShow:true
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
            // value: savedFilePath,
            moveLeft: 0,
            checked: false,
            isVoice: true,
            src: savedFilePath,
            // addShow: false,
            pubDate: dateFormat(new Date(), 'yyyy-MM-dd hh:mm'),
            voiceLength: secondsToHMS(difftime(_this.data.startRecordTime, new Date())),
            size: 0
          };

          _this.data.items.push(voice);
          _this.setData({
            allData: _this.data.items,
            items: _this.data.items,
            scrollToView: 'view' + (_this.data.items.length - 1)
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
    var _that=this;
    innerAudioContext.stop();
    var filePath = e.currentTarget.dataset.key;
    // console.log(filePath);
    //点击开始播放
    wx.showToast({
      title: "开始播放",
      icon: 'success',
      duration: 1000
    })
    /*_that.data.items.forEach(function (a, b, c) {
      if ('voice'+a.id == e.currentTarget.id){
        a.picture = 'image/stop.png';
        return;
      }
    })
    _that.data.items.forEach(function (a, b, c) {
      _that.data.allData.forEach(function (a2, b2, c2) {
        if (a.id == a2.id) {
          if (a.picture != a2.picture) {
            a2.picture = a.picture;
            return;
          }
        }
      })
    })

    _that.setData({
      allData: _that.data.items,
      items: _that.data.allData,
    })*/

    innerAudioContext.onTimeUpdate(() => {
      var progress = parseInt((innerAudioContext.currentTime / innerAudioContext.duration) * 100)
      var proTime = Math.ceil(innerAudioContext.duration - innerAudioContext.currentTime)
      var that = this
      that.setData({
        progress: progress,
        val: secondsToHMS(proTime),
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
    // wx.playVoice({
    //   filePath: filePath,
    //   complete: function () {
    //   }
    // });
  },

  audioPress: function(e) {
    var progress = parseInt((e.detail.currentTime / e.detail.duration) * 100)
    this.setData({
      audioPress: progress,
      voiceLength: e.detail.duration
    })
  },


  // 删除按钮事件
  delItem: function(e) {
    let that = this;
    wx.showModal({
      title: "提示",
      content: "确定要删除吗？",
      success: function(res) {
        if (res.confirm) {

          

          console.log(e);
          that.data.items.forEach(function (a, b, c) {
            if (a.id ==e.currentTarget.id) {
              a.cssShow = true;            
              return;
            }
          })
          var i=0;
            that.data.allData.forEach(function (a2, b2, c2) {
              if (e.currentTarget.id == a2.id) {
                that.data.allData.splice(i, 1);
                return;
              }
              i++;
            })
          console.log(that.data.items);  
          that.setData({
             items: that.data.items,
          });

          setTimeout(function () {
            i = 0;
            that.data.items.forEach(function (a, b, c) {
              if (a.id == e.currentTarget.id) {
                that.data.items.splice(i, 1);
                return;
              }
              i++
            })
            that.setData({
              items: that.data.items,
              allData: that.data.allData,
            });
            that.fish();
          }, 1500);
        }
      }
    })
  },


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

function dateFormat(dat, fmt) {
  var o = {
    "M+": dat.getMonth() + 1, //月份 
    "d+": dat.getDate(), //日 
    "h+": dat.getHours(), //小时 
    "m+": dat.getMinutes(), //分 
    "s+": dat.getSeconds(), //秒 
    "q+": Math.floor((dat.getMonth() + 3) / 3), //季度 
    "S": dat.getMilliseconds() //毫秒 
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

function secondsToHMS(seconds) {
  var h = parseInt(seconds / 60 / 60);
  var m = parseInt((seconds - h * 60 * 60) / 60);
  var s = parseInt(seconds - h * 60 * 60 - m * 60);

  return (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s)
}
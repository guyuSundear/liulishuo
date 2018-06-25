// pages/todo/todo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showDialog: false,
    showDialogRight: false,
    showView: true,
    svBox:false,
    changeValue:'',
    itemNum: 1,
    items: [
      { name: 'USA', value: '美国',},
    ],
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
  },

  checkboxChange: function (e) {
    console.log(e.detail.value)
      this.setData({
        svBox: !this.data.svBox,
        changeValue: e.detail.value,
        
      })
      for (var i = 0; i < this.data.items.length; i++) {
        if (this.data.changeValue == '') {
          this.data. items[i].checked = true;
        } else {
          this.data. items[i].checked = false;
        }
      }
   
    console.log(this.data.changeValue)
  },

  pick: function (e) {
    var that = this;
    that.setData({
      leadIndex: e.currentTarget.dataset.id,
    })
    console.log(that.data.items);
    console.log(e);
    console.log(this.data.changeValue.toString());
    if (e.currentTarget.dataset.id == 0){
          that.setData({
            showView: true,
          })
    } else if (e.currentTarget.dataset.id == 1){
      for (var i = 0; i < that.data.items.length; i++) {
        console.log(that.data.items[i].value)
        if (this.data.changeValue =='') {
          that.setData({
            showView: true
          })
        } else {
          that.setData({
            showView: false
          })
        } 
      }
    } else if (e.currentTarget.dataset.id == 2){
      for (var i = 0; i < that.data.items.length; i++) {
        console.log(that.data.items[i].value)
        console.log(this.data.changeValue)
        if (this.data.changeValue =='') {
          that.setData({
            showView: true
          })
        } else {
          that.setData({
            showView: false
          })
        }
      }
    }else {
      for (var i = 0; i < that.data.items.length; i++) {
        console.log(that.data.items[i].value)
        if (this.data.changeValue == '') {
          that.setData({
            showView: true
          })
        } else {
          that.setData({
            showView: false
          })
        }
      }
    }



   
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
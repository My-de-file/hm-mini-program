Page({

  /**
   * 页面的初始数据
   */
  data: {
    search: '搜索',
    // Bographs:[
    //   {
    //     id:1,
    //     url:'http://a4.att.hudong.com/20/62/01000000000000119086280352820.jpg',
    //   }, {
    //     id: 1,
    //     url: 'http://a4.att.hudong.com/22/59/19300001325156131228593878903.jpg',
    //   }, {
    //     id: 1,
    //     url: 'http://c.hiphotos.baidu.com/zhidao/pic/item/d009b3de9c82d1587e249850820a19d8bd3e42a9.jpg',
    //   }
    // ],
    imgData: 1,
    swiper_list: [],
    classify_list: [],
    index_list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
      success: (res) => {
        // console.log(res)
        this.setData({
          swiper_list: res.data.message
        })
      }
    }),
      wx.request({
        url: 'https://api.zbztb.cn/api/public/v1/home/catitems',
        success: (res) => {
          // console.log(res)
          this.setData({
            classify_list: res.data.message
          })
        }
      }),
      wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/floordata',
        success: (res) => {
          console.log(res)
          this.setData({
            index_list: res.data.message
          })
        }
      })
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
  // handleImg: function(e){
  //   // console.log(e.currentTarget.dataset.item)
  //   this.data.imgData = e.currentTarget.dataset.item
  //   console.log(this.data.imgData)
  //   // setTimeout(()=>{
  //   //   console.log(1)
  //   // },1)
  // }
})

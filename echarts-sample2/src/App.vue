<template>
  <div class="viewport">
    <!-- 顶部 -->
    <div class="header">
      <span class="logo">传智播客</span>
      <h2>传智播客科技数字可视化平台</h2>
      <span class="title">大数据可视化分析</span>
    </div>
    <!-- 主体部分 -->
    <div class="body">
      <div class="column">
        <!-- 用户 -->
        <div class="panel user">
          <h3>用户实时指标</h3>
          <div class="chart" ref="userChart"></div>
        </div>
        <!-- 订单完成率 -->
        <div class="panel channel">
          <h3>订单区域来源</h3>
          <div class="chart" ref="channelChart"></div>
        </div>
        <!-- 转化率分析 -->
        <div class="panel rate">
          <h3>转化率分析</h3>
          <div class="chart" ref="rateChart"></div>
          <div class="data">
            <div class="item">200</div>
            <div class="item">500</div>
            <div class="item">2000</div>
            <div class="item">10000</div>
          </div>
        </div>
      </div>
      <div class="column">
        <!-- 地图 -->
        <div class="order">
          <div class="caption">
            <span>本月总单: <strong>107</strong> 单</span>
            <span>本月销量: <strong>232</strong> 单</span>
            <h3>今日订单数</h3>
          </div>
          <div class="chart" ref="map"></div>
          <!-- 其它 -->
          <div class="extra">
            <span class="upper">高</span>
            <span class="lower">低</span>
          </div>
        </div>
        <!-- 销量统计 -->
        <div class="sales">
          <!-- 数据 -->
          <div class="data">
            <div class="item">
              <h5>全年金额</h5>
              <span>0</span>
              <span>3</span>
              <span>1</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>元</span>
            </div>
            <div class="item">
              <h5>全年销量</h5>
              <span>0</span>
              <span>0</span>
              <span>3</span>
              <span>2</span>
              <span>7</span>
              <span>8</span>
              <span>单</span>
            </div>
          </div>
          <h3>24小时销售统计</h3>
          <div class="chart" ref="salesChart"></div>
        </div>
      </div>
      <div class="column">
        <!-- 订单状态占比 -->
        <div class="panel status">
          <h3>订单状态占比</h3>
          <div class="chart" ref="statusChart"></div>
          <div class="extra" data-text="全国"></div>
        </div>
        <!-- 订单完成率 -->
        <div class="panel completed">
          <h3>订单完成率</h3>
          <div class="chart" ref="completedChart"></div>
        </div>
        <!-- 销售趋势 -->
        <div class="panel trend">
          <h3>本周销量趋势</h3>
          <div class="chart" ref="trendChart"></div>
          <div class="extra">单位: 数量</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  
  // 导入 echarts 
  import echarts from 'echarts'

  import china from './china'

  export default {
    data() {
      return {

      }
    },
    methods: {
      // 根据视口宽度计算 html 字号大小
      setFont() {
        // 计算浏览器宽度
        let doc = document.documentElement
        let docWidth = doc.clientWidth
        // 限制边界
        if(docWidth > 1920) docWidth = 1920
        // 设置 html 字号大小cons
        doc.style.fontSize = docWidth / 80 + 'px'
      },

      // 用户实时指标
      userChart() {
        const bar = echarts.init(this.$refs.userChart)

        const option = {
          tooltip: {
            trigger: 'item'
          },
          grid: {
            left: '8%',
            right: '8%',
            top: '10%',
            bottom: '10%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: ['PV', 'UV', '总访客数', '独立IP数', '游客数',],
              axisLabel: {
                textStyle: {
                  color: '#feffff',
                  fontSize: 14
                }
              },
              axisLine: {
                show: false
              },
              axisTick: {
                show: false,
                alignWithLabel: true
              }
            }
          ],
          yAxis: [
            {
              type : 'value',
              axisLabel: {
                textStyle: {
                  color: '#feffff',
                  fontSize: 14
                }
              },
              axisLine: {
                lineStyle: {
                  type: 'dashed',
                  color: '#1d293d'
                }
              },
              splitLine: {
                lineStyle: {
                  type: 'dashed',
                  color: '#1d293d'
                }
              },
              axisTick: {
                show: false
              }
            }
          ],
          series: [
            {
              type:'bar',
              barWidth: '50%',
              itemStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {offset: 0, color: 'rgba(2, 208, 231, 1)'},
                    {offset: 1, color: 'rgba(2, 208, 231, 0.1)'}
                  ]
                }
              },
              data:[
                {name: 'PV', value: 80,},
                {name: 'UV', value: 60},
                {name: '总访客数', value: 30},
                {name: '独立IP数', value: 50},
                {name: '游客数', value: 70}
              ]
            }
          ]
        }

        bar.setOption(option)
      },

      // 订单区域来源
      channelChart() {
        const line = echarts.init(this.$refs.channelChart)

        const option = {
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            textStyle: {
              color: '#fff',
              fontSize: 14
            },
            right: '8%',
            data:['本周', '本月']
          },
          grid: {
            left: '8.5%',
            right: '10%',
            top: '12%',
            bottom: '12%',
            containLabel: true,
            borderColor: '#012f4a'
          },
          xAxis: {
            type: 'category',
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#feffff',
                fontSize: 14
              }
            },
            boundaryGap: false,
            data: ['01', '02', '03', '04', '05', '06', '07', '08', '09']
          },
          yAxis: {
            type: 'value',
            offset: 10,
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                type: 'dashed',
                color: '#1d293d'
              }
            },
            splitLine: {
              lineStyle: {
                type: 'dashed',
                color: '#1d293d'
              }
            },
            axisLabel: {
              textStyle: {
                color: '#feffff',
                fontSize: 14
              }
            },
          },
          series: [
            {
              name:'本周',
              type:'line',
              symbolSize: 8,
              smooth: true,
              itemStyle: {
                color: '#6fe91c'
              },
              data: [20, 64, 79, 70, 64, 80, 90, 93, 80]
            },
            {
              name:'本月',
              type:'line',
              symbolSize: 8,
              smooth: true,
              itemStyle: {
                color: '#00eaff'
              },
              data: [43, 31, 65, 42, 56, 50, 60, 64, 52]
            }
          ]
        }

        line.setOption(option)
      },

      // 转化率分析
      rateChart() {
        const funnel = echarts.init(this.$refs.rateChart)

        const option = {
          calculable: true,
          series: [
            {
              name:'转化率分析',
              type:'funnel',
              sort: 'ascending',
              left: '10%',
              top: '10%',
              bottom: '15%',
              gap: 5,
              maxSize: '60%',
              label: {
                show: false,
                position: 'left',
                align: 'right',
                formatter: ['{percent|{d}%}', '{line|/}', '{hr|}'].join('\n'),
                rich: {
                  percent: {
                    fontSize: 20,
                    lineHeight: 12,
                    padding: [-6, 5, 0, 0]
                  },
                  hr: {
                    width: '110%',
                    height: 1,
                    padding: [0, -3, 0, 0]
                  },
                  line: {
                    align: 'right',
                    fontWeight: 'bold',
                    lineHeight: 8,
                    padding: [0, -6, 0, 0]
                  }
                }
              },
              labelLine: {
                length: 30
              },
              itemStyle: {
                borderColor: 'none'
              },
              data: [
                {
                  name: '访问',
                  value: 60,
                  itemStyle: {
                    color: {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [
                        {offset: 0, color: 'rgba(0, 240, 255, 1)'},
                        {offset: 0.5, color: 'rgba(0, 240, 255, 0.7)'},
                        {offset: 1, color: 'rgba(0, 240, 255, 1)'}
                      ]
                    }
                  },
                  label: {
                    rich: {
                      percent: {
                        color: 'rgba(0, 240, 255, 1)'
                      },
                      hr: {
                        backgroundColor: 'rgba(0, 240, 255, 1)'
                      },
                      line: {
                        color: 'rgba(0, 240, 255, 1)'
                      }
                    }
                  }
                },
                {
                  name: '咨询',
                  value: 40,
                  itemStyle: {
                    color: {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [
                        {offset: 0, color: 'rgba(0, 255, 168, 1)'},
                        {offset: 0.5, color: 'rgba(0, 255, 168, 0.7)'},
                        {offset: 1, color: 'rgba(0, 255, 168, 1)'}
                      ]
                    }
                  },
                  label: {
                    rich: {
                      percent: {
                        color: 'rgba(0, 255, 168, 1)'
                      },
                      hr: {
                        backgroundColor: 'rgba(0, 255, 168, 1)'
                      },
                      line: {
                        color: 'rgba(0, 255, 168, 1)'
                      }
                    }
                  }
                },
                {
                  name: '订单',
                  value: 20,
                  itemStyle: {
                    color: {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [
                        {offset: 0, color: 'rgba(210, 255, 0, 1)'},
                        {offset: 0.5, color: 'rgba(210, 255, 0, 0.7)'},
                        {offset: 1, color: 'rgba(210, 255, 0, 1)'}
                      ]
                    }
                  },
                  label: {
                    rich: {
                      percent: {
                        color: 'rgba(210, 255, 0, 1)'
                      },
                      hr: {
                        backgroundColor: 'rgba(210, 255, 0, 1)'
                      },
                      line: {
                        color: 'rgba(210, 255, 0, 1)'
                      }
                    }
                  }
                },
                {
                  name: '点击',
                  value: 80,
                  itemStyle: {
                    color: {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [
                        {offset: 0, color: 'rgba(0, 156, 255, 1)'},
                        {offset: 0.5, color: 'rgba(0, 156, 255, 0.7)'},
                        {offset: 1, color: 'rgba(0, 156, 255, 1)'}
                      ]
                    }
                  },
                  label: {
                    rich: {
                      percent: {
                        color: 'rgba(0, 156, 255, 1)'
                      },
                      hr: {
                        backgroundColor: 'rgba(0, 156, 255, 1)'
                      },
                      line: {
                        color: 'rgba(0, 156, 255, 1)'
                      }
                    }
                  }
                }
              ]
            }
          ]
        }

        funnel.setOption(option)
      },

      // 订单
      orderChart() {
        const map = echarts.init(this.$refs.map)

        echarts.registerMap('china', china)

        const chinaGeoCoordMap = {
          '黑龙江': [127.9688, 45.368],
          '内蒙古': [110.3467, 41.4899],
          "吉林": [125.8154, 44.2584],
          '北京市': [116.4551, 40.2539],
          "辽宁": [123.1238, 42.1216],
          "河北": [114.4995, 38.1006],
          "天津": [117.4219, 39.4189],
          "山西": [112.3352, 37.9413],
          "陕西": [109.1162, 34.2004],
          "甘肃": [103.5901, 36.3043],
          "宁夏": [106.3586, 38.1775],
          "青海": [101.4038, 36.8207],
          "新疆": [87.9236, 43.5883],
          "西藏": [91.11, 29.97],
          "四川": [103.9526, 30.7617],
          "重庆": [108.384366, 30.439702],
          "山东": [117.1582, 36.8701],
          "河南": [113.4668, 34.6234],
          "江苏": [118.8062, 31.9208],
          "安徽": [117.29, 32.0581],
          "湖北": [114.3896, 30.6628],
          "浙江": [119.5313, 29.8773],
          "福建": [119.4543, 25.9222],
          "江西": [116.0046, 28.6633],
          "湖南": [113.0823, 28.2568],
          "贵州": [106.6992, 26.7682],
          "云南": [102.9199, 25.4663],
          "广东": [113.12244, 23.009505],
          "广西": [108.479, 23.1152],
          "海南": [110.3893, 19.8516],
          '上海': [121.4648, 31.2891]
        }

        const chinaDatas = [
          [
            {name: '黑龙江', value: 2300}
          ],
          [
            {name: '内蒙古', value: 420}
          ],
          [
            {name: '辽宁', value: 329}
          ],
          [
            {name: '山西', value: 600}
          ],
          [
            {name: '陕西', value: 708}
          ],
          [
            {name: '宁夏', value: 820}
          ],
          [
            {name: '青海', value: 520}
          ],
          [
            {name: '新疆', value: 390}
          ],
          [
            {name: '西藏', value: 400}
          ],
          [
            {name: '重庆', value: 900}
          ],
          [
            {name: '山东', value: 880}
          ],
          [
            {name: '河南', value: 300}
          ],
          [
            {name: '湖北', value: 300}
          ],
          [
            {name: '浙江', value: 230}
          ],
          [
            {name: '福建', value: 1300}
          ],
          [
            {name: '湖南', value: 1345}
          ],
          [
            {name: '贵州', value: 325}
          ],
          [
            {name: '广西', value: 432}
          ],
          [
            {name: '海南', value: 212}
          ],
          [
            {name: '上海', value: 432}
          ]
        ]

        const series = [
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            symbol: 'circle',
            symbolSize: function(val) {
              return 3 + val[2] / 400
            },
            data: chinaDatas.map(function(dataItem) {
              return {
                name: dataItem[0].name,
                value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
              };
            }),
          }
        ]

        const option = {
          visualMap: { //图例值控制
            type: 'piecewise',
            show: true,
            inverse: true,
            right: '0',
            top: 'middle',
            min: 0,
            max: 1000,
            inRange: {
              symbol: 'circle',
              color: ['#ff0014', '#ff8900', '#fb00ff', '#00ffe4', '#00ff06']
            },
            itemWidth: 12,
            itemHeigth: 12,
            calculable: true,
            formatter: '',
            color: ['#ff0014', '#ff8900', '#fb00ff', '#00ffe4', '#00ff06']
          },
          geo: {
            map: 'china',
            zoom: 1.1,
            label: {
              emphasis: {
                show: false
              }
            },
            roam: true, //是否允许缩放
            itemStyle: {
              normal: {
                color: '#0d2c82', //地图背景色
                borderColor: '#3c81b2', //省市边界线00fcff 516a89
                borderWidth: 1
              },
              emphasis: {
                color: '' //悬浮背景
              }
            }
          },
          series: series
        }

        map.setOption(option)
      },

      // 销售统计
      salesChart() {
        const line = echarts.init(this.$refs.salesChart)

        const option = {
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            textStyle: {
              color: '#00eaff',
              fontSize: 14
            },
            right: '8%',
            data:['数量']
          },
          grid: {
            top: '12%',
            left: '5%',
            right: '5%',
            bottom: '15%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: true,
            axisLine: {
              lineStyle: {
                color: '#00a0e9',
                width: 2
              }
            },
            axisLabel: {
              textStyle: {
                color: '#fff',
                fontSize: 14
              }
            },
            axisTick: {
              show: false,
              alignWithLabel: true
            },
            data: ['7点', '8点', '9点', '10点', '11点', '12点', '13点', '14点', '15点', '16点', '17点']
          },
          yAxis: {
            type: 'value',
            boundaryGap: true,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#fff',
                fontSize: 14
              }
            }
          },
          series: [{
            name: '数量',
            data: [0, 50, 20, 50, 24, 75, 30, 79, 40, 21, 10],
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle: {
              width: 0
            },
            itemStyle: {
              color: '#00eaff'
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0, color: '#19b1ff'
                  },
                  {
                    offset: 0.5, color: '#0ef7ff'
                  },
                  {
                    offset: 1, color: '#2f6aff'
                  }
                ]
              }
            }
          }]
        }

        line.setOption(option)
      },

      // 订单状态
      statusChart() {
        const pie = echarts.init(this.$refs.statusChart)

        const option = {
            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b}: {d}%"
            },
            series: [
              {
                name: '订单状态占比',
                type:'pie',
                radius: ['45%', '65%'],
                center: ['50%', '45%'],
                label: {
                  fontSize: 14
                },
                data:[
                  {value: 335, name: '苏州'},
                  {value: 310, name: '上海'},
                  {value: 234, name: '北京'},
                  {value: 135, name: '西港'},
                  {value: 178, name: '南京'},
                  {value: 210, name: '广州'},
                  {value: 247, name: '杭州'},
                  {value: 310, name: '郑州'}
                ]
              }
            ]
        }

        pie.setOption(option)
      },

      // 订单完成率图表
      completedChart() {
        const line = echarts.init(this.$refs.completedChart)

        const option = {
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            textStyle: {
              color: '#fff',
              fontSize: 14
            },
            right: '8%',
            data:['数量']
          },
          grid: {
            top: '12%',
            left: '8%',
            right: '10%',
            bottom: '12%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: true,
            axisLine: {
              lineStyle: {
                type: 'dashed',
                color: '#1d293d'
              }
            },
            axisLabel: {
              textStyle: {
                color: '#fff',
                fontSize: 14
              }
            },
            axisTick: {
              show: false,
              alignWithLabel: true
            },
            data: ['01', '02', '03', '04', '05', '06', '07', '08', '09']
          },
          yAxis: {
            type: 'value',
            boundaryGap: true,
            axisLine: {
              lineStyle: {
                type: 'dashed',
                color: '#1d293d'
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              lineStyle: {
                type: 'dashed',
                color: '#1d293d'
              }
            },
            axisLabel: {
              textStyle: {
                color: '#fff',
                fontSize: 14
              }
            }
          },
          series: [{
            name: '数量',
            data: [64, 64, 70, 40, 90, 81, 60, 93, 84],
            type: 'line',
            showSymbol: false,
            lineStyle: {
              width: 0
            },
            itemStyle: {
              color: '#0192e7'
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0, color: 'rgba(0, 162, 255, 1)'
                  },
                  {
                    offset: 1, color: 'rgba(0, 162, 255, 0)'
                  }
                ]
              }
            }
          }]
        }

        line.setOption(option)
      },

      // 本周趋势
      trendChart() {
        const bar = echarts.init(this.$refs.trendChart)

        const option = {
          grid: {
            left: '15%',
            top: '12%',
            bottom: '10%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            axisLine: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitLine: {
              show: false
            }
          },
          yAxis: {
            type: 'category',
            offset: 20,
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              color: '#fff',
              fontSize: 14
            },
            data: ['深圳', '武汉', '广州', '北京']
          },
          series: [
            {
              name: '本周',
              type: 'bar',
              barWidth: '50%',
              label: {
                show: true,
                position: 'right',
                offset: [10, 0],
                color: '#fff',
                fontSize: 14
              },
              itemStyle: {
                color: '#15a6b8'
              },
              data: [1321, 1814, 2010, 2130]
            }
          ]
        }

        bar.setOption(option)
      }
    },
    created() {
      // 设置 html 字号
      this.setFont()
      // 根据窗口变化设置 html 定号
      window.addEventListener('resize', () => {
        this.setFont()
      })
    },
    mounted() {
      this.userChart()
      this.channelChart()
      this.rateChart()
      this.orderChart()
      this.salesChart()
      this.statusChart()
      this.completedChart()
      this.trendChart()
    }
  }
</script>

<style lang="less">
  .viewport {
    max-width: 1920px;
    margin: 0 auto;
  }
  
  // 头部
  .header {
    height: 5rem;
    line-height: 1;
    position: relative;

    .logo {
      display: block;
      font-size: 1.125rem;
      color: #c4f7ff;
      position: absolute;
      left: 3rem;
      top: 1rem;
    }

    h2 {
      font-size: 1.333rem;
      color: #c4f7ff;
      transform: translate(-50%);
      position: absolute;
      left: 50%;
      top: 1rem;
    }

    .title {
      display: block;
      font-size: 1rem;
      color: #c4f7ff;
      transform: translate(-50%);
      position: absolute;
      left: 50%;
      bottom: 0.375rem;
    }
  }

  // 主体
  .body {
    display: flex;
    padding: 0.625rem 0.833rem 0;

    // 分成三列
    .column {
      flex: 2;

      &:nth-child(2) {
        flex: 3;
        margin: 0 0.625rem;
      }
    }
    
    // 公共面板
    .panel {
      display: flex;
      flex-direction: column;
      height: 13.5rem;
      background-image: url(./assets/images/border-1.png);
      background-size: 100% 100%;
      margin-bottom: 1rem;

      h3 {
        height: 1.25rem;
        text-align: center;
        font-size: 0.875rem;
        color: #21fcff;
      }

      .chart {
        flex: 1;
      }
    }

    // 用户
    .user {
      
    }

    // 订单来源
    .channel {

      .chart {
        padding-top: 0.5rem;
      }
    }

    // 转化率
    .rate {
      position: relative;

      .data {
        position: absolute;
        top: 2.45rem;
        bottom: 1.9rem;
        right: 2.25rem;
        width: 4.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }

      .item {
        display: flex;
        width: 100%;
        padding: 5px 6px;
        font-size: 0.75rem;
        justify-content: flex-end;
        align-self: center;
        color: #14e5ff;
        background-image: linear-gradient(
          to left,
          rgba(14, 109, 204, 0.5) 0%,
          rgba(14, 109, 204, 0.3) 30%,
          transparent 60%
        );
      }
    }

    // 订单数量
    .order {
      display: flex;
      flex-direction: column;
      height: 20rem;
      padding: 1.7rem 2.25rem 1rem;
      background-image: url(./assets/images/border-2.png);
      background-size: 100% 100%;
      box-sizing: border-box;
      position: relative;

      .caption {
        line-height: 1;
        overflow: hidden;
        color: #31ecf0;

        span {
          display: block;
          float: left;
          font-size: 0.75rem;

          &:first-child {
            margin-right: 2.8rem;
          }
        }

        strong {
          font-size: 1rem;
          font-weight: normal;
        }

        h3 {
          float: right;
          font-size: 1rem;
        }
      }

      .chart {
        flex: 1;
      }

      .extra {
        position: absolute;
        z-index: -1;
        right: 2.25rem;
        top: 2.7rem;
        bottom: 1rem;

        width: 25px;
        text-align: center;
        font-size: 0.75rem;
        color: #fff;
        // background-color: rgba(255, 255, 255, 0.4);

        span {
          position: absolute;
          top: 50%;
          left: 50%;
          display: block;
          margin-top: -70px;
          transform: translate(-50%, -50%);
          // background-color: pink;

          &:first-child {
            margin-top: -66px;
          }

          &:last-child {
            margin-top: 68px;
          }
        }
      }
    }

    // 销量统计
    .sales {
      height: 18.5rem;
      background-image: url(./assets/images/border-3.png);
      background-size: 100% 100%;
      margin-top: 4rem;
      padding: 5.5rem 1.5rem 0;
      box-sizing: border-box;
      position: relative;
      display: flex;
      flex-direction: column;

      h3 {
        font-size: 0.875rem;
        color: #00eaff;
      }

      .data {
        width: 100%;
        height: 6rem;
        position: absolute;
        left: 0;
        top: -2.75rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .item {
        display: flex;
        justify-content: center;
        height: 2rem;
        text-align: center;
        line-height: 2rem;
        color: #00e4ff;

        h5 {
          width: 7rem;
          font-size: 0.875rem;
          margin-right: 5px;
          background-image: url(./assets/images/shape.png);
          background-size: 100% 100%;
        }

        span {
          display: block;
          width: 2rem;
          padding-top: 1px;
          margin: 0 3px;
          font-size: 1.5rem;
          box-sizing: border-box;
          background-image: url(./assets/images/rect.png);
          background-size: 100% 100%;

          &:last-child {
            background-image: none;
            font-size: 1.25rem;
          }
        }
      }

      .chart {
        flex: 1;
      }
    }

    // 订单状态占比
    .status {
      position: relative;
      
      .chart {
        
      }

      .extra {
        width: 0;
        height: 0;
        padding: 12.5%;
        background-image: linear-gradient(to top, rgba(128, 128, 128, 0), rgba(128, 128, 128, 0.4));
        border-radius: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
        top: 50%;
        left: 50%;

        &:after {
          content: attr(data-text);
          display: block;
          position: absolute;
          left: 50%;
          top: 50%;

          transform: translate(-50%, -50%);
          font-size: 1rem;
          color: #fff;
        }
      }
    }

    // 订单完成率
    .completed {
      
      .chart {
        padding-top: 0.5rem;
      }
    }

    // 趋势
    .trend {
      position: relative;
      
      .chart {
        padding-top: .5rem;
      }

      .extra {
        position: absolute;
        top: 2rem;
        right: 2rem;
        color: #fff;
        font-size: 0.75rem;
      }
    }
  }

</style>




import React,{Component} from 'react'
import axios from '../../axios'
import './index.less'
import { Card, Form, Button, Select, DatePicker, Table, message, Modal } from 'antd'
const { RangePicker } = DatePicker
const FormItem = Form.Item
const Option = Select.Option


class Order extends Component {
  constructor(props){
    super(props);
  }

  state = {
    tableData: [],
    total:0,
    isLoading:false,
    selectedRowKeys:[],
    selectedItem:'',
    endItem:{},
    isShowModal:false,
    loading: {
      spining:true,
      tip: '数据正在拼命加载中',
      size:'large'
    }
  }

  // 重置表单数据
  handleReset = () => {
    this.props.form.resetFields()
  }

  // 查询表单数据 
  handleSearch = () => {
    const form = this.props.form.getFieldsValue()
    console.log(form);
  }

  params = {
    pn:1
  }
  // 获取表格数据
  getTableData() {
    this.setState({
      isLoading:true
    },() => {
      axios.get('/order/list', this.params).then(res => {
        if (res.code == 0) {
          console.log(res);
          this.setState({
            tableData: res.result.item_list.map((item, index) => {
              item.key = index
              return item
            }),
            total: res.result.total_count,
            isLoading:false
          })
        }
      }).catch(err => {
        this.setState({
          isLoading:false
        })
      })
    })
  }

  // 选中表格项时触发
  

  // 结束订单
  handleDone = () => {
    let selectedItem = this.state.selectedItem
    // console.log(selectedItem)
    if (selectedItem) {
      axios.get('/order/ebike_info',{id:selectedItem.id}).then(res => {
        if (res.code == 0) {
          this.setState({
            endItem:res.result,
            isShowModal:true
          })
          // console.log(this.state.endItem)
        }
      })
    } else {
      message.info('请选择一项订单继续进行操作')
    }
  }

  // 确认结束订单
  handleFinish = () => {

    axios.get('/order/finish_order',this.state.endItem.id).then(res => {
      if (res.code == 0) {
        // console.log(res)
        this.setState({
          isShowModal:false
        })
        this.getTableData()
        message.success('成功结束订单')
      }
    })
  }
  
  componentWillMount() {
    this.getTableData()
  }

  render() {
    const cityData = [
      {
        label: '北京',
        id: '0'
        },
      {
        label: '上海',
        id: '1'
        },
      {
        label: '广东',
        id: '2'
        }
    ]

    const statusData = [
      {
        label:'进行中',
        value:1
      },
      {
        label:'已完成',
        value:2
      },
      {
        label:'结束订单',
        value:3
      }
    ]

    const tableColumns = [
      {
        title:'订单编号',
        dataIndex:'order_sn',
        key:'order_sn'
      },
      {
        title: '车辆编号',
        dataIndex: 'bike_sn',
        key: 'bike_sn'
      },
      {
        title: '用户名',
        dataIndex: 'user_name',
        key: 'user_name'
      },
      {
        title: '手机号',
        dataIndex: 'mobile',
        key: 'mobile'
      },
      {
        title: '里程',
        dataIndex: 'distance',
        render(distance) {
          return distance/1000 + 'Km'
        },
        key: 'distance'
      },
      {
        title: '行驶时长',
        dataIndex: 'total_time',
        key: 'total_time'
      },
      {
        title: '状态',
        dataIndex: 'status',
        key: 'status'
      },
      {
        title: '开始时间',
        dataIndex: 'start_time',
        key: 'start_time'
      },
      {
        title: '结束时间',
        dataIndex: 'end_time',
        key: 'end_time'
      },
      {
        title: '订单金额',
        dataIndex: 'total_fee',
        key: 'total_fee'
      },
      {
        title: '实际金额',
        dataIndex: 'user_pay',
        key: 'user_pay'
      }
    ]

    const pagination = {
      total: this.state.total,
      pageSize: 10,
      onChange: index => {
        this.params.pn = index
        this.getTableData()
      }
    }

    const rowSelection = {
      type:'radio',
      selectedRowKeys: this.state.selectedRowKeys,
      onChange: (selectedRowKeys,selectedRows) => {
        console.log(selectedRowKeys,selectedRows)
        this.setState({
          selectedRowKeys:selectedRowKeys,
          selectedItem:selectedRows
        })
      }
    }

    const { getFieldDecorator } = this.props.form;

    return (
      <div className='order-wrap'>
        <Card>
          <Form layout='inline'>
            <FormItem label='城市'>

              {getFieldDecorator('city',{
                initialValue:'1'
              })(
                <Select placeholder='请选择一个城市' style={{ width: 180 }}>
                  {cityData.map(item =>
                    <Option value={item.id} key={item.id}>{item.label}</Option>
                  )}
                </Select>
              )}
              
            </FormItem>
            <FormItem label='订单时间'>
              {getFieldDecorator('orderTime')(
                <RangePicker></RangePicker>
              )}
            </FormItem>
            <FormItem label='订单状态'>
              {getFieldDecorator('status')(
                <Select placeholder='请选择一种状态' style={{ width: 180 }}>
                  {
                    statusData.map(item =>
                      <Option value={item.value} key={item.value}>{item.label}</Option>
                    )
                  }
                </Select>
              )}  
            </FormItem>
            <div className='btn-wrap'>
              <Button type='primary' onClick={this.handleSearch}>查询</Button>
              <Button onClick={this.handleReset}>重置</Button>
            </div>
          </Form>
        </Card>
        <Card className='btn-wrap' style={{ marginTop: -1 }}>
          <Button type='primary'>订单详情</Button>
          <Button type='primary' onClick={this.handleDone}>结束订单</Button>
        </Card>
        <Card style={{marginTop:-1}}>
          <Table bordered
                 columns={tableColumns} 
                 dataSource={this.state.tableData}
                 pagination={pagination} 
                 loading={this.state.isLoading} 
                 rowSelection={rowSelection}
          ></Table>       
        </Card>
        <Modal title='结束订单' 
               visible={this.state.isShowModal}
               onOk={this.handleFinish}
          onCancel={() => this.setState({ isShowModal: false})}
        >
          <ul className='end-data'>
            <li>
              <span className='left-title'>车辆编号：</span>{this.state.endItem.bike_sn}
            </li>
            <li>
              <span className='left-title'>剩余电量：</span>{this.state.endItem.battery}
            </li>
            <li>
              <span className='left-title'>行程开始时间：</span>{this.state.endItem.start_time}
            </li>
            <li>
              <span className='left-title'>当前位置：</span>{this.state.endItem.location}
            </li>
          </ul>
        </Modal>
      </div>
    )
  }
}

export default Form.create({})(Order)
import React from 'react';
import { connect } from 'dva';
import { Form } from 'antd';
import Modal from './modal';
import List from './list';
import Filter from './filter';

@Form.create()
@connect(({ cards }) => ({
  ...cards
}))
class Cards extends React.Component {

  componentDidMount() {
    this.props.dispatch({
      type: 'cards/queryList',
    });
  }

  render() {
    const { dispatch, form:{ validateFields }, modalVisible, loading, expand, dataSource, pagination, modalType, currentItem } = this.props;

    console.log(this.props)

    const modalProps = {
      title: `${modalType === 'create' ? '添加' : '修改'}`,
      item: currentItem,
      visible: modalVisible,
      onOk(){
        validateFields((err, values) => {
          if (!err) {
            dispatch({
              type: 'cards/addOne',
              payload: values,
            });
          }
        });
      },
      onCancel(){
        dispatch({
          type: 'cards/hideModal'
        })
      },
    }

    const listProps = {
      dispatch,
      dataSource,
      loading,
      pagination,
      onChange(e){
        dispatch({
          type: 'cards/queryList',
          payload: {
            page: e.current,
            pageSize: e.pageSize,
          }
        })
      },
      rowSelection: {
        onChange(selectedRowKeys){
          console.log('selectedRowKeys changed: ', selectedRowKeys);
        }
      }
    }

    const filterProps = {
      dispatch,
      expand
    }

    return (
      <div>
        <Filter {...filterProps} />
        <List {...listProps} />
        {modalVisible && <Modal {...modalProps} />}
      </div>
    );
  }
}

export default Cards;
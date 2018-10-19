import React from 'react';
import { Card, Table, Button, Menu, Dropdown, Icon } from 'antd';
import styles from './style.less';

const list = ({
  ...listProps,
}) => {
  const columns = [{
    title: '名称',
    dataIndex: 'title',
  },{
    title: '类型',
    dataIndex: 'genres',
  },{
    title: '票房',
    dataIndex: 'collect_count',
  },{
    title: '图片',
    render: (text, record) => {
      return (
        <img width="50" src={record.images.small} />
      );
    },
  }, {
    title: '操作',
    render: (text, record) => {
      return (
        <div>
          <Button type="primary" className={styles.tableBtn} onClick={() => { handleClick(record, 'edit') }}>修改</Button>
          <Button type="danger" className={styles.tableBtn} onClick={() => { handleClick(record, 'del') }}>删除</Button>
        </div>
      );
    },
  }];

  const dropdown = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">1st item</Menu.Item>
      <Menu.Item key="2">2nd item</Menu.Item>
      <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
  );

  // 添加
  const handleAdd = () => {
    listProps.dispatch({
      type: 'cards/showModal',
      payload: {
        modalType: 'create',
        currentItem: {},
      },
    })
  };

  const handleClick = (record, type) => {
    if(type === 'edit'){ // 修改
      listProps.dispatch({
        type: 'cards/showModal',
        payload: {
          modalType: 'update',
          currentItem: record,
        },
      })
    }else if(type === 'del'){ // 删除
      console.log(record.id)
      listProps.dispatch({
        type: 'cards/detele',
        payload: record.id,
      })
    }
  }

  const handleMenuClick = (e) => {
    console.log('click', e);
  }

  const listOption = {
    ...listProps,
    columns,
    rowKey: 'id',
  };

  return (
    <Card>
      <div className={styles.btnWrap}>
        <Button type="primary" className={styles.btn} onClick={handleAdd}>添加</Button>
        <Button className={styles.btn}>批量操作</Button>
        <Dropdown overlay={dropdown}>
          <Button>
            更多操作 <Icon type="down" />
          </Button>
        </Dropdown>
      </div>
      <Table {...listOption} />
    </Card>
  )
}

export default list;
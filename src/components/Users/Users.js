import React from 'react';
import styles from './Users.css';
import {Table, Pagination, Popconfirm, Button} from 'antd';
import 'antd/dist/antd.css';

function Users() {

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="">{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Website',
      dataIndex: 'website',
      key: 'website',
    }
  ];

  const dataSource = [
    {
      name : 'e',
      email :'e',
      website: 'm',
    },
    {
      name : 'e',
      email :'e',
      website: 'm',
    },
    {
      name : 'e',
      email :'e',
      website: 'm',
    }
  ];
  return (
    <div className={styles.normal}>
      <Table
        columns={columns}
        dataSource={dataSource}

        pagination={false}
      />
    </div>
  );
}

export default Users;

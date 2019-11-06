import React, { useState } from 'react';
import 'antd/dist/antd.css';
import axios from 'axios';
import { Input, Card, Form, Button, List, Select } from 'antd';

function App() {

  const [apiSource, setApiSource] = useState('CleanURI');
  const [url, setUrl] = useState(null);
  const [data, setData] = useState([]);

  const { Option } = Select;

  const handleApiSource = (value) => {
    setApiSource(value);
  }

  const handleChange = (evt) => {
    setUrl(evt.target.value);
  }

  const handleSubmit = (evt) => {

    evt.preventDefault();
    const sendData = {};
    sendData['url'] = url;

    apiSource === 'Relink' && axios.post('https://rel.ink/api/links/', sendData)
      .then((response) => {
        setData(
          [
            ...data,
            {
              title: url,
              desc: `https://rel.ink/${response.data.hashid}`
            }
          ]
        );
      })
      .catch(() => {
        throw new Error();
      });


    apiSource === 'CleanURI' && axios(
      'https://cleanuri.com/api/v1/shorten', sendData,
      {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        withCredentials: true,
        credentials: 'same-origin',
      })
      .then((response) => {
        setData(
          [
            ...data,
            {
              title: url,
              desc: response.data.result_url
            }
          ]
        );
      })
      .catch(() => {
        throw new Error();
      });


  }

  return (
    <div className="App">
      <div style={{ background: '#ECECEC', padding: '100px' }}>
        <Card title="Shorten your link" bordered={false} style={{ width: '50%', margin: '0 auto' }}>
          <Form onSubmit={handleSubmit} className="shorten-form">
            <Form.Item>
              <Select onChange={handleApiSource} defaultValue="CleanURI" style={{ width: '50%' }}>
                <Option value="CleanURI">CleanURI</Option>
                <Option value="Relink">Relink</Option>
              </Select>
              <Input onChange={handleChange} size="large" placeholder="Enter your link here" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" size='large' htmlType="submit">Shorten</Button>
            </Form.Item>
          </Form>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={item.title}
                  description={<a href={item.desc}>{item.desc}</a>}
                />
              </List.Item>
            )}
          />
        </Card>
      </div>
    </div>
  );
}

export default App;
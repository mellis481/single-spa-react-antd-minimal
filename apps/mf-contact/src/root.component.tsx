import { Button, Checkbox } from 'antd';
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';

export default function Root(props) {
  return (
    <>
      <section>{props.name} is mounted!</section>
      <Button icon={<DownloadOutlined />}></Button>
      <Button>
        <SearchOutlined />
      </Button>
      <Checkbox.Group
        options={['Apple', 'Pear', 'Orange']}
        onChange={() => {}}
      />
    </>
  );
}

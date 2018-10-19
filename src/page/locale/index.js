import { DatePicker, Pagination } from 'antd';
import {
  FormattedMessage,
  formatMessage
} from 'umi/locale';

export default () => {
  return (
    <div>
      <DatePicker />
      <Pagination defaultCurrent={1} total={50} showSizeChanger />
      <div><FormattedMessage id="name" /></div>
      <div><FormattedMessage id="lang" /></div>
      <div><input placeholder={formatMessage({id: 'lang'})} /></div>
    </div>
  )
}

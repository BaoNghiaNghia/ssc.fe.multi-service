import React from 'react';
import PropTypes from 'prop-types';
import { FaRegCalendarMinus } from "react-icons/fa6";
import { Popover } from '../../popup/popup';
import { DateRangePickerOne } from '../../datePicker/datePicker';
import { Button } from '../buttons';

const FilterCalendar = ({ actionPicker, fromDate, toDate }) => {
  const content = (<DateRangePickerOne actionPicker={actionPicker}/>);

  return (
    <Popover 
      placement="bottomRight"
      title="Lọc theo khoảng thời gian"
      content={content}
      action="hover"
      style={{ backgroundColor: 'gray' }}
    >
      <Button 
        size="small" 
        style={{ backgroundColor: 'white', padding: '0 12px 0 0', border: '1px solid green', borderRadius: '7px' }}
        icon={<FaRegCalendarMinus style={{ width: '32', height: '32', color: 'white', backgroundColor: 'green', borderRadius: '5px', padding: '5px', border: '2px solid #00800078' }} />}
      >
        <span style={{ display: 'flex', alignItems: 'center', color: 'green' }}>
          <strong style={{ color: 'green' }}> &nbsp;{fromDate} &nbsp;</strong> đến <strong style={{ color: 'green' }}> &nbsp;{toDate}</strong>
        </span>
      </Button>
    </Popover>
  );
};

FilterCalendar.propTypes = {
  actionPicker: PropTypes.func,
  fromDate: PropTypes.object,
  toDate: PropTypes.object,
}

export { FilterCalendar };

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
      action="click"
      style={{ backgroundColor: 'gray' }}
    >
      <Button 
        size="small" 
        style={{ border: 'none', backgroundColor: 'transparent' }}
        icon={<FaRegCalendarMinus style={{ width: '27', height: '27', color: 'green', backgroundColor: 'white', borderRadius: '8px', padding: '7px' }} />}
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

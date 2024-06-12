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
        style={{ border: 'none', backgroundColor: 'transparent' }}
        icon={<FaRegCalendarMinus style={{ width: '30', height: '30', color: 'green', backgroundColor: 'white', borderRadius: '8px', padding: '6px', border: '1px solid #a5c1a5' }} />}
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

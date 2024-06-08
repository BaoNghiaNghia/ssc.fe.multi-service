import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { TbCalendarCog } from "react-icons/tb";
import { Popover } from '../../popup/popup';
import { DateRangePickerOne } from '../../datePicker/datePicker';
import { Button } from '../buttons';

const FilterCalendar = ({ actionPicker, fromDate, toDate }) => {
  const content = (<DateRangePickerOne actionPicker={actionPicker}/>);

  return (
    <Popover placement="bottomRight" title="Lọc theo khoảng thời gian" content={content} action="hover" style={{ backgroundColor: 'white' }}>
      <Button size="small" style={{ border: '2px solid #97cb97', backgroundColor: '#f2fff24a' }}>
        <span style={{ display: 'flex', alignItems: 'center', color: 'green' }}>
          <TbCalendarCog fontSize={50} style={{ width: '30px', height: '20px', margin: '0 10px 0 0', padding: 0, color: 'green' }} />
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

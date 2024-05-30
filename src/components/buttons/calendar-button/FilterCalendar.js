import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { TbCalendarCog } from "react-icons/tb";
import { Popover } from '../../popup/popup';
import { DateRangePickerOne } from '../../datePicker/datePicker';
import { Button } from '../buttons';

const FilterCalendar = ({ actionPicker }) => {
  const content = (<DateRangePickerOne actionPicker={actionPicker}/>);

  const { fromDate, toDate } = useSelector((state) => {
    return {
      fromDate: state?.reports?.filterRange?.from,
      toDate: state?.reports?.filterRange?.to
    };
  });

  return (
    <Popover placement="bottomRight" title="Lọc theo khoảng thời gian" content={content} action="hover">
      <Button size="small" type="white">
        <span style={{ padding: '6px', display: 'flex', alignItems: 'center' }}>
          <TbCalendarCog fontSize={50} style={{ width: '30px', height: '20px', margin: 0, padding: 0, color: 'black' }} />
          <strong> &nbsp;{fromDate} &nbsp;</strong> đến <strong> &nbsp;{toDate}</strong>
        </span>
      </Button>
    </Popover>
  );
};

FilterCalendar.propTypes = {
  actionPicker: PropTypes.func,
}

export { FilterCalendar };

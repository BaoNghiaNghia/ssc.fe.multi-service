import React from 'react';
import FeatherIcon from 'feather-icons-react';
import { Popover } from '../../popup/popup';
import { DateRangePickerOne } from '../../datePicker/datePicker';
import { Button } from '../buttons';

const FilterCalendar = (props) => {
  // eslint-disable-next-line react/prop-types
  const { setFrom, setTo } = props;
  const content = (
    <>
      <DateRangePickerOne
        setFrom={setFrom}
        setTo={setTo}
      />
    </>
  );

  return (
    <Popover placement="bottomRight" title="Lọc theo khoảng thời gian" content={content} action="hover">
      <Button size="small" type="white">
        <FeatherIcon icon="calendar" size={14} />
        Bộ lọc
      </Button>
    </Popover>
  );
};

export { FilterCalendar };

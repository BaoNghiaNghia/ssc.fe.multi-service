import React from 'react';
import PropTypes from 'prop-types';
import FeatherIcon from 'feather-icons-react';
import { Popover } from '../../popup/popup';
import { DateRangePickerOne } from '../../datePicker/datePicker';
import { Button } from '../buttons';

const FilterCalendar = ({ actionPicker }) => {
  const content = (<DateRangePickerOne actionPicker={actionPicker}/>);

  return (
    <Popover placement="bottomRight" title="Lọc theo khoảng thời gian" content={content} action="hover">
      <Button size="small" type="white">
        <FeatherIcon icon="calendar" size={14} />
        Bộ lọc
      </Button>
    </Popover>
  );
};

FilterCalendar.propTypes = {
  actionPicker: PropTypes.func,
}

export { FilterCalendar };

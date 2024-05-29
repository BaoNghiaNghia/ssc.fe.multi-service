// eslint-disable-next-line max-classes-per-file
import React, { useState } from 'react';
import { addDays } from 'date-fns';
import PropTypes from 'prop-types';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { DatePicker } from 'antd';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { ItemWraper, ButtonGroup } from './style';
import { Button } from '../buttons/buttons';
import { FORMAT_DATESTRING } from '../../variables/index';

const DateRangePickerOne = ({ actionPicker }) => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    datePickerInternational: null,
    dateRangePicker: {
      selection: {
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: 'selection',
      },
    },
  });

  const { dateRangePicker } = state;
  const start = dateRangePicker.selection.startDate.toString().split(' ');
  const end = dateRangePicker.selection.endDate.toString().split(' ');

  const handleRangeChange = which => {
    setState({
      ...state,
      dateRangePicker: {
        ...state.dateRangePicker,
        ...which,
      },
    });

    dispatch(actionPicker({
      from: moment(dateRangePicker?.selection?.startDate).format(FORMAT_DATESTRING),
      to: moment(dateRangePicker.selection.endDate).format(FORMAT_DATESTRING)
    }));
  };

  return (
    <ItemWraper>
      <DateRangePicker
        onChange={handleRangeChange}
        showSelectionPreview
        moveRangeOnFirstSelection={false}
        className="PreviewArea"
        months={2}
        ranges={[dateRangePicker.selection]}
        direction="horizontal"
      />

      <ButtonGroup>
        <p>{`${start[1]} ${start[2]} ${start[3]} - ${end[1]} ${end[2]} ${end[3]}`}</p>
        <Button size="small" type="primary">
          Xác nhận
        </Button>
        <Button size="small" type="white" outlined>
          Hủy
        </Button>
      </ButtonGroup>
    </ItemWraper>
  );
};

class CustomDateRange extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    startValue: null,
    endValue: null,
    endOpen: false,
  };

  disabledStartDate = startValue => {
    const { endValue } = this.state;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  };

  disabledEndDate = endValue => {
    const { startValue } = this.state;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  };

  onChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  onStartChange = value => {
    this.onChange('startValue', value);
  };

  onEndChange = value => {
    this.onChange('endValue', value);
  };

  handleStartOpenChange = open => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  };

  handleEndOpenChange = open => {
    this.setState({ endOpen: open });
  };

  render() {
    const { startValue, endValue, endOpen } = this.state;

    return (
      <div>
        <DatePicker
          disabledDate={this.disabledStartDate}
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          value={startValue}
          placeholder="Start"
          onChange={this.onStartChange}
          onOpenChange={this.handleStartOpenChange}
          style={{ margin: '5px' }}
        />

        <DatePicker
          disabledDate={this.disabledEndDate}
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          value={endValue}
          placeholder="End"
          onChange={this.onEndChange}
          open={endOpen}
          onOpenChange={this.handleEndOpenChange}
          style={{ margin: '5px' }}
        />
      </div>
    );
  }
}

DateRangePickerOne.propTypes = {
  actionPicker: PropTypes.func,
};

export { DateRangePickerOne, CustomDateRange };

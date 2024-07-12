/* eslint-disable react/state-in-constructor */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { DatePicker } from 'antd';
import locale from 'antd/es/locale/vi_VN';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { ItemWraper, ButtonGroup } from './style';
import { Button } from '../buttons/buttons';
import { DEFAULT_PERPAGE, FORMAT_DATESTRING } from '../../variables/index';

const DateRangePickerOne = ({ actionPicker }) => {
  const dispatch = useDispatch();
  const { typeService, fromDate, toDate } = useSelector((state) => ({
    typeService: state?.reports?.typeService,
    fromDate: state?.reports?.filterRange?.from,
    toDate: state?.reports?.filterRange?.to,
  }));

  const initialRange = {
    startDate: fromDate ? new Date(fromDate) : new Date(),
    endDate: toDate ? new Date(toDate) : new Date(),
    key: 'selection',
  };

  const [dateRange, setDateRange] = useState({ selection: initialRange });

  useEffect(() => {
    setDateRange({ selection: initialRange });
  }, [fromDate, toDate]);

  const handleRangeChange = (ranges) => {
    const { selection } = ranges;
    const endDate = selection.endDate > new Date() ? new Date() : selection.endDate;

    setDateRange({
      selection: {
        ...selection,
        endDate,
      },
    });
  };

  const onSubmitChange = () => {
    const { selection } = dateRange;
    const from = moment(selection.startDate).format(FORMAT_DATESTRING);
    const to = moment(selection.endDate).format(FORMAT_DATESTRING);

    dispatch(actionPicker({
      pageSize: 1,
      limit: DEFAULT_PERPAGE,
      from,
      to,
      typeService,
    }));
  };

  const formatDate = (date) => moment(date).format('MMM DD YYYY');

  return (
    <ItemWraper>
      <DateRangePicker
        onChange={handleRangeChange}
        showSelectionPreview
        moveRangeOnFirstSelection={false}
        className="PreviewArea"
        months={2}
        ranges={[dateRange.selection]}
        direction="horizontal"
        maxDate={new Date()}
      />
      <ButtonGroup>
        <p>{`${formatDate(dateRange.selection.startDate)} - ${formatDate(dateRange.selection.endDate)}`}</p>
        <Button size="small" type="primary" onClick={onSubmitChange}>
          Xác nhận
        </Button>
        <Button size="small" type="white" outlined>
          Hủy
        </Button>
      </ButtonGroup>
    </ItemWraper>
  );
};

DateRangePickerOne.propTypes = {
  actionPicker: PropTypes.func.isRequired,
};

class CustomDateRange extends React.Component {
  state = {
    startValue: null,
    endValue: null,
    endOpen: false,
  };

  disabledStartDate = (startValue) => {
    const { endValue } = this.state;
    if (!startValue || !endValue) {
      return startValue && startValue.valueOf() > Date.now();
    }
    return startValue.valueOf() > endValue.valueOf() || startValue.valueOf() > Date.now();
  };

  disabledEndDate = (endValue) => {
    const { startValue } = this.state;
    if (!endValue || !startValue) {
      return endValue && endValue.valueOf() > Date.now();
    }
    return endValue.valueOf() <= startValue.valueOf() || endValue.valueOf() > Date.now();
  };

  onChange = (field, value) => {
    this.setState({ [field]: value });
  };

  onStartChange = (value) => {
    this.onChange('startValue', value);
  };

  onEndChange = (value) => {
    this.onChange('endValue', value);
  };

  handleStartOpenChange = (open) => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  };

  handleEndOpenChange = (open) => {
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
          locale={locale}
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
          locale={locale}
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

export { DateRangePickerOne, CustomDateRange };

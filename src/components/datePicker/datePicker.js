import React, { useState } from 'react';
import { addDays } from 'date-fns';
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
  const { typeService } = useSelector((state) => ({
    typeService: state?.reports?.typeService,
  }));

  const [state, setState] = useState({
    dateRangePicker: {
      selection: {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      },
    },
  });

  const { dateRangePicker } = state;
  const start = dateRangePicker.selection.startDate.toString().split(' ');
  const end = dateRangePicker.selection.endDate.toString().split(' ');

  const handleRangeChange = (which) => {
    const { startDate } = which.selection;
    const endDate = which.selection.endDate > new Date() ? new Date() : which.selection.endDate;

    setState({
      ...state,
      dateRangePicker: {
        selection: {
          startDate,
          endDate,
          key: 'selection',
        },
      },
    });
  };

  const onSubmitChange = () => {
    const { dateRangePicker } = state;
    const whichFrom = moment(dateRangePicker.selection.startDate).format(FORMAT_DATESTRING);
    const whichTo = moment(dateRangePicker.selection.endDate).format(FORMAT_DATESTRING);

    dispatch(actionPicker({
      pageSize: 1,
      limit: DEFAULT_PERPAGE,
      from: whichFrom,
      to: whichTo,
      typeService,
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
        maxDate={new Date()}
      />
      <ButtonGroup>
        <p>{`${start[1]} ${start[2]} ${start[3]} - ${end[1]} ${end[2]} ${end[3]}`}</p>
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

class CustomDateRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startValue: null,
      endValue: null,
      endOpen: false,
    };
  }

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
    this.setState({
      [field]: value,
    });
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
          locale={locale}
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

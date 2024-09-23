/* eslint-disable no-useless-escape */
// 7 seconds timeout request
import { FaRegCommentDots } from 'react-icons/fa';
import { AiOutlineLike } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import { FaRegEye } from 'react-icons/fa6';

export const TIMEOUT_REQUEST_API = 70000;

export const LIMIT_ITEM_REQUEST_API = 500000;

export const BASE_URL=process.env.REACT_APP_API_ENDPOINT;

export const VIETNAMES_CURRENCY = 'VND';

export const COLOR_GENERAL = {
  'primary': '#26695c'
}

export const FORMAT_DATESTRING = "YYYY-MM-DD";

export const DEFAULT_PERPAGE = 15;
export const DEFAULT_PAGESIZE = [15, 50, 100, 200, 300];

export const ORDER_YOUTUBE_STATUS = [
  {
    name: "OrderStatusPending",
    label: 'Đang chờ',
    icon: '',
    color: 'gray',
    value: 0
  },
  {
    name: "OrderStatusProcessing",
    label: 'Đang xử lý',
    icon: '',
    color: 'blue',
    value: 1
  },
  {
    name: "OrderStatusDisable",
    label: 'Tạm dừng',
    icon: '',
    color: 'orange',
    value: -1
  },
  {
    name: "OrderStatusCancelNoRefund",
    label: 'Hủy + Không hoàn tiền',
    icon: '',
    color: 'red',
    value: -3
  },
  {
    name: "OrderStatusCancelRefund",
    label: 'Hủy + Hoàn tiền',
    icon: '',
    color: 'pink',
    value: -2
  },
  {
    name: "OrderStatusDone",
    label: 'Hoàn thành',
    icon: '',
    color: 'green',
    value: 2
  },
];

export const FILTER_ORDER_GENERAL = [
  {
    label: 'ID đơn hàng (Order ID)',
    value: 'sort[order_id] desc'
  },
  {
      label: 'Số luồng, giảm dần',
      value: 'sort[current_count] desc'
  },
  {
    label: 'Số luồng, tăng dần',
    value: 'sort[current_count] asc'
  },
  {
      label: 'Hiệu suất, giảm dần',
      value: 'sort[performance] desc'
  },
  {
    label: 'Hiệu suất, tăng dần',
    value: 'sort[performance] asc'
  },
  {
      label: 'Sub còn thiếu, giảm dần',
      value: 'sort[remain_count] desc'
  },
  {
      label: 'Sub còn thiếu, tăng dần',
      value: 'sort[remain_count] asc'
  }
];

export const STATUS_COMMENT_ENUM = [
  {
    'status': 0,
    'title': 'Pending'
  },
  {
    'status': -1,
    'title': 'Disabled'
  },
  {
    'status': 1,
    'title': 'Enable'
  },
  {
    'status': -2,
    'title': 'Cancelled'
  }
];

export const SERVICE_TYPE = {
  'VIEW': {
      title: 'view',
      description: 'Views'
  },
  'SUBSCRIBE': {
      title: 'subscribe',
      description: 'Subscribes'
  },
  'COMMENT': {
      title: 'comment',
      description: 'Comments'
  },
  'LIKE': {
      title: 'like',
      description: 'Likes'
  },
}

export const MEMBER_TABLE_TYPE = {
  'MEMBER': {
      title: 'member',
  },
  'TOPUP': {
      title: 'topup',
  },
}

export const SERVICE_SETTING_TYPE = {
  'SERVICE': {
      title: 'service',
      describe: 'Dịch vụ'
  },
  'SETTING': {
      title: 'setting',
      describe: 'Cài đặt'
  },
  'GOOGLE_KEY': {
      title: 'google_key',
      describe: 'Quản lý Google Key'
  },
}

export const LIST_SERVICE_SUPPLY = [
  {
    'platform': 'Youtube',
    'category': 'Comments',
    'type': 'Custom Comments',
    'service_type': 'ytbcomment',
    'icon': 'FaRegCommentDots',
    'disabled': false
  },
  {
    'platform': 'Youtube',
    'category': 'Likes',
    'type': 'Custom Likes',
    'service_type': 'ytblike',
    'icon': 'AiOutlineLike',
    'disabled': true
  },
  {
    'platform': 'Youtube',
    'category': 'Subscribers',
    'type': 'Default',
    'service_type': 'ytbsubscribe',
    'icon': 'GrNotification',
    'disabled': true
  },
  {
    'platform': 'Youtube',
    'category': 'Views',
    'type': 'Default',
    'service_type': 'ytbview',
    'icon': 'FaEye',
    'disabled': true
  },
];

export const SERVICE_VIEW_TYPE = [
  {
    type: 'search',
    description: 'Tìm kiếm',
    svg: `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.1" d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" fill="#323232"></path> <path d="M17 17L21 21" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#323232" stroke-width="2"></path> </g></svg>
    `
  },
  {
    type: 'suggest',
    description: 'Đề xuất',
    svg: `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.4834 16.7674C17.8471 16.9195 17.1829 17 16.5 17C11.8056 17 8 13.1944 8 8.50001C8 8.01653 8.04036 7.54249 8.11791 7.08105C8.08172 7.11586 8.04432 7.14792 8.00494 7.17781C7.72433 7.39083 7.37485 7.46991 6.67589 7.62806L6.03954 7.77204C3.57986 8.32856 2.35002 8.60682 2.05742 9.54774C1.76482 10.4887 2.60325 11.4691 4.2801 13.4299L4.71392 13.9372C5.19042 14.4944 5.42868 14.773 5.53586 15.1177C5.64305 15.4624 5.60703 15.8341 5.53498 16.5776L5.4694 17.2544C5.21588 19.8706 5.08912 21.1787 5.85515 21.7602C6.62117 22.3417 7.77267 21.8116 10.0757 20.7512L10.6715 20.4768C11.3259 20.1755 11.6531 20.0249 12 20.0249C12.3469 20.0249 12.6741 20.1755 13.3285 20.4768L13.9243 20.7512C16.2273 21.8116 17.3788 22.3417 18.1449 21.7602C18.9109 21.1787 18.7841 19.8706 18.5306 17.2544L18.4834 16.7674Z" fill="#1C274C"></path> <path opacity="0.5" d="M9.15302 5.40838L8.82532 5.99623C8.46538 6.64194 8.28541 6.96479 8.0048 7.17781C8.04418 7.14791 8.08158 7.11586 8.11777 7.08105C8.04022 7.54249 7.99986 8.01653 7.99986 8.50001C7.99986 13.1944 11.8054 17 16.4999 17C17.1828 17 17.8469 16.9195 18.4833 16.7674L18.4649 16.5776C18.3928 15.8341 18.3568 15.4624 18.464 15.1177C18.5712 14.773 18.8094 14.4944 19.2859 13.9372L19.7198 13.4299C21.3966 11.4691 22.235 10.4886 21.9424 9.54773C21.6498 8.60682 20.42 8.32856 17.9603 7.77203L17.324 7.62805C16.625 7.4699 16.2755 7.39083 15.9949 7.17781C15.7143 6.96479 15.5343 6.64194 15.1744 5.99624L14.8467 5.40837C13.58 3.13612 12.9467 2 11.9999 2C11.053 2 10.4197 3.13613 9.15302 5.40838Z" fill="#1C274C"></path> </g></svg>
    `
  },
  {
    type: 'external',
    description: 'Bên ngoài',
    svg: `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.1" d="M3.58579 3.58579C3 4.17157 3 5.11438 3 7V14.75H5.92963C6.68193 14.75 7.38445 15.126 7.80175 15.7519L8.61428 16.9707C8.93884 17.4576 9.48525 17.75 10.0704 17.75H13.9296C14.5148 17.75 15.0612 17.4576 15.3857 16.9707L16.1983 15.7519C16.6156 15.126 17.3181 14.75 18.0704 14.75H21V7C21 5.11438 21 4.17157 20.4142 3.58579C19.8284 3 18.8856 3 17 3H7C5.11438 3 4.17157 3 3.58579 3.58579Z" fill="#323232"></path> <path d="M3 15H5.92963C6.59834 15 7.2228 15.3342 7.59373 15.8906L8.40627 17.1094C8.7772 17.6658 9.40166 18 10.0704 18H13.9296C14.5983 18 15.2228 17.6658 15.5937 17.1094L16.4063 15.8906C16.7772 15.3342 17.4017 15 18.0704 15H21" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 7C3 5.11438 3 4.17157 3.58579 3.58579C4.17157 3 5.11438 3 7 3H12H17C18.8856 3 19.8284 3 20.4142 3.58579C21 4.17157 21 5.11438 21 7V15V17C21 18.8856 21 19.8284 20.4142 20.4142C19.8284 21 18.8856 21 17 21H12H7C5.11438 21 4.17157 21 3.58579 20.4142C3 19.8284 3 18.8856 3 17V15V7Z" stroke="#323232" stroke-width="2" stroke-linejoin="round"></path> <path d="M12 8.5L12 13.5" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9.5 10.5L11.5 8.5V8.5C11.7761 8.22386 12.2239 8.22386 12.5 8.5V8.5L14.5 10.5" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    `
  },
]

export const MESSSAGE_STATUS_CODE = {
    SUCCESS: {
        code: 200,
        message: 'Success'
    },
    INTERNAL_NETWORK_ERROR: {
        code: 500,
        message: 'Internal network error'
    },
    NO_CONTENT: {
        code: 204,
        message: 'No content'
    },
    NOT_FOUND: {
        code: 404,
        message: 'Not found'
    },
    BAD_REQUEST: {
        code: 400,
        message: 'Bad request'
    },
    UNAUTHORISED: {
        code: 401,
        message: 'Unauthorized'
    },
    INVALID_BODY: {
        code: 403,
        message: 'Invalid body'
    },
    UNDER_CONSTRUCTION: {
        code: 593,
        message: 'System is currently undergoing maintenance. Please try again later.'
    },
    PERMISSION_DENIED: {
        code: 406,
        message: 'Permission Denied'
    },
    WRONG_PAGINATION: {
        code: 407,
        message: 'Wrong pagination query'
    },
    INVALID_PASSWORD: {
        code: 4000,
        message: 'Invalid password'
    },
    INVALID_EMAIL: {
        code: 4002,
        message: 'Invalid email'
    },
    USER_REGISTERED: {
        code: 4003,
        message: 'User already registered'
    },
    USER_NOT_FOUND: {
        code: 4004,
        message: 'User not found'
    },
    EMAIL_PASSWORD_INVALID: {
        code: 4005,
        message: 'Email or password invalid'
    },
    WRONG_PAGINATION_QUERY: {
        code: 4006,
        message: 'Wrong pagination query'
    },
    WRONG_BODY: {
        code: 5002,
        message: 'Wrong body'
    },
    PACKAGE_CONFIRMED: {
        code: 5003,
        message: 'Package already confirmed'
    },
    INVALID_PACKAGE_DAYS: {
        code: 5004,
        message: 'Invalid package days. Must be multiple of 30'
    },
    TRAIL_PACKAGE_CREATED: {
        code: 5005,
        message: 'Trial package already created'
    },
    INVALID_PACKAGE_NAME: {
        code: 5006,
        message: 'Invalid package name'
    },
    CONFLICT_TIME_STREAM: {
        code: 3001,
        message: 'Conflict time stream'
    },
    INVALID_RESOLUTION: {
        code: 3002,
        message: 'Invalid resolution'
    },
    AGENT_EXISTS: {
        code: 3503,
        message: 'Agent exists'
    },
    INVALID_URL: {
      code: 3003,
      message: 'Invalid url'
    },
    INVAID_START_END_TIME: {
      code: 3004,
      message: 'Invalid start end time, ended time must be after started time, and ended time must be after now'
    },
    INVALID_YOUTUBE_STREAM_KEY: {
      code: 3005,
      message: 'Invalid youtube live stream key'
    },
    USER_STREAM_NOT_FOUND: {
      code: 3006,
      message: 'User stream not found'
    },
    STREAMING_NOT_FOUND: {
      code: 3007,
      message: 'Streaming not found'
    },
    STREAMING_NOT_RUNNING: {
      code: 3008,
      message: 'Streaming not running'
    },
    STREAMING_RUNNING: {
      code: 3011,
      message: 'Streaming is streaming'
    },
    STREAM_EXPIRED: {
      code: 3010,
      message: 'Stream expired'
    },
    STREAMING_AGENT_NOT_RUNNING: {
      code: 3009,
      message: 'Stream from agent not running'
    },
    NOT_FOUND_AGENT: {
      code: 3504,
      message: 'Not found agent'
    },
    AGENT_ASSIGNED: {
      code: 3505,
      message: 'Agent assigned'
    },
    AGENT_NOT_RUNNING: {
      code: 3506,
      message: 'Agent not running'
    },
    OUT_OF_MAX_STREAM: {
      code: 3509,
      message: 'Out of max stream'
    },
    ONLY_UPDATE_PENDING_STREAM: {
      code: 3012,
      message: 'Only update pending streaming'
    },
    ONLY_PLAY_PENDING_STREAM: {
      code: 3013,
      message: 'Only play pending streaming'
    },
    INVALID_ORDER_BY: {
      code: 3014,
      message: 'Invalid order by'
    },
    KEY_STREAM_EXIST_IN_OTHER: {
      code: 3601,
      message: 'Key of stream exists at other stream'
    },
    REFUSED_UPDATE_WHEN_STREAMING: {
      code: 3602,
      messsage: 'Can not update stream when it is livestreaming'
    },
    STREAMING_STATUS_DOWNLOADING: {
      code: 6,
      message: 'Video is dowloading'
    }
}
export const ROLE_DETAIL = {
  'user': {
      title: 'Người dùng',
      status: 'gray'
  },
  'admin': {
      title: 'Trưởng nhóm',
      status: '#ef9d00'
  },
  'superadmin': {
      title: 'Quảng lý cấp cao',
      status: 'orangered'
  }
}

export const ROLE_GENERAL = {
  USER_DEFAULT: 'user',
  ADMIN: 'admin',
  SUPER_ADMIN: 'superadmin'
}

export const REGEX_VALIDATE_YOUTUBE_VIDEO_LINK =  /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
export const REGEX_VALIDATE_YOUTUBE_ALL_LINK = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;

export const REGION_IDENTIFIER = [
  {
      shortcode: "vn",
      alt: "vn-flag",
      path: "static/img/flag/vn.png",
      region: "Việt Nam"
  },
  {
      shortcode: "us",
      alt: "us-flag",
      path: "static/img/flag/us.png",
      region: "USA"
  },
  {
      shortcode: "kr",
      alt: "kr-flag",
      path: "static/img/flag/kr.png",
      region: "Hàn Quốc"
  },
  {
      shortcode: "jp",
      alt: "jp-flag",
      path: "static/img/flag/jp.png",
      region: "Nhật Bản"
  },
];

export const VIEW_STATUS_TYPE = {
  0: {
    title: 'logout',
    describe: 'User logged out',
    color: '#FF5733' // Example color for logout
  },
  1: {
    title: 'live',
    describe: 'Account is live',
    color: '#28A745' // Example color for live (green)
  },
  2: {
    title: 'die',
    describe: 'Account is dead',
    color: '#6C757D' // Example color for dead (gray)
  },
  3: {
    title: 'captcha',
    describe: 'CAPTCHA required',
    color: '#FFC107' // Example color for CAPTCHA (yellow)
  },
  4: {
    title: 'disable',
    describe: 'Account disabled',
    color: '#DC3545' // Example color for disabled (red)
  },
  5: {
    title: 'two_fa',
    describe: 'Two-factor authentication required',
    color: '#007BFF' // Example color for 2FA (blue)
  },
  6: {
    title: 'not_exist',
    describe: 'Account does not exist',
    color: '#343A40' // Example color for not exist (dark gray)
  },
  7: {
    title: 'wrong_pass',
    describe: 'Wrong password entered',
    color: '#FD7E14' // Example color for wrong password (orange)
  },
  8: {
    title: 'wrong_recover',
    describe: 'Wrong recovery details',
    color: '#17A2B8' // Example color for wrong recover (teal)
  },
  9: {
    title: 'verify_phone',
    describe: 'Phone verification required',
    color: '#6610F2' // Example color for phone verification (purple)
  },
  10: {
    title: 'code_recover',
    describe: 'Code recovery required',
    color: '#E83E8C' // Example color for code recovery (pink)
  },
  11: {
    title: 'hidden_phone',
    describe: 'Phone number is hidden',
    color: '#20C997' // Example color for hidden phone (greenish)
  },
  15: {
    title: 'unknown',
    describe: 'Unknown status',
    color: '#6F42C1' // Example color for unknown (violet)
  }
};


export const generateIconService = (service) => {
  switch (service?.category) {
    case 'Comments':
      return <FaRegCommentDots color='red' fontSize={15} style={{ marginRight: '10px' }}/> 
    case 'Likes':
      return <AiOutlineLike color='red' fontSize={15} style={{ marginRight: '10px' }}/> 
    case 'Subscribers':
      return <GrNotification color='red' fontSize={15} style={{ marginRight: '10px' }}/> 
    case 'Views':
      return <FaRegEye color='red' fontSize={15} style={{ marginRight: '10px' }}/> 
    default:
      return <FaRegCommentDots color='red' fontSize={15} style={{ marginRight: '10px' }}/> 
  }
}
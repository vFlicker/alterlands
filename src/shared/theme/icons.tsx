import styled from '@emotion/styled';

const enum IconName {
  ICON_ARROW_BIG = 'icon-arrow-big',
  ICON_BANKNOTE = 'icon-banknote',
  ICON_BIG_DOTE = 'icon-big-dote',
  ICON_CALENDAR = 'icon-calendar',
  ICON_CHEVRON = 'icon-chevron',
  ICON_CIRCLE_DOLLAR_SIGN = 'icon-circle-dollar-sign',
  ICON_CLOSE = 'icon-close',
  ICON_DOTS = 'icon-dots',
  ICON_EDIT = 'icon-edit',
  ICON_EDUCATION = 'icon-education',
  ICON_EYE = 'icon-eye',
  ICON_FILTER = 'icon-filter',
  ICON_FULL_SCREEN = 'icon-full-screen',
  ICON_INFO = 'icon-info',
  ICON_JOB = 'icon-job',
  ICON_LAYOUT_DASHBOARD = 'icon-layout-dashboard',
  ICON_MAXIMIZE = 'icon-maximize',
  ICON_MESSAGE_CIRCLE = 'icon-message-circle',
  ICON_MINIMIZE = 'icon-minimize',
  ICON_MINIMIZE_1 = 'icon-minimize-1',
  ICON_MONITOR_SMARTPHONE = 'icon-monitor-smartphone',
  ICON_MUSIC = 'icon-music',
  ICON_NOTIFICATION = 'icon-notification',
  ICON_PIN = 'icon-pin',
  ICON_PLANE = 'icon-plane',
  ICON_PLAY = 'icon-play',
  ICON_PLUS = 'icon-plus',
  ICON_REDIRECT = 'icon-redirect',
  ICON_REPLAY = 'icon-replay',
  ICON_REPOST = 'icon-repost',
  ICON_SEARCH = 'icon-search',
  ICON_SEND = 'icon-send',
  ICON_SETTINGS = 'icon-settings',
  ICON_SMALL_DOTE = 'icon-small-dote',
  ICON_SOME_ELEMENTS = 'icon-some-elements',
  ICON_STAR = 'icon-star',
  ICON_TROPHY = 'icon-trophy',
  ICON_USERS = 'icon-users',
  ICON_VERIFIED = 'icon-verified',
  ICON_VIDEO = 'icon-video',
  ICON_VOTE = 'icon-vote',
  ICON_WALLET = 'icon-wallet',
}

const StyledSpriteWithIcons = styled.svg`
  display: none;
`;

function SpriteWithIcons() {
  return (
    <StyledSpriteWithIcons xmlns="http://www.w3.org/2000/svg">
      <symbol id="icon-arrow-big" viewBox="0 0 24 24">
        <path d="M14 6C14.5523 6 15 6.44771 15 7L15 11C15 11.5523 15.4477 12 16 12L16.5858 12C17.4767 12 17.9229 13.0771 17.2929 13.7071L12.7071 18.2929C12.3166 18.6834 11.6834 18.6834 11.2929 18.2929L6.70711 13.7071C6.07714 13.0771 6.52331 12 7.41421 12L8 12C8.55229 12 9 11.5523 9 11L9 7C9 6.44771 9.44772 6 10 6L14 6Z" />
      </symbol>
      <symbol id="icon-banknote" viewBox="0 0 24 24">
        <path
          d="M7.2 12H7.208M16.8 12C16.8 12 16.8049 12 16.808 12M5.6 7H18.4C19.2837 7 20 7.74619 20 8.66667V15.3333C20 16.2538 19.2837 17 18.4 17H5.6C4.71634 17 4 16.2538 4 15.3333V8.66667C4 7.74619 4.71634 7 5.6 7ZM13.6 12C13.6 12.9205 12.8837 13.6667 12 13.6667C11.1163 13.6667 10.4 12.9205 10.4 12C10.4 11.0795 11.1163 10.3333 12 10.3333C12.8837 10.3333 13.6 11.0795 13.6 12Z"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </symbol>
      <symbol id="icon-big-dote" viewBox="0 0 24 24">
        <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" />
      </symbol>
      <symbol id="icon-calendar" viewBox="0 0 24 24">
        <path
          d="M8.88889 5V8.2M15.1111 5V8.2M5 11H19M6.55556 6.6H17.4444C18.3036 6.6 19 7.31634 19 8.2V17.5C19 18.3837 18.3036 19.1 17.4444 19.1H6.55556C5.69645 19.1 5 18.3837 5 17.5V8.2C5 7.31634 5.69645 6.6 6.55556 6.6Z"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </symbol>
      <symbol id="icon-chevron" viewBox="0 0 24 24">
        <path
          d="M7 10L12 14L17 10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </symbol>
      <symbol id="icon-circle-dollar-sign" viewBox="0 0 24 24">
        <path
          d="M14.8 9.2H10.6C10.2287 9.2 9.8726 9.3475 9.61005 9.61005C9.3475 9.8726 9.2 10.2287 9.2 10.6C9.2 10.9713 9.3475 11.3274 9.61005 11.5899C9.8726 11.8525 10.2287 12 10.6 12H13.4C13.7713 12 14.1274 12.1475 14.3899 12.4101C14.6525 12.6726 14.8 13.0287 14.8 13.4C14.8 13.7713 14.6525 14.1274 14.3899 14.3899C14.1274 14.6525 13.7713 14.8 13.4 14.8H9.2M12 16.2V7.8M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12Z"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </symbol>
      <symbol id="icon-close" viewBox="0 0 24 24">
        <path d="M18 6L6 18M6 6L18 18" />
      </symbol>
      <symbol id="icon-dots" viewBox="0 0 24 24">
        <path d="M12 13C12.5178 13 12.9375 12.5523 12.9375 12C12.9375 11.4477 12.5178 11 12 11C11.4822 11 11.0625 11.4477 11.0625 12C11.0625 12.5523 11.4822 13 12 13Z" />
        <path d="M17.0625 13C17.5803 13 18 12.5523 18 12C18 11.4477 17.5803 11 17.0625 11C16.5447 11 16.125 11.4477 16.125 12C16.125 12.5523 16.5447 13 17.0625 13Z" />
        <path d="M6.9375 13C7.45527 13 7.875 12.5523 7.875 12C7.875 11.4477 7.45527 11 6.9375 11C6.41973 11 6 11.4477 6 12C6 12.5523 6.41973 13 6.9375 13Z" />
      </symbol>
      <symbol id="icon-edit" viewBox="0 0 24 24">
        <path d="M14.1 7.10029L16.9001 9.90031M18.4219 8.3687C18.792 7.99869 18.9999 7.49682 19 6.97348C19.0001 6.45015 18.7922 5.94822 18.4222 5.57812C18.0522 5.20802 17.5503 5.00007 17.027 5C16.5037 4.99993 16.0018 5.20777 15.6317 5.57777L6.28937 14.9222C6.12684 15.0842 6.00664 15.2837 5.93936 15.5032L5.01465 18.5496C4.99656 18.6101 4.9952 18.6744 5.0107 18.7357C5.0262 18.7969 5.058 18.8529 5.10271 18.8975C5.14743 18.9421 5.20339 18.9738 5.26467 18.9892C5.32594 19.0047 5.39025 19.0032 5.45076 18.985L8.49789 18.061C8.71711 17.9943 8.91661 17.8748 9.07889 17.7131L18.4219 8.3687Z" />
      </symbol>
      <symbol id="icon-education" viewBox="0 0 24 24">
        <path d="M20.9853 10.2859V15.4286M6.59621 12.4287V15.4286C6.59621 16.1106 7.1647 16.7646 8.17663 17.2469C9.18856 17.7291 10.561 18 11.9921 18C13.4232 18 14.7957 17.7291 15.8076 17.2469C16.8195 16.7646 17.388 16.1106 17.388 15.4286V12.4287M20.4637 11.0762C20.6247 11.0085 20.7613 10.8973 20.8566 10.7563C20.9519 10.6153 21.0018 10.4508 21 10.2831C20.9981 10.1154 20.9447 9.95191 20.8464 9.81285C20.748 9.67379 20.609 9.56529 20.4466 9.50079L12.7385 6.15459C12.5042 6.05272 12.2497 6 11.9921 6C11.7346 6 11.48 6.05272 11.2457 6.15459L3.53853 9.49736C3.37842 9.56419 3.24222 9.67404 3.14658 9.81348C3.05094 9.95292 3 10.1159 3 10.2825C3 10.4491 3.05094 10.612 3.14658 10.7515C3.24222 10.8909 3.37842 11.0008 3.53853 11.0676L11.2457 14.4172C11.48 14.5191 11.7346 14.5718 11.9921 14.5718C12.2497 14.5718 12.5042 14.5191 12.7385 14.4172L20.4637 11.0762Z" />
      </symbol>
      <symbol id="icon-eye" viewBox="0 0 24 24">
        <path d="M5.04375 12.2486C4.98542 12.0882 4.98542 11.9118 5.04375 11.7514C5.61191 10.3455 6.57633 9.14335 7.81475 8.29746C9.05317 7.45157 10.5098 7 12 7C13.4902 7 14.9468 7.45157 16.1852 8.29746C17.4237 9.14335 18.3881 10.3455 18.9562 11.7514C19.0146 11.9118 19.0146 12.0882 18.9562 12.2486C18.3881 13.6545 17.4237 14.8567 16.1852 15.7025C14.9468 16.5484 13.4902 17 12 17C10.5098 17 9.05317 16.5484 7.81475 15.7025C6.57633 14.8567 5.61191 13.6545 5.04375 12.2486Z" />
        <path d="M12 14.143C13.1597 14.143 14.0999 13.1836 14.0999 12C14.0999 10.8164 13.1597 9.85695 12 9.85695C10.8403 9.85695 9.90011 10.8164 9.90011 12C9.90011 13.1836 10.8403 14.143 12 14.143Z" />
      </symbol>
      <symbol id="icon-filter" viewBox="0 0 24 24">
        <path d="M17.6608 7.63392C18.1958 6.98114 17.7314 6 16.8874 6H7.11263C6.2686 6 5.80418 6.98114 6.33923 7.63392L10.3734 12.5558C10.5199 12.7345 10.6 12.9585 10.6 13.1897V16.9462C10.6 17.3204 10.809 17.6633 11.1415 17.8349L11.9415 18.2476C12.6071 18.591 13.4 18.1078 13.4 17.3589V13.1897C13.4 12.9585 13.4801 12.7345 13.6266 12.5558L17.6608 7.63392Z" />
      </symbol>
      <symbol id="icon-full-screen" viewBox="0 0 24 24">
        <path
          d="M8.88889 5H6.55556C6.143 5 5.74733 5.16389 5.45561 5.45561C5.16389 5.74733 5 6.143 5 6.55556V8.88889M19 8.88889V6.55556C19 6.143 18.8361 5.74733 18.5444 5.45561C18.2527 5.16389 17.857 5 17.4444 5H15.1111M5 15.1111V17.4444C5 17.857 5.16389 18.2527 5.45561 18.5444C5.74733 18.8361 6.143 19 6.55556 19H8.88889M15.1111 19H17.4444C17.857 19 18.2527 18.8361 18.5444 18.5444C18.8361 18.2527 19 17.857 19 17.4444V15.1111"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </symbol>
      <symbol id="icon-info" viewBox="0 0 24 24">
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M12 14.8V12M12 9.2H12.007M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12Z"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </symbol>
      <symbol id="icon-job" viewBox="0 0 24 24">
        <path
          d="M12 12.7778H12.008M15.2 8.11111V6.55556C15.2 6.143 15.0314 5.74733 14.7314 5.45561C14.4313 5.16389 14.0243 5 13.6 5H10.4C9.97565 5 9.56869 5.16389 9.26863 5.45561C8.96857 5.74733 8.8 6.143 8.8 6.55556V8.11111M20 13.5556C17.6262 15.0792 14.8444 15.8915 12 15.8915C9.15556 15.8915 6.37377 15.0792 4 13.5556M5.6 8.11111H18.4C19.2837 8.11111 20 8.80756 20 9.66667V17.4444C20 18.3036 19.2837 19 18.4 19H5.6C4.71634 19 4 18.3036 4 17.4444V9.66667C4 8.80756 4.71634 8.11111 5.6 8.11111Z"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </symbol>
      <symbol id="icon-layout-dashboard" viewBox="0 0 24 24">
        <path d="M9.66667 5H5.77778C5.34822 5 5 5.34822 5 5.77778V11.2222C5 11.6518 5.34822 12 5.77778 12H9.66667C10.0962 12 10.4444 11.6518 10.4444 11.2222V5.77778C10.4444 5.34822 10.0962 5 9.66667 5Z" />
        <path d="M18.2222 5H14.3333C13.9038 5 13.5556 5.34822 13.5556 5.77778V8.11111C13.5556 8.54067 13.9038 8.88889 14.3333 8.88889H18.2222C18.6518 8.88889 19 8.54067 19 8.11111V5.77778C19 5.34822 18.6518 5 18.2222 5Z" />
        <path d="M18.2222 12H14.3333C13.9038 12 13.5556 12.3482 13.5556 12.7778V18.2222C13.5556 18.6518 13.9038 19 14.3333 19H18.2222C18.6518 19 19 18.6518 19 18.2222V12.7778C19 12.3482 18.6518 12 18.2222 12Z" />
        <path d="M9.66667 15.1111H5.77778C5.34822 15.1111 5 15.4593 5 15.8889V18.2222C5 18.6518 5.34822 19 5.77778 19H9.66667C10.0962 19 10.4444 18.6518 10.4444 18.2222V15.8889C10.4444 15.4593 10.0962 15.1111 9.66667 15.1111Z" />
      </symbol>
      <symbol id="icon-maximize" viewBox="0 0 24 24">
        <path
          d="M14.3333 5H19M19 5V9.66667M19 5L13.5556 10.4444M9.66667 19H5M5 19V14.3333M5 19L10.4444 13.5556"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </symbol>
      <symbol id="icon-message-circle" viewBox="0 0 24 24">
        <path d="M9.34557 17.5269C10.7513 18.248 12.3684 18.4433 13.9054 18.0776C15.4424 17.712 16.7983 16.8094 17.7287 15.5325C18.6591 14.2556 19.1028 12.6884 18.9799 11.1132C18.857 9.53811 18.1756 8.05867 17.0584 6.94151C15.9413 5.82434 14.4618 5.14292 12.8867 5.02004C11.3116 4.89716 9.74439 5.3409 8.46749 6.2713C7.19059 7.20169 6.28798 8.55756 5.92231 10.0946C5.55664 11.6316 5.75196 13.2486 6.47307 14.6544L5 19L9.34557 17.5269Z" />
      </symbol>
      <symbol id="icon-minimize" viewBox="0 0 24 24">
        <path
          d="M5.77778 13.5556H10.4444M10.4444 13.5556V18.2222M10.4444 13.5556L5 19M18.2222 10.4444H13.5556M13.5556 10.4444V5.77778M13.5556 10.4444L19 5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </symbol>
      <symbol id="icon-minimize-1" viewBox="0 0 24 24">
        <path d="M8.88889 5V7.33333C8.88889 7.74589 8.725 8.14155 8.43328 8.43328C8.14155 8.725 7.74589 8.88889 7.33333 8.88889H5M19 8.88889H16.6667C16.2541 8.88889 15.8584 8.725 15.5667 8.43328C15.275 8.14155 15.1111 7.74589 15.1111 7.33333V5M5 15.1111H7.33333C7.74589 15.1111 8.14155 15.275 8.43328 15.5667C8.725 15.8584 8.88889 16.2541 8.88889 16.6667V19M15.1111 19V16.6667C15.1111 16.2541 15.275 15.8584 15.5667 15.5667C15.8584 15.275 16.2541 15.1111 16.6667 15.1111H19" />
      </symbol>
      <symbol id="icon-monitor-smartphone" viewBox="0 0 24 24">
        <path d="M16.2 8.66667V7.33333C16.2 6.97971 16.0525 6.64057 15.7899 6.39052C15.5274 6.14048 15.1713 6 14.8 6H6.4C6.0287 6 5.6726 6.14048 5.41005 6.39052C5.1475 6.64057 5 6.97971 5 7.33333V12C5 12.3536 5.1475 12.6928 5.41005 12.9428C5.6726 13.1929 6.0287 13.3333 6.4 13.3333H12M10.6 16V13.36V15.46M8.5 16H12M16.2 11.3333H17.6C18.3732 11.3333 19 11.9303 19 12.6667V16.6667C19 17.403 18.3732 18 17.6 18H16.2C15.4268 18 14.8 17.403 14.8 16.6667V12.6667C14.8 11.9303 15.4268 11.3333 16.2 11.3333Z" />
      </symbol>
      <symbol id="icon-music" viewBox="0 0 24 24">
        <path d="M8.66667 16.6667V6.55556L18 5V15.1111M8.66667 16.6667C8.66667 17.9553 7.622 19 6.33333 19C5.04467 19 4 17.9553 4 16.6667C4 15.378 5.04467 14.3333 6.33333 14.3333C7.622 14.3333 8.66667 15.378 8.66667 16.6667ZM18 15.1111C18 16.3998 16.9553 17.4444 15.6667 17.4444C14.378 17.4444 13.3333 16.3998 13.3333 15.1111C13.3333 13.8224 14.378 12.7778 15.6667 12.7778C16.9553 12.7778 18 13.8224 18 15.1111Z" />
      </symbol>
      <symbol id="icon-notification" viewBox="0 0 24 24">
        <path d="M10.6524 19.2001C10.789 19.4433 10.9853 19.6452 11.2218 19.7857C11.4583 19.9261 11.7265 20 11.9996 20C12.2726 20 12.5409 19.9261 12.7773 19.7857C13.0138 19.6452 13.2102 19.4433 13.3467 19.2001M5.20321 14.6608C5.10161 14.7754 5.03455 14.9178 5.01021 15.0709C4.98586 15.2239 5.00528 15.3809 5.06609 15.5228C5.12691 15.6647 5.2265 15.7853 5.35275 15.87C5.479 15.9548 5.62647 15.9999 5.77723 16.0001H18.2219C18.3727 16.0001 18.5202 15.9551 18.6465 15.8705C18.7728 15.786 18.8725 15.6655 18.9335 15.5237C18.9945 15.3819 19.0141 15.2249 18.99 15.0719C18.9658 14.9188 18.8989 14.7763 18.7975 14.6616C17.763 13.5648 16.6663 12.3992 16.6663 8.80002C16.6663 7.52698 16.1747 6.30607 15.2995 5.40589C14.4243 4.50572 13.2373 4 11.9996 4C10.7619 4 9.57486 4.50572 8.69968 5.40589C7.82449 6.30607 7.33281 7.52698 7.33281 8.80002C7.33281 12.3992 6.23535 13.5648 5.20321 14.6608Z" />
      </symbol>
      <symbol id="icon-pin" viewBox="0 0 24 24">
        <path d="M10.0801 15.5933L8.33013 18.6244M10.4084 10.739C10.278 10.9645 10.0861 11.1485 9.85407 11.2701C9.6221 11.3918 9.3593 11.4464 9.09522 11.4277L7.67913 11.3376C7.41506 11.319 7.15226 11.3736 6.92028 11.4952C6.68831 11.6169 6.49635 11.8008 6.366 12.0263L6.1 12.487C6.00717 12.6478 5.98332 12.8396 6.03369 13.0203C6.08406 13.201 6.20453 13.3557 6.36859 13.4504L13.7917 17.7361C13.9557 17.8308 14.1499 17.8578 14.3316 17.8111C14.5132 17.7644 14.6674 17.6478 14.7603 17.487L15.0263 17.0263C15.1564 16.8007 15.2197 16.5425 15.209 16.2808C15.1984 16.019 15.1143 15.7641 14.9661 15.5448L14.18 14.3635C14.0319 14.1441 13.9477 13.8892 13.9371 13.6275C13.9265 13.3657 13.9898 13.1075 14.1199 12.8819L15.4359 10.6025C15.5287 10.4417 15.6829 10.3252 15.8646 10.2785C16.0462 10.2318 16.2404 10.2587 16.4045 10.3534C16.7326 10.5429 17.121 10.5968 17.4843 10.5034C17.8476 10.41 18.156 10.1769 18.3417 9.85529C18.5273 9.53373 18.575 9.15009 18.4743 8.78876C18.3735 8.42743 18.1326 8.11801 17.8045 7.92857L12.8558 5.07143C12.5276 4.88199 12.1392 4.82805 11.7759 4.92147C11.4126 5.01489 11.1042 5.24802 10.9186 5.56958C10.7329 5.89114 10.6852 6.27478 10.786 6.63611C10.8867 6.99744 11.1276 7.30686 11.4558 7.4963C11.6198 7.59102 11.7403 7.74573 11.7907 7.92639C11.841 8.10706 11.8172 8.29888 11.7244 8.45966L10.4084 10.739Z" />
      </symbol>
      <symbol id="icon-plane" viewBox="0 0 24 24">
        <path d="M16.3924 17.6144L15.0069 11.3024L17.701 8.60825C18.8557 7.45361 19.2406 5.91409 18.8557 5.14433C18.0859 4.75945 16.5464 5.14433 15.3918 6.29897L12.6976 8.99313L6.38557 7.60756C6.00069 7.53058 5.69278 7.68454 5.53883 7.99244L5.3079 8.37732C5.15395 8.7622 5.23093 9.14708 5.53883 9.37801L9.61856 12.0722L8.07904 14.3814H5.76976L5 15.1512L7.30928 16.6907L8.8488 19L9.61856 18.2302V15.921L11.9278 14.3814L14.622 18.4612C14.8529 18.7691 15.2378 18.846 15.6227 18.6921L16.0076 18.5381C16.3155 18.3072 16.4694 17.9993 16.3924 17.6144Z" />
      </symbol>
      <symbol id="icon-play" viewBox="0 0 24 24">
        <path d="M7 6.74104C7 5.96925 7.83721 5.48838 8.50387 5.87726L17.5192 11.1362C18.1807 11.5221 18.1807 12.4779 17.5192 12.8638L8.50387 18.1227C7.83721 18.5116 7 18.0308 7 17.259V6.74104Z" />
      </symbol>
      <symbol id="icon-plus" viewBox="0 0 24 24">
        <path d="M12 19C12.4296 19 12.7778 18.6518 12.7778 18.2222V12.7778H18.2222C18.6518 12.7778 19 12.4296 19 12C19 11.5704 18.6518 11.2222 18.2222 11.2222H12.7778V5.77778C12.7778 5.34822 12.4296 5 12 5C11.5704 5 11.2222 5.34822 11.2222 5.77778V11.2222H5.77778C5.34822 11.2222 5 11.5704 5 12C5 12.4296 5.34822 12.7778 5.77778 12.7778H11.2222V18.2222C11.2222 18.6518 11.5704 19 12 19Z" />
      </symbol>
      <symbol id="icon-redirect" viewBox="0 0 24 24">
        <path
          d="M19 12.7778V17.4444C19 17.857 18.8361 18.2527 18.5444 18.5444C18.2527 18.8361 17.857 19 17.4444 19H6.55556C6.143 19 5.74733 18.8361 5.45561 18.5444C5.16389 18.2527 5 17.857 5 17.4444V6.55556C5 6.143 5.16389 5.74733 5.45561 5.45561C5.74733 5.16389 6.143 5 6.55556 5H11.2222M19 5L12 12M19 5H14.3333M19 5V9.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </symbol>
      <symbol id="icon-replay" viewBox="0 0 24 24">
        <path d="M14 10L12 10C8.26793 10 4.1006 13.4821 3.15296 18.4157C3.04204 18.9932 3.45101 19.2776 3.82306 18.8222C4.84994 17.5654 6.7147 15 12 15L14 15C14.5523 15 15 15.4477 15 16L15 17.0858C15 17.9767 16.0771 18.4229 16.7071 17.7929L21.2929 13.2071C21.6834 12.8166 21.6834 12.1834 21.2929 11.7929L16.7071 7.20711C16.0771 6.57714 15 7.02331 15 7.91421L15 9C15 9.55228 14.5523 10 14 10Z" />
      </symbol>
      <symbol id="icon-repost" viewBox="0 0 24 24">
        <path d="M3.64 10.8226L3.64 11.5706C3.46667 13.8631 3.5 18.0639 8.32 18.8753C9.18667 19.0176 10 19.0639 12 18.8753C10.1978 18.5906 9.20833 18.1353 7.8 16.313C6.54387 14.6876 6.76 13.7425 6.76 11.5706L6.76 10.8207C6.76 10.3224 7.16389 9.91856 7.66211 9.91856C8.53144 9.91856 8.89777 8.80988 8.19958 8.29194L5.79194 6.50589C5.43811 6.24341 4.95419 6.24341 4.60036 6.50589L2.19738 8.28849C1.4977 8.80753 1.8648 9.91856 2.73598 9.91856C3.23526 9.91856 3.64 10.3233 3.64 10.8226Z" />
        <path d="M20.1902 14.4864L20.1902 13.7385C20.3636 11.4459 20.3302 7.24511 15.5102 6.43375C14.6435 6.2914 13.8302 6.24511 11.8302 6.43375C13.6324 6.71845 14.6219 7.17369 16.0302 8.99602C17.2863 10.6214 17.0702 11.5665 17.0702 13.7385L17.0702 14.4884C17.0702 14.9866 16.6663 15.3905 16.1681 15.3905C15.2988 15.3905 14.9324 16.4991 15.6306 17.0171L18.0383 18.8031C18.3921 19.0656 18.876 19.0656 19.2299 18.8031L21.6328 17.0205C22.3325 16.5015 21.9654 15.3905 21.0942 15.3905C20.595 15.3905 20.1902 14.9857 20.1902 14.4864Z" />
      </symbol>
      <symbol id="icon-search" viewBox="0 0 24 24">
        <path
          d="M19 19L15.6556 15.6556M17.4444 11.2222C17.4444 14.6587 14.6587 17.4444 11.2222 17.4444C7.78578 17.4444 5 14.6587 5 11.2222C5 7.78578 7.78578 5 11.2222 5C14.6587 5 17.4444 7.78578 17.4444 11.2222Z"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </symbol>
      <symbol id="icon-send" viewBox="0 0 24 24">
        <path
          d="M11.2386 12.7605C11.1049 12.627 10.9455 12.5219 10.77 12.4517L5.21964 10.2259C5.15337 10.1994 5.09682 10.1531 5.05758 10.0935C5.01834 10.0338 4.99829 9.96358 5.00011 9.8922C5.00194 9.82081 5.02556 9.7517 5.06781 9.69413C5.11005 9.63656 5.16889 9.59329 5.23644 9.57012L18.5349 5.02065C18.5969 4.99825 18.664 4.99397 18.7284 5.00832C18.7928 5.02267 18.8517 5.05506 18.8983 5.10168C18.9449 5.14831 18.9773 5.20725 18.9917 5.27161C19.006 5.33596 19.0018 5.40308 18.9794 5.46509L14.4299 18.7636C14.4067 18.8311 14.3634 18.89 14.3059 18.9322C14.2483 18.9744 14.1792 18.9981 14.1078 18.9999C14.0364 19.0017 13.9662 18.9817 13.9065 18.9424C13.8469 18.9032 13.8006 18.8466 13.7741 18.7804L11.5483 13.2286C11.4777 13.0533 11.3724 12.894 11.2386 12.7605ZM11.2386 12.7605L18.8961 5.10464"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </symbol>
      <symbol id="icon-settings" viewBox="0 0 24 24">
        <path
          d="M19 7.625H10.25M10.25 7.625C10.25 9.07475 9.07475 10.25 7.625 10.25C6.17525 10.25 5 9.07475 5 7.625C5 6.17525 6.17525 5 7.625 5C9.07475 5 10.25 6.17525 10.25 7.625ZM13.75 16.375H5.875M13.75 16.375C13.75 17.8247 14.9253 19 16.375 19C17.8247 19 19 17.8247 19 16.375C19 14.9253 17.8247 13.75 16.375 13.75C14.9253 13.75 13.75 14.9253 13.75 16.375Z"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </symbol>
      <symbol id="icon-small-dote" viewBox="0 0 24 24">
        <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" />
      </symbol>
      <symbol id="icon-some-elements" viewBox="0 0 24 24">
        <path d="M14.2623 6H7.37704C6.61652 6 6 6.62162 6 7.38843V14.3306C6 15.0974 6.61652 15.719 7.37704 15.719H14.2623C15.0228 15.719 15.6393 15.0974 15.6393 14.3306V7.38843C15.6393 6.62162 15.0228 6 14.2623 6Z" />
        <path
          d="M18 9.66942V16.6116C18 17.3752 17.3803 18 16.623 18H9.73774M7.37704 6H14.2623C15.0228 6 15.6393 6.62162 15.6393 7.38843V14.3306C15.6393 15.0974 15.0228 15.719 14.2623 15.719H7.37704C6.61652 15.719 6 15.0974 6 14.3306V7.38843C6 6.62162 6.61652 6 7.37704 6Z"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </symbol>
      <symbol id="icon-star" viewBox="0 0 24 24">
        <path d="M11.6682 5.20101C11.6988 5.14066 11.7462 5.08986 11.805 5.05434C11.8637 5.01882 11.9315 5 12.0006 5C12.0698 5 12.1375 5.01882 12.1963 5.05434C12.255 5.08986 12.3024 5.14066 12.3331 5.20101L13.95 8.39033C14.0565 8.60025 14.2137 8.78186 14.4081 8.91958C14.6026 9.0573 14.8285 9.14701 15.0664 9.18102L18.6822 9.69632C18.7507 9.70599 18.8151 9.73414 18.8681 9.77757C18.921 9.82101 18.9604 9.87801 18.9818 9.94212C19.0032 10.0062 19.0058 10.0749 18.9892 10.1404C18.9726 10.2058 18.9376 10.2654 18.888 10.3125L16.273 12.7923C16.1006 12.9559 15.9716 13.1579 15.8971 13.3809C15.8226 13.6039 15.8048 13.8412 15.8454 14.0724L16.4627 17.5759C16.4748 17.6426 16.4674 17.7113 16.4414 17.774C16.4153 17.8368 16.3717 17.8912 16.3154 17.931C16.2592 17.9708 16.1925 17.9944 16.1232 17.9991C16.0538 18.0038 15.9845 17.9894 15.9231 17.9576L12.6908 16.3026C12.4778 16.1937 12.2408 16.1368 12.0003 16.1368C11.7597 16.1368 11.5228 16.1937 11.3098 16.3026L8.07818 17.9576C8.01682 17.9893 7.94757 18.0035 7.87832 17.9987C7.80906 17.9939 7.74258 17.9703 7.68642 17.9305C7.63027 17.8907 7.58671 17.8364 7.56069 17.7737C7.53467 17.711 7.52723 17.6425 7.53923 17.5759L8.15587 14.073C8.19661 13.8418 8.17896 13.6044 8.10446 13.3812C8.02995 13.1581 7.90082 12.956 7.72821 12.7923L5.11325 10.3132C5.06327 10.2662 5.02785 10.2064 5.01103 10.1408C4.99421 10.0751 4.99667 10.0062 5.01811 9.94184C5.03956 9.87748 5.07914 9.82027 5.13234 9.77674C5.18554 9.73322 5.25023 9.70512 5.31903 9.69564L8.9342 9.18102C9.17236 9.14727 9.39854 9.05768 9.59325 8.91994C9.78797 8.78221 9.94541 8.60046 10.052 8.39033L11.6682 5.20101Z" />
      </symbol>
      <symbol id="icon-trophy" viewBox="0 0 24 24">
        <path
          d="M7.2 9.6H6C5.46957 9.6 4.96086 9.38929 4.58579 9.01421C4.21071 8.63914 4 8.13043 4 7.6C4 7.06957 4.21071 6.56086 4.58579 6.18579C4.96086 5.81071 5.46957 5.6 6 5.6H7.2M7.2 9.6V4H16.8V9.6M7.2 9.6C7.2 10.873 7.70571 12.0939 8.60589 12.9941C9.50606 13.8943 10.727 14.4 12 14.4C13.273 14.4 14.4939 13.8943 15.3941 12.9941C16.2943 12.0939 16.8 10.873 16.8 9.6M16.8 9.6H18C18.5304 9.6 19.0391 9.38929 19.4142 9.01421C19.7893 8.63914 20 8.13043 20 7.6C20 7.06957 19.7893 6.56086 19.4142 6.18579C19.0391 5.81071 18.5304 5.6 18 5.6H16.8M5.6 20H18.4M10.4 14.128V16C10.4 16.44 10.024 16.784 9.624 16.968C8.68 17.4 8 18.592 8 20M13.6 14.128V16C13.6 16.44 13.976 16.784 14.376 16.968C15.32 17.4 16 18.592 16 20"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </symbol>
      <symbol id="icon-users" viewBox="0 0 24 24">
        <path
          d="M14.8 18V16.6667C14.8 15.9594 14.505 15.2811 13.9799 14.781C13.4548 14.281 12.7426 14 12 14H7.8C7.05739 14 6.3452 14.281 5.8201 14.781C5.295 15.2811 5 15.9594 5 16.6667V18M19 18V16.6667C18.9995 16.0758 18.793 15.5018 18.413 15.0349C18.0329 14.5679 17.5007 14.2344 16.9 14.0867M14.8 6.08667C15.4023 6.23353 15.9361 6.56713 16.3173 7.03487C16.6986 7.50261 16.9055 8.07789 16.9055 8.67C16.9055 9.26211 16.6986 9.83739 16.3173 10.3051C15.9361 10.7729 15.4023 11.1065 14.8 11.2533M12.7 8.66667C12.7 10.1394 11.4464 11.3333 9.9 11.3333C8.3536 11.3333 7.1 10.1394 7.1 8.66667C7.1 7.19391 8.3536 6 9.9 6C11.4464 6 12.7 7.19391 12.7 8.66667Z"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </symbol>
      <symbol id="icon-verified" viewBox="0 0 24 24">
        <path d="M8.99893 19.2034C9.25739 19.6312 9.79201 19.8025 10.2509 19.6045L11.6077 19.0192C11.8583 18.9111 12.1421 18.9101 12.3935 19.0165L13.7898 19.6072C14.2531 19.8032 14.7898 19.6246 15.0433 19.1901L15.7838 17.9206C15.9219 17.684 16.1509 17.5143 16.4176 17.4513L17.9069 17.0993C18.3908 16.9849 18.7172 16.5324 18.673 16.0372L18.5382 14.5277C18.5138 14.2546 18.6026 13.9835 18.7839 13.7778L19.7745 12.6533C20.1044 12.2788 20.1077 11.7184 19.7821 11.34L18.7756 10.1703C18.5994 9.96553 18.5136 9.69819 18.5376 9.42912L18.6716 7.92803C18.7164 7.42624 18.3809 6.96948 17.8887 6.86209L16.4203 6.5417C16.152 6.48316 15.9196 6.31685 15.7775 6.0818L15.0011 4.7966C14.7426 4.36881 14.208 4.19753 13.7491 4.3955L12.3923 4.98078C12.1417 5.08887 11.8579 5.08986 11.6065 4.98354L10.2102 4.39276C9.74692 4.19677 9.2102 4.37538 8.95675 4.80986L8.22137 6.07051C8.0803 6.31235 7.8443 6.48397 7.57076 6.54365L6.11127 6.86209C5.61906 6.96948 5.28359 7.42625 5.3284 7.92804L5.46242 9.42912C5.48645 9.69819 5.40059 9.96553 5.22439 10.1703L4.21788 11.34C3.89234 11.7184 3.89561 12.2788 4.22553 12.6533L5.21674 13.7785C5.39763 13.9838 5.48647 14.2543 5.46255 14.5269L5.32691 16.0732C5.28294 16.5745 5.61829 17.0304 6.10992 17.1376L7.57971 17.4583C7.84802 17.5168 8.08044 17.6831 8.22245 17.9182L8.99893 19.2034ZM15.9123 9.18772C16.2911 9.58011 16.2909 10.2091 15.9052 10.5948L11.6571 14.8429C11.2666 15.2334 10.6334 15.2334 10.2429 14.8429L8.10412 12.7041C7.71524 12.3152 7.71524 11.6848 8.10412 11.2959C8.48976 10.9102 9.11387 10.9066 9.50402 11.2876L10.7771 12.5311C10.8729 12.6247 11.0262 12.6238 11.1209 12.5291L11.15 12.5L14.4804 9.16962C14.8758 8.77424 15.5239 8.78547 15.9123 9.18772Z" />
      </symbol>
      <symbol id="icon-video" viewBox="0 0 24 24">
        <path d="M15.2 12.25L19.3784 14.8615C19.4386 14.8991 19.5086 14.9206 19.5809 14.9239C19.6532 14.9271 19.725 14.9119 19.7888 14.8799C19.8526 14.8479 19.9059 14.8003 19.9431 14.7421C19.9803 14.6839 20 14.6173 20 14.5495V8.4025C20 8.33652 19.9815 8.2717 19.9462 8.21459C19.911 8.15747 19.8603 8.11009 19.7992 8.07722C19.7382 8.04436 19.669 8.02717 19.5986 8.02739C19.5283 8.02762 19.4592 8.04524 19.3984 8.0785L15.2 10.375M15.2 12.25V10.375M15.2 12.25V14.5M15.2 10.375V8.5M15.2 8.5C15.2 7.67157 14.4837 7 13.6 7H5.6C4.71634 7 4 7.67157 4 8.5V14.5C4 15.3284 4.71634 16 5.6 16H13.6C14.4837 16 15.2 15.3284 15.2 14.5M15.2 8.5V14.5" />
      </symbol>
      <symbol id="icon-vote" viewBox="0 0 24 24">
        <path
          d="M9.9 12L11.3 13.4286L14.1 10.5714M19 17H5M7.1 8.42857C7.1 7.64286 7.73 7 8.5 7H15.5C15.8713 7 16.2274 7.15051 16.4899 7.41842C16.7525 7.68633 16.9 8.04969 16.9 8.42857V17H7.1V8.42857Z"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </symbol>
      <symbol id="icon-wallet" viewBox="0 0 24 24">
        <path d="M16.7895 8.88889V6.72222C16.7895 6.53068 16.7118 6.34698 16.5737 6.21153C16.4355 6.07609 16.2481 6 16.0526 6H6.47368C6.08284 6 5.708 6.15218 5.43163 6.42307C5.15526 6.69395 5 7.06135 5 7.44444M5 7.44444C5 7.82753 5.15526 8.19494 5.43163 8.46582C5.708 8.73671 6.08284 8.88889 6.47368 8.88889H17.5263C17.7217 8.88889 17.9092 8.96498 18.0473 9.10042C18.1855 9.23587 18.2632 9.41957 18.2632 9.61111V12.5M5 7.44444V17.5556C5 17.9386 5.15526 18.306 5.43163 18.5769C5.708 18.8478 6.08284 19 6.47368 19H17.5263C17.7217 19 17.9092 18.9239 18.0473 18.7885C18.1855 18.653 18.2632 18.4693 18.2632 18.2778V15.3889M18.2632 12.5H16.0526C15.6618 12.5 15.2869 12.6522 15.0106 12.9231C14.7342 13.194 14.5789 13.5614 14.5789 13.9444C14.5789 14.3275 14.7342 14.6949 15.0106 14.9658C15.2869 15.2367 15.6618 15.3889 16.0526 15.3889H18.2632M18.2632 12.5C18.4586 12.5 18.646 12.5761 18.7842 12.7115C18.9224 12.847 19 13.0307 19 13.2222V14.6667C19 14.8582 18.9224 15.0419 18.7842 15.1774C18.646 15.3128 18.4586 15.3889 18.2632 15.3889" />
      </symbol>
    </StyledSpriteWithIcons>
  );
}

export { IconName, SpriteWithIcons };

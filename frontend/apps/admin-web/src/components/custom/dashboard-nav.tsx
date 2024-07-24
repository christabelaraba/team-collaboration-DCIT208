import { cn } from '@/lib/utils';
import { Dispatch, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from '@/types';
import { Icons } from '../ui/icons';

type DashboardNavProps = {
  items: NavItem[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
};

type DashboardNavItemProps = {
  item: NavItem;
  setOpen?: Dispatch<SetStateAction<boolean>>;
};

const DashboardNavItem = ({ item, setOpen }: DashboardNavItemProps) => {

  return (
    <div
      className="space-y-3"
      key={item.href}
      onClickCapture={() => {
        if (setOpen) {
          setOpen(false);
        }
      }}
    >
      <NavLink
        className={({ isActive }) =>
          cn(
            'flex transform items-center rounded-full px-3 py-2 text-gray-400 transition-colors duration-300 hover:text-gray-50  ',
            isActive && 'text-gray-50  '
          )
        }
        to={item.href}
        end
      >
        {item.icon === 'dashboard' && <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.33333 35C7.41667 35 6.63222 34.6739 5.98 34.0217C5.32778 33.3694 5.00111 32.5844 5 31.6667V8.33333C5 7.41667 5.32667 6.63222 5.98 5.98C6.63333 5.32778 7.41778 5.00111 8.33333 5H18.3333V35H8.33333ZM21.6667 35V20H35V31.6667C35 32.5833 34.6739 33.3683 34.0217 34.0217C33.3694 34.675 32.5844 35.0011 31.6667 35H21.6667ZM21.6667 16.6667V5H31.6667C32.5833 5 33.3683 5.32667 34.0217 5.98C34.675 6.63333 35.0011 7.41778 35 8.33333V16.6667H21.6667Z" fill="white"/>
</svg>
}
{item.icon === 'enquiries' && <svg width="30" height="27" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.334 3.08399H6.66732C4.82898 3.08399 3.33398 4.46224 3.33398 6.15499V24.6812C3.33398 26.3724 4.82898 27.7507 6.66732 27.7507H11.6673V33.9173L22.2523 27.7507H33.334C35.1723 27.7507 36.6673 26.3724 36.6673 24.6797V6.15499C36.6647 5.33912 36.3122 4.55756 35.6873 3.98181C35.0623 3.40606 34.216 3.08317 33.334 3.08399ZM18.334 15.4173C18.334 16.0271 18.1385 16.6233 17.7722 17.1303C17.4059 17.6374 16.8853 18.0326 16.2763 18.2659C15.6672 18.4993 14.997 18.5604 14.3503 18.4414C13.7037 18.3224 13.1098 18.0288 12.6436 17.5976C12.1775 17.1664 11.86 16.617 11.7314 16.0188C11.6027 15.4207 11.6688 14.8008 11.9211 14.2374C12.1733 13.674 12.6006 13.1924 13.1488 12.8536C13.6969 12.5148 14.3414 12.334 15.0007 12.334C15.144 12.334 15.279 12.3571 15.4173 12.3725C15.554 12.3509 15.6907 12.334 15.834 12.334C16.497 12.334 17.1329 12.5776 17.6018 13.0113C18.0706 13.445 18.334 14.0332 18.334 14.6465C18.334 14.7791 18.314 14.9055 18.2923 15.0319C18.309 15.1599 18.334 15.2863 18.334 15.4173ZM25.0007 18.5007C24.1166 18.5007 23.2687 18.1758 22.6436 17.5976C22.0185 17.0193 21.6673 16.2351 21.6673 15.4173C21.6673 15.2847 21.6923 15.1599 21.709 15.0319C21.6841 14.9046 21.6702 14.7758 21.6673 14.6465C21.6673 14.0332 21.9307 13.445 22.3995 13.0113C22.8684 12.5776 23.5043 12.334 24.1673 12.334C24.3106 12.334 24.4473 12.3509 24.584 12.3725C24.7223 12.3571 24.8573 12.334 25.0007 12.334C25.8847 12.334 26.7326 12.6588 27.3577 13.2371C27.9828 13.8153 28.334 14.5996 28.334 15.4173C28.334 16.2351 27.9828 17.0193 27.3577 17.5976C26.7326 18.1758 25.8847 18.5007 25.0007 18.5007Z" fill="#DADADA" fill-opacity="0.8"/>
</svg>
}
{item.icon === 'orders' && <svg width="25" height="25" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.1927 29.5312L30.2604 24.5L28.7292 22.9688L25.1927 26.4323L23.7708 25.0104L22.2396 26.5781L25.1927 29.5312ZM8.75 13.125H26.25V10.2083H8.75V13.125ZM26.25 33.5417C24.2326 33.5417 22.5133 32.8305 21.0919 31.4081C19.6705 29.9858 18.9593 28.2664 18.9583 26.25C18.9574 24.2336 19.6685 22.5142 21.0919 21.0919C22.5152 19.6695 24.2346 18.9583 26.25 18.9583C28.2654 18.9583 29.9853 19.6695 31.4096 21.0919C32.8339 22.5142 33.5446 24.2336 33.5417 26.25C33.5388 28.2664 32.8276 29.9862 31.4081 31.4096C29.9887 32.8329 28.2693 33.5436 26.25 33.5417ZM4.375 32.0833V7.29167C4.375 6.48958 4.66083 5.80319 5.2325 5.2325C5.80417 4.66181 6.49056 4.37597 7.29167 4.375H27.7083C28.5104 4.375 29.1973 4.66083 29.769 5.2325C30.3406 5.80417 30.626 6.49056 30.625 7.29167V17.026C29.9444 16.6858 29.2333 16.4364 28.4915 16.2779C27.7497 16.1194 27.0025 16.0407 26.25 16.0417H8.75V18.9583H19.1042C18.691 19.3715 18.3084 19.8212 17.9565 20.3073C17.6045 20.7934 17.2944 21.316 17.026 21.875H8.75V24.7917H16.151C16.1024 25.0347 16.0723 25.2719 16.0606 25.5033C16.049 25.7347 16.0426 25.9836 16.0417 26.25C16.0417 27.2708 16.1817 28.2494 16.4617 29.1856C16.7417 30.1219 17.1607 31.0149 17.7188 31.8646L17.5 32.0833L15.3125 29.8958L13.125 32.0833L10.9375 29.8958L8.75 32.0833L6.5625 29.8958L4.375 32.0833Z" fill="#DADADA" fill-opacity="0.8"/>
</svg>
}
{item.icon === 'report' && <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.3327 21.3327V23.9993H7.99935V2.66602H10.666V18.0927L18.2793 6.09268L22.4927 8.90601L25.7193 5.67935L27.6127 7.57268L22.8393 12.386L19.0527 9.86602L11.7593 21.3327M5.33268 26.666V5.33268H2.66602V29.3327H29.3327V26.666H5.33268Z" fill="#DADADA" fill-opacity="0.8"/>
</svg>

}
        <span className="mx-2 text-sm font-medium">{item.label}</span>
      </NavLink>
    </div>
  );
};

export default function DashboardNav({ items, setOpen }: DashboardNavProps) {
  if (!items?.length) {
    return null;
  }

  return (
    <nav className="-mx-3 space-y-6">
      {items.map((item) => (
        <DashboardNavItem key={item.href} item={item} setOpen={setOpen} />
      ))}
    </nav>
  );
}
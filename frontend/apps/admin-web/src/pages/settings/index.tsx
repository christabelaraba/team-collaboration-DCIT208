"use client"


import PageHead from "@/components/custom/page-head"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Link } from "react-router-dom"
import {
  Tabs,
  TabsContent, 
} from '@/components/ui/tabs';
import { Card, CardContent } from "@/components/ui/card"


export default function Settings() {

  return (
  <>
    <PageHead title="Dashboard | App" />
    <div className="flex-1 min-h-screen space-y-4 p-4 pt-6 md:p-8 bg-gray-100">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">
          Settings
        </h2>
        <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink >
            <Link to="/">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink className='cursor-pointer'>settings</BreadcrumbLink>
          </BreadcrumbItem>
          
        </BreadcrumbList>
      </Breadcrumb>
      </div>
        <Tabs defaultValue="details" className="space-y-4">  
          <TabsContent value="details" className="space-y-5">
            <Card className="shadow-sm border-none">
              <Link to="/settings/profile" className="block w-full h-full">
                <CardContent className="w-full h-full flex items-center p-0">     
                  <div
                  className="relative items-center justify-between gap-8 flex w-full p-5">
                    <div className="flex items-center gap-4">
                      <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.83398 26.2513C5.83398 24.7042 6.44857 23.2205 7.54253 22.1265C8.63649 21.0326 10.1202 20.418 11.6673 20.418H23.334C24.8811 20.418 26.3648 21.0326 27.4588 22.1265C28.5527 23.2205 29.1673 24.7042 29.1673 26.2513C29.1673 27.0249 28.86 27.7667 28.313 28.3137C27.7661 28.8607 27.0242 29.168 26.2507 29.168H8.75065C7.9771 29.168 7.23524 28.8607 6.68826 28.3137C6.14128 27.7667 5.83398 27.0249 5.83398 26.2513Z" stroke="#131C40" stroke-width="2.5" stroke-linejoin="round"/>
                        <path d="M17.5 14.584C19.9162 14.584 21.875 12.6252 21.875 10.209C21.875 7.79274 19.9162 5.83398 17.5 5.83398C15.0838 5.83398 13.125 7.79274 13.125 10.209C13.125 12.6252 15.0838 14.584 17.5 14.584Z" stroke="#131C40" stroke-width="2.5"/>
                      </svg>
                      <Link to="/settings/profile">Profile Settings</Link>
                    </div>
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1809_624)">
                      <path fillRule="evenodd" clipRule="evenodd" d="M23.4201 15.9544C23.8297 16.3646 24.0598 16.9206 24.0598 17.5003C24.0598 18.08 23.8297 18.636 23.4201 19.0461L15.1717 27.2974C14.7614 27.7075 14.2049 27.9379 13.6247 27.9378C13.0445 27.9376 12.4881 27.707 12.0779 27.2966C11.6677 26.8863 11.4374 26.3298 11.4375 25.7496C11.4376 25.1693 11.6683 24.613 12.0786 24.2028L18.7811 17.5003L12.0786 10.7978C11.68 10.3854 11.4592 9.83293 11.4639 9.25937C11.4686 8.68581 11.6984 8.13705 12.1038 7.73128C12.5092 7.3255 13.0578 7.09519 13.6313 7.08994C14.2049 7.08468 14.7575 7.30491 15.1703 7.70319L23.4215 15.953L23.4201 15.9544Z" fill="#131C40"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_1809_624">
                      <rect width="35" height="35" fill="white"/>
                      </clipPath>
                      </defs>
                    </svg>
                  </div>
                
                </CardContent>
              </Link>
            </Card>  
            <Card className="shadow-sm border-none">
              <Link to="/settings/general" className="block w-full h-full">
                <CardContent className="w-full h-full flex items-center p-0">     
                  <div
                  className="relative items-center justify-between gap-8 flex w-full p-5">
                    <div className="flex items-center gap-4">
                      <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.9844 9.14445C29.4851 9.43008 29.9009 9.84366 30.1891 10.3428C30.4774 10.842 30.6278 11.4089 30.625 11.9853V22.6078C30.625 23.7876 29.979 24.8755 28.9362 25.4486L19.0925 31.6757C18.6044 31.9435 18.0567 32.0839 17.5 32.0839C16.9433 32.0839 16.3956 31.9435 15.9075 31.6757L6.06375 25.4486C5.55408 25.1692 5.12861 24.7583 4.83161 24.2587C4.53461 23.7591 4.37694 23.189 4.375 22.6078V11.9838C4.375 10.804 5.02104 9.71758 6.06375 9.14445L15.9075 3.34029C16.4099 3.06326 16.9744 2.91797 17.5481 2.91797C18.1219 2.91797 18.6863 3.06326 19.1887 3.34029L29.0325 9.14445H28.9844Z" stroke="#131C40" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.125 17.5C13.125 18.6603 13.5859 19.7731 14.4064 20.5936C15.2269 21.4141 16.3397 21.875 17.5 21.875C18.6603 21.875 19.7731 21.4141 20.5936 20.5936C21.4141 19.7731 21.875 18.6603 21.875 17.5C21.875 16.3397 21.4141 15.2269 20.5936 14.4064C19.7731 13.5859 18.6603 13.125 17.5 13.125C16.3397 13.125 15.2269 13.5859 14.4064 14.4064C13.5859 15.2269 13.125 16.3397 13.125 17.5Z" stroke="#131C40" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <Link to="/settings/general">General Settings</Link>
                    </div>
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1809_624)">
                      <path fillRule="evenodd" clipRule="evenodd" d="M23.4201 15.9544C23.8297 16.3646 24.0598 16.9206 24.0598 17.5003C24.0598 18.08 23.8297 18.636 23.4201 19.0461L15.1717 27.2974C14.7614 27.7075 14.2049 27.9379 13.6247 27.9378C13.0445 27.9376 12.4881 27.707 12.0779 27.2966C11.6677 26.8863 11.4374 26.3298 11.4375 25.7496C11.4376 25.1693 11.6683 24.613 12.0786 24.2028L18.7811 17.5003L12.0786 10.7978C11.68 10.3854 11.4592 9.83293 11.4639 9.25937C11.4686 8.68581 11.6984 8.13705 12.1038 7.73128C12.5092 7.3255 13.0578 7.09519 13.6313 7.08994C14.2049 7.08468 14.7575 7.30491 15.1703 7.70319L23.4215 15.953L23.4201 15.9544Z" fill="#131C40"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_1809_624">
                      <rect width="35" height="35" fill="white"/>
                      </clipPath>
                      </defs>
                    </svg>
                  </div>
                
                </CardContent>
              </Link>
            </Card> 

            {/* Notifications */}
            {/* <Card className="shadow-sm border-none">
              <Link to="/settings/notification" className="block w-full h-full">
                <CardContent className="w-full h-full flex items-center p-0">     
                  <div
                  className="relative items-center justify-between gap-8 flex w-full p-5">
                    <div className="flex items-center gap-4">
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1809_614)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.29133 13.1243C7.29133 10.4169 8.36685 7.8204 10.2813 5.90597C12.1957 3.99153 14.7922 2.91602 17.4997 2.91602C20.2071 2.91602 22.8036 3.99153 24.718 5.90597C26.6325 7.8204 27.708 10.4169 27.708 13.1243V18.6135L30.3651 23.9277C30.4874 24.1723 30.5452 24.4441 30.5329 24.7173C30.5206 24.9905 30.4387 25.256 30.2949 25.4886C30.1511 25.7212 29.9502 25.9132 29.7114 26.0464C29.4725 26.1795 29.2036 26.2494 28.9301 26.2493H23.1492C22.8249 27.5009 22.094 28.6094 21.0715 29.4007C20.049 30.192 18.7926 30.6214 17.4997 30.6214C16.2067 30.6214 14.9504 30.192 13.9278 29.4007C12.9053 28.6094 12.1745 27.5009 11.8501 26.2493H6.06925C5.79578 26.2494 5.52684 26.1795 5.28797 26.0464C5.0491 25.9132 4.84824 25.7212 4.70446 25.4886C4.56068 25.256 4.47875 24.9905 4.46646 24.7173C4.45418 24.4441 4.51193 24.1723 4.63425 23.9277L7.29133 18.6135V13.1243ZM14.9738 26.2493C15.2298 26.6927 15.598 27.0609 16.0414 27.3168C16.4848 27.5728 16.9877 27.7076 17.4997 27.7076C18.0116 27.7076 18.5146 27.5728 18.9579 27.3168C19.4013 27.0609 19.7695 26.6927 20.0255 26.2493H14.9738ZM17.4997 5.83268C15.5658 5.83268 13.7111 6.60091 12.3437 7.96836C10.9762 9.33581 10.208 11.1905 10.208 13.1243V18.6135C10.208 19.0661 10.1026 19.5124 9.90029 19.9173L8.19404 23.3327H26.8067L25.1005 19.9173C24.8977 19.5126 24.7918 19.0662 24.7913 18.6135V13.1243C24.7913 11.1905 24.0231 9.33581 22.6557 7.96836C21.2882 6.60091 19.4335 5.83268 17.4997 5.83268Z" fill="#131C40"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1809_614">
                        <rect width="35" height="35" fill="white"/>
                        </clipPath>
                        </defs>
                      </svg>
                      <Link to="/settings/notification">Notification Settings</Link>
                    </div>
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1809_624)">
                      <path fillRule="evenodd" clipRule="evenodd" d="M23.4201 15.9544C23.8297 16.3646 24.0598 16.9206 24.0598 17.5003C24.0598 18.08 23.8297 18.636 23.4201 19.0461L15.1717 27.2974C14.7614 27.7075 14.2049 27.9379 13.6247 27.9378C13.0445 27.9376 12.4881 27.707 12.0779 27.2966C11.6677 26.8863 11.4374 26.3298 11.4375 25.7496C11.4376 25.1693 11.6683 24.613 12.0786 24.2028L18.7811 17.5003L12.0786 10.7978C11.68 10.3854 11.4592 9.83293 11.4639 9.25937C11.4686 8.68581 11.6984 8.13705 12.1038 7.73128C12.5092 7.3255 13.0578 7.09519 13.6313 7.08994C14.2049 7.08468 14.7575 7.30491 15.1703 7.70319L23.4215 15.953L23.4201 15.9544Z" fill="#131C40"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_1809_624">
                      <rect width="35" height="35" fill="white"/>
                      </clipPath>
                      </defs>
                    </svg>
                  </div>
                
                </CardContent>
              </Link>
            </Card>  */}

            <Card className="shadow-sm border-none">
              <Link to="/settings/security" className="block w-full h-full">
                <CardContent className="w-full h-full flex items-center p-0">     
                  <div
                  className="relative items-center justify-between gap-8 flex w-full p-5">
                    <div className="flex items-center gap-4">
                      <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.5156 9.84375C24.4217 9.84375 25.1562 9.10922 25.1562 8.20312C25.1562 7.29703 24.4217 6.5625 23.5156 6.5625C22.6095 6.5625 21.875 7.29703 21.875 8.20312C21.875 9.10922 22.6095 9.84375 23.5156 9.84375Z" fill="#131C40"/>
                        <path d="M15.7653 21.875H9.84375V15.9534L16.4391 9.35813C16.4168 9.15619 16.4059 8.95316 16.4062 8.75C16.4062 7.45206 16.7911 6.18327 17.5122 5.10407C18.2333 4.02488 19.2582 3.18374 20.4574 2.68704C21.6565 2.19034 22.976 2.06038 24.249 2.3136C25.522 2.56682 26.6914 3.19183 27.6091 4.10961C28.5269 5.0274 29.1519 6.19672 29.4052 7.46972C29.6584 8.74272 29.5284 10.0622 29.0317 11.2614C28.535 12.4605 27.6939 13.4854 26.6147 14.2065C25.5355 14.9276 24.2667 15.3125 22.9688 15.3125C22.7656 15.3129 22.5626 15.3019 22.3606 15.2797L15.7653 21.875ZM12.0312 19.6875H14.8597L21.6081 12.9391L22.1747 13.043C22.4363 13.0945 22.7021 13.1219 22.9688 13.125C23.8835 13.1363 24.7794 12.864 25.5332 12.3456C26.2871 11.8272 26.8619 11.0881 27.1788 10.2299C27.4956 9.37166 27.539 8.43636 27.3029 7.55248C27.0668 6.6686 26.5628 5.87951 25.8602 5.29359C25.1575 4.70768 24.2907 4.35369 23.3788 4.28026C22.4669 4.20682 21.5546 4.41754 20.7673 4.88347C19.9799 5.34939 19.3562 6.04767 18.9817 6.88238C18.6072 7.71709 18.5003 8.64727 18.6758 9.54516L18.7797 10.1106L12.0312 16.8591V19.6875ZM30.625 21.875H20.7812V24.0625H30.625V30.625H4.375V24.0625H6.5625V21.875H4.375C3.79484 21.875 3.23844 22.1055 2.8282 22.5157C2.41797 22.9259 2.1875 23.4823 2.1875 24.0625V30.625C2.1875 31.2052 2.41797 31.7616 2.8282 32.1718C3.23844 32.582 3.79484 32.8125 4.375 32.8125H30.625C31.2052 32.8125 31.7616 32.582 32.1718 32.1718C32.582 31.7616 32.8125 31.2052 32.8125 30.625V24.0625C32.8125 23.4823 32.582 22.9259 32.1718 22.5157C31.7616 22.1055 31.2052 21.875 30.625 21.875Z" fill="#131C40"/>
                        <path d="M7.65625 28.4375C8.26031 28.4375 8.75 27.9478 8.75 27.3438C8.75 26.7397 8.26031 26.25 7.65625 26.25C7.05219 26.25 6.5625 26.7397 6.5625 27.3438C6.5625 27.9478 7.05219 28.4375 7.65625 28.4375Z" fill="#131C40"/>
                      </svg>
                      <Link to="/settings/security">Security Settings</Link>
                    </div>
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1809_624)">
                      <path fillRule="evenodd" clipRule="evenodd" d="M23.4201 15.9544C23.8297 16.3646 24.0598 16.9206 24.0598 17.5003C24.0598 18.08 23.8297 18.636 23.4201 19.0461L15.1717 27.2974C14.7614 27.7075 14.2049 27.9379 13.6247 27.9378C13.0445 27.9376 12.4881 27.707 12.0779 27.2966C11.6677 26.8863 11.4374 26.3298 11.4375 25.7496C11.4376 25.1693 11.6683 24.613 12.0786 24.2028L18.7811 17.5003L12.0786 10.7978C11.68 10.3854 11.4592 9.83293 11.4639 9.25937C11.4686 8.68581 11.6984 8.13705 12.1038 7.73128C12.5092 7.3255 13.0578 7.09519 13.6313 7.08994C14.2049 7.08468 14.7575 7.30491 15.1703 7.70319L23.4215 15.953L23.4201 15.9544Z" fill="#131C40"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_1809_624">
                      <rect width="35" height="35" fill="white"/>
                      </clipPath>
                      </defs>
                    </svg>
                  </div>
                
                </CardContent>
              </Link>
            </Card>  
            <Card className="shadow-sm border-none">
              <Link to="/settings/admin" className="block w-full h-full">
                <CardContent className="w-full h-full flex items-center p-0">     
                  <div
                  className="relative items-center justify-between gap-8 flex w-full p-5">
                    <div className="flex items-center gap-4">
                      <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1809_309)">
                        <path d="M19.6191 19.6875C18.6735 18.9811 17.6538 18.4399 16.5601 18.064C15.4663 17.688 14.3213 17.5 13.125 17.5C12.1224 17.5 11.154 17.631 10.2197 17.8931C9.28548 18.1551 8.4139 18.5197 7.60498 18.9868C6.79606 19.4539 6.0612 20.0236 5.40039 20.6958C4.73958 21.368 4.16992 22.1086 3.69141 22.9175C3.21289 23.7264 2.84261 24.598 2.58057 25.5322C2.31852 26.4665 2.1875 27.4349 2.1875 28.4375H0C0 27.0703 0.199382 25.7544 0.598145 24.4897C0.996908 23.2251 1.57227 22.0573 2.32422 20.9863C3.07617 19.9154 3.96484 18.964 4.99023 18.1323C6.01562 17.3006 7.17773 16.6455 8.47656 16.167C7.83854 15.7682 7.26888 15.3011 6.76758 14.7656C6.26628 14.2301 5.83333 13.6377 5.46875 12.9883C5.10417 12.3389 4.83643 11.661 4.66553 10.9546C4.49463 10.2482 4.39779 9.51335 4.375 8.75C4.375 7.54232 4.60286 6.40869 5.05859 5.34912C5.51432 4.28955 6.14095 3.3667 6.93848 2.58057C7.736 1.79443 8.66455 1.16781 9.72412 0.700684C10.7837 0.233561 11.9173 0 13.125 0C14.3327 0 15.4663 0.227865 16.5259 0.683594C17.5854 1.13932 18.5083 1.76595 19.2944 2.56348C20.0806 3.361 20.7072 4.28955 21.1743 5.34912C21.6414 6.40869 21.875 7.54232 21.875 8.75C21.875 9.50195 21.7839 10.2368 21.6016 10.9546C21.4193 11.6724 21.1458 12.3503 20.7812 12.9883C20.4167 13.6263 19.9837 14.2131 19.4824 14.7485C18.9811 15.284 18.4058 15.7568 17.7563 16.167C18.4399 16.429 19.0837 16.7367 19.6875 17.0898V19.6875H19.6191ZM6.5625 8.75C6.5625 9.66146 6.7334 10.5103 7.0752 11.2964C7.41699 12.0825 7.88411 12.7775 8.47656 13.3813C9.06901 13.9852 9.764 14.458 10.5615 14.7998C11.359 15.1416 12.2135 15.3125 13.125 15.3125C14.0251 15.3125 14.8739 15.1416 15.6714 14.7998C16.4689 14.458 17.1639 13.9909 17.7563 13.3984C18.3488 12.806 18.8216 12.111 19.1748 11.3135C19.528 10.516 19.6989 9.66146 19.6875 8.75C19.6875 7.84994 19.5166 7.00114 19.1748 6.20361C18.833 5.40609 18.3659 4.7111 17.7734 4.11865C17.181 3.5262 16.4803 3.05339 15.6714 2.7002C14.8625 2.34701 14.0137 2.17611 13.125 2.1875C12.2135 2.1875 11.3647 2.3584 10.5786 2.7002C9.79248 3.04199 9.09749 3.50911 8.49365 4.10156C7.88981 4.69401 7.41699 5.39469 7.0752 6.20361C6.7334 7.01253 6.5625 7.86133 6.5625 8.75ZM35 21.875V35H17.5V21.875H21.875V17.5H30.625V21.875H35ZM24.0625 21.875H28.4375V19.6875H24.0625V21.875ZM32.8125 28.4375H30.625V30.625H28.4375V28.4375H24.0625V30.625H21.875V28.4375H19.6875V32.8125H32.8125V28.4375ZM32.8125 24.0625H19.6875V26.25H32.8125V24.0625Z" fill="#131C40"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1809_309">
                        <rect width="35" height="35" fill="white"/>
                        </clipPath>
                        </defs>
                      </svg>
                      <Link to="/settings/admin">Admin Management</Link>
                    </div>
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1809_624)">
                      <path fillRule="evenodd" clipRule="evenodd" d="M23.4201 15.9544C23.8297 16.3646 24.0598 16.9206 24.0598 17.5003C24.0598 18.08 23.8297 18.636 23.4201 19.0461L15.1717 27.2974C14.7614 27.7075 14.2049 27.9379 13.6247 27.9378C13.0445 27.9376 12.4881 27.707 12.0779 27.2966C11.6677 26.8863 11.4374 26.3298 11.4375 25.7496C11.4376 25.1693 11.6683 24.613 12.0786 24.2028L18.7811 17.5003L12.0786 10.7978C11.68 10.3854 11.4592 9.83293 11.4639 9.25937C11.4686 8.68581 11.6984 8.13705 12.1038 7.73128C12.5092 7.3255 13.0578 7.09519 13.6313 7.08994C14.2049 7.08468 14.7575 7.30491 15.1703 7.70319L23.4215 15.953L23.4201 15.9544Z" fill="#131C40"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_1809_624">
                      <rect width="35" height="35" fill="white"/>
                      </clipPath>
                      </defs>
                    </svg>
                  </div>
                
                </CardContent>
              </Link>
            </Card>   
             <Card className="shadow-sm border-none">
              <Link to="/settings/help" className="block w-full h-full">
                <CardContent className="w-full h-full flex items-center p-0">     
                  <div
                  className="relative items-center justify-between gap-8 flex w-full p-5">
                    <div className="flex items-center gap-4">       
                      <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.4264 26.2494C17.9369 26.2494 18.3685 26.0729 18.7214 25.72C19.0744 25.3671 19.2503 24.9359 19.2493 24.4264C19.2484 23.917 19.0724 23.4853 18.7214 23.1314C18.3705 22.7775 17.9388 22.6016 17.4264 22.6035C16.9141 22.6055 16.4829 22.7819 16.1329 23.1329C15.7829 23.4839 15.6064 23.915 15.6035 24.4264C15.6006 24.9378 15.7771 25.3695 16.1329 25.7214C16.4887 26.0734 16.9199 26.2494 17.4264 26.2494ZM16.1139 20.6348H18.8119C18.8119 19.8327 18.9032 19.2007 19.086 18.7389C19.2688 18.2771 19.785 17.6452 20.6348 16.8431C21.2667 16.2112 21.765 15.6094 22.1296 15.0377C22.4941 14.466 22.6764 13.7796 22.6764 12.9785C22.6764 11.6174 22.1782 10.5723 21.1816 9.84311C20.1851 9.11394 19.0063 8.74936 17.6452 8.74936C16.2598 8.74936 15.1359 9.11394 14.2735 9.84311C13.4112 10.5723 12.8094 11.4473 12.4681 12.4681L14.8744 13.416C14.9959 12.9785 15.2696 12.5046 15.6954 11.9941C16.1212 11.4837 16.7712 11.2285 17.6452 11.2285C18.423 11.2285 19.0063 11.4414 19.3952 11.8673C19.7841 12.2931 19.9785 12.7607 19.9785 13.2702C19.9785 13.7563 19.8327 14.2123 19.541 14.6381C19.2493 15.0639 18.8848 15.4587 18.4473 15.8223C17.3778 16.7702 16.7216 17.4872 16.4785 17.9733C16.2355 18.4594 16.1139 19.3466 16.1139 20.6348ZM17.4994 32.0827C15.482 32.0827 13.5862 31.7001 11.8119 30.935C10.0375 30.1698 8.49414 29.1305 7.18164 27.8171C5.86914 26.5036 4.83032 24.9602 4.06518 23.1869C3.30005 21.4135 2.91699 19.5177 2.91602 17.4994C2.91505 15.481 3.2981 13.5852 4.06518 11.8119C4.83227 10.0385 5.87109 8.49512 7.18164 7.18165C8.4922 5.86818 10.0356 4.82936 11.8119 4.06519C13.5881 3.30102 15.4839 2.91797 17.4994 2.91602C19.5148 2.91408 21.4106 3.29713 23.1868 4.06519C24.9631 4.83325 26.5065 5.87206 27.8171 7.18165C29.1276 8.49123 30.1669 10.0346 30.935 11.8119C31.703 13.5891 32.0856 15.4849 32.0827 17.4994C32.0798 19.5138 31.6967 21.4096 30.9335 23.1869C30.1703 24.9641 29.1315 26.5075 27.8171 27.8171C26.5026 29.1266 24.9592 30.166 23.1868 30.935C21.4145 31.704 19.5187 32.0866 17.4994 32.0827ZM17.4994 29.166C20.7563 29.166 23.515 28.0358 25.7754 25.7754C28.0358 23.515 29.166 20.7563 29.166 17.4994C29.166 14.2424 28.0358 11.4837 25.7754 9.22331C23.515 6.9629 20.7563 5.83269 17.4994 5.83269C14.2424 5.83269 11.4837 6.9629 9.22331 9.22331C6.96289 11.4837 5.83268 14.2424 5.83268 17.4994C5.83268 20.7563 6.96289 23.515 9.22331 25.7754C11.4837 28.0358 14.2424 29.166 17.4994 29.166Z" fill="#131C40"/>
                      </svg>
                      <Link to="/settings/help">Help and Support</Link>
                    </div>
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1809_624)">
                      <path fillRule="evenodd" clipRule="evenodd" d="M23.4201 15.9544C23.8297 16.3646 24.0598 16.9206 24.0598 17.5003C24.0598 18.08 23.8297 18.636 23.4201 19.0461L15.1717 27.2974C14.7614 27.7075 14.2049 27.9379 13.6247 27.9378C13.0445 27.9376 12.4881 27.707 12.0779 27.2966C11.6677 26.8863 11.4374 26.3298 11.4375 25.7496C11.4376 25.1693 11.6683 24.613 12.0786 24.2028L18.7811 17.5003L12.0786 10.7978C11.68 10.3854 11.4592 9.83293 11.4639 9.25937C11.4686 8.68581 11.6984 8.13705 12.1038 7.73128C12.5092 7.3255 13.0578 7.09519 13.6313 7.08994C14.2049 7.08468 14.7575 7.30491 15.1703 7.70319L23.4215 15.953L23.4201 15.9544Z" fill="#131C40"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_1809_624">
                      <rect width="35" height="35" fill="white"/>
                      </clipPath>
                      </defs>
                    </svg>
                  </div>
                
                </CardContent>
              </Link>
            </Card>               
          </TabsContent>
        </Tabs>
    </div>
 </>
  );
}



import React, { useEffect } from 'react'
import './alex.css'

const Alex = () => {

    useEffect(() => {
        const name = document.querySelectorAll('#name path');
        for(let i=0; i < name.length; i++){
            console.log(`Letter ${i} is ${name[i].getTotalLength()}`)
        }
    }, [])
    
  return (
    <svg id="name" width="221" height="20" viewBox="0 0 221 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M220.112 5.776V5.526H219.862H217.126H216.876V5.776V13.144C216.876 14.2863 216.583 15.1283 216.033 15.7078L216.033 15.7079C215.497 16.2728 214.759 16.566 213.79 16.566C212.821 16.566 212.084 16.2732 211.548 15.7091C211.013 15.1298 210.728 14.2872 210.728 13.144V5.776V5.526H210.478H207.766H207.516V5.776V13.552C207.516 14.784 207.754 15.8514 208.243 16.744L208.243 16.744L208.244 16.7472C208.747 17.6343 209.428 18.3094 210.289 18.765L210.291 18.7659C211.162 19.2183 212.138 19.442 213.214 19.442C214.031 19.442 214.802 19.2833 215.523 18.9647L215.523 18.9647L215.525 18.9636C216.043 18.7283 216.494 18.4332 216.876 18.0775V19V19.25H217.126H219.862H220.112V19V5.776Z" stroke="#1ABC9C" strokeWidth="0.5"/>
<path d="M205.614 16.72V16.47H205.364H203.684C203.15 16.47 202.827 16.3698 202.655 16.2249C202.502 16.0672 202.398 15.7879 202.398 15.328V8.25804H205.364H205.614V8.00804V5.77604V5.52604H205.364H202.398V2.48804V2.23804H202.148H199.388H199.138V2.48804V5.52604H197.828H197.578V5.77604V8.00804V8.25804H197.828H199.138V15.328C199.138 16.6607 199.475 17.6813 200.207 18.3239C200.925 18.9537 201.936 19.25 203.204 19.25H205.364H205.614V19V16.72Z" stroke="#1ABC9C" strokeWidth="0.5"/>
<path d="M182.375 8.68004L182.375 8.68004L182.374 8.68271C181.808 9.74777 181.529 10.9651 181.529 12.328C181.529 13.6911 181.808 14.9231 182.372 16.0185L182.372 16.0185L182.375 16.0225C182.954 17.0983 183.735 17.9474 184.718 18.5638L184.718 18.5638L184.72 18.5654C185.705 19.166 186.79 19.466 187.971 19.466C189.029 19.466 189.982 19.2507 190.822 18.8138C191.419 18.5034 191.93 18.1345 192.353 17.706V19V19.25H192.603H195.363H195.613V19V5.776V5.526H195.363H192.603H192.353V5.776V7.03357C191.934 6.61773 191.431 6.26115 190.847 5.9627C190.037 5.52443 189.091 5.31 188.019 5.31C186.823 5.31 185.722 5.60951 184.723 6.2093C183.738 6.79362 182.955 7.61948 182.375 8.68004ZM191.807 10.1201L191.807 10.1201L191.81 10.124C192.168 10.752 192.353 11.4997 192.353 12.376C192.353 13.2521 192.168 14.0089 191.808 14.6542L191.807 14.6559C191.459 15.2916 191.002 15.7686 190.437 16.0956C189.868 16.4256 189.255 16.59 188.595 16.59C187.953 16.59 187.34 16.4266 186.753 16.0961C186.188 15.7534 185.722 15.2602 185.358 14.6081C185.013 13.9625 184.837 13.2049 184.837 12.328C184.837 11.4502 185.013 10.7105 185.356 10.0992C185.72 9.46276 186.184 8.99403 186.748 8.68281L186.748 8.68285L186.752 8.68035C187.322 8.35044 187.935 8.186 188.595 8.186C189.255 8.186 189.868 8.35044 190.437 8.68035C191.002 9.0074 191.459 9.48441 191.807 10.1201Z" stroke="#1ABC9C" strokeWidth="0.5"/>
<path d="M179.451 19.25H179.201H176.489H176.239V19V11.608C176.239 10.4636 175.953 9.63048 175.419 9.06805L175.417 9.06576L175.417 9.06575C174.881 8.4859 174.144 8.18599 173.177 8.18599C172.209 8.18599 171.463 8.48587 170.91 9.06805L179.451 19.25ZM179.451 19.25V19M179.451 19.25V19M179.451 19V11.2C179.451 9.96877 179.213 8.90192 178.725 8.00959C178.255 7.12148 177.597 6.44507 176.752 5.98852C175.927 5.53404 174.989 5.30999 173.945 5.30999C173.066 5.30999 172.249 5.46761 171.495 5.78568L171.495 5.78567L171.494 5.78647C170.962 6.01582 170.494 6.31579 170.091 6.68653V1.23999V0.98999H169.841H167.105H166.855V1.23999V19V19.25H167.105H169.841H170.091M179.451 19L170.091 19.25M170.091 19.25V19M170.091 19.25V19M170.091 19V11.608C170.091 10.4637 170.376 9.6306 170.91 9.06818L170.091 19Z" stroke="#1ABC9C" strokeWidth="0.5"/>
<path d="M163.805 16.0199L163.805 16.0185C164.37 14.9231 164.649 13.6911 164.649 12.328C164.649 10.9654 164.37 9.7483 163.804 8.6834C163.24 7.60559 162.465 6.77018 161.479 6.18498C160.494 5.6006 159.393 5.30999 158.183 5.30999C157.155 5.30999 156.212 5.52573 155.358 5.96082C154.76 6.26007 154.248 6.62624 153.825 7.06036V1.23999V0.98999H153.575H150.839H150.589V1.23999V19V19.25H150.839H153.575H153.825V19V17.754C154.244 18.1786 154.748 18.5399 155.333 18.8387L155.335 18.8396C156.175 19.2593 157.126 19.466 158.183 19.466C159.379 19.466 160.472 19.1664 161.457 18.5654L161.458 18.5648C162.458 17.9482 163.241 17.098 163.805 16.0199ZM160.82 10.0961L160.82 10.0961L160.823 10.1023C161.181 10.713 161.365 11.4515 161.365 12.328C161.365 13.2041 161.181 13.9609 160.821 14.6061L160.821 14.6061L160.819 14.6101C160.471 15.2606 160.006 15.7533 159.425 16.0961C158.855 16.4257 158.243 16.59 157.583 16.59C156.94 16.59 156.327 16.4262 155.739 16.0949C155.175 15.7678 154.71 15.2907 154.346 14.655C154.001 14.0096 153.825 13.2524 153.825 12.376C153.825 11.4989 154.002 10.7504 154.345 10.122C154.709 9.48582 155.174 9.00835 155.739 8.68103C156.327 8.34974 156.94 8.18599 157.583 8.18599C158.243 8.18599 158.856 8.35043 159.426 8.68035L159.426 8.68045L159.433 8.68411C160.011 8.99534 160.473 9.46287 160.82 10.0961Z" stroke="#1ABC9C" strokeWidth="0.5"/>
<path d="M145.903 4.27402C145.344 4.27402 144.863 4.08192 144.478 3.6968C144.093 3.31167 143.901 2.83108 143.901 2.27202C143.901 1.71296 144.093 1.23237 144.478 0.847244L145.903 4.27402ZM145.903 4.27402C146.448 4.27402 146.92 4.08021 147.304 3.6968C147.689 3.31167 147.881 2.83108 147.881 2.27202C147.881 1.71295 147.689 1.23237 147.304 0.847244C146.92 0.463827 146.448 0.27002 145.903 0.27002C145.344 0.27002 144.863 0.462118 144.478 0.847244L145.903 4.27402ZM147.497 5.77602V5.52602H147.247H144.511H144.261V5.77602V19V19.25H144.511H147.247H147.497V19V5.77602Z" stroke="#1ABC9C" strokeWidth="0.5"/>
<path d="M132.397 18.8203L132.4 18.8218C133.331 19.221 134.374 19.418 135.523 19.418C136.738 19.418 137.803 19.188 138.71 18.718L138.711 18.7171C139.626 18.235 140.326 17.5975 140.8 16.8016C141.287 16.0124 141.533 15.1678 141.533 14.272C141.533 13.1794 141.276 12.2796 140.736 11.5992C140.232 10.9277 139.607 10.4285 138.863 10.107C138.159 9.79627 137.251 9.48862 136.141 9.18297L136.14 9.1826C135.312 8.95971 134.666 8.75465 134.199 8.56789C133.749 8.3876 133.38 8.15055 133.088 7.85972C132.834 7.57641 132.701 7.21622 132.701 6.76C132.701 6.06841 132.925 5.57037 133.352 5.22661C133.794 4.87012 134.374 4.682 135.115 4.682C135.937 4.682 136.572 4.88688 137.044 5.27349C137.526 5.66799 137.775 6.12796 137.817 6.65968L137.836 6.89001H138.067H141.091H141.361L141.34 6.62018C141.223 5.14854 140.616 3.97771 139.517 3.13115C138.439 2.27314 137.061 1.854 135.403 1.854C134.238 1.854 133.203 2.05078 132.301 2.45155C131.398 2.85294 130.687 3.4343 130.179 4.19733C129.668 4.96283 129.417 5.85226 129.417 6.856C129.417 7.93345 129.665 8.82452 130.188 9.50443C130.692 10.1587 131.3 10.6497 132.012 10.9718L132.011 10.9719L132.018 10.9746C132.72 11.2687 133.62 11.5601 134.715 11.8497L134.716 11.85C135.576 12.073 136.236 12.2779 136.702 12.4641L136.704 12.4651C137.168 12.6448 137.543 12.8961 137.834 13.2162L137.834 13.2162L137.838 13.2206C138.123 13.5191 138.273 13.9099 138.273 14.416C138.273 15.0653 138.039 15.5878 137.567 16.0028C137.099 16.3996 136.428 16.614 135.523 16.614C134.653 16.614 134.009 16.3937 133.556 15.9841C133.109 15.5652 132.854 15.0322 132.796 14.3699L132.775 14.142H132.547H129.619H129.369V14.392C129.369 15.3992 129.638 16.2909 130.183 17.0569C130.723 17.8172 131.465 18.4042 132.397 18.8203Z" stroke="#1ABC9C" strokeWidth="0.5"/>
<path d="M117.567 6.91532V5.776V5.526H117.317H114.581H114.331V5.776V19V19.25H114.581H117.317H117.567V19V12.04C117.567 10.7176 117.837 9.85875 118.309 9.38605C118.807 8.90289 119.551 8.642 120.581 8.642H121.277H121.527V8.392V5.56V5.31H121.277C120.33 5.31 119.494 5.50963 118.778 5.91845C118.313 6.17922 117.91 6.51203 117.567 6.91532Z" stroke="#1ABC9C" strokeWidth="0.5"/>
<path d="M111.793 13.658H112.006L112.04 13.4475C112.106 13.0319 112.139 12.5704 112.139 12.064C112.139 10.748 111.859 9.57716 111.292 8.55899C110.725 7.52668 109.932 6.72468 108.914 6.15763C107.897 5.59055 106.742 5.31 105.457 5.31C104.124 5.31 102.929 5.59837 101.879 6.18146L101.879 6.18145L101.878 6.18229C100.843 6.76639 100.034 7.60151 99.4526 8.68147L99.4526 8.68147L99.452 8.68271C98.8857 9.7486 98.6068 10.9822 98.6068 12.376C98.6068 13.7711 98.8942 15.0129 99.4766 16.0945L99.4766 16.0945L99.4789 16.0986C100.076 17.1605 100.892 17.9932 101.923 18.5922L101.923 18.5922L101.927 18.5945C102.976 19.1771 104.154 19.466 105.457 19.466C107.051 19.466 108.402 19.0708 109.493 18.2651L109.494 18.2647C110.59 17.4509 111.35 16.4086 111.766 15.1421L111.874 14.814H111.529H108.577H108.421L108.353 14.9534C108.067 15.532 107.686 15.9549 107.213 16.2349C106.74 16.5155 106.158 16.662 105.457 16.662C104.49 16.662 103.687 16.3618 103.033 15.767C102.441 15.2291 102.083 14.5313 101.966 13.658H111.793ZM103.078 8.96359L103.078 8.9636L103.08 8.96138C103.704 8.39683 104.452 8.114 105.337 8.114C106.324 8.114 107.136 8.4011 107.789 8.9652C108.375 9.47139 108.704 10.1269 108.771 10.95H102.004C102.159 10.1123 102.52 9.45543 103.078 8.96359Z" stroke="#1ABC9C" strokeWidth="0.5"/>
<path d="M91.6594 18.8133C92.2502 18.506 92.7532 18.1372 93.1651 17.7057V19V19.25H93.4151H96.1751H96.4251V19V1.23999V0.98999H96.1751H93.4151H93.1651V1.23999V6.98233C92.7073 6.54785 92.1514 6.19024 91.5013 5.9078C90.6393 5.51037 89.7566 5.30999 88.8551 5.30999C87.6441 5.30999 86.5355 5.60916 85.535 6.20929C84.5503 6.79362 83.7678 7.61947 83.1878 8.68004L83.1878 8.68003L83.1863 8.6827C82.6205 9.74776 82.3411 10.9651 82.3411 12.328C82.3411 13.6911 82.6206 14.9231 83.1849 16.0185L83.1848 16.0185L83.187 16.0225C83.7663 17.0983 84.5474 17.9474 85.5303 18.5638L85.5303 18.5638L85.5345 18.5664C86.5345 19.1664 87.6352 19.466 88.8311 19.466C89.8893 19.466 90.8343 19.2509 91.6594 18.8133ZM91.6594 18.8133C91.6591 18.8135 91.6588 18.8136 91.6585 18.8138L91.5431 18.592M91.6594 18.8133C91.6597 18.8132 91.66 18.813 91.6603 18.8128L91.5431 18.592M91.5431 18.592C90.7591 19.008 89.8551 19.216 88.8311 19.216C87.6791 19.216 86.6231 18.928 85.6631 18.352M91.5431 18.592C92.2038 18.2484 92.7445 17.8284 93.1651 17.3321L85.6631 18.352M85.6631 18.352C84.7191 17.76 83.9671 16.944 83.4071 15.904C82.8631 14.848 82.5911 13.656 82.5911 12.328C82.5911 11 82.8631 9.82399 83.4071 8.79999L85.6631 18.352ZM92.6199 10.1201L92.6198 10.1201L92.6221 10.124C92.9809 10.752 93.1651 11.4997 93.1651 12.376C93.1651 13.2521 92.981 14.0089 92.6208 14.6541L92.6199 14.6559C92.2717 15.2916 91.8148 15.7686 91.2499 16.0956C90.68 16.4255 90.0672 16.59 89.4071 16.59C88.7652 16.59 88.1524 16.4266 87.5653 16.0961C87.0004 15.7534 86.5349 15.2602 86.1705 14.6081C85.8257 13.9625 85.6491 13.2049 85.6491 12.328C85.6491 11.4502 85.826 10.7105 86.1687 10.0992C86.5325 9.46275 86.9969 8.99402 87.56 8.6828L87.5601 8.68284L87.5644 8.68035C88.1342 8.35043 88.747 8.18599 89.4071 8.18599C90.0672 8.18599 90.68 8.35043 91.2499 8.68035C91.8148 9.0074 92.2717 9.4844 92.6199 10.1201Z" stroke="#1ABC9C" strokeWidth="0.5"/>
<path d="M80.2632 19.25H80.0132H77.3012H77.0512V19V11.608C77.0512 10.4636 76.7654 9.63049 76.2318 9.06806L76.2296 9.06577L76.2297 9.06576C75.6933 8.4859 74.9568 8.186 73.9892 8.186C73.0218 8.186 72.2756 8.4859 71.7225 9.06813L80.2632 19.25ZM80.2632 19.25V19M80.2632 19.25V19M80.2632 19V11.2C80.2632 9.96804 80.0249 8.90065 79.5365 8.008C79.0496 7.11819 78.3663 6.44219 77.4893 5.98658C76.6331 5.53352 75.6644 5.31 74.5892 5.31C73.7719 5.31 72.9941 5.46866 72.2581 5.78648L72.2581 5.78647L72.2561 5.78733C71.7435 6.01386 71.2919 6.30522 70.9032 6.66171V5.776V5.526H70.6532H67.9172H67.6672V5.776V19V19.25H67.9172H70.6532H70.9032M80.2632 19L70.9032 19.25M70.9032 19.25V19M70.9032 19.25V19M70.9032 19V11.608C70.9032 10.4637 71.1889 9.63061 71.7224 9.06818L70.9032 19Z" stroke="#1ABC9C" strokeWidth="0.5"/>
<path d="M51.3362 8.68004L51.3362 8.68004L51.3348 8.68271C50.769 9.74777 50.4896 10.9651 50.4896 12.328C50.4896 13.6911 50.769 14.9231 51.3333 16.0185L51.3333 16.0185L51.3354 16.0225C51.9147 17.0983 52.6958 17.9474 53.6787 18.5638L53.6787 18.5638L53.6813 18.5654C54.6657 19.166 55.7509 19.466 56.9316 19.466C57.9902 19.466 58.9427 19.2507 59.7829 18.8138C60.3799 18.5034 60.8912 18.1345 61.3136 17.706V19V19.25H61.5636H64.3236H64.5736V19V5.776V5.526H64.3236H61.5636H61.3136V5.776V7.03357C60.8951 6.61773 60.3923 6.26115 59.8079 5.9627C58.9976 5.52443 58.052 5.31 56.9796 5.31C55.7838 5.31 54.6834 5.60951 53.6835 6.2093C52.6987 6.79362 51.9162 7.61948 51.3362 8.68004ZM60.7683 10.1201L60.7683 10.1201L60.7705 10.124C61.1294 10.752 61.3136 11.4997 61.3136 12.376C61.3136 13.2521 61.1294 14.0089 60.7693 14.6542L60.7683 14.6559C60.4202 15.2916 59.9632 15.7686 59.3983 16.0956C58.8285 16.4256 58.2157 16.59 57.5556 16.59C56.9136 16.59 56.3008 16.4266 55.7137 16.0961C55.1488 15.7534 54.6833 15.2602 54.319 14.6081C53.9741 13.9625 53.7976 13.2049 53.7976 12.328C53.7976 11.4502 53.9744 10.7105 54.3171 10.0992C54.681 9.46276 55.1453 8.99403 55.7085 8.68281L55.7085 8.68285L55.7128 8.68035C56.2827 8.35044 56.8955 8.186 57.5556 8.186C58.2157 8.186 58.8285 8.35044 59.3983 8.68035C59.9632 9.0074 60.4202 9.48441 60.7683 10.1201Z" stroke="#1ABC9C" strokeWidth="0.5"/>
<path d="M43.6655 14.9878L46.3041 19.1342L46.3778 19.25H46.515H49.611H50.067L49.8218 18.8655L45.6367 12.3057L49.8202 5.9129L50.0734 5.526H49.611H46.755H46.6133L46.5405 5.64755L44.0606 9.78821L41.4219 5.64178L41.3482 5.526H41.211H38.115H37.6598L37.904 5.91012L42.0894 12.4938L37.906 18.8628L37.6517 19.25H38.115H40.971H41.1127L41.1855 19.1285L43.6655 14.9878Z" stroke="#1ABC9C" strokeWidth="0.5"/>
<path d="M36.8865 13.658H37.0997L37.1334 13.4475C37.1999 13.0319 37.2325 12.5704 37.2325 12.064C37.2325 10.748 36.9526 9.57716 36.3853 8.55899C35.819 7.52668 35.0256 6.72468 34.0082 6.15763C32.9908 5.59055 31.836 5.31 30.5505 5.31C29.2174 5.31 28.0226 5.59837 26.9731 6.18146L26.9731 6.18145L26.9716 6.18229C25.9369 6.76639 25.1279 7.60151 24.5464 8.68147L24.5464 8.68147L24.5457 8.68271C23.9795 9.7486 23.7005 10.9822 23.7005 12.376C23.7005 13.7711 23.988 15.0129 24.5704 16.0945L24.5703 16.0945L24.5726 16.0986C25.1699 17.1605 25.9854 17.9932 27.017 18.5922L27.0169 18.5922L27.0211 18.5945C28.0697 19.1771 29.2482 19.466 30.5505 19.466C32.145 19.466 33.4959 19.0708 34.587 18.2651L34.5875 18.2647C35.6837 17.4509 36.4434 16.4086 36.86 15.1421L36.9679 14.814H36.6225H33.6705H33.5151L33.4463 14.9534C33.1608 15.532 32.7799 15.9549 32.3071 16.2349C31.8333 16.5155 31.2514 16.662 30.5505 16.662C29.5835 16.662 28.781 16.3618 28.1267 15.767C27.535 15.2291 27.1772 14.5313 27.0599 13.658H36.8865ZM28.1718 8.96359L28.1718 8.9636L28.1742 8.96138C28.7982 8.39683 29.5456 8.114 30.4305 8.114C31.4181 8.114 32.2299 8.4011 32.8831 8.9652C33.4692 9.47139 33.7979 10.1269 33.8644 10.95H27.0979C27.2527 10.1123 27.6134 9.45543 28.1718 8.96359Z" stroke="#1ABC9C" strokeWidth="0.5"/>
<path d="M21.5204 1.23999V0.98999H21.2704H18.5344H18.2844V1.23999V19V19.25H18.5344H21.2704H21.5204V19V1.23999Z" stroke="#1ABC9C" strokeWidth="0.5"/>
<path d="M3.672 19.25H3.84902L3.90781 19.0831L5.04902 15.842H11.679L12.8202 19.0831L12.879 19.25H13.056H15.936H16.291L16.1714 18.9158L10.1954 2.21181L10.1361 2.04602H9.96H6.792H6.61592L6.55661 2.21181L0.580612 18.9158L0.461045 19.25H0.816002H3.672ZM5.99335 13.11L8.37496 6.36212L10.7357 13.11H5.99335Z" stroke="#1ABC9C" strokeWidth="0.5"/>
</svg>

  )
}

export default Alex
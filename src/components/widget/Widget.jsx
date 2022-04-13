import './widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';










const Widget = ({type}) => {
  let data;

  //temporary
  const amount = 16700
  const diff = 30

  switch (type) {
    case 'user':
       data={
         title: 'USERS',
         isMoney: false,
         link: 'See All Users',
         icon: <PersonOutlineOutlinedIcon className='Icon'/>,
       };
       break;
    case 'order':
       data={
         title: 'ORDERS',
         isMoney: false,
         link: 'View All Orders',
         icon: <AccountBalanceWalletOutlinedIcon className='Icon'/>,
       };
       break;
    case 'earnings':
       data={
         title: 'EARNINGS',
         isMoney: true,
         link: 'View net earnings',
         icon: <ShoppingCartOutlinedIcon className='Icon'/>,
       };
       break;
    case 'balance':
       data={
         title: 'BALANCE',
         isMoney: true,
         link: 'See Details',
         icon: <MonetizationOnOutlinedIcon className='Icon'/>,
       };
       break;
  
    default:
      break;
  }

  return (
    <div className='widget'>
        <div className="left">
           <span className='title'>{data.title}</span>
           <span className='counter'>{data.isMoney && '$'} {amount}</span>
           <span className='link'>{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
            <KeyboardArrowUpOutlinedIcon/>    
           {diff}%
            </div>
          {data.icon}

        </div>
    </div>
  )
}

export default Widget
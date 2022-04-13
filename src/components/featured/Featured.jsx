import './featured.scss'
import { CircularProgressbar } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"
import MoreVertIcon from '@mui/icons-material/MoreVert'

const Featured = () => {
  return (
    <div className='featured'>
      <div className='top'>
            <h1 className='title'>Total Data</h1>
            <MoreVertIcon className='iconMore' fontSize='small'/>
        </div>
      <div className='bottom'>
        <div className='featuredChart'>

            <CircularProgressbar className='circularProgress' value={75} text={'75%'} strokeWidth={5}/>
        </div>
            <p className='titleTwo'>Ongoing Process</p>
      </div>

    </div>
  )
}

export default Featured
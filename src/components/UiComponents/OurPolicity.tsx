import { BadgeCentIcon } from '../ui/BadgeCentIcon'
import { HeadsetIcon } from '../ui/HeadsetIcon'
import { ShieldCheckIcon } from '../ui/ShieldCheckIcon'

const OurPolicity = () => {
  return (
    <div className=' flex flex-col sm:flex-row justify-around gap-12 text-center py-20 text-xs sm:text-sm md:text-base text-[#FFFF] ' >
       <div>
          <BadgeCentIcon  className='w-12 m-auto mb-5' />
          <p className='font-semibold' >Easy Exchange Policy</p>
          <p className='text-[#FFFF]' >We offer hassle free exchange policy</p>
       </div>
       <div>
          <ShieldCheckIcon className='w-12 m-auto mb-5' />
          <p className='font-semibold' >7 Days Return Policy</p>
          <p className='text-[#FFFF]' >We Provide 7 Days free return policy</p>
       </div>
       <div>
          <HeadsetIcon className='w-12 m-auto mb-5' />
          <p className='font-semibold' >Best customer support</p>
          <p className='text-[#FFFF]' >We provide 24/7  customer support</p>
       </div>
    </div>
  )
}

export default OurPolicity
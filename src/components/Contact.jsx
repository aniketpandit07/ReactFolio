import { CONTACT } from '../constants'

const Contact = () => {
  return (
   
    <div className='container border-b border-l-neutral-900 pb-20 contact'>
      <h2 className='my-10 text-center text-xl font-light tracking-widest text-amber-500'>Get in Touch</h2>
      <div className='text-center tracking-tight'>
        <p className='my-4'>{CONTACT.address}</p>
        <p className='my-4'>{CONTACT.phoneNo}</p>
        <a href="mailto:aniketpandit548@gmail.com" type='email' target='_blank' className='border-b '>{CONTACT.email}</a>
      </div>
    </div>
   
  )
}

export default Contact

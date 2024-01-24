import Logo from '../../assets/logo.svg'
import '../../styles/footer.scss'



function Footer() {

    return (
      <div className='footer'>
        <img className='footer_logo' alt='Logo Kasa' src={Logo} />
        <p className='footer_txt'>© 2020 Kasa. All rights reserved</p>
      </div>
    )
  
  }
  
  export default Footer
  
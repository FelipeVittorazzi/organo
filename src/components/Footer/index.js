import './Footer.css'

const Footer = () => {
    return ( 
        <footer className='footer'>
            <div className='icons'>
                <a href='www.google.com'>
                    <img src='../images/fb.png' alt='Facebook' />
                </a>
                <a href='www.google.com'>
                    <img src='../images/tw.png' alt='Twitter' />
                </a>
                <a href='www.google.com'>
                    <img src='../images/ig.png' alt='Instagram' />
                </a>
            </div>
            <div className='logo'>
                <img src='../images/logo.png' alt='Logo' />
            </div>
            <div className='alura'>
                <p>Desenvolvido por DeVittorazzi.</p>
            </div>
        </footer>
    );
}
 
export default Footer;
import GitHub from '../../assets/icons/github.svg';
import './Footer.scss';

export const Footer = () => {
  return (
    <footer className='footer'>
      <a className='footer__wikipedia' target='_blank' href='https://en.wikipedia.org/wiki/Peggy_Ashcroft'>Wikipedia</a>
      <a className='footer__github' target='_blank' href='https://github.com/AarKro/peggy-ashcroft'>Check it out on Github <GitHub /></a>
    </footer>
  );
}
import GitHub from '../../assets/icons/github.svg';
import './Footer.scss';

export const Footer = () => {
  return (
    <footer className='footer'>
      <a className='footer__wikipedia' target='_blank' rel='noopener noreferrer' href='https://en.wikipedia.org/wiki/Peggy_Ashcroft'>Wikipedia</a>
      <a className='footer__github' target='_blank' rel='noopener noreferrer' href='https://github.com/AarKro/peggy-ashcroft'>Check it out on Github <GitHub aria-hidden="true" /></a>
    </footer>
  );
}
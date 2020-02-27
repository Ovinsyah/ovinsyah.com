import React from 'react';
import { Footer, ContentFooter } from './style';
import IconGithub from '../../assets/svg/icon-github';
import IconTwitter from '../../assets/svg/icon-twitter';
import IconMedium from '../../assets/svg/icon-medium';
import IconLinkedin from '../../assets/svg/icon-linkedin';
import IconInstagram from '../../assets/svg/icon-instagram';

export default () => {
  return (
    <Footer>
      <ContentFooter>
        <a href="https://www.instagram.com/ovinsyah/" target="_blank" rel="noopener noreferrer"><IconInstagram /></a>
        <a href="https://github.com/ovinsyah" target="_blank" rel="noopener noreferrer"><IconGithub /></a>
        <a href="https://twitter.com/ovinsyah" target="_blank" rel="noopener noreferrer"><IconTwitter /></a>
        <a href="https://medium.com/@ovinsyah" target="_blank" rel="noopener noreferrer"><IconMedium /></a>
        <a href="https://www.linkedin.com/in/ovinsyah-al-bayhaqy-b18292176/?originalSubdomain=id" target="_blank" rel="noopener noreferrer"><IconLinkedin /></a>
      </ContentFooter>
    </Footer>
  )
}

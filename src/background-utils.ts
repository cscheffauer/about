
import { detect } from 'detect-browser'
import backgroundWEBP from './images/background.webp'
import backgroundJPEG from './images/background.jpg'

export const getBackgroundImage = () => {
    const browser = detect();
    switch (browser && browser.name) {
        case 'chrome':
        case 'firefox':
        case 'edge':
            return backgroundWEBP;
        default:
            return backgroundJPEG;
      }
}
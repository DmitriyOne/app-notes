import * as React from 'react';
import classNames from 'classnames';


import styles from './footer.module.scss'
import { ELinks } from '../../enums/ELinks';
import { GeneratorSvg } from '../Generator';

export const Footer: React.FunctionComponent = () => {
  return (
    <footer className={styles.component}>
      <div className={classNames('container', styles.row)}>
        <p className={styles.text}>Copyright © 2022 React note</p>
        <div className={styles.socials}>
          <a
            className={styles.link}
            href={ELinks.youtube}
            target="_blank"
            rel="noreferrer"
          >
            <GeneratorSvg id="youtube" />
          </a>
          <a
            className={styles.link}
            href={ELinks.telegram}
            target="_blank"
            rel="noreferrer"
          >
            <GeneratorSvg id="telegram" />
          </a>
          <a
            className={styles.link}
            href={ELinks.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <GeneratorSvg id="instagram" />
          </a>

        </div>
      </div>
    </footer>
  )
};

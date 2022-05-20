import * as React from 'react';
import { FunctionComponent } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import classNames from 'classnames';

import { IFirebaseNote } from '../../interfaces';
import { GeneratorSvg, Input } from '../../components';

import styles from './note.module.scss';

interface IProps {
  notes: IFirebaseNote[]
  onRemove?: (id: string | undefined) => void
  valueTitle?: string
  onChecked?: (note: IFirebaseNote) => Promise<void>
}

export const NoteItem: FunctionComponent<IProps> = ({
  notes,
  onRemove,
  valueTitle = '',
  onChecked,
}) => (
  <TransitionGroup
    component='ul'
    className={styles.component}
  >
    {notes.filter(note => {
      return (
        note.title!.toLowerCase().includes(valueTitle!.toLowerCase())
      )
    }).map(note => {
      const textLineThrough = note.checked ? styles.lineThrough : '';
      return (
        <CSSTransition
          timeout={{
            enter: 500,
            exit: 500
          }}
          classNames={'note'}
          key={note.id}
        >
          <li
            className={styles.item}
          >
            {note.checked && <span className={styles.completedBlock } />}
            <span className={styles.wrapper}>
              <span className={styles.row}>
                <h4 className={classNames(styles.title, textLineThrough)}>
                  {note.title}
                </h4>
                <span className={styles.checkboxContainer}>
                  <Input
                    id={note.id}
                    type='checkbox'
                    onChange={() => onChecked!(note)}
                    isLabelChecked={note.checked}
                    isInputCheckbox
                  />
                </span>
              </span>

              <span className={classNames(styles.descContainer, textLineThrough)}>
                Data create:
                <time className={styles.descText}>
                  {note.date}
                </time>
              </span>
              <span className={classNames(styles.descContainer, textLineThrough)}>
                Data finish:
                <time className={styles.descText}>
                  coming soon
                </time>
              </span>
              <span className={classNames(styles.descContainer, textLineThrough)}>
                Author:
                <span className={styles.descText}>
                  coming soon
                </span>
              </span>
            </span>
            <span className={styles.deleteContainer}>
              <button
                className={styles.delete}
                onClick={() => onRemove!(note.id)}
              >
                <GeneratorSvg id='delete' />
              </button>
            </span>
          </li>
        </CSSTransition>
      )
    })}
  </TransitionGroup>
);

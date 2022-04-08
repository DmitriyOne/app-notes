import * as React from 'react';
import { FunctionComponent } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { MdDeleteForever } from "react-icons/md";
import { IFirebaseNote } from '../../interfaces';

import styles from './note.module.scss';

interface IProps {
  notes: IFirebaseNote[]
  onRemove?: (id: string) => void
  valueTitle?: string
}

export const Note: FunctionComponent<IProps> = ({
  notes,
  onRemove,
  valueTitle = '',
}) => (
  <TransitionGroup
    component='ul'
    className={styles.component}
  >
    {notes.filter(note => {
      return (
        note.title!.toLowerCase().includes(valueTitle!.toLowerCase())
      )
    }).map((note, idx) => {
      return (
        <CSSTransition
          timeout={500}
          classNames={'note'}
          key={note.id}
        >
          <li
            className={styles.item}
          >
            <span>
              {idx + 1 + ')'}
              &nbsp;
              {note.title}
              <time className={styles.date}>
                {note.date}
              </time>
            </span>
            <button
              className={styles.delete}
              onClick={() => onRemove!(note.id)}
            >
              <MdDeleteForever className={styles.deleteIcon} />
            </button>
          </li>
        </CSSTransition>
      )
    })}
  </TransitionGroup>
)

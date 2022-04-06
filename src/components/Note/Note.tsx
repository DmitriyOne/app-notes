import { FunctionComponent } from 'react';
import { MdDeleteForever } from "react-icons/md";
import { IFirebaseNote } from '../../interfaces';

import styles from './note.module.scss';

interface IProps {
  notes: IFirebaseNote[]
  onRemove?: (id: string) => void
}

export const Note: FunctionComponent<IProps> = ({
  notes,
  onRemove
}) => (
  <ul className={styles.component}>
    {notes.map((note, idx) => {
      return (
        <li
          key={idx + 1}
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
      )
    })}
  </ul>
)

import React from 'react';
import newIcon from '../image/icn-_blank.svg'
import styles from './NewIcon.module.scss'

type Component = React.FC<{
  width?: number;
  height?: number;
  alt?: string;
}>

export const NewIcon: Component = ({width, height, alt}) => {
  return (
    <img src={newIcon} alt={alt || '新しいタブで開く'} width={width || 15} height={height || 15} className={styles.icn} />
  )
}

import FullTable from '../components/fulltable'
import MemoizedTable from '../components/memoizedtable'
import UnoptimizedTable from '../components/unoptimizedtable'
import styles from './TablesDemo.module.css'

function TablesDemo () {
  return (
    <div className={styles.demoContainer}>
      <h2>Tables</h2>

      <div className={styles.description}>
        These table renders data from an object array.<br />
        An update to a cell item updates its whole array data source. 
      </div>

      <FullTable />

      <MemoizedTable />

      <UnoptimizedTable />
    </div> 
  )
}

export default TablesDemo

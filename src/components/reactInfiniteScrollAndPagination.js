'use client';
import { useEffect, useRef, useState } from 'react';
import EmployeeCard from './employeeCard';
import styles from './reactInfiniteScrollAndPagination.module.css';
import allEmployees from '../../public/employees.json';

const BATCH_SIZE = 10;

export default function ReactInfiniteScrollAndPagination() {
  const [visibleData, setVisibleData] = useState([]);
  const [index, setIndex] = useState(0);
  const loadRef = useRef();

  const loadMore = () => {
    const nextBatch = allEmployees.slice(index, index + BATCH_SIZE);
    setVisibleData((prev) => [...prev, ...nextBatch]);
    setIndex(index + BATCH_SIZE);
  };

  useEffect(() => {
    loadMore();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) loadMore();
      },
      { threshold: 1 }
    );

    if (loadRef.current) observer.observe(loadRef.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div className={styles.wrapper}>
      <h2>👨‍💼 Employee Directory</h2>
      {visibleData.map((emp, i) => (
        <EmployeeCard emp={emp} key={i} />
      ))}
      <button className={styles.button} onClick={loadMore}>Load 10 More</button>
      <div ref={loadRef} style={{ height: 1 }}></div>
    </div>
  );
}

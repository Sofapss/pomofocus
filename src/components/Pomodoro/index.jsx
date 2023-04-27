import { useState } from 'react';
import styles from './Pomodoro.module.css';
import Timer from '../Timer';

const Pomodoro = ({ setBgColor }) => {
  const [toggleState, setToggleState] = useState(1);
  const tabs =  [
    {
      id: 1,
      title: 'Pomodoro',
      color: 'red'
    },
    {
      id: 2,
      title: 'Short Break',
      color: 'green'
    },
    {
      id: 3,
      title: 'Long Break',
      color: 'blue'
    }
  ];
  const items = [
    {
      id: 1,
      time: 25 * 60
    },
    {
      id: 2,
      time: 5 * 60
    },
    {
      id: 3,
      time: 10 * 60
    }
  ];

  const toggleTab = (index) => setToggleState(index);
  const onTabClick = (id, color) => {
    toggleTab(id);
    setBgColor(color);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <h1>Pomofocus</h1>
          <div>Settings</div>
        </div>
        <div className={styles.border}>
          <div className={styles.percent} style={{ width: '70%' }}>
          </div>
        </div>
      </header>
      <section className={styles.pomodoro}>
        <div className={styles.tabs}>
          {tabs.map((tab, index) => (
            <button key={index}
                    className={toggleState === tab.id ? [styles.tab, styles.activeTab].join(' ') : styles.tab}
                    onClick={() => onTabClick(tab.id, tab.color)}>
              {tab.title}
            </button>
          ))}
        </div>

        <div>
          {items.map(item => (
            <div key={item.id}
                 className={toggleState === item.id ? [styles.item, styles.activeItem].join(' ') : styles.item}>
              <Timer time={item.time} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Pomodoro;
import React, { useState, useEffect } from 'react';
import {
  useIntl,
  formatMessage,
  addLocale,
  getLocale,
  getAllLocales,
  setLocale,
} from 'umi';
import { Table } from 'antd';
import styles from './index.css';

export default function(props) {
  const intl = useIntl();
  const [list, setList] = useState<string[]>(getAllLocales());

  useEffect(() => {
    // 动态增加新语言
    addLocale('zh-TW', {
      name: '妳好，{name}',
    });
    // 刷新列表
    setList(getAllLocales());
  }, []);

  const locale = getLocale();

  return (
    <div className={styles.normal}>
      <h1>当前语言：{locale}</h1>
      {list.map(locale => (
        <a
          key={locale}
          onClick={() => {
            setLocale(locale, false);
          }}
          style={{
            margin: 8,
          }}
        >
          {locale}
        </a>
      ))}
      <h1>
        Page index {props.count} {props.foo + 2}
      </h1>
      <button>
        {formatMessage(
          {
            id: 'name',
          },
          {
            name: '过期 api',
          },
        )}
      </button>{' '}
      <button>
        {intl.formatMessage(
          {
            id: 'name',
          },
          {
            name: '旅行者',
          },
        )}
      </button>
    </div>
  );
}

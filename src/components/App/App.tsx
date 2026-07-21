import Users from '../Users/Users';
import Books from '../Books/Books';
import { useState } from 'react';
import Tabs from '../Tabs/Tabs';

type TabType = 'users' | 'books';
export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('users');

  const tabsConfig = [
    {
      textContent: 'Users',
      clickHandler: () => {
        setActiveTab('users');
      },
    },
    {
      textContent: 'Books',
      clickHandler: () => {
        setActiveTab('books');
      },
    },
  ];

  return (
    <>
      <Tabs tabs={tabsConfig} />
      {activeTab === 'users' && <Users />}
      {activeTab === 'books' && <Books />}
      {/* <Books /> */}
      {/* <Users /> */}
    </>
  );
}

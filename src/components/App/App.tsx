import Users from '../Users/Users';
import Books from '../Books/Books';
import { useState } from 'react';
import Tabs from '../Tabs/Tabs';
import Contacts from '../Contacts/Contacts';


type TabType = 'users' | 'books' | 'contacts';
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
    {
      textContent: 'Contacts',
      clickHandler: () => {
        setActiveTab('contacts');
      },
    },
  ];

  return (
    <>
      <Tabs tabs={tabsConfig} />
      {activeTab === 'users' && <Users />}
      {activeTab === 'books' && <Books />}
      {activeTab === 'contacts' && <Contacts />}
      {/* <Books /> */}
      {/* <Users /> */}
      {/* <Contacts /> */}
    </>
  );
}

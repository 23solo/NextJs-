'use client';

import { axios } from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function loginPage() {
  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });

  const onLogin = async () => {};

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>Login</h1>
      <hr />
      <label htmlFor='email'>email</label>
      <input
        className='border border-gray-600 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
        id='email'
        type='text'
        value={user.email}
        onChange={(e) => {
          setUser({ ...user, email: e.target.value });
        }}
        placeholder='email'
      />
      <label htmlFor='password'>password</label>
      <input
        className='border border-gray-600 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
        id='password'
        type='text'
        value={user.password}
        onChange={(e) => {
          setUser({ ...user, password: e.target.value });
        }}
        placeholder='password'
      />
      <button
        className='btn p-2 border border-gray-600 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
        type='button'
        onClick={onLogin}
      >
        login here
      </button>
      <Link href='/signup'>Visit Signup</Link>
    </div>
  );
}

'use client';

import Form from '@/components/Form'
import Image from 'next/image'

import { read } from '@/components/apiDB';
import { useEffect, useState } from 'react';
import { data } from 'autoprefixer';

export default function Home() {

  const [investments, setInvestments] = useState([]);

  useEffect( () => {
    async function loadData() {
      const data = await read('investments');

      setInvestments(data);
    }

    loadData();
  }, []);

  return (
    <main>
      <Form titulo="Dados de contatos"/>
      <hr/>
      <h2>Investmentos</h2>
      <ul>
        {
          investments.map(
            (inv, i) => <li key={inv.id}>{inv.name}, {inv.origin}, {inv.value}</li>
          )
        }
      </ul>
    </main>
  )
}

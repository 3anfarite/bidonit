import { database } from '@/db/database'
import { auth } from '@/auth';
import Image from 'next/image';
import { env } from '@/env';
import { getImageUrl } from '@/utils/files';
import { ItemCard } from './item-card';


export default async function HomePage() {

  const session = await auth();

  const allItems = await database.query.items.findMany();

  return (
    <main className="container mx-auto py-12 space-y-8 ">
      <h1 className='text-4xl font-bold' >Post an item to sell </h1>

      <h1 className='text-2xl font-bold' >Items For Sale </h1>

      <div className='grid grid-cols-4 gap-4' >
        {allItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}

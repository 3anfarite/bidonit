import { Button } from '@/components/ui/button';
import { database } from '@/db/database'
import { Input } from '@/components/ui/input';
import { auth } from '@/auth';
import { createItemAction } from './actions';


export default async function HomePage() {
  return (
    <main className="container mx-auto py-12 space-y-8 ">
      <h1 className='text-4xl font-bold' >Post an item to sell </h1>

      <form className='flex flex-col border p-8 rounded-xl space-y-4 max-w-lg '
        action={createItemAction} >
        <Input required className='max-w-md' name="name" placeholder="Name your item" />
        <Input  
          required className='max-w-lg'
          name='startingPrice'
          type="number"
          step='0.01'
          placeholder='What to start your auction at'
        />
        <Button className='self-end' type="submit">Post item</Button>
      </form>
    </main>
  );
}

import { auth } from "@/auth";
import { SignIn } from "@/components/sign-in";
import { SignOut } from "@/components/sign-out";
import Link from "next/link"

export async function Header() {

   const session = await auth();

   return (
      <div className="bg-gray-50 py-2" >
         <div className="container flex justify-between items-center gap-1 ">
            <div className="flex items-center gap-12" >
               <Link href='/' className="hover:underline flex items-center gap-1" >
                  <div>BidOnIt.com</div>
               </Link>

               <div className="" >
                  <Link href='/items/create'
                     className="hover:underline flex items-center gap-1" >
                     <div>Auction an Item</div>
                  </Link>
               </div>
            </div>


            <div className="flex items-center gap-4" >
               <div>{session?.user?.name}</div>
               <div>{session ? <SignOut /> : <SignIn />}</div>
            </div>
         </div>
      </div>
   )
}
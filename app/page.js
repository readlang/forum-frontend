// import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>page file</h1>
      <br/><br/>
      <div>
        This project is very much in development.  
        Most of the effort so far has been put into getting the Specs section working.
      </div>
  
      <h1 >
        Click for  <Link href="/specs">Link</Link> to the specs page!
      </h1>
    </div>
  );
}
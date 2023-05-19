// import Image from 'next/image'
import Link from 'next/link';

export default function Page() {
    return (
        <div>
            <h1>Profile</h1>
            <div>
                This project is very much in development.  
                Most of the effort so far has been put into getting the Specs section working.
            </div>

            <div className="grid">
                <Link href="#">
                    <article>
                        <h6>Title</h6>
                        <hr/>
                        <p>body text...</p>
                    </article>
                </Link>
                
                
            </div>
        </div>
    );
}
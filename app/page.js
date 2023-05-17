// import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <h1>Sites</h1>
            <br/>
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
                <Link href="#">
                    <article>
                        <h6>Title</h6>
                        <hr/>
                        <p>body text...</p>
                    </article>
                </Link>
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
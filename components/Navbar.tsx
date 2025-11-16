'use client';
import Link from "next/link";
import Image from "next/image";
import posthog from "posthog-js";

const Navbar = () => {
    const handleNavClick = (navItem: string) => {
        const eventName = `nav_${navItem.toLowerCase()}_clicked`;
        posthog.capture(eventName, {
            nav_item: navItem,
            location: 'navbar',
        });
    };

    return (
        <header>
            <nav>
                <Link href="/" className="logo">
                    <Image src="/icons/logo.png" alt="Logo" width={24} height={24} />

                    <p>DevEvent</p>
                </Link>

                <ul>
                    <Link href="/" onClick={() => handleNavClick('Home')}>Home</Link>
                    <Link href="/" onClick={() => handleNavClick('Event')}>Event</Link>
                    <Link href="/" onClick={() => handleNavClick('Create')}>Create</Link>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar

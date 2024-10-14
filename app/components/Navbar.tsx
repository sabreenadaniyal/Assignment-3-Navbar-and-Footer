import Link from "next/link"

export default function Navbar() {
    return (
        <nav>
            <ul style={{
                backgroundColor: "seaGreen", display: "flex", gap: "40px", lineHeight: "36px",
                fontSize: "30px", marginTop: "2px",listStyle:"none",justifyContent:"center"
            }}>
                <li style={{float:"left"}}>
                    <Link href="/">HOME</Link>
                </li>
                <li>
                    <Link href="/about">ABOUT us</Link>
                </li>
                <div style={{color:"yellow"}}>
                    <li>
                        <b><big>[SD]</big></b>
                        </li>
                </div>
                <li>
                    <Link href="/product">PRODUCTS</Link>
                </li>
                <li>
                    <Link href="/portfolio">PORTFOLIO</Link>
                </li>

            </ul>
        </nav>
    )
}
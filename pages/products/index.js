import Image from "next/image"
import styles from "@/styles/Product.module.css"
import Link from "next/link"

export async function getStaticProps(){
    const res = await fetch('https://dummyjson.com/products?limit=12') 
    const data = await res.json()
    return {
        props:{products:data.products}
    }
}


export default function index({products}) {
    return (
        <>
        <div><h1>List Projects</h1></div>
        <div className={styles.container}>
                {products.map(item=>(
                    <div key={item.id}>
                        <Link href={'/products/'+item.id}>
                            <h2 className={styles.title}>{item.title}</h2>
                            <Image src={item.thumbnail} width={300} height={300} alt={item.title}/>
                        </Link>
                    </div>
                ))}
        </div>
        </>
    );
}


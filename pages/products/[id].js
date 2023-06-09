import Image from "next/image"
import Head from "next/head"
import styles from "@/styles/Detail.module.css"
export async function getStaticPaths() {
    const res = await fetch('http://localhost:3001/api/projects?limit=12') 
    const data = await res.json()
    const paths = data.products.map((item)=>{
        return {
            params:{id:String(item.id)}
        }
    })
    console.log(paths);
    return {
        paths,
        fallback:false
    }
}

export async function getStaticProps({params}){
    const id = params.id
    const res = await fetch('https://dummyjson.com/products/'+id) 
    const data = await res.json()
    return {
        props:{products:data}
    }
}

export default function ProductDetail({products}) {
    
    return (
        <div>
            <Head>
                <title>{products.title}</title>
            </Head>
                <div className={styles.container}>
                    <div>
                        <Image className="ml-14" src={products.thumbnail} width={300} height={300} alt={products.title}/>    
                    </div>
                    <div className={styles.detail}>  
                        <h1 className="ml-14">ชื่อ : {products.title}</h1>
                        <h2 className="ml-14">ราคา : {products.price}</h2>
                        <h2 className="ml-14">หมวดหมู่ : {products.category}</h2>
                        <h3 className="ml-14">แบรนด์ : {products.brand}</h3>
                        <h4 className="ml-14">ข้อมูลพื้นฐาน: {products.description}</h4>
                    </div>
                </div>
        </div>
    );
}


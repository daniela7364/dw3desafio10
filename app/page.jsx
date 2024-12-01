import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <Image
src="/auto.jpg"
alt="auto fachaa"
width={500}
height={300}
layout="responsive"
objectFit="cover"
/>
  );
}

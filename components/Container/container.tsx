import Head from "next/head";
import { useEffect, useState } from "react";

type ContainerProps = {
  title: string;
  children: React.ReactNode;
};

export default function Container({ title, children, ...delegated }: ContainerProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Nextjs Dashboard Layout" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div {...delegated}>{children}</div>
    </>
  );
}
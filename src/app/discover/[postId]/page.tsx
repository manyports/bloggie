import { notFound } from 'next/navigation';
import datas from '@/app/discover/data.json';

interface Data {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
}

interface Params {
  postId: string;
}

export async function generateStaticParams() {
  return datas.map((data: Data) => ({
    postId: data.id.toString(),
  }));
}

export default function Post({ params }: { params: Params }) {
  const data = datas.find((data: Data) => data.id === Number(params.postId));

  if (!data) {
    notFound();
  }

  return (
    <div className='mx-[5%]'>
      <h1 className="font-black text-[35px]">{data.title}</h1>
      <b>
        <p>{data.date}</p>
      </b>
      <p className="indent-10">{data.description}</p>
      <p className='mt-[2vw] text-end text-[#334b75]'>by {data.author}</p>
      <div>
        <a href="/discover" className="text-[#0071A7] hover:text-[#005c8e]">Back to discover</a>
      </div>
    </div>
  );
}

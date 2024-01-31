import TextInput from '@/components/TextInput'
import Header from '@/components/Header';
import CardList from '@/components/CardList';

export default function Home() {
  return (
    <>
    <header className='pt-10'>
      <Header />
    </header>
    <section className='p-10 pt-0'>
      {/* <div className='flex items-center justify-center mt-7'>
        <TextInput />
      </div> */}
      <div>
        <CardList />
      </div>
    </section>
    </>
  );
}

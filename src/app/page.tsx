import Header from '@/components/Header';
import CardList from '@/components/CardList';

export default function Home() {
  return (
    <>
    <header className='pt-10'>
      <Header />
    </header>
    <section className='p-10 pt-0'>
      <div>
        <CardList />
      </div>
    </section>
    </>
  );
}

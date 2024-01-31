import TextInput from '@/components/TextInput'
import Header from '@/components/Header';
import CardList from '@/components/CardList';

export default function Home() {
  return (
    <>
    <header>
      <Header />
    </header>
    <section>
      <TextInput />
      <div>
        <CardList />
      </div>
    </section>
    </>
  );
}

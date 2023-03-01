import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  
  const clickHandle = async lang => {
    await i18n.changeLanguage(lang)
  }

  return (
    <>
      <div className='py-4'>
        <nav className='flex justify-center font-bold gap-x-2'>
          <button className='border-4 border-red-600 rounded p-2' onClick={() => clickHandle('tr')}>Turkce</button>
          <button className='border-4 border-red-600 rounded p-2' onClick={() => clickHandle('en')}>English</button>
        </nav> <br />
        <h1 className='flex justify-center font-semibold'>
          {t('Welcome to React')}
        </h1>
    </div>
    </>
  );
}

export default App;
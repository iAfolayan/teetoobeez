import List from '@/components/About/List'
import AboutComponent from '@/components/About/vision'
import Layout from '@/components/Layout'

const AboutPage = () => {
  return (
    <Layout>
        <div className="w-full py-4">
            <h1 className='text-4xl font-extrabold text-center p-2 uppercase ring-1 max-w-2xl mx-auto rounded border-b shadow'>About Us</h1>
            <p className='text-center max-w-2xl mx-auto py-4'>Teetoobeez offers a diverse range of culturally inspired jewelry, traditional attire, and accessories. Here is a properly arranged product overview</p>
            <List />
            <div className="max-w-2xl mx-auto ring-1 rounded p-4 mt-4">
                <h2 className="text-2xl font-bold text-center p-2">Vision & Mission</h2>
                <AboutComponent />
            </div>
        </div>
    </Layout>
  )
}

export default AboutPage
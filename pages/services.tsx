import Layout from "@/components/Layout"
import {OurServices, SolutionToServices} from '@/utils/data'

const Service = () => {
    return (
      <Layout>
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl p-2 py-4 uppercase rounded" data-aos="fade-down">
            Our services
          </h1>
          <h4
            className="text-xl py-2 text-gray-400"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            Problems
          </h4>
          <p className="text-justify pb-1" data-aos="fade-in" data-aos-offset="150">
            There is a large immigrant population from Nigeria and nearby African countries that
            wish to wear apparel that is culturally inspired, and which integrates western fashion
            with more traditional styles. The fashion and jewelry segment in Canada currently lacks
            in making multicultural apparel production which creates issues like:
          </p>
          <ul className="list-disc pl-8 mb-2">
            {OurServices.map(({title, desc}) => (
              <li key={title} className="md:text-justify mb-4" data-aos="zoom-in-up">
                <span className="font-bold pr-1">{title}</span>
                {desc}
              </li>
            ))}
          </ul>
          <p className="text-justify pb-1" data-aos="flip-down">
            The demand for culturally-inspired apparel is not limited to the immigrant population
            alone. Canada is a diverse and multicultural society, with a growing interest in
            embracing and celebrating various cultural expressions.
            <span className="font-bold italic pl-1">
              By failing to cater to this demand, the fashion and jewelry industry is missing out on
              a significant market opportunity that could benefit both businesses and consumers.
            </span>
          </p>
          <h4
            className="text-xl py-4 text-gray-400"
            data-aos="fade-right"
            data-aos-offset="50"
            data-aos-easing="ease-in-sine"
          >
            Solution
          </h4>
          <p className="text-justify pb-1" data-aos="fade-in" data-aos-offset="50">
            Teetoobeez is a multicultural fashion brand that deals in unique and urban design in
            Jewelry, African fabrics, and customs. Teetoobeez brand will offer women both formal and
            casual line of exquisite and sophisticated wearables with unique designs. We offer a
            complete and full range of collections where each piece is special individually and can
            be worn for years.{' '}
          </p>
          <p className="py-4" data-aos="fade-in">
            To address these challenges, Teetoobeez proposes the following solutions:
          </p>
          <ul
            className="list-disc pl-8 mb-2"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-out"
            data-aos-duration="1500"
          >
            {SolutionToServices.map(({title, desc}) => (
              <li key={title} className="mb-4 md:text-justify">
                <span className="font-bold pr-1">{title}</span>
                {desc}
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    )
}

export default Service

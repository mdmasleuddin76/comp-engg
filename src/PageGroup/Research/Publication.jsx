import React, { useState, useEffect } from 'react'
import HeroSection from '../About/Component/HeroSection'
import image from '../About/assets/aboutjmi.jpeg'
import { Container } from 'react-grid-system'

const Publication = () => {
  const data = [
    {
      year: 2021,
      title: 'A Study on the Effect of the Number of Hidden Layers and the Number of Neurons in the Hidden Layer on the Performance of the Neural Network',
      desc: 'Ahmad W., Alam B, & Atman A. International Journal of Advanced Science and Technology, Vol. 30, No. 5s, (2021), pp. 1-6, da dasj adskj adsk asdk dksak kdsak dsaksad jasd mjadsnm daskj mdsajnk ajadsjm kadks ',
      paper: 'International Journal of Advanced Science and Technology',
      link: 'http://www.sersc.org/journals/IJAST/vol30_no5s/1.pdf'
    },
    {
      year: 2021,
      title: 'A Study on the Effect of the Number of Hidden Layers and the Number of Neurons in the Hidden Layer on the Performance of the Neural Network',
      desc: 'Ahmad W., Alam B, & Atman A. International Journal of Advanced Science and Technology, Vol. 30, No. 5s, (2021), pp. 1-6, da dasj adskj adsk asdk dksak kdsak dsaksad jasd mjadsnm daskj mdsajnk ajadsjm kadks ',
      paper: 'International Journal of Advanced Science and Technology',
      link: 'http://www.sersc.org/journals/IJAST/vol30_no5s/1.pdf'
    },
    {
      year: 2022,
      title: 'A Study on the Effect of the Number of Hidden Layers and the Number of Neurons in the Hidden Layer on the Performance of the Neural Network',
      desc: 'Ahmad W., Alam B, & Atman A. International Journal of Advanced Science and Technology, Vol. 30, No. 5s, (2021), pp. 1-6, da dasj adskj adsk asdk dksak kdsak dsaksad jasd mjadsnm daskj mdsajnk ajadsjm kadks ',
      paper: 'International Journal of Advanced Science and Technology',
      link: 'http://www.sersc.org/journals/IJAST/vol30_no5s/1.pdf'
    }
  ]

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filteredResults = data.filter((publication) =>
      publication.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  const [selectedCategory, setSelectedCategory] = useState("2021");

  useEffect(() => {
    filterData(selectedCategory);
  }, [selectedCategory]);

  const filterData = (category) => {
    const filteredResults = data.filter((publication) =>
      publication.year == category
    );

    setFilteredData(filteredResults);
  };

  console.log(filteredData);


  return (
    <>
      <HeroSection
        heading={"Publications"}
        image={image}
      />
      <div className="container-fluid">
        <div className="p-4 flex w-full flex-col items-center justify-center gap-y-8 font-[450] bg-green-700" style={{ borderRadius: "20px", width: "90vw", margin: "auto" }}>
          <div className="flex flex-col items-center justify-center gap-y-8 font-[450]">
            <div className="flex flex-wrap justify-center gap-x-10 ">
              <h3 className="text-2xl font-medium">
                <span className="text-white">ALL PAPERS</span>
              </h3>
              <div className="flex items-center justify-center">
                <input
                  type="text"
                  placeholder="Search publications"
                  value={searchTerm}
                  onChange={handleSearch}
                  className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500n "
                />
              </div>
              <select
                className="bg-deep text-grey border-deep-green w-32 border-3 p-4 px-4 py-2"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
        </div>

        <Container className="flex flex-wrap items-center  place-items-center grid sm:grid-cols-1 md:grid-cols-2 ">
          {filteredData.length>0 && filteredData.map((publication => (
            <div className="mt-10 w-11/12
           rounded-3xl border-2 border-[color:var(--green-deep)] bg-white p-4 shadow-md" >
              <div className="flex items-center">
                <div className="ml-auto">{publication.year}</div>
              </div>
              <div className="flex items-center md:items-start">

                <div>
                  <h3 className=" text-[18px] font-medium">
                    {publication.title}
                  </h3>
                  <p className=" text-md font-medium text-[color:var(--green-deep)]">
                    {publication.desc}
                  </p>
                  <p className="mb-1 text-sm font-medium text-[color:var(--green-deep)]">{publication.paper}</p>
                  <br />
                  {publication.link ? <p><a href={publication.link} target="_blank" rel="noreferrer">Read more {`>>`}</a></p> : null}

                </div>
              </div>
            </div>
          )))}
        </Container>
      </div>
      <div className='mb-10'></div> {/* This is a temporary fix for the footer to not overlap the content */}
    </>
  )
}

export default Publication
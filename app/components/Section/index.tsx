import Image from 'next/image'
import { useState } from 'react'

const Section = () => {
  const [sectionTextOne, setSectionTextOne] = useState<Array<{ text: string }>>([
    {
      text: 'SMOKE billowed up at the southeast end of the Rawa Kadut reforestation camp at Way Kambas National Park in Lampung, August 9. It was 9am. Fajar Sandhika, reforestation coordinator at the Silvagama Foundation, and his colleague Arum Mutasim moved quickly to check out the source of the blaze. Hopping on a motorbike, they sped down a trail through dense foliage.',
    },
    {
      text: 'At the location, they assessed that the fire was heading west and would probably pass a spot across the Kadut river behind the camp. Since the wind was not blowing hard, they estimated the fire would reach it after 12pm. Fajar and Arum raced back to the camp.',
    },
    {
      text: '“When we reached camp, we were quickly assigned tasks,” Fajar told Tempoat Rawa Kadut two weeks ago. Three colleagues tried to break the fire’s path at the logistics road. Fajar and Arum had to go to Bungur, the closest neighborhood, to get more help and to coordinate with the Bungur Park management.',
    },
    {
      text: 'Later, Fajar and Arum again sped off on the motorbike down a 12-kilometer, wind- ing path through tall grass and another kilometer through dense forest. Before reaching Bungur, they had to cross the Sukadana river on a wooden raft and travel along a levee. In Bungur, they managed to recruit three people willing to help',
    },
  ])

  const [sectionTextTwo, setSectionTextTwo] = useState<Array<{ text: string }>>([
    {
      text: 'ON the way back, they saw that the fire was some four kilometers from the Mataram camp belonging to AleRT, the Integrated Forest Conservation Alliance. This meant that in less than three hours, the fire had spread seven kilometers from the spot they had first seen.',
    },
    {
      text: 'The team fought the fire with water pumps and branches cut from trees. The fire was finally out by 5:15pm. They also succeeded in putting out a fire on 2.5 hectares of reforestation area. Exhausted, when they got back at around 8:45pm, another fire was spotted east of the camp. The team went right back to work, extinguishing the fire some 45 minutes later.',
    },
  ])

  const [sectionTextThree, setSectionTextThree] = useState<Array<{ text: string }>>([
    {
      text: 'All through August to October, the team at Silvagama Foundation discovered this was their additional work: keeping watch over the area, putting out fires and preventing flames from spreading. Fajar’s real job is actually doing reforestation work.',
    },
    {
      text: 'The Silvagama Foundation, established on November 12, 2009, is involved in nature conservation work. At Way Kambas National Park, Silvagama works with the AleRT Consortium to carry out reforestation projects. AleRT gets its funding from the Tropical Forest Conservation Action for Sumatra (TFCA-Sumatra).',
    },
    {
      text: 'Silvagama manages a reforestation area of about 100 hectares at Rawa Kadut, with a planting time frame of three years. The area is part of the Bungur SPTN II section of the national park. More than 9,200 trees were planted in the reforestation program started on February last year. Their target is to plant 31,200 trees in three years. The trees planted are Schima wallichii evergreens, Peronema canescens evergreen bushes and Eugenia, which are all known to hold up well after forest fires. While above-ground trunks may be scorched, their roots survive and sprout new green branches in time. This is what Tempo saw at Rawa Kadut two weeks ago.',
    },
    {
      text: '“Our first plot of land was consumed by fire last year,” said Silvagama founder Timer Manurung. The area is fire-prone. Most of the fires are set by the community who believe burning makes the soil fertile and to flush out wild life, making them easier to hunt. Timer tasked Fajar to do the replanting and to control any fires. Fajar has been on duty since November 2014.',
    },
  ])

  const [sectionTextFour, setSectionTextFour] = useState<Array<{ text: string }>>([
    {
      text: 'When Fajar arrived on December a year ago, he decided not to wait for the fires to spread. He and his team quickly set up a fire break one kilometer long and 30 meters wide at Rawa Kadut. A fire break is land cleared of plants to halt the progress of fires. “I want to stop all the fires, so we don’t get a repeat of what happened last year, when we lost almost all our reforestation work,” he said.',
    },
    {
      text: 'Fire breaks are effective in fighting fires when resources are limited. Last October, a fire broke out in the area at around at 3pm. Fajar, Arum and the team worked hard to put it out. However, it was too big and their equipment was limited. They decided to use the fire breaks to prevent the fire from reaching the reforestation area. That day, the team worked until 2am. At around 10am, another blaze was spotted west of camp but was quickly ex-tinguished',
    },
    {
      text: '“It’s great working with Fajar. We coordinate well,” said Arum, whose job is to maintain contacts with residents of Bungur. Suharno, a forest police superintendent who coordinates firefighting operations at the Way Kambas National Park, agreed, as did AleRT coordinator Rama Budhiana and Mukhlisin, the Bungur section chief.',
    },
    {
      text: '“Every week, four or five of our guys work with Fajar and his team to keep guard and handle fires,” said Mukhlisin, “Fajar and his friends are great workers.”',
    },
    {
      text: 'The total land scorched by fire at Way Bungur last August came to about 1,500 hectares. By October, 2,000 hectares were totally damaged. Nevertheless, Fajar and his team’s rapid response has saved about 22,000 evergreen trees and shrubs planted by Silvagama on its 22.8 hectares of reforestation land.',
    },
  ])

  return (
    <div className='my-10 flex w-full flex-col items-center justify-center bg-white px-10 md:px-0'>
      {/* section one */}
      <div className='flex w-full flex-col space-y-3 border-b-[0.12rem] border-b-black pb-4 md:w-[80%] lg:w-[60%]'>
        <span className='text-lg font-semibold text-black'>Disalin sepenuhnya dari:</span>
        <span className='text-lg font-normal tracking-normal text-black'>
          Diterbitkan Majalah Tempo edisi 3 Januari 2016. Ditulis ulang sebagaimana aslinya.
        </span>
      </div>
      <div className='my-10 flex w-full flex-col space-y-5 md:w-[60%] lg:w-[38%]'>
        {sectionTextOne.map((item, index) => (
          <span key={index} className='text-lg font-normal leading-8 tracking-wide text-black'>
            {item.text}
          </span>
        ))}
      </div>
      {/* section two */}
      <div className='my-10 flex w-full flex-col space-y-6 md:w-[80%] lg:w-[45%]'>
        <span className='text-2xl font-bold leading-10 text-black'>
          {`“Fajar and his team were a great help. When a fire broke out somewhere, we got our first information from them. The replanting they did and their sharp monitoring of the area where they worked was a big boon for reforestation at Way Kambas.”`}
        </span>
        <div className='flex flex-col space-y-1'>
          <span className='text-lg font-bold text-black'>Suharno</span>
          <span className='text-base font-semibold tracking-normal text-black'>
            Junior Superintendent of the Forest Police, Firefighting Coordinator for Way Kambas
            National Park
          </span>
        </div>
      </div>
      <div className='my-10 flex w-full flex-col space-y-10 md:w-[60%] lg:w-[38%]'>
        {sectionTextTwo.map((item, index) => (
          <span key={index} className='text-lg font-medium leading-8 text-black'>
            {item.text}
          </span>
        ))}
      </div>
      {/* picture section */}
      <div className='my-20 flex h-full w-full bg-white md:w-[70%]'>
        <Image
          src='/photos/photos_2.jpg'
          alt='hero'
          placeholder='empty'
          blurDataURL='/photos/photos_2.jpg'
          height={0}
          width={0}
          sizes='100vw'
          style={{
            objectFit: 'contain',
            filter: 'brightness(130%)',
          }}
          className='h-full w-full'
        />
      </div>
      {/* section three & fajar bio */}
      <div className='flex w-full flex-col space-y-6 md:my-20 pl-16 md:w-[80%] lg:w-[45%]'>
        <div className='flex flex-col-reverse items-start justify-around md:flex-row'>
          <div className='flex max-w-full flex-col space-y-10 border-t-[0.1rem] border-t-black pr-0 pt-8 md:max-w-xl md:border-r-[0.1rem] md:border-t-0 md:border-r-black md:pr-8 md:pt-0'>
            {sectionTextThree.map((item, index) => (
              <span key={index} className='text-base font-medium leading-8 text-black'>
                {item.text}
              </span>
            ))}
          </div>
          {/*  fajar bio section */}
          <div className='flex max-w-full flex-col space-y-10 pb-8 pl-0 md:max-w-md md:pb-0 md:pl-8'>
            <div className='flex flex-col space-y-1.5'>
              <span className='text-xl font-bold text-primary-900'>
                Fajar Sandhika Negara
                <br></br>
                Simanjuntak
              </span>
              <span className='text-sm font-medium text-black'>Date of birth:</span>
              <span className='text-sm font-medium text-black'>Pandeglang, February 22, 1986</span>
            </div>
            <div className='flex flex-col space-y-2'>
              <span className='text-sm font-semibold text-black'>Education:</span>
              <div className='flex flex-col space-y-2.5'>
                <span className='text-sm font-medium text-black'> Informatics and </span>
                <span className='text-sm font-medium text-black'> ComputerStudies, </span>
                <span className='text-sm font-medium text-black'> Mathla’ul Anwar </span>
                <span className='text-sm font-medium text-black'> University, Banten </span>
              </div>
            </div>
            <div className='flex flex-col space-y-2'>
              <span className='text-sm font-semibold text-black'>Organizational Experience:</span>
              <ul className='flex list-disc flex-col space-y-2'>
                <li>
                  <div className='flex flex-col space-y-2.5'>
                    <span className='text-sm font-medium text-black'>
                      Student Nature Lovers Club
                    </span>
                    <span className='text-sm font-medium text-black'>
                      (Primapala) of Pandeglang,
                    </span>
                    <span className='text-sm font-medium text-black'>High School No.4</span>
                  </div>
                </li>
              </ul>
              <ul className='flex list-disc flex-col space-y-2'>
                <li>
                  <div className='flex flex-col space-y-2.5'>
                    <span className='text-sm font-medium text-black'>Nature Conservation</span>
                    <span className='text-sm font-medium text-black'>Student Association</span>
                    <span className='text-sm font-medium text-black'>
                      (Himala), Mathla’ul Anwar
                    </span>
                    <span className='text-sm font-medium text-black'>University, Banten</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className='flex flex-col space-y-2'>
              <span className='text-sm font-semibold text-black'>Career:</span>
              <div className='flex flex-col space-y-2.5'>
                <span className='text-sm font-medium text-black'>Auriga Nusantara Foundation</span>
                <span className='text-sm font-medium text-black'> (previously the Silvagama </span>
                <span className='text-sm font-medium text-black'> Foundation) (2011-to date) </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section four */}
      <div className='my-14 flex w-full flex-col space-y-6 md:my-20 md:w-[80%] lg:w-[45%]'>
        <span className='text-2xl font-bold leading-10 text-black'>
          {`“The program implementation is good, and he is always on location during fires. He coordinates well with the public, officials and the forest police on the ground. And he works closely with the head of SPTN II.”`}
        </span>
        <div className='flex flex-col space-y-1'>
          <span className='text-lg font-bold text-black'>Rama Budiana</span>
          <span className='text-base font-semibold tracking-normal text-black'>
            Coordinator, TFCA-Sumatra AleRT Consortium Program.
          </span>
        </div>
      </div>
      <div className='flex w-full flex-col space-y-10 md:w-[60%] lg:w-[38%]'>
        {sectionTextFour.map((item, index) => (
          <span key={index} className='text-lg font-medium leading-8 text-black'>
            {item.text}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Section

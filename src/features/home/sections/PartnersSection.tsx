import SectionTitle from '@/components/ui/SectionTitle';
import SeeMore from '@/components/ui/SeeMore';
import AutoScroll from 'embla-carousel-auto-scroll';
import useEmblaCarousel from 'embla-carousel-react';

const PartnersSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [AutoScroll({ playOnInit: true, stopOnMouseEnter: true, speed: 1, direction: 'forward', startDelay: 0 })]);
  return (
    <section className='mb-5'>
      <div className='container'>
        <div className='flex items-center justify-between mb-5'>
          <SectionTitle title='Our Partners' />
          <SeeMore url='/partners' />
        </div>

        <div className='embla'>
          <div
            className='embla__viewport'
            ref={emblaRef}>
            <div className='embla__container'>
              <div className='embla__slide'>
                <div className='embla__slide__number'>
                  <img
                    src='/partner.png'
                    alt=''
                    className='w-32'
                  />
                </div>
              </div>
              <div className='embla__slide'>
                <div className='embla__slide__number'>
                  <img
                    src='/partner.png'
                    alt=''
                    className='w-32'
                  />
                </div>
              </div>
              <div className='embla__slide'>
                <div className='embla__slide__number'>
                  <img
                    src='/partner.png'
                    alt=''
                    className='w-32'
                  />
                </div>
              </div>
              <div className='embla__slide'>
                <div className='embla__slide__number'>
                  <img
                    src='/partner.png'
                    alt=''
                    className='w-32'
                  />
                </div>
              </div>
              <div className='embla__slide'>
                <div className='embla__slide__number'>
                  <img
                    src='/partner.png'
                    alt=''
                    className='w-32'
                  />
                </div>
              </div>
              <div className='embla__slide'>
                <div className='embla__slide__number'>
                  <img
                    src='/partner.png'
                    alt=''
                    className='w-32'
                  />
                </div>
              </div>
              <div className='embla__slide'>
                <div className='embla__slide__number'>
                  <img
                    src='/partner.png'
                    alt=''
                    className='w-32'
                  />
                </div>
              </div>
              <div className='embla__slide'>
                <div className='embla__slide__number'>
                  <img
                    src='/partner.png'
                    alt=''
                    className='w-32'
                  />
                </div>
              </div>
              <div className='embla__slide'>
                <div className='embla__slide__number'>
                  <img
                    src='/partner.png'
                    alt=''
                    className='w-32'
                  />
                </div>
              </div>
              <div className='embla__slide'>
                <div className='embla__slide__number'>
                  <img
                    src='/partner.png'
                    alt=''
                    className='w-32'
                  />
                </div>
              </div>
              <div className='embla__slide'>
                <div className='embla__slide__number'>
                  <img
                    src='/partner.png'
                    alt=''
                    className='w-32'
                  />
                </div>
              </div>
              <div className='embla__slide'>
                <div className='embla__slide__number'>
                  <img
                    src='/partner.png'
                    alt=''
                    className='w-32'
                  />
                </div>
              </div>
              <div className='embla__slide'>
                <div className='embla__slide__number'>
                  <img
                    src='/partner.png'
                    alt=''
                    className='w-32'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

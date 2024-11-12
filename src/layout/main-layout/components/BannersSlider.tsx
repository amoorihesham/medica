import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { EmblaOptionsType } from 'embla-carousel';
type PropType = {
  slides?: number[];
  options?: EmblaOptionsType;
};
const BannersSlider: React.FC<PropType> = (props) => {
  return (
    <div className='container'>
      <Carousel
        className='rounded-xl overflow-hidden'
        plugins={[Autoplay({ delay: 4000 })]}>
        <CarouselContent>
          <CarouselItem>
            <img
              src='/banner.png'
              alt='sas'
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src='/banner.png'
              alt='sas'
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src='/banner.png'
              alt='sas'
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default BannersSlider;

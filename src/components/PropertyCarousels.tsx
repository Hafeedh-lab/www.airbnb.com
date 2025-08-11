import React from 'react';
import { PropertyCarousel } from './PropertyCarousel';
import { propertyCarousels } from '../data/properties';

export function PropertyCarousels() {
  return (
    <div className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
      <div className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] before:md:accent-auto before:md:box-border before:md:text-neutral-800 before:md:flex before:md:text-sm before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[20.02px] before:md:list-outside before:md:list-disc before:md:text-start before:md:indent-[0px] before:md:normal-case before:md:visible before:md:border-separate before:md:font-airbnb_cereal_vf after:md:accent-auto after:md:box-border after:md:text-neutral-800 after:md:flex after:md:text-sm after:md:not-italic after:md:normal-nums after:md:font-normal after:md:tracking-[normal] after:md:leading-[20.02px] after:md:list-outside after:md:list-disc after:md:text-start after:md:indent-[0px] after:md:normal-case after:md:visible after:md:border-separate after:md:font-airbnb_cereal_vf">
        <div className="box-content block md:aspect-auto md:box-border md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          {propertyCarousels.map((carousel) => (
            <PropertyCarousel key={carousel.id} carousel={carousel} />
          ))}
        </div>
      </div>
    </div>
  );
}

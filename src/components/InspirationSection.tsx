import React, { useState } from 'react';
import { inspirationTabs, inspirationLinks } from '../data/inspiration';

export function InspirationSection() {
  const [activeTab, setActiveTab] = useState('popular');
  const [showMore, setShowMore] = useState(false);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setShowMore(false);
  };

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const visibleLinks = showMore ? inspirationLinks : inspirationLinks.slice(0, 17);

  return (
    <div className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] before:md:accent-auto before:md:box-border before:md:text-neutral-800 before:md:flex before:md:text-sm before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[20.02px] before:md:list-outside before:md:list-disc before:md:text-start before:md:indent-[0px] before:md:normal-case before:md:visible before:md:border-separate before:md:font-airbnb_cereal_vf after:md:accent-auto after:md:box-border after:md:text-neutral-800 after:md:flex after:md:text-sm after:md:not-italic after:md:normal-nums after:md:font-normal after:md:tracking-[normal] after:md:leading-[20.02px] after:md:list-outside after:md:list-disc after:md:text-start after:md:indent-[0px] after:md:normal-case after:md:visible after:md:border-separate after:md:font-airbnb_cereal_vf">
      <div className="box-content block md:aspect-auto md:box-border md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <div className="bg-transparent box-content md:aspect-auto md:bg-neutral-100 md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <div className="box-content max-w-none mx-0 p-0 md:aspect-auto md:box-border md:max-w-[1760px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mx-auto md:px-8 md:py-12 md:scroll-m-0 md:scroll-p-[auto]">
            <div className="box-content col-start-auto md:aspect-auto md:box-border md:col-start-2 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <h2 className="text-2xl font-bold box-content tracking-[normal] leading-[normal] mb-0 md:text-[22px] md:font-medium md:aspect-auto md:box-border md:tracking-[-0.22px] md:leading-[26px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mb-2 md:scroll-m-0 md:scroll-p-[auto]">Inspiration for future getaways</h2>
              <div className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="static box-content md:relative md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <div className="box-content mx-0 px-0 md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-auto md:[mask-position:0%] md:bg-left-top md:-mx-3 md:px-3 md:scroll-m-0 md:scroll-p-[auto]">
                    <div role="tablist" className="box-content block text-wrap md:aspect-auto md:box-border md:flex md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      {inspirationTabs.map((tab, index) => (
                        <button 
                          key={tab.id}
                          type="button" 
                          role="tab" 
                          className={index === 0 ? "static font-normal bg-zinc-100 inline-block leading-[normal] min-h-0 min-w-0 text-center text-wrap m-0 rounded-none md:relative md:font-medium md:aspect-auto md:bg-transparent md:block md:leading-[18px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:-ml-2.5 md:mr-1.5 md:my-1.5 md:p-2.5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-lg after:md:accent-auto after:md:bg-neutral-800 after:md:box-border after:md:text-neutral-800 after:md:block after:md:text-sm after:md:not-italic after:md:normal-nums after:md:font-medium after:md:h-0.5 after:md:tracking-[normal] after:md:leading-[18px] after:md:list-outside after:md:list-disc after:md:absolute after:md:text-center after:md:indent-[0px] after:md:normal-case after:md:text-nowrap after:md:visible after:md:w-[calc(100%_-_20px)] after:md:border-separate after:md:left-2.5 after:md:-bottom-1.5 after:md:font-airbnb_cereal_vf" : index === inspirationTabs.length - 1 ? "static text-black font-normal bg-zinc-100 inline-block leading-[normal] min-h-0 min-w-0 text-center text-wrap my-0 rounded-none md:relative md:text-neutral-500 md:font-medium md:aspect-auto md:bg-transparent md:block md:leading-[18px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:my-1.5 md:p-2.5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-lg" : "static text-black font-normal bg-zinc-100 inline-block leading-[normal] min-h-0 min-w-0 text-center text-wrap mr-0 my-0 rounded-none md:relative md:text-neutral-500 md:font-medium md:aspect-auto md:bg-transparent md:block md:leading-[18px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:mr-1.5 md:my-1.5 md:p-2.5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-lg"}
                          onClick={() => handleTabClick(tab.id)}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="bg-transparent box-content h-auto md:aspect-auto md:bg-zinc-300 md:box-border md:h-px md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></div>
                </div>
                <div className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <div role="tabpanel" className={activeTab === 'popular' ? "box-content pt-0 md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pt-8 md:scroll-m-0 md:scroll-p-[auto]" : "box-content block pt-0 md:aspect-auto md:box-border md:hidden md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pt-8 md:scroll-m-0 md:scroll-p-[auto]"}>
                    <ul className="box-content gap-x-[normal] block grid-cols-none list-disc gap-y-[normal] pl-10 md:aspect-auto md:box-border md:gap-x-2 md:grid md:grid-cols-[repeat(6,minmax(0px,1fr))] md:list-none md:overscroll-x-auto md:overscroll-y-auto md:gap-y-6 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-0 md:scroll-m-0 md:scroll-p-[auto]">
                      {visibleLinks.map((link) => (
                        <li key={link.id} className="box-content min-h-0 min-w-0 text-left md:aspect-auto md:box-border md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <a href={link.href} className="text-black box-content inline flex-row leading-[normal] text-clip text-wrap md:text-neutral-500 md:aspect-auto md:box-border md:flex md:flex-col md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <span className="text-black font-normal box-content inline min-h-0 min-w-0 text-clip text-wrap md:text-neutral-800 md:font-medium md:aspect-auto md:box-border md:block md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">{link.location} </span>
                            {link.type}
                          </a>
                        </li>
                      ))}
                      <li className="box-content min-h-0 min-w-0 text-left md:aspect-auto md:box-border md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <button type="button" className="static font-normal [align-items:normal] bg-zinc-100 gap-x-[normal] inline-block leading-[normal] gap-y-[normal] text-center rounded-none md:relative md:font-medium md:items-center md:aspect-auto md:bg-transparent md:gap-x-1 md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-1 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-lg" onClick={handleShowMore}>
                          <span className="box-content inline min-h-0 min-w-0 md:aspect-auto md:box-border md:block md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">{showMore ? 'Show less' : 'Show more'}</span>
                          <img src="https://c.animaapp.com/me7emf7wZc0xCu/assets/icon-10.svg" alt="Icon" className="box-content h-auto align-middle w-auto md:aspect-auto md:box-border md:h-3 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-3 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
                        </button>
                      </li>
                      {showMore && inspirationLinks.slice(17).map((link) => (
                        <li key={link.id} className="box-content list-item text-left md:aspect-auto md:box-border md:hidden md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <a href={link.href} className="text-black box-content inline flex-row leading-[normal] text-clip text-wrap md:text-neutral-500 md:aspect-auto md:box-border md:flex md:flex-col md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <span className="text-black font-normal box-content inline text-clip text-wrap md:text-neutral-800 md:font-medium md:aspect-auto md:box-border md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">{link.location} </span>
                            {link.type}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {inspirationTabs.slice(1).map((tab) => (
                    <div key={tab.id} role="tabpanel" className="box-content block pt-0 md:aspect-auto md:box-border md:hidden md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pt-8 md:scroll-m-0 md:scroll-p-[auto]">
                      <ul className="box-content gap-x-[normal] block grid-cols-none list-disc gap-y-[normal] pl-10 md:aspect-auto md:box-border md:gap-x-2 md:grid md:grid-cols-[repeat(6,minmax(0px,1fr))] md:list-none md:overscroll-x-auto md:overscroll-y-auto md:gap-y-6 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-0 md:scroll-m-0 md:scroll-p-[auto]">
                        <li className="box-content list-item text-left md:aspect-auto md:box-border md:hidden md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <button type="button" className="static font-normal [align-items:normal] bg-zinc-100 gap-x-[normal] inline-block leading-[normal] gap-y-[normal] text-center rounded-none md:relative md:font-medium md:items-center md:aspect-auto md:bg-transparent md:gap-x-1 md:flex md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-1 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-lg">
                            <span className="box-content inline md:aspect-auto md:box-border md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">Show more</span>
                            <img src="https://c.animaapp.com/me7emf7wZc0xCu/assets/icon-10.svg" alt="Icon" className="box-content h-auto align-middle w-auto md:aspect-auto md:box-border md:h-3 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-3 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
                          </button>
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

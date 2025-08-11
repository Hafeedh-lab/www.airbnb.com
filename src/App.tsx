import React from 'react';
import { Header } from './components/Header';
import { PropertyCarousels } from './components/PropertyCarousels';
import { InspirationSection } from './components/InspirationSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="text-neutral-800 text-sm not-italic normal-nums font-normal accent-auto bg-white box-border block tracking-[normal] leading-[20.02px] list-outside list-disc text-start indent-[0px] normal-case visible border-separate font-airbnb_cereal_vf">
      <div className="box-border">
        <span className="box-border"></span>
      </div>
      <div className="box-border"></div>
      <div role="alert" className="box-border"></div>
      <div className="box-border"></div>
      <div className="box-border">
        <div className="box-border">
          <div className="box-border contents">
            <div className="box-border">
              <div className="box-border">
                <div className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <div className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    <div className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></div>
                    <div className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <h1 className="static text-[32px] font-bold box-content h-auto leading-[normal] text-wrap w-auto mb-0 md:absolute md:text-[28px] md:aspect-auto md:box-border md:h-px md:leading-[40.04px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-px md:overflow-clip md:[mask-position:0%] md:bg-left-top md:mb-[15px] md:scroll-m-0 md:scroll-p-[auto]">Airbnb homepage</h1>
                      <div className="static box-content w-auto z-auto top-auto md:sticky md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:z-[100] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:top-0">
                        <div className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] before:md:accent-auto before:md:box-border before:md:text-neutral-800 before:md:flex before:md:text-sm before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[20.02px] before:md:list-outside before:md:list-disc before:md:text-start before:md:indent-[0px] before:md:normal-case before:md:visible before:md:border-separate before:md:font-airbnb_cereal_vf after:md:accent-auto after:md:box-border after:md:text-neutral-800 after:md:flex after:md:text-sm after:md:not-italic after:md:normal-nums after:md:font-normal after:md:tracking-[normal] after:md:leading-[20.02px] after:md:list-outside after:md:list-disc after:md:text-start after:md:indent-[0px] after:md:normal-case after:md:visible after:md:border-separate after:md:font-airbnb_cereal_vf">
                          <div className="box-content block md:aspect-auto md:box-border md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <Header />
                            <div className="static box-content block justify-normal w-auto z-auto md:fixed md:aspect-auto md:box-border md:flex md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:z-[1] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></div>
                            <div className="box-content transform-none origin-[50%_50%] md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-y-[120px] md:origin-[50%_0%] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              <main className="box-content mb-0 md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mb-[49px] md:scroll-m-0 md:scroll-p-[auto]">
                                <PropertyCarousels />
                              </main>
                              <div className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                <InspirationSection />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <div className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] before:md:accent-auto before:md:box-border before:md:text-neutral-800 before:md:flex before:md:text-sm before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[20.02px] before:md:list-outside before:md:list-disc before:md:text-start before:md:indent-[0px] before:md:normal-case before:md:visible before:md:border-separate before:md:font-airbnb_cereal_vf after:md:accent-auto after:md:box-border after:md:text-neutral-800 after:md:flex after:md:text-sm after:md:not-italic after:md:normal-nums after:md:font-normal after:md:tracking-[normal] after:md:leading-[20.02px] after:md:list-outside after:md:list-disc after:md:text-start after:md:indent-[0px] after:md:normal-case after:md:visible after:md:border-separate after:md:font-airbnb_cereal_vf">
        <div className="box-content block md:aspect-auto md:box-border md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></div>
      </div>
      <div className="static box-content max-w-none w-auto z-auto left-auto bottom-auto md:fixed md:aspect-auto md:box-border md:max-w-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[375px] md:z-[2001] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-8 md:bottom-[60px]"></div>
      <div className="box-content block md:aspect-auto md:box-border md:hidden md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></div>
      <div className="box-border"></div>
      <div className="box-border"></div>
      <div className="box-border"></div>
      <div className="static box-content h-auto w-auto z-auto top-auto md:absolute md:aspect-auto md:box-border md:h-px md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:z-[-1] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:top-0"></div>
      <div className="static box-content h-auto w-auto z-auto top-auto md:absolute md:aspect-auto md:box-border md:h-px md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:z-[-1] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:top-0"></div>
    </div>
  );
}

export default App;

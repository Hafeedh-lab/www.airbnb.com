import React from 'react';
import { footerSections, footerLinks, socialLinks } from '../data/footer';

export function Footer() {
  return (
    <div className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] before:md:accent-auto before:md:box-border before:md:text-neutral-800 before:md:flex before:md:text-sm before:md:not-italic before:md:normal-nums before:md:font-normal before:md:tracking-[normal] before:md:leading-[20.02px] before:md:list-outside before:md:list-disc before:md:text-start before:md:indent-[0px] before:md:normal-case before:md:visible before:md:border-separate before:md:font-airbnb_cereal_vf after:md:accent-auto after:md:box-border after:md:text-neutral-800 after:md:flex after:md:text-sm after:md:not-italic after:md:normal-nums after:md:font-normal after:md:tracking-[normal] after:md:leading-[20.02px] after:md:list-outside after:md:list-disc after:md:text-start after:md:indent-[0px] after:md:normal-case after:md:visible after:md:border-separate after:md:font-airbnb_cereal_vf">
      <footer className="bg-transparent box-content md:aspect-auto md:bg-neutral-100 md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <div className="box-content max-w-none mx-0 px-0 md:aspect-auto md:box-border md:max-w-[1920px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mx-auto md:px-8 md:scroll-m-0 md:scroll-p-[auto]">
          <div className="box-content col-start-auto md:aspect-auto md:box-border md:col-start-2 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <span className="static box-content inline h-auto text-wrap w-auto md:absolute md:aspect-auto md:box-border md:block md:h-px md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-px md:overflow-clip md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <h2 className="text-2xl font-bold box-content leading-[normal] text-wrap mb-0 md:text-[21px] md:aspect-auto md:box-border md:leading-[30.03px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:mb-[15px] md:scroll-m-0 md:scroll-p-[auto]">Site Footer</h2>
            </span>
            <div className="box-content gap-x-[normal] block grid-cols-none py-0 md:aspect-auto md:box-border md:gap-x-4 md:grid md:grid-cols-[repeat(12,minmax(0px,1fr))] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:py-8 md:scroll-m-0 md:scroll-p-[auto]">
              {footerSections.map((section) => (
                <section key={section.id} className="box-content col-start-auto min-h-0 min-w-0 md:aspect-auto md:box-border md:col-start-[span_4] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <h3 className="font-bold box-content leading-[normal] mb-0 md:font-medium md:aspect-auto md:box-border md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mb-4 md:scroll-m-0 md:scroll-p-[auto]">{section.title}</h3>
                  <ul className="box-content gap-x-[normal] block list-disc gap-y-[normal] pl-10 md:aspect-auto md:box-border md:gap-x-4 md:grid md:list-none md:overscroll-x-auto md:overscroll-y-auto md:gap-y-4 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-0 md:scroll-m-0 md:scroll-p-[auto]">
                    {section.links.map((link) => (
                      <li key={link.id} className="box-content min-h-0 min-w-0 text-left md:aspect-auto md:box-border md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <a href={link.href} className="static box-content leading-[normal] rounded-none md:relative md:aspect-auto md:box-border md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-sm">{link.text}</a>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
            <div className="box-content py-0 border-t-0 border-black md:aspect-auto md:border-b-neutral-800 md:border-l-neutral-800 md:border-r-neutral-800 md:border-t-gray-200 md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:py-6 md:scroll-m-0 md:scroll-p-[auto] md:border-t">
              <span className="static box-content inline h-auto text-wrap w-auto md:absolute md:aspect-auto md:box-border md:block md:h-px md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-px md:overflow-clip md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">Footer section</span>
              <section className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="box-content block md:aspect-auto md:box-border md:hidden md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <div className="box-content ml-0 mb-0 md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:-ml-2 md:mb-2 md:scroll-m-0 md:scroll-p-[auto]">
                    <div className="box-content block md:aspect-auto md:box-border md:flex md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <span className="box-content inline mr-0 md:aspect-auto md:box-border md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mr-1 md:scroll-m-0 md:scroll-p-[auto]">
                        <button aria-label="Choose a language" type="button" className="static font-normal bg-zinc-100 leading-[normal] text-center px-1.5 py-px rounded-none md:relative md:font-medium md:aspect-auto md:bg-transparent md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:px-2 md:py-1.5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-lg">
                          <span className="box-content inline md:aspect-auto md:box-border md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <span className="[align-items:normal] box-content gap-x-[normal] inline justify-normal gap-y-[normal] align-baseline md:items-center md:aspect-auto md:box-border md:gap-x-2 md:inline-flex md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-top md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              <img src="https://c.animaapp.com/me7emf7wZc0xCu/assets/icon-4.svg" alt="Icon" className="box-content h-auto align-middle w-auto md:aspect-auto md:box-border md:h-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-4 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
                              English (US)
                            </span>
                          </span>
                        </button>
                      </span>
                      <span className="box-content inline md:aspect-auto md:box-border md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <button aria-label="Choose a currency" type="button" className="static font-normal bg-zinc-100 leading-[normal] text-center px-1.5 py-px rounded-none md:relative md:font-medium md:aspect-auto md:bg-transparent md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:px-2 md:py-1.5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-lg">
                          <span className="box-content inline md:aspect-auto md:box-border md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <div className="box-content gap-x-[normal] block gap-y-[normal] md:aspect-auto md:box-border md:gap-x-2 md:flex md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              <span className="box-content inline md:aspect-auto md:box-border md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">$</span>
                              <span className="box-content inline md:aspect-auto md:box-border md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">USD</span>
                            </div>
                          </span>
                        </button>
                      </span>
                    </div>
                  </div>
                  <div className="box-content ml-0 mb-0 py-0 md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:-ml-2 md:mb-3 md:py-2 md:scroll-m-0 md:scroll-p-[auto]">
                    <ul className="box-content gap-x-[normal] block leading-[normal] list-disc gap-y-[normal] ml-0 pl-10 md:aspect-auto md:box-border md:gap-x-5 md:flex md:leading-[0px] md:list-none md:overscroll-x-auto md:overscroll-y-auto md:gap-y-5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-2 md:pl-0 md:scroll-m-0 md:scroll-p-[auto]">
                      {socialLinks.map((link, index) => (
                        <li key={link.id} className={index === socialLinks.length - 1 ? "box-content text-left md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" : "box-content text-left mr-0 md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mr-1 md:scroll-m-0 md:scroll-p-[auto]"}>
                          <a aria-label={link.ariaLabel} href={link.href} className="static box-content inline rounded-none md:relative md:aspect-auto md:box-border md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] before:md:accent-auto before:md:box-border before:md:text-neutral-800 before:md:block before:md:text-sm before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-8 before:md:tracking-[normal] before:md:leading-[0px] before:md:list-outside before:md:list-none before:md:absolute before:md:text-left before:md:indent-[0px] before:md:normal-case before:md:visible before:md:w-8 before:md:rounded-[50%] before:md:border-separate before:md:left-2/4 before:md:top-2/4 before:md:font-airbnb_cereal_vf">
                            <span className="static [align-items:normal] box-content inline justify-normal md:relative md:items-center md:aspect-auto md:box-border md:flex md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              <img src={link.icon} alt="Icon" className="box-content h-auto align-middle w-auto md:aspect-auto md:box-border md:h-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-4 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="box-content text-start md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    <div className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:-m-1 md:p-1 md:scroll-m-0 md:scroll-p-[auto]">
                      <div className="box-content block leading-[normal] md:aspect-auto md:box-border md:inline-block md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">© 2025 Airbnb, Inc.</div>
                      <div className="box-content block md:aspect-auto md:box-border md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <span className="box-content inline md:aspect-auto md:box-border md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="box-content inline leading-[normal] text-start px-0 md:aspect-auto md:box-border md:inline-block md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:px-2 md:scroll-m-0 md:scroll-p-[auto]">·</span>
                        </span>
                        <span className="box-content inline leading-[normal] md:aspect-auto md:box-border md:inline-block md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <ol className="box-content block list-decimal pl-10 md:aspect-auto md:box-border md:inline md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-0 md:scroll-m-0 md:scroll-p-[auto]">
                            {footerLinks.map((link, index) => (
                              <li key={link.id} className="box-content list-item md:aspect-auto md:box-border md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                {index > 0 && (
                                  <span className="box-content inline md:aspect-auto md:box-border md:hidden md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <span className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                      <span className="box-content inline text-start px-0 md:aspect-auto md:box-border md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:px-2 md:scroll-m-0 md:scroll-p-[auto]">·</span>
                                    </span>
                                  </span>
                                )}
                                <a href={link.href} className="static box-content rounded-none md:relative md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-sm">
                                  {link.text === 'Your Privacy Choices' ? (
                                    <span className="box-content text-wrap md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                      {link.text}
                                      <span className="box-content text-wrap align-baseline ml-0 md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-middle md:[mask-position:0%] md:bg-left-top md:ml-2 md:scroll-m-0 md:scroll-p-[auto]">
                                        <img src="https://c.animaapp.com/me7emf7wZc0xCu/assets/icon-14.svg" alt="Icon" className="box-content block h-auto text-wrap align-middle w-auto md:aspect-auto md:box-border md:inline md:h-3 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-baseline md:w-[26px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
                                      </span>
                                    </span>
                                  ) : (
                                    link.text
                                  )}
                                </a>
                                {index < footerLinks.length - 1 && (
                                  <span className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <span className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                      <span className="box-content inline text-start px-0 md:aspect-auto md:box-border md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:px-2 md:scroll-m-0 md:scroll-p-[auto]">·</span>
                                    </span>
                                  </span>
                                )}
                              </li>
                            ))}
                          </ol>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Additional footer sections with different layouts */}
                <div className="box-content block md:aspect-auto md:box-border md:hidden md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <div className="box-content block justify-normal mb-0 md:aspect-auto md:box-border md:flex md:justify-between md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mb-2 md:scroll-m-0 md:scroll-p-[auto]">
                    <div className="box-content ml-0 md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:-ml-2 md:scroll-m-0 md:scroll-p-[auto]">
                      <div className="box-content block md:aspect-auto md:box-border md:flex md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <span className="box-content inline mr-0 md:aspect-auto md:box-border md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mr-1 md:scroll-m-0 md:scroll-p-[auto]">
                          <button aria-label="Choose a language" type="button" className="static font-normal bg-zinc-100 leading-[normal] text-center px-1.5 py-px rounded-none md:relative md:font-medium md:aspect-auto md:bg-transparent md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:px-2 md:py-1.5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-lg">
                            <span className="box-content inline md:aspect-auto md:box-border md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              <span className="[align-items:normal] box-content gap-x-[normal] inline justify-normal gap-y-[normal] align-baseline md:items-center md:aspect-auto md:box-border md:gap-x-2 md:inline-flex md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-top md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                <img src="https://c.animaapp.com/me7emf7wZc0xCu/assets/icon-4.svg" alt="Icon" className="box-content h-auto align-middle w-auto md:aspect-auto md:box-border md:h-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-4 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
                                English (US)
                              </span>
                            </span>
                          </button>
                        </span>
                        <span className="box-content inline md:aspect-auto md:box-border md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <button aria-label="Choose a currency" type="button" className="static font-normal bg-zinc-100 leading-[normal] text-center px-1.5 py-px rounded-none md:relative md:font-medium md:aspect-auto md:bg-transparent md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:px-2 md:py-1.5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-lg">
                            <span className="box-content inline md:aspect-auto md:box-border md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              <div className="box-content gap-x-[normal] block gap-y-[normal] md:aspect-auto md:box-border md:gap-x-2 md:flex md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                <span className="box-content inline md:aspect-auto md:box-border md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">$</span>
                                <span className="box-content inline md:aspect-auto md:box-border md:block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">USD</span>
                              </div>
                            </span>
                          </button>
                        </span>
                      </div>
                    </div>
                    <div className="box-content py-0 md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:py-2 md:scroll-m-0 md:scroll-p-[auto]">
                      <ul className="box-content gap-x-[normal] block leading-[normal] list-disc gap-y-[normal] ml-0 pl-10 md:aspect-auto md:box-border md:gap-x-5 md:flex md:leading-[0px] md:list-none md:overscroll-x-auto md:overscroll-y-auto md:gap-y-5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-2 md:pl-0 md:scroll-m-0 md:scroll-p-[auto]">
                        {socialLinks.map((link, index) => (
                          <li key={`${link.id}-2`} className={index === socialLinks.length - 1 ? "box-content text-left md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" : "box-content text-left mr-0 md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mr-1 md:scroll-m-0 md:scroll-p-[auto]"}>
                            <a aria-label={link.ariaLabel} href={link.href} className="static box-content inline rounded-none md:relative md:aspect-auto md:box-border md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] before:md:accent-auto before:md:box-border before:md:text-neutral-800 before:md:block before:md:text-sm before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-8 before:md:tracking-[normal] before:md:leading-[0px] before:md:list-outside before:md:list-none before:md:absolute before:md:text-left before:md:indent-[0px] before:md:normal-case before:md:visible before:md:w-8 before:md:rounded-[50%] before:md:border-separate before:md:left-2/4 before:md:top-2/4 before:md:font-airbnb_cereal_vf">
                              <span className="static [align-items:normal] box-content inline justify-normal md:relative md:items-center md:aspect-auto md:box-border md:flex md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                <img src={link.icon} alt="Icon" className="box-content h-auto align-middle w-auto md:aspect-auto md:box-border md:h-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-4 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <div className="box-content text-start md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    <div className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:-m-1 md:p-1 md:scroll-m-0 md:scroll-p-[auto]">
                      <div className="box-content block leading-[normal] md:aspect-auto md:box-border md:inline-block md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">© 2025 Airbnb, Inc.</div>
                      <div className="box-content block md:aspect-auto md:box-border md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <span className="box-content inline md:aspect-auto md:box-border md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="box-content inline leading-[normal] text-start px-0 md:aspect-auto md:box-border md:inline-block md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:px-2 md:scroll-m-0 md:scroll-p-[auto]">·</span>
                        </span>
                        <span className="box-content inline leading-[normal] md:aspect-auto md:box-border md:inline-block md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <ol className="box-content block list-decimal pl-10 md:aspect-auto md:box-border md:inline md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-0 md:scroll-m-0 md:scroll-p-[auto]">
                            {footerLinks.map((link, index) => (
                              <li key={`${link.id}-2`} className="box-content list-item md:aspect-auto md:box-border md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                {index > 0 && (
                                  <span className="box-content inline md:aspect-auto md:box-border md:hidden md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <span className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                      <span className="box-content inline text-start px-0 md:aspect-auto md:box-border md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:px-2 md:scroll-m-0 md:scroll-p-[auto]">·</span>
                                    </span>
                                  </span>
                                )}
                                <a href={link.href} className="static box-content rounded-none md:relative md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-sm">
                                  {link.text === 'Your Privacy Choices' ? (
                                    <span className="box-content text-wrap md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                      {link.text}
                                      <span className="box-content text-wrap align-baseline ml-0 md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-middle md:[mask-position:0%] md:bg-left-top md:ml-2 md:scroll-m-0 md:scroll-p-[auto]">
                                        <img src="https://c.animaapp.com/me7emf7wZc0xCu/assets/icon-14.svg" alt="Icon" className="box-content block h-auto text-wrap align-middle w-auto md:aspect-auto md:box-border md:inline md:h-3 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-baseline md:w-[26px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
                                      </span>
                                    </span>
                                  ) : (
                                    link.text
                                  )}
                                </a>
                                {index < footerLinks.length - 1 && (
                                  <span className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <span className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                      <span className="box-content inline text-start px-0 md:aspect-auto md:box-border md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:px-2 md:scroll-m-0 md:scroll-p-[auto]">·</span>
                                    </span>
                                  </span>
                                )}
                              </li>
                            ))}
                          </ol>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="[align-items:normal] box-content block justify-normal md:items-center md:aspect-auto md:box-border md:flex md:justify-between md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <div className="box-content min-h-0 min-w-0 text-start md:aspect-auto md:box-border md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    <div className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:-m-1 md:p-1 md:scroll-m-0 md:scroll-p-[auto]">
                      <div className="box-content block leading-[normal] md:aspect-auto md:box-border md:inline-block md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">© 2025 Airbnb, Inc.</div>
                      <div className="box-content block md:aspect-auto md:box-border md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <span className="box-content inline md:aspect-auto md:box-border md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="box-content inline leading-[normal] text-start px-0 md:aspect-auto md:box-border md:inline-block md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:px-2 md:scroll-m-0 md:scroll-p-[auto]">·</span>
                        </span>
                        <span className="box-content inline leading-[normal] md:aspect-auto md:box-border md:inline-block md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <ol className="box-content block list-decimal pl-10 md:aspect-auto md:box-border md:inline md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-0 md:scroll-m-0 md:scroll-p-[auto]">
                            {footerLinks.map((link, index) => (
                              <li key={`${link.id}-3`} className="box-content list-item md:aspect-auto md:box-border md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                {index > 0 && (
                                  <span className="box-content inline md:aspect-auto md:box-border md:hidden md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <span className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                      <span className="box-content inline text-start px-0 md:aspect-auto md:box-border md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:px-2 md:scroll-m-0 md:scroll-p-[auto]">·</span>
                                    </span>
                                  </span>
                                )}
                                <a href={link.href} className="static box-content rounded-none md:relative md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-sm">
                                  {link.text === 'Your Privacy Choices' ? (
                                    <span className="box-content text-wrap md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                      {link.text}
                                      <span className="box-content text-wrap align-baseline ml-0 md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-middle md:[mask-position:0%] md:bg-left-top md:ml-2 md:scroll-m-0 md:scroll-p-[auto]">
                                        <img src="https://c.animaapp.com/me7emf7wZc0xCu/assets/icon-14.svg" alt="Icon" className="box-content block h-auto text-wrap align-middle w-auto md:aspect-auto md:box-border md:inline md:h-3 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-baseline md:w-[26px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
                                      </span>
                                    </span>
                                  ) : (
                                    link.text
                                  )}
                                </a>
                                {index < footerLinks.length - 1 && (
                                  <span className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <span className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                      <span className="box-content inline text-start px-0 md:aspect-auto md:box-border md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:px-2 md:scroll-m-0 md:scroll-p-[auto]">·</span>
                                    </span>
                                  </span>
                                )}
                              </li>
                            ))}
                          </ol>
                        </span>
                      </div>
                    </div>
                    <div className="box-content block min-h-0 min-w-0 md:aspect-auto md:box-border md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <div className="box-content min-h-0 min-w-0 ml-0 md:aspect-auto md:box-border md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:-ml-2 md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content block md:aspect-auto md:box-border md:flex md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="box-content inline min-h-0 min-w-0 mr-0 md:aspect-auto md:box-border md:block md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mr-1 md:scroll-m-0 md:scroll-p-[auto]">
                            <button aria-label="Choose a language" type="button" className="static font-normal bg-zinc-100 leading-[normal] text-center px-1.5 py-px rounded-none md:relative md:font-medium md:aspect-auto md:bg-transparent md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:px-2 md:py-1.5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-lg">
                              <span className="box-content inline md:aspect-auto md:box-border md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                <span className="[align-items:normal] box-content gap-x-[normal] inline justify-normal gap-y-[normal] align-baseline md:items-center md:aspect-auto md:box-border md:gap-x-2 md:inline-flex md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-top md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  <img src="https://c.animaapp.com/me7emf7wZc0xCu/assets/icon-4.svg" alt="Icon" className="box-content h-auto align-middle w-auto md:aspect-auto md:box-border md:h-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-4 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
                                  English (US)
                                </span>
                              </span>
                            </button>
                          </span>
                          <span className="box-content inline min-h-0 min-w-0 md:aspect-auto md:box-border md:block md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <button aria-label="Choose a currency" type="button" className="static font-normal bg-zinc-100 leading-[normal] text-center px-1.5 py-px rounded-none md:relative md:font-medium md:aspect-auto md:bg-transparent md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:px-2 md:py-1.5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-lg">
                              <span className="box-content inline md:aspect-auto md:box-border md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                <div className="box-content gap-x-[normal] block gap-y-[normal] md:aspect-auto md:box-border md:gap-x-2 md:flex md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  <span className="box-content inline min-h-0 min-w-0 md:aspect-auto md:box-border md:block md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">$</span>
                                  <span className="box-content inline min-h-0 min-w-0 md:aspect-auto md:box-border md:block md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">USD</span>
                                </div>
                              </span>
                            </button>
                          </span>
                        </div>
                      </div>
                      <div className="[align-items:normal] box-content block min-h-0 min-w-0 ml-0 md:items-center md:aspect-auto md:box-border md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-1 md:scroll-m-0 md:scroll-p-[auto]">
                        <ul className="box-content gap-x-[normal] block leading-[normal] list-disc min-h-0 min-w-0 gap-y-[normal] ml-0 pl-10 md:aspect-auto md:box-border md:gap-x-5 md:flex md:leading-[0px] md:list-none md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-2 md:pl-0 md:scroll-m-0 md:scroll-p-[auto]">
                          {socialLinks.map((link, index) => (
                            <li key={`${link.id}-3`} className={index === socialLinks.length - 1 ? "box-content min-h-0 min-w-0 text-left md:aspect-auto md:box-border md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" : "box-content min-h-0 min-w-0 text-left mr-0 md:aspect-auto md:box-border md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mr-1 md:scroll-m-0 md:scroll-p-[auto]"}>
                              <a aria-label={link.ariaLabel} href={link.href} className="static box-content inline rounded-none md:relative md:aspect-auto md:box-border md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] before:md:accent-auto before:md:box-border before:md:text-neutral-800 before:md:block before:md:text-sm before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-8 before:md:tracking-[normal] before:md:leading-[0px] before:md:list-outside before:md:list-none before:md:absolute before:md:text-left before:md:indent-[0px] before:md:normal-case before:md:-translate-x-4 before:md:-translate-y-4 before:md:visible before:md:w-8 before:md:rounded-[50%] before:md:border-separate before:md:left-2/4 before:md:top-2/4 before:md:font-airbnb_cereal_vf">
                                <span className="static [align-items:normal] box-content inline justify-normal md:relative md:items-center md:aspect-auto md:box-border md:flex md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  <img src={link.icon} alt="Icon" className="box-content h-auto align-middle w-auto md:aspect-auto md:box-border md:h-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-4 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
                                </span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

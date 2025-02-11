import React from 'react'

function Footer() {
  return (
    <>
      <footer id="footer-nav" className="h-20 relative p-4 bg-black  font-thin">
        <div className=" h-14  text-footer-text-color absolute inset-0 mx-auto my-auto flex justify-around  ">
          <div className="flex  p-4 mx-auto text-center ">
            {/* <span className="text-green-color mr-1"> منا راد</span> */}
            <span className="text-green-color mr-2  text-center"> M.RAD</span>
            <div>ساخته شده توسط</div>
          </div>

          <div className=" hidden md:grid grid-cols-4   p-4  mx-auto text-center divide-gray-400">
            <div className="  hover:text-green-color mr-3 ml-3  ">محصولات</div>
            <div className=" hover:text-green-color mr-3 ml-3">کارفرمایان</div>
            <div className="  hover:text-green-color mr-3 ml-3">درباره ما</div>
            <div className="  hover:text-green-color mr-3 ml-3  ">محصولات</div>
          </div>
          {/* <div>
            <ul className="grid grid-cols-4 gap-3 divide-x divide-gray-400 p-4 mx-auto text-center">
              <li className="  hover:text-green-color  ">محصولات</li>
              <li className=" hover:text-green-color">
                کارفرمایان
              </li>
              <li className="  hover:text-green-color">
                درباره ما
              </li>
              <li className="  hover:text-green-color  ">محصولات</li>
            </ul>
          </div> */}
          <div className="flex p-4  mx-auto text-center ">
            {/* telegram */}
            <div className="mr-2">
              <a
                href="https://t.me/foulad_fdh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="[&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-[#99a9b5]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                    <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
                  </svg>
                </span>
              </a>
            </div>

            {/* //instagramm */}
            <div>
              <a
                href="https://instagram.com/@foulad.derakhshesh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="[&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </span>
              </a>
            </div>
           
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer

{/* <footer id="footer-nav" className="h-32 bg-black  text-white">
        <div className="container h-14 flex ">
          <div class="row"><div class="col-md-3 col-md-push-9">
            <div id="footer-socials"><div class="socials inline-inside socials-colored-hover">
<a href="https://www.instagram.com/cncprojects/" target="_blank" title="Instagram" class="socials-item">
<i class="socials-item-icon instagram">
  </i></a>
  </div></div>
  </div>
  <div class="col-md-6">
    <nav id="footer-navigation" className="  site-navigation footer-navigation centered-box" role="navigation">
      <ul id="footer-menu" className="  nav-menu styled clearfix inline-inside">
        <li id="menu-item-35303" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-35303">
          <a href="https://cncprojects.co.uk/contact/">Contact</a></li>
          <li id="menu-item-35304" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-35304">
            <a href="https://cncprojects.co.uk/faq/">FAQ’s</a></li>
            <li id="menu-item-34477" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-34477">
              <a href="https://cncprojects.co.uk/submit-a-job/">Submit a Job</a></li>
              <li id="menu-item-34476" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-34476"><a href="https://cncprojects.co.uk/make-a-payment/">Make a Payment</a></li>
              <li id="menu-item-34475" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-34475"><a rel="privacy-policy" href="https://cncprojects.co.uk/privacy-policy/">Privacy Policy</a></li>
              </ul></nav></div><div class="col-md-3 col-md-pull-9"><div class="footer-site-info">Copyright 2021 © <a href="https://cncprojects.co.uk">CNC Projects</a> Made with ♥ by <a href="https://insignia.org.uk">Insignia</a></div></div></div></div></footer> */}